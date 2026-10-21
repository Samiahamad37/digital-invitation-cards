import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets this app use the shared package's TypeScript directly.
  transpilePackages: ["@cards/shared"],
  // Lets `npm run dev` work when you open the card from your phone (Wi-Fi IP)
  // or from GitHub Codespaces. Without this, buttons like "Tap to open" do nothing.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "172.*.*.*", "*.app.github.dev"],
};

export default nextConfig;
