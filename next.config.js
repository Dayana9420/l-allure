/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.shopify.com',
      'vianney.cr',
      'leonisa-catalogs-assets-pro.s3.amazonaws.com',
      'www.belcorp.biz',
      'catalogo.tucalzado.com',
      'tcfiles.blob.core.windows.net'
    ],
  },
}

module.exports = nextConfig
