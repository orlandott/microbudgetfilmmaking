# microbudgetfilmmaking

Next.js site lives in `nextjs-site/` (static export to `nextjs-site/out`).

## Cloudflare Pages (Git deploy)

In your Pages project **Settings → Builds**:

1. **Root directory**  
   Leave as **repository root** (`.`) so `wrangler.toml` applies, **or** set root to `nextjs-site` and then use the commands below adjusted for that path.

2. **Build command** (must build the app that contains `next` — **not** `next-on-pages` at repo root):

   ```bash
   npm run build
   ```

   (Root `package.json` runs `npm ci` + `next build` inside `nextjs-site/`.)

   Or the equivalent one-liner:

   ```bash
   npm ci --prefix nextjs-site && npm run build --prefix nextjs-site
   ```

3. **Build output directory**

   ```text
   nextjs-site/out
   ```

**Do not** use `npx @cloudflare/next-on-pages` for this repo unless you migrate to the OpenNext adapter. The site uses `output: "export"` (static HTML). Running `next-on-pages` from the repo root fails because there is no `package.json` with Next at the root.

The root **`wrangler.toml`** is **Pages-only** (`name` + `pages_build_output_dir`). Cloudflare Pages does **not** allow `[build]` or `[assets]` in that file.

Set the **build command** in the Pages dashboard to `npm run build` (see above) — it is **not** read from `wrangler.toml` on Pages.

## Manual deploy (Workers + static assets)

From the repo root (uses **`wrangler.worker.toml`**, not `wrangler.toml`):

```bash
npm run deploy:worker
```

or:

```bash
npx wrangler deploy --config wrangler.worker.toml
```

This runs the `[build]` command and uploads `nextjs-site/out` as static assets.

## Cloudflare “internal error” after clone

If the build log shows **Failed: an internal error occurred** right after cloning (before any build step), that is a **Cloudflare platform issue**, not your code. **Retry the deployment** or use [Cloudflare support](https://cfl.re/3WgEyrH). Your commit and repo are fine if the clone step shows the correct `HEAD`.
