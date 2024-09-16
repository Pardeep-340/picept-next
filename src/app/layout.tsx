import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Picept",
  description: "Smart Routing, One Unified API",
  metadataBase: new URL("https://picept-next.vercel.app/"),
  openGraph: {
    title: "Picept",
    description:
      "Intelligently route every prompt to the best LLM, slashing API costs by up to 99% while ensuring unmatched quality and speed.",
    images: "/assets/images/meta-image.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <head>
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" as="style" />
          <link rel="preload" href="https://fonts.gstatic.com/s/spacegrotesk/v12/xK8gYWh8FnG4dSnY2OEbZPE64rhIhA.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />


          {/* <!-- Google tag (gtag.js) --> */}

          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXX-Y"></Script>

          <Script
            id="google-tag-manager"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-XXXXX-Y');
            `,
            }}
          />
        </head>
      </head>
      <body>{children}</body>
    </html>
  );
}
