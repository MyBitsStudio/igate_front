import "./env.mjs"

import withPWA from "next-pwa"

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  //reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "app.aave.com",
      "images.unsplash.com",
      "cloudflare-ipfs.com",
      "gateway.ipfs.io",
    ],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  env: {
    mode: process.env.NODE_ENV,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false }
    config.externals.push("pino-pretty", "encoding")
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: /icon/,
      use: ["@svgr/webpack"],
    })
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/icon/] },
      loader: "next-image-loader",
      options: { assetPrefix: "" },
    })
    return config
  },
  ...withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  }),
}

export default nextConfig
