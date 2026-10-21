import type { NextConfig } from "next";

// transpilePackages lets this app use the shared package's TypeScript directly.
const nextConfig: NextConfig = { transpilePackages: ["@cards/shared"] };

export default nextConfig;
