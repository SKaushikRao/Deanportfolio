import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Dr. Madhura Yadav | Architect-Planner, Dean & Sustainability Expert",
    template: "%s | Dr. Madhura Yadav"
  },
  description: "Official portfolio of Dr. Madhura Yadav, Dean of Student Welfare at Manipal University Jaipur, renowned Architect Planner, Sustainability Expert, and UNESCO Certified Mentor.",
  keywords: [
    "Madhura Yadav",
    "Dr. Madhura Yadav",
    "Madhura Yadav Architect",
    "Madhura Yadav Dean",
    "Manipal University Jaipur Dean",
    "Sustainability Expert India",
    "Sustainable Architecture",
    "Urban Planning Expert",
    "Bamboo Construction Expert",
    "UNESCO Certified Mentor"
  ],
  authors: [{ name: "Dr. Madhura Yadav", url: "https://www.drmadhurayadav.in" }],
  creator: "Dr. Madhura Yadav",
  publisher: "Dr. Madhura Yadav",
  metadataBase: new URL("https://www.drmadhurayadav.in"),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dr. Madhura Yadav | Architect & Sustainability Expert",
    description: "Official portfolio of Dr. Madhura Yadav, Dean of Student Welfare at Manipal University Jaipur, renowned Architect Planner and Sustainability Expert.",
    url: "https://www.drmadhurayadav.in",
    siteName: "Dr. Madhura Yadav Portfolio",
    images: [
      {
        url: "https://www.drmadhurayadav.in/images/image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Madhura Yadav Profile Image",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Madhura Yadav | Architect & Sustainability Expert",
    description: "Official portfolio of Dr. Madhura Yadav, Dean of Student Welfare at Manipal University Jaipur.",
    images: ["https://www.drmadhurayadav.in/images/image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/favicon.jpg",
        sizes: "32x32",
        type: "image/jpeg",
      },
      {
        url: "/favicon.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        url: "/favicon.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
    apple: "/favicon.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased overflow-x-hidden w-full`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Madhura Yadav",
              honorificPrefix: "Dr.",
              url: "https://www.drmadhurayadav.in",
              image: "https://www.drmadhurayadav.in/images/image.jpg",
              jobTitle: "Dean, Student Welfare",
              worksFor: {
                "@type": "Organization",
                name: "Manipal University Jaipur"
              },
              alumniOf: [
                {
                  "@type": "Organization",
                  name: "Maulana Azad National Institute of Technology (MANIT Bhopal)"
                }
              ],
              description: "Dr. Madhura Yadav is a visionary academic leader, Architect Planner, Sustainability Expert, and UNESCO Certified Mentor.",
              knowsAbout: ["Architecture", "Urban Planning", "Sustainability", "Bamboo Construction", "Green Building", "Heritage Conservation"]
            })
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
