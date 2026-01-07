import pluginTypography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        light: "#ABABAB",
        dark: "#141313",
        darker: "#1E1E1E",
        "dark-blue": "#101F55",
        purp: "#7400B8",
        "purp-light": "#D041FF",
        "purp-dark": "#651F7D",
        "purple-heart": "#6930C3",
        "theme-indigo": "#5E60CE",
        "havelock-blue": {
          1: "#4EA8DE",
          2: "#5390D9",
        },
        "picton-blue": "#48BFE3",
        "viking-blue": "#56CFE1",
        "darkish-blue": "#101F55",
        blueish: "#0B097C",
        pinkish: "#D041FF",
      },
      fontFamily: {
        brand: ["Poppins", "sans-serif"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              color: theme("colors.green.500"),
              backgroundColor: theme("colors.darker"),
              borderRadius: theme("borderRadius.lg"),
              padding: theme("padding.1"),
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            li: {
              color: theme("colors.gray.100"),
            },
            pre: {
              border: `1px solid ${theme("colors.light")}`,
            },
          },
        },
      }),
    },
  },
  darkMode: "class",
  safelist: [
    {
      pattern:
        /(bg|text|border)-(cyan|sky|blue|indigo|violet|purple|green)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
  plugins: [pluginTypography],
};
