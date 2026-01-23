import { WorkPermit } from "../types";
import { workPermit } from "./staticData";

export async function getWorkPermit(): Promise<WorkPermit> {
  return workPermit;
}
