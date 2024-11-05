import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#727c4f",    // Verde oliva suave para el color principal
        color2: "#2E2E2E",    // Gris oscuro / Carbón para el texto principal e íconos
        color3: "#628962",    // verde apagado suave
        color4: "#F5F5F2",    // Gris claro / Beige sutil para el fondo
        color5: "#5B2C35",    // Burdeos profundo para detalles de énfasis
      },
    },
  },
  plugins: [],
};

export default config;
