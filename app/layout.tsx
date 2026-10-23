import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import "lite-youtube-embed/src/lite-yt-embed.css";
import { Analytics } from '@vercel/analytics/next';
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/data/project";



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: true,
  weight: ["400"]
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
  adjustFontFallback: true,
  weight: ["600"],
  preload: false,
});




export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Godrej Reserve Kandivali East, Mumbai | 3 & 4 BHK from ₹5.94 Cr*",
  description:
    "Godrej Reserve Kandivali — 18.6-acre luxury project by Godrej Properties on Akurli Road, Kandivali East. 3 & 4 BHK with private decks, 6 acres of greens, 40+ amenities. RERA approved. Possession June 2030.",

  openGraph: {
    title: "Godrej Reserve Kandivali East, Mumbai",
    description:
      "3 & 4 BHK residences with private decks on an 18.6-acre Godrej Properties development in Kandivali East.",
    url: "/",
    siteName: SITE_NAME,
    images: [OG_IMAGE],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Godrej Reserve Kandivali East, Mumbai",
    description:
      "3 & 4 BHK residences with private decks on an 18.6-acre Godrej Properties development in Kandivali East.",
    images: [OG_IMAGE.url],
  },
};

import { ModalProvider } from "@/components/ModalContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable}  h-full antialiased light `}
    >
      <Analytics />
      <Script
        id="google-ads-gtag-src"
        src="https://www.googletagmanager.com/gtag/js?id=AW-18344445987"
        strategy="beforeInteractive"
      />
      <Script id="google-ads-gtag" strategy="beforeInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18344445987');`}
      </Script>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PGFWQ73S');`}
      </Script>
      <Script id="clarity-script" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "wj5sfhnj3d");`}
      </Script>

      <body className="min-h-full flex flex-col overflow-x-hidden">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PGFWQ73S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
