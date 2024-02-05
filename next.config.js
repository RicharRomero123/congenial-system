/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'images.unsplash.com',
            }
        ],
        unoptimized: true,
    },
    typescript: {
        ignoreBuildErrors: true
    },
    compiler: {
        styledComponents: true,
    },
    
}

module.exports = nextConfig
