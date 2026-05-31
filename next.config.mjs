/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
      
      },
    ],
  },
  experimental: {
serverComponentsExternalPackages: ['@better-auth/kysely-adapter'],
},
};

export default nextConfig;
