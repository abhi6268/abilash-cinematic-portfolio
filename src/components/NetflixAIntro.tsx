import React, { useEffect, useRef } from "react";
import styles from "./NetflixAIntro.module.css";

type Props = { start: boolean };

export default function NetflixAIntro({ start }: Props) {
    const stageRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = stageRef.current;
        if (!el) return;

        if (start) el.classList.add("netflix-start");
        else el.classList.remove("netflix-start");
    }, [start]);

    return (
        <div className={styles.overlay}>
            <div ref={stageRef} id="netflix-a-stage" className={styles.stage}>
                <netflixintro letter="A">
                    <div className="helper-1">
                        <div className="effect-brush">
                            {Array.from({ length: 31 }).map((_, i) => (
                                <span key={i} className={`fur-${31 - i}`} />
                            ))}
                        </div>

                        <div className="effect-lumieres">
                            {Array.from({ length: 28 }).map((_, i) => (
                                <span key={i} className={`lamp-${i + 1}`} />
                            ))}
                        </div>
                    </div>

                    <div className="helper-2">
                        <div className="effect-brush">
                            {Array.from({ length: 31 }).map((_, i) => (
                                <span key={i} className={`fur-${31 - i}`} />
                            ))}
                        </div>
                    </div>

                    <div className="helper-3">
                        <div className="effect-brush">
                            {Array.from({ length: 31 }).map((_, i) => (
                                <span key={i} className={`fur-${31 - i}`} />
                            ))}
                        </div>
                    </div>

                    <div className="helper-4">
                        <div className="effect-brush">
                            {Array.from({ length: 31 }).map((_, i) => (
                                <span key={i} className={`fur-${31 - i}`} />
                            ))}
                        </div>
                    </div>
                </netflixintro>
            </div>
        </div>
    );
}
