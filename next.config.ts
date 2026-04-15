import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow LAN access in dev (e.g. phone/tablet on same network) so HMR works
  allowedDevOrigins: ["192.168.1.5"],
  // Static files on some hosts (e.g. Vercel) do not honor <a download="..."> the same
  // way as `next dev`; Content-Disposition sets the filename for saves reliably.
  async headers() {
    return [
      {
        source: "/resume.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Manish_Patodiya_AI_Engineer.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
