import type { Metadata, Viewport } from "next";
import { manrope, lora } from "@/lib/fonts"; // Import from your new fonts file
import { cn } from "@/lib/utils";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header"; // Ensure named import is used

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c0a09" }, // amber-950
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export const metadata: Metadata = {
  // ... (your metadata config is excellent, no changes needed)
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("dark", manrope.variable, lora.variable)}
      suppressHydrationWarning>
      <head>
        {/* Your structured data script is perfect here */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
              telephone: SITE_CONFIG.phone,
              email: SITE_CONFIG.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: "5625 German Church Road #3106",
                addressLocality: "Indianapolis",
                addressRegion: "IN",
                postalCode: "46235",
                addressCountry: "US",
              },
              areaServed: "Indianapolis Metropolitan Area",
            }),
          }}
        />
      </head>
      <body className="antialiased bg-gray-950 text-amber-50/80">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[999] focus:top-2 focus:left-2 focus:px-4 focus:py-2 focus:bg-amber-40focustext-gray-900 focus:rounded-lg">
          Skip to main content
        </a>

        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
