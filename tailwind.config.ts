import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  safelist: [
    "text-display-2xl",
    "text-display-xl",
    "text-display-lg",
    "text-display-md",
    "text-headline-lg",
    "text-headline",
    "text-title",
    "text-body-lg",
    "text-body",
    "text-body-sm",
    "text-label",
    "text-eyebrow",
    "reveal-up",
    "reveal-fade",
    "reveal-scale",
    "reveal-blur",
    "reveal-on-scroll",
    "reveal-delay-1",
    "reveal-delay-2",
    "reveal-delay-3",
    "reveal-delay-4",
    "reveal-delay-5",
    "reveal-delay-6"
  ],
  theme: {
    extend: {
      "colors": {
        "background": "rgb(var(--background-rgb) / <alpha-value>)",
        "foreground": "rgb(var(--foreground-rgb) / <alpha-value>)",
        "surface": "rgb(var(--surface-rgb) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2-rgb) / <alpha-value>)",
        "muted": "rgb(var(--muted-rgb) / <alpha-value>)",
        "border": "rgb(var(--border-rgb) / <alpha-value>)",
        "primary": "rgb(var(--primary-rgb) / <alpha-value>)",
        "on-primary": "rgb(var(--on-primary-rgb) / <alpha-value>)",
        "accent": "rgb(var(--accent-rgb) / <alpha-value>)",
        "on-accent": "rgb(var(--on-accent-rgb) / <alpha-value>)",
        "secondary": "rgb(var(--secondary-rgb) / <alpha-value>)"
      },
      "borderColor": {
        "DEFAULT": "rgb(var(--border-rgb, 229 231 235) / <alpha-value>)"
      },
      "fontFamily": {
        "display": [
          "var(--display-font, var(--body-font, ui-sans-serif))",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
        "sans": [
          "var(--body-font, ui-sans-serif)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ]
      },
      "boxShadow": {
        "soft": "var(--shadow-soft)",
        "lift": "var(--shadow-lift)",
        "glow": "var(--shadow-glow)"
      },
      "transitionTimingFunction": {
        "out-expo": "var(--ease-out-expo)",
        "out-quint": "var(--ease-out-quint)"
      },
      "keyframes": {
        "accordion-down": {
          "from": {
            "height": "0"
          },
          "to": {
            "height": "var(--radix-accordion-content-height)"
          }
        },
        "accordion-up": {
          "from": {
            "height": "var(--radix-accordion-content-height)"
          },
          "to": {
            "height": "0"
          }
        }
      },
      "animation": {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
