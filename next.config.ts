import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy static-site URLs → new clean routes (301)
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/services.html", destination: "/services", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/blog.html", destination: "/blog", permanent: true },
      { source: "/get-quote.html", destination: "/get-quote", permanent: true },
      { source: "/how-it-works.html", destination: "/how-it-works", permanent: true },
      { source: "/privacy.html", destination: "/", permanent: true },
      {
        source: "/cargo-loading-unloading.html",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/customs-broker.html",
        destination: "/services#customs-clearance",
        permanent: true,
      },
      {
        source: "/sea-shipping-lines-agent.html",
        destination: "/services#ocean-freight",
        permanent: true,
      },
      {
        source: "/freight-broker.html",
        destination: "/services",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
