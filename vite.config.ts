import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, ".") }],
    },
    define: {
      "process.env.SUPABASE_SERVICE_ROLE_APIKEY": JSON.stringify(
        env.SUPABASE_SERVICE_ROLE_APIKEY
      ),
    },
  };
});
