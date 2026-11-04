/** @type {import("next").NextConfig} */
export default {
  typescript: { ignoreBuildErrors: true },
  // Never show Next's dev overlay ("N" badge / "Compiling…") inside the user's preview.
  devIndicators: false,
  // Next.js 16+: keep dev iframe-friendly and deterministic in sandbox previews.
  allowedDevOrigins: ["localhost","127.0.0.1","*.e2b.app","*.e2b.dev","*.vercel.run","*.cocodly.dev"],
  // Cross-origin studio iframe ⇒ the browser sends this app's own <script> chunk requests as
  // Sec-Fetch-Site: cross-site with no Origin, which Next 16's dev cross-site block 403s → no
  // hydration (dead buttons/animations). `crossOrigin: "anonymous"` forces those requests into
  // CORS mode WITH an Origin; they stay same-origin to the iframe (no ACAO needed), so the gate
  // accepts them and the client hydrates — keeping `next dev` + HMR.
  crossOrigin: "anonymous",
  turbopack: {
    rules: {
      // Studio Select mode: tags host elements with data-cdly-loc in `next dev` only (see cocodly/jsx-loc-loader.cjs).
      "*.tsx": {
        condition: { all: [{ not: "foreign" }, "development", { path: /^src\// }] },
        loaders: [{ loader: "./cocodly/jsx-loc-loader.cjs", options: { revision: 3 } }],
      },
    },
  },
  experimental: {
    // Disable Turbopack on-disk dev cache in ephemeral sandboxes.
    turbopackFileSystemCacheForDev: false,
    // The preview is served on the branded host but proxied with the provider's host
    // (x-forwarded-host *.vercel.run), so Next's Server Actions origin check rejected every
    // data call ("Invalid Server Actions request") — list, create, update and delete all 500'd.
    // Only previews get that list (they also run `next start` after the production check): a site
    // deployed on Vercel (VERCEL_ENV is set there) keeps Next's same-origin rule, or any page on
    // those shared preview hosts could post to its actions with a visitor's cookies.
    serverActions: { allowedOrigins: process.env.VERCEL_ENV ? [] : ["localhost","127.0.0.1","*.e2b.app","*.e2b.dev","*.vercel.run","*.cocodly.dev"] },
  },
};
