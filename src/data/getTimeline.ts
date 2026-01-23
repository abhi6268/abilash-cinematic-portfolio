import { TimelineItem } from "../types";
import { timeline } from "./staticData";

export async function getTimeline(): Promise<TimelineItem[]> {
  return timeline;
}