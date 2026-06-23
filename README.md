# StakeKit Safe App

The standalone StakeKit dApp, a [Vite](https://vite.dev/)-powered React SPA that
embeds the `@stakekit/widget`.

## Prerequisites

Tool versions are pinned via [mise](https://mise.jdx.dev/). Install the toolchain
(Node.js + pnpm) with:

```bash
mise install
```

## Getting Started

Install dependencies:

```bash
pnpm install
```

Set up environment variables:

```bash
cp .env.example .env
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3002](http://localhost:3002) with your browser to see the
result.

## Scripts

- `pnpm dev` — Start the Vite development server on port 3002
- `pnpm build` — Build the production bundle into `dist/`
- `pnpm start` — Preview the production build locally
- `pnpm lint` — Run Biome and TypeScript checks
- `pnpm lint:fix` — Apply Biome lint/format fixes
- `pnpm format` — Check Biome formatting
- `pnpm format:fix` — Fix Biome formatting

## Environment variables

| Variable                     | Description                          |
| ---------------------------- | ------------------------------------ |
| `VITE_API_KEY`               | StakeKit API key                     |
| `VITE_MIX_PANEL_TOKEN`       | Mixpanel token (optional)            |
| `VITE_ENABLE_REFERRAL_CHECK` | Enable referral check (`true`/unset) |

## Deployment

The app is a static Vite SPA deployed via AWS Amplify (see `amplify.yml`).
