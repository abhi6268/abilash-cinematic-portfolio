import { Skill } from "../types";
import { skills } from "./staticData";

export async function getSkills(): Promise<Skill[]> {
  return skills;
}
