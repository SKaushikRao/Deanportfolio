"use client"

import Sidebar from "@/components/sidebar"
import ImageGallery from "@/components/ImageGallery"

export default function HallOfFamePage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 lg:ml-72">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:px-12 lg:py-16">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Famous Personalities</h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <ImageGallery 
            folder="Hall of fame"
            title="Personality"
            galleryTitle="Hall of Fame Gallery"
            gridTitle="All Personalities"
          />
        </div>
      </main>
    </div>
  )
}
