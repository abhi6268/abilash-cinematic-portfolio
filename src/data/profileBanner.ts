// data/profileBanner.ts
import { ProfileType } from "../types";

export const profileBannerData = {
  headline: "Abilash Mundlur - Sr. Frontend / Full-Stack Engineer",
  profileSummary: `Building high-impact, production-grade web experiences.

I specialize in crafting scalable, performance-driven UIs and full-stack systems used by real customers in real production environments. My work sits at the intersection of clean architecture, thoughtful UX, and reliable delivery.

Across enterprise and consumer platforms, I’ve owned critical frontend systems, untangled complex UI issues rooted in data and configuration, and shipped features under tight deadlines without sacrificing quality.

I move fast without breaking things, communicate tradeoffs clearly, and take ownership from idea to production. If you’re looking for someone who treats frontend as engineering, not decoration, and can be trusted with business-critical work, you’re in the right place.`,

 resumeLink: "https://example.com/resume.pdf",
  linkedinLink: "https://linkedin.com/in/yourprofile",

  backgrounds: {
    recruiter:
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3NpcDVicHlhOWtuaHBzeHF2MzI3ZW5iN2wxcmgzNWRmZGExZGp4MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/rjXO2H5gBcysUCcp83/giphy.gif",
    builder:
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWIyYzdsam52empyY2lkdjIzcTN3Z3h1NHYxMXRrYmp5Nno2c2ozaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kHU8W94VS329y/giphy.gif",
    researcher:
        "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bHAyYnN6Z2V6eTl5bWVhM3F1dGJjcmI5MG9zb2Vtd3l4bWR5OGxmZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ZqlvCTNHpqrio/giphy.gif",
    explorer:
        "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NmRvcmYyZnc5b3V0YmE5ejdoZWwzMmsxdW5ucnRybXRibmQweW96eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Vww6NlC3ifjX52dzGn/giphy.gif",
  } as Record<ProfileType, string>,
};