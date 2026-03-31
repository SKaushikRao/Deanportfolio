"use client"

import Sidebar from "@/components/sidebar"
import SquareTileGallery from "@/components/SquareTileGallery"
import Image from "next/image"

export default function SpiritualityPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/spirit1.jpg"
            alt="Spirituality Background"
            fill
            className="object-cover grayscale"
          />
          {/* Translucent overlay */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          {/* Color filter overlay */}
          <div className="absolute inset-0 bg-[#524135]/30" />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 max-w-full mx-auto px-2 pt-24 pb-12 lg:px-4 lg:pt-20 lg:pb-16">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-white text-center">Blessings and Guidance</h1>
            <div className="h-1 w-24 bg-white rounded-full mx-auto"></div>
          </div>

          <SquareTileGallery 
            folder="spirituality"
            imageCount={18}
            title="All Spiritual Images"
          />
        </div>
      </main>
    </div>
  )
}
