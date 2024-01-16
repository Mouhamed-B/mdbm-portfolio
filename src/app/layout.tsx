import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js"></script>
        <GoogleTagManager gtmId='G-KJY5EZVKZS'/>
      </Head>
      <body className={inter.className}>
        {children}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
      </body>
    </html>
  )
}
