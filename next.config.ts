import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed experimental.turbo.root as it's causing issues
  // The workspace root detection should work automatically
};

export default nextConfig;
