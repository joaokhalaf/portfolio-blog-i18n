import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pt"],
  defaultLocale: "en",
  pathnames: {
    "/": {
      en: "/",
      pt: "/",
    },
    "/writing": {
      en: "/writing",
      pt: "/artigos",
    },
    "/writing/[slug]": {
      en: "/writing/[slug]",
      pt: "/artigos/[slug]",
    },
    "/works": {
      en: "/works",
      pt: "/trabalhos",
    },
    "/works/[slug]": {
      en: "/works/[slug]",
      pt: "/trabalhos/[slug]",
    },
    "/about": {
      en: "/about",
      pt: "/sobre",
    },
     "/college": {
      en: "/college",
      pt: "/faculdade",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
