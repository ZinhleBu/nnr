/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig ,
{
  images: {
    //enter the domain or subdomain where you have WordPress installed
    domains: ['http://gryphonite.co.za/webdev.gryphonite.co.za/newgryphon/'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

