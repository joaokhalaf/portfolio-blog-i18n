# Minimalist Portfolio & Blog with i18n

A clean, minimalist **portfolio and blog** built with **Next.js**, **TailwindCSS**, and **next-intl** for **internationalization (i18n)**. Includes support for projects, blog posts, and multiple languages.

---

## Features

- **Portfolio (`works`)**: Showcase your projects with images, descriptions, and links.
- **i18n Support (`[locale]`)**: Translate pages and content easily.
- **Animations**: Powered by Framer Motion.
- **Theme Switcher**: Dark/light mode using `next-themes`.

---

## Tech Stack

- **Frontend Framework**: Next.js 15
- **Styling**: TailwindCSS
- **i18n**: next-intl
- **UI Components**: Shadcn, lucide-react
- **Animation**: framer-motion
- **React Version**: 19.1.0

---

## Project Structure

```plaintext
app/
└─ [locale]/            # Localized pages for i18n
   ├─ about/            # About page
   ├─ data/             # Static data (projects, blog metadata)
   ├─ works/            # Portfolio projects pages
   ├─ writing/          # Blog posts pages
   ├─ globals.css       # Global styles
   ├─ layout.tsx        # Layout wrapper
   ├─ page.tsx          # Main entry page
   └─ site-config.ts    # Site configuration
components/              # Reusable UI components
i18n/                    # i18n configuration and helpers
lib/                     # Utility functions
messages/                # Translation JSON files (en.json, es.json, etc.)
```

## Example i18n JSON

{
  "nav": {
    "home": "Home",
    "portfolio": "Portfolio",
    "blog": "Blog",
    "about": "About",
    "contact": "Contact"
  },
  "footer": {
    "copyright": "© 2025 Your Name"
  }
}

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
