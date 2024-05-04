/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lastfm.freetls.fastly.net",
            },
           
        ],
    },
};

export default nextConfig;
