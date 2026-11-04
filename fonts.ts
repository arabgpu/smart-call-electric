// Fonts are loaded via the Google Fonts CSS2 @import in globals.css (see top of that file).
// We intentionally avoid next/font/google here: this sandbox's Turbopack build cannot
// resolve the generated @vercel/turbopack-next font-file module, which crashes `GET /`
// with "next/font/google queries have exactly one entry". The --font-display / --font-body
// CSS variables are defined directly in globals.css :root instead, so these stay as
// no-op class placeholders for call-site compatibility.
export const display = { variable: "" };
export const body = { variable: "" };
