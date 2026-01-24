import { track } from "@vercel/analytics";

export const trackResumeClick = (source: string) => {
    track("resume_click", { source });
};