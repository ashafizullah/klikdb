import { cpSync, existsSync, mkdirSync } from "node:fs";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const host = process.env.TAURI_DEV_HOST;

// The licenses dialog loads the notices on demand instead of bundling half a megabyte of text.
if (existsSync("THIRD_PARTY_NOTICES.md")) {
  mkdirSync("public", { recursive: true });
  cpSync("THIRD_PARTY_NOTICES.md", "public/THIRD_PARTY_NOTICES.md");
}

export default defineConfig({
  plugins: [svelte()],
  clearScreen: false,
  build: {
    target: ["safari15", "chrome105"],
  },
  server: {
    port: 1420,
    strictPort: true,
    host: host || "127.0.0.1",
    hmr: host ? { protocol: "ws", host, port: 1421 } : undefined,
    watch: { ignored: ["**/src-tauri/**"] },
  },
});
