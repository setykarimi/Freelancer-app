import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@common": "/src/common",
      "@features": "/src/features",
      "@hook": "/src/hook",
      "@pages": "/src/pages",
      "@services": "/src/services",
      "@utils": "/src/utils",
      "@context": "/src/context",
    },
  },
});
