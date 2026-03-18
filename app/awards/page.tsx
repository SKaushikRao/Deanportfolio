import { Card, CardContent } from "@/components/ui/card"
import Sidebar from "@/components/sidebar"
import Image from "next/image"
import ImageGallery from "@/components/ImageGallery"

export default function AwardsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 lg:ml-72 relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/pic_1.jpg"
            alt="Awards Background"
            fill
            className="object-cover"
          />
          {/* Translucent overlay */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 max-w-full mx-auto px-2 py-12 lg:px-4 lg:py-16">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-[#e6b815] text-center">Awards</h1>
            <div className="h-1 w-24 bg-[#e6b815] rounded-full mx-auto"></div>
          </div>

          <ImageGallery 
            folder="Awards"
            title="Award"
            galleryTitle="Awards Gallery"
            gridTitle="All Awards"
          />
        </div>
      </main>
    </div>
  )
}