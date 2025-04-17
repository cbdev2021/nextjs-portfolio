import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['media.istockphoto.com', 'plus.unsplash.com', 'images.unsplash.com', 'artlist.io', 'media0.giphy.com', 'media3.giphy.com', 'media4.giphy.com'], // Añade aquí el dominio
  },
  eslint: {
    // Ignora los errores de ESLint durante el proceso de construcción
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
