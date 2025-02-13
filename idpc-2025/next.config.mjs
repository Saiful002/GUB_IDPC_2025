/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'siteadmin.green.edu.bd',
            
          },
          {
            protocol: 'https',
            hostname: 'encrypted-tbn0.gstatic.com',
            
          },
          {
            protocol: 'https',
            hostname: 'www.bssnews.net',
            
          },
          {
            protocol: 'https',
            hostname: 'blogger.googleusercontent.com',
            
          },
          {
            protocol: 'https',
            hostname: 'ecdn.dhakatribune.net',
            
          },
          {
            protocol: 'https',
            hostname: 'play-lh.googleusercontent.com',
            
          },
        ],
      },
};

export default nextConfig;
