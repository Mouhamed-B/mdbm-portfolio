import type { Metadata } from 'next'
import './fonts.css'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import { lang, langs } from '@/utils/schema'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mouhamed Bakhoum - Portfolio',
  description: 'Portfolio showcasing Mouhamed Bakhoum\'s work' 
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang:lang }
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        {children}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
        <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KJY5EZVKZS"></script>
      </body>
    </html>
  )
}

export async function generateStaticParams() { 
  return langs.map((lang) => ({
    lang: lang,
  }))
}