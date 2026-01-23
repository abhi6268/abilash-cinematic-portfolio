import React, { useMemo, useState } from "react";
import "./WorkStories.css";

type StoryTag = "Debugging" | "Performance" | "Collaboration" | "Quality" | "Architecture";

type Story = {
    id: string;
    tag: StoryTag;
    title: string;
    subtitle: string;
    context: string;
    problem: string;
    diagnosis: string[];
    fix: string[];
    impact: string[];
    takeaways: string[];
};

const WorkStories: React.FC = () => {
    const stories = useMemo<Story[]>(
        () => [
            {
                id: "ui-not-ui",
                tag: "Debugging",
                title: "The bug that looked like UI but wasn’t",
                subtitle: "A visual issue that turned out to be data + config, not CSS.",
                context:
                    "A color/contrast issue showed up in a very specific workflow. It looked like a styling regression at first glance.",
                problem:
                    "Users saw inconsistent text contrast in a tile/section that should have been controlled by a single theme setting.",
                diagnosis: [
                    "Reproduced with the same content + environment to eliminate random factors.",
                    "Verified computed styles were correct in DevTools, so CSS wasn’t the cause.",
                    "Traced the value back through the config chain and found an unmanaged key overriding expected theme color.",
                    "Confirmed the real source was a config field that wasn’t governed by the UI theme system."
                ],
                fix: [
                    "Mapped the responsible config keys to the correct theme token.",
                    "Added a fallback so unmanaged keys don’t override critical text colors.",
                    "Documented which fields are controlled by theme vs not, to prevent repeat confusion."
                ],
                impact: [
                    "Issue resolved consistently across environments.",
                    "Reduced future triage time by making the ownership of color keys explicit."
                ],
                takeaways: [
                    "If computed styles look right, it’s rarely a CSS bug.",
                    "Treat theme/config as code: validate ownership and overrides."
                ]
            },
            {
                id: "hover-trailers",
                tag: "Performance",
                title: "Making hover trailers feel smooth",
                subtitle: "Stopped the hover glitch by delaying play and avoiding layout shifts.",
                context:
                    "Netflix-style tiles feel great only if hover is instant and stable. Even tiny jitter breaks the illusion.",
                problem:
                    "Hovering quickly across tiles caused perceived lag and micro-jumps between cards.",
                diagnosis: [
                    "Identified two culprits: (1) immediate video decode on hover, (2) neighbors shifting when the hovered tile scaled.",
                    "Confirmed decode spikes via stutter patterns and readyState behavior.",
                    "Noticed clipping because row containers weren’t allowing overflow for the scaled tile."
                ],
                fix: [
                    "Added a 120ms delayed hover play to avoid pointless play/pause when users scrub across tiles.",
                    "Kept tile dimensions fixed and used GPU transforms for scale (no layout reflow).",
                    "Set row overflow-y: visible and raised z-index on hover so the tile floats above neighbors.",
                    "Used poster-first rendering and video opacity fade-in, preload=metadata."
                ],
                impact: [
                    "Hover feels stable and premium, even when moving rapidly across tiles.",
                    "Reduced glitch perception and improved overall UI confidence."
                ],
                takeaways: [
                    "Perceived performance matters more than raw speed in motion UI.",
                    "Delay + poster-first often beats aggressive preloading."
                ]
            },
            {
                id: "ux-engineering",
                tag: "Collaboration",
                title: "When UX and engineering both had a point",
                subtitle: "Solved a design disagreement by prototyping and measuring.",
                context:
                    "A UI interaction had two valid directions: one looked cleaner, the other was more predictable for users.",
                problem:
                    "Debate risked stalling the feature because both sides were arguing from intuition.",
                diagnosis: [
                    "Defined success: fewer misclicks, faster completion, fewer support questions.",
                    "Built a small prototype to compare both interactions side-by-side.",
                    "Walked through flows with realistic scenarios, including keyboard and mobile."
                ],
                fix: [
                    "Chose the interaction that tested clearer under real usage.",
                    "Kept the cleaner feel via spacing and micro-feedback.",
                    "Documented the decision so it doesn’t re-open later."
                ],
                impact: [
                    "Faster alignment, less churn, and a better interaction than either initial proposal."
                ],
                takeaways: [
                    "Prototype beats opinion.",
                    "Define metrics before debating UI choices."
                ]
            },
            {
                id: "qa-shipping",
                tag: "Quality",
                title: "Shipping without breaking things",
                subtitle: "How I validate fixes so regressions don’t sneak in.",
                context:
                    "Fixes are easy. Keeping the product stable while shipping fast is the real work.",
                problem:
                    "A bugfix touched shared UI components and risked side effects in unrelated screens.",
                diagnosis: [
                    "Identified blast radius: where the component is reused and what variants exist.",
                    "Created a minimal checklist focused on boundary conditions.",
                    "Checked failure modes: slow network, missing assets, invalid config."
                ],
                fix: [
                    "Added safe defaults + graceful fallback rendering.",
                    "Validated realistic flows, captured evidence, and left reproducible QA notes."
                ],
                impact: [
                    "Fix landed without regressions and was easy for others to verify."
                ],
                takeaways: [
                    "Good QA is structured communication, not just testing.",
                    "Validate failure paths, not only happy paths."
                ]
            }
        ],
        []
    );

    const [activeId, setActiveId] = useState<string | null>(null);
    const active = stories.find((s) => s.id === activeId) ?? null;

    const open = (id: string) => setActiveId(id);
    const close = () => setActiveId(null);

    return (
        <div className="ws-page">
            <header className="ws-hero">
                <h1 className="ws-title">Work Stories</h1>
                <p className="ws-subtitle">
                    The stuff you don’t see on a resume: decisions, tradeoffs, bugs, and how I actually work.
                </p>
            </header>

            <section className="ws-grid">
                {stories.map((s) => (
                    <article
                        key={s.id}
                        className="ws-card"
                        onClick={() => open(s.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") open(s.id);
                        }}
                    >
                        <div className="ws-cardTop">
                            <span className="ws-pill">{s.tag}</span>

                            <button
                                type="button"
                                className="ws-openBtn"
                                aria-label="Open story"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    open(s.id);
                                }}
                            >
                                +
                            </button>
                        </div>

                        <h3 className="ws-cardTitle">{s.title}</h3>
                        <p className="ws-cardSub">{s.subtitle}</p>

                        <div className="ws-cardHint">Open details</div>
                    </article>
                ))}
            </section>

            {/* MODAL */}
            {active && (
                <div className="ws-modalBackdrop" onMouseDown={close} role="presentation">
                    <div
                        className="ws-modal"
                        onMouseDown={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="ws-modalHeader">
                            <div className="ws-modalTag">{active.tag}</div>
                            <button className="ws-closeBtn" onClick={close} aria-label="Close">
                                ✕
                            </button>
                        </div>

                        <h2 className="ws-modalTitle">{active.title}</h2>
                        <p className="ws-modalSub">{active.subtitle}</p>

                        <div className="ws-sections">
                            <Section title="Context" text={active.context} />
                            <Section title="Problem" text={active.problem} />

                            <ListSection title="Diagnosis" items={active.diagnosis} />
                            <ListSection title="Fix" items={active.fix} />
                            <ListSection title="Impact" items={active.impact} />

                            <div className="ws-takeaways">
                                <div className="ws-kicker">Takeaways</div>
                                <div className="ws-takeawayRow">
                                    {active.takeaways.map((t) => (
                                        <span key={t} className="ws-takeaway">
                      {t}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="ws-modalFooter">
                            <a className="ws-action ghost" href="/resume">
                                Resume
                            </a>
                            <a className="ws-action" href="/skills">
                                Skills
                            </a>
                            <a className="ws-action danger" href="/contact-me">
                                Hire Me
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WorkStories;

const Section: React.FC<{ title: string; text: string }> = ({ title, text }) => (
    <div className="ws-section">
        <div className="ws-kicker">{title}</div>
        <div className="ws-text">{text}</div>
    </div>
);

const ListSection: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
    <div className="ws-section">
        <div className="ws-kicker">{title}</div>
        <ul className="ws-list">
            {items.map((x) => (
                <li key={x}>{x}</li>
            ))}
        </ul>
    </div>
);