import { ContactMe } from "../types";
import { contactMe } from "./staticData";

export async function getContactMe(): Promise<ContactMe> {
  return contactMe;
}
