"use client";

import { CONTACT_INFO } from "@/lib/data";

export function useSiteContact() {
  return {
    ...CONTACT_INFO,
    phoneHref: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`,
    emailHref: `mailto:${CONTACT_INFO.email}`,
    shortLocation: "Gurugram, Haryana",
  };
}
