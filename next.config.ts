import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow LAN access in dev (e.g. phone/tablet on same network) so HMR works
  allowedDevOrigins: ["192.168.1.5"],
};

export default nextConfig;
