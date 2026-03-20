# NoSuicidePls

A support website for people in crisis situations and those contemplating suicide.

## About the Project

This website was created to give individuals a pause, provide support through words, and offer contact information for professional help. It features a calm, minimalist design without distracting elements. The main focus is on content and the accessibility of helplines.

### Features

- **Pause screen** with a breathing animation (4 seconds inhale, 4 seconds exhale)
- **Main support text** with smooth fade-in effects on scroll
- **Automatic country detection** to display relevant local helplines
- **Helplines** for 16 CIS and Baltic countries
- **Sticky helpline banner** visible on all screens
- **PWA support** for saving the site to a mobile device
- **Full accessibility** (keyboard navigation, screen readers)
- **Responsive design** with a mobile-first priority

## Technologies

- [Astro](https://astro.build/) — Static Site Generator
- TypeScript
- CSS (Framework-free)
- Minimal JavaScript for interactivity

## Project Structure


```

├── public/              # Static files
│   ├── favicon.svg
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/      # Astro components
│   │   ├── BreathingCircle.astro   # Breathing animation
│   │   ├── ContentBlock.astro      # Animated text block
│   │   ├── CountrySelector.astro   # Country selection
│   │   ├── HelplineBanner.astro    # Sticky banner
│   │   └── HelplineCard.astro      # Helpline info card
│   ├── data/
│   │   └── helplines.json          # Helpline database
│   ├── i18n/            # Localization
│   │   ├── config.ts
│   │   ├── ru.json
│   │   └── utils.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── tsconfig.json

```

## Getting Started

### Requirements

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/AnmiTaliDev/nosuicidepls.git
cd nosuicidepls

# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview

```

## Adding a New Language

1. Create a translation file in `src/i18n/` (e.g., `en.json`).
2. Add the locale to `src/i18n/config.ts`.
3. Import the translation in `src/i18n/utils.ts`.

## Adding Helplines for a New Country

Add the data to `src/data/helplines.json` following the existing pattern:

```json
{
  "XX": {
    "name": "Country Name",
    "nameLocal": "Local Name",
    "code": "XX",
    "primary": {
      "phone": "123",
      "name": "Line Name",
      "description": "Description",
      "hours": "Operating hours",
      "free": true
    },
    "lines": [...],
    "websites": [...],
    "chat": null
  }
}

```

## License

GNU GPL 3.0 — see the [LICENSE](https://www.google.com/search?q=LICENSE) file.

## Authors

* Developer: [AnmiTaliDev](https://github.com/AnmiTaliDev)
* Idea by: GLOR
