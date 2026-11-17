import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "static",
  devToolbar: {
    enabled: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    allowedHosts: [
      "marion-guestbook-launches-automated.trycloudflare.com",
      "pelt-overturn-easing.ngrok-free.dev",
    ],
  },
});
