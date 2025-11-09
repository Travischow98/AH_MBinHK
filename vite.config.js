import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ⚠️ 如果你的 GitHub Repository 名稱是 angela-maid
// base 要設定成 "/angela-maid/"
export default defineConfig({
  plugins: [react()],
  base: "/AH_MBINHK/"
});
