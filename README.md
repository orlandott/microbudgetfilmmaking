# microbudgetfilmmaking

Next.js site lives in `nextjs-site/` (static export to `nextjs-site/out`).

## Cloudflare Pages (Git deploy)

In your Pages project **Settings → Builds**:

1. **Root directory**  
   Leave as **repository root** (`.`) so `wrangler.toml` applies, **or** set root to `nextjs-site` and then use the commands below adjusted for that path.

2. **Build command** (must build the app that contains `next` — **not** `next-on-pages` at repo root):

   ```bash
   npm ci --prefix nextjs-site && npm run build --prefix nextjs-site
   ```

3. **Build output directory**

   ```text
   nextjs-site/out
   ```

**Do not** use `npx @cloudflare/next-on-pages` for this repo unless you migrate to the OpenNext adapter. The site uses `output: "export"` (static HTML). Running `next-on-pages` from the repo root fails because there is no `package.json` with Next at the root.

The root `wrangler.toml` sets `pages_build_output_dir` and the build command so Cloudflare Pages can auto-detect settings when valid.

## Manual deploy (Workers + static assets)

From the repo root:

```bash
npx wrangler deploy
```

This runs the `[build]` command and uploads `nextjs-site/out` as static assets.
