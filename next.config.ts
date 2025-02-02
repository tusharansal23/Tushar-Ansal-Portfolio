import type { NextConfig } from "next"
import type { Configuration as WebpackConfig } from "webpack"
import dotenv from "dotenv"

dotenv.config()
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
      protocol: 'https',
      hostname: 'via.placeholder.com',
      port: '',
      pathname: '/src/**',
      search: '',
    }
    ], // Add this line to allow images from via.placeholder.com
  },
  webpack: (config: WebpackConfig) => {
    config.module?.rules?.push({
      test: /\.pdf$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      ],
    })
    return config
  },
  env: {
    EMAIL_USER: process.env.NEXT_PUBLIC_EMAIL_USER,
    EMAIL_PASS: process.env.NEXT_PUBLIC_EMAIL_PASS,
  },
}

export default nextConfig

