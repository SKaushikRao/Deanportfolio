import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Dr. Madhura Yadav - Portfolio",
  description: "Professional portfolio of Dr. Madhura Yadav",
  metadataBase: new URL("https://www.drmadhurayadav.in"),
  openGraph: {
    title: "Dr. Madhura Yadav - Portfolio",
    description: "Professional portfolio of Dr. Madhura Yadav",
    url: "https://www.drmadhurayadav.in",
    siteName: "Dr. Madhura Yadav - Portfolio",
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
    title: "Dr. Madhura Yadav - Portfolio",
    description: "Professional portfolio of Dr. Madhura Yadav",
    images: ["https://www.drmadhurayadav.in/images/image.jpg"],
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
