import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets this app use the shared package's TypeScript directly (for the EN/SW language state).
  transpilePackages: ["@cards/shared"],
  // Lets `npm run dev` work from your phone (Wi-Fi IP) or GitHub Codespaces.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "172.*.*.*", "*.app.github.dev"],
  // Not using `output: "export"`: it would break `npm run start` (next start).
  // Every page here is still pre-rendered as static HTML at build time.
};

export default nextConfig;
