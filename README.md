# NoSuicidePls

A support website for people in crisis situations and those contemplating suicide.

## About the Project

This website was created to give individuals a pause, provide support through words, and offer contact information for professional help. It features a calm, minimalist design without distracting elements. The main focus is on content and the accessibility of helplines.

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
