# blono.dev

The official website for Bloomington-Normal Developers, a community for developers in the Bloomington-Normal, Illinois area.

[dev url](https://blono-dev-astro.pages.dev/)

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [React](https://react.dev/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Cloudflare](https://www.cloudflare.com/) - Hosting

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BloomingtonNormalDevelopers/blono.dev-astro.git
   cd blono.dev-astro
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

## Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Build the production site            |
| `npm run preview` | Preview the production build locally |

## Project Structure

```
├── public/          # Static assets
├── src/
│   ├── components/  # UI components (Astro & React)
│   ├── content/     # Content collections (workshops, etc.)
│   ├── data/        # JSON data files
│   ├── lib/         # Utility functions and constants
│   ├── pages/       # File-based routing
│   ├── styles/      # Global styles
│   └── types/       # TypeScript types
├── astro.config.mjs # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── tsconfig.json    # TypeScript configuration
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

MIT
