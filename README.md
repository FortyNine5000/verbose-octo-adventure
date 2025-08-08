# Home Blend Kitchen

Home Blend Kitchen is a caregiver‑first web application for blenderized tube feeding. The goal of this MVP (minimum viable product) is to provide a small collection of recipes, a simple blend builder to calculate basic nutrition and a proxy flow risk, and a printable feeding card. The application is built with **Next.js 14** (App Router), **TypeScript**, and **Tailwind CSS**, and is ready to deploy to **Netlify** using the provided `netlify.toml` configuration.

## Local Development

To run this project locally you will need [Node.js](https://nodejs.org/) v18 or higher installed. Then:

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:3000`.

## Building for Production

To produce an optimized build:

```bash
npm run build
```

## Deploying on Netlify

The repository includes a `netlify.toml` configuration file that instructs Netlify to use the official Next.js plugin. To deploy:

1. Push this repository to GitHub.
2. In the Netlify UI, choose “Add new site” → “Import from Git” and select your repo.
3. Set the build command to `npm run build` and the publish directory to `.next` if they are not auto‑detected.
4. Start the deploy. After a few minutes your site should be live.

## License

This project is provided for educational purposes and does not include medical advice. © 2025 Home Blend Kitchen.