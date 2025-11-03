import type { Metadata } from "next";
import "./fonts.css";
import { Inter } from "next/font/google";
import "./globals.css";
import { lang, langs } from "@/utils/schema";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mouhamed Bakhoum - Portfolio",
  metadataBase: new URL("https://mdbm.ovh"),
  description: "Portfolio showcasing Mouhamed Bakhoum's work",
  verification: {
    google: "9CpinwSqIyUYUb5FUre23C_qKw7ieN0u8Q912t86xlo",
  },
  openGraph: {
    title: "Mouhamed Bakhoum - Portfolio",
    description: "Portfolio showcasing Mouhamed Bakhoum's work",
    url: "https://mdbm.ovh",
    siteName: "Mouhamed Bakhoum - Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1867,
        height: 687,
        alt: "Mouhamed Bakhoum - Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: lang };
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className + " site-body"}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div id="layout-root" className="layout-shell">
          <div id="scroll-progress" aria-hidden="true" />
          <main id="main" className="site-main" role="main">
            {children}
          </main>
        </div>
        <Script
          strategy="afterInteractive"
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
          crossOrigin="anonymous"
        ></Script>
        <Script
          strategy="afterInteractive"
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
          integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
          crossOrigin="anonymous"
        ></Script>
        <Script strategy="afterInteractive" src="/js/scripts.js" />
        <Script
          strategy="afterInteractive"
          src="https://use.fontawesome.com/releases/v6.3.0/js/all.js"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KJY5EZVKZS"
        ></script>
        <Script id="scroll-progress-script" strategy="afterInteractive">{`
          (function(){
            const bar = document.getElementById('scroll-progress');
            if(!bar) return;
            const onScroll = () => {
              const doc = document.documentElement;
              const scrolled = (doc.scrollTop)/(doc.scrollHeight - doc.clientHeight);
              bar.style.setProperty('--progress', (scrolled*100).toFixed(2)+'%');
            };
            window.addEventListener('scroll', onScroll, { passive:true });
            onScroll();
          })();
        `}</Script>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return langs.map((lang) => ({
    lang: lang,
  }));
}
