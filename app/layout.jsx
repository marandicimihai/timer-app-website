import './globals.css'

const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL
const siteUrl = process.env.SITE_URL ?? (vercelDomain ? `https://${vercelDomain}` : 'http://127.0.0.1:4173')

export const metadata = {
  metadataBase: new URL(siteUrl),
  icons: { icon: '/assets/favicon.png' },
  twitter: { card: 'summary_large_image' },
  other: { 'page-type': 'software', 'site-kind': 'software' },
}

export const viewport = {
  themeColor: '#faf8f4',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-type="software">
      <head>
        <link rel="preload" href="/assets/manrope.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body>{children}</body>
    </html>
  )
}
