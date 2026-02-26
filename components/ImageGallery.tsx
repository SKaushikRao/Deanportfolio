"use client"

import { useState, useEffect } from "react"
import CircularGallery from "@/components/CircularGallery"
import { Card, CardContent } from "@/components/ui/card"

interface ImageGalleryProps {
  folder: string
  title: string
  galleryTitle?: string
  gridTitle?: string
}

export default function ImageGallery({ 
  folder, 
  title, 
  galleryTitle = "Gallery", 
  gridTitle = "All Images" 
}: ImageGalleryProps) {
  // Determine image count based on folder
  const getImageCount = () => {
    if (folder === "books") return 5
    if (folder === "Hall of fame") return 24
    if (folder === "community-outreach") return 12
    if (folder === "honors_awards") return 15
    return 15 // Default for other folders like spirituality
  }

  // Determine file extension based on folder
  const getFileExtension = () => {
    if (folder === "Hall of fame") return ".jpeg"
    return ".jpeg" // Default for all folders
  }

  const imageCount = getImageCount()
  const fileExtension = getFileExtension()

  // Helper function to get image path
  const getImagePath = (index: number) => {
    if (folder === "Hall of fame") {
      return `/${folder}/imag${index + 1}${fileExtension}`
    }
    return `/${folder}/image${index + 1}${fileExtension}`
  }

  // Static image paths for circular gallery
  const circularGalleryItems = Array.from({ length: imageCount }, (_, i) => ({
    image: getImagePath(i),
    text: `${title} ${i + 1}`
  }))

  // Static image paths for grid gallery
  const gridGalleryItems = Array.from({ length: imageCount }, (_, i) => ({
    image: getImagePath(i),
    text: `${title} ${i + 1}`
  }))

  return (
    <>
      {/* Circular Gallery Section */}
      <div className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-white">{galleryTitle}</h2>
        <div style={{ height: '400px', position: 'relative' }} className="sm:h-[500px] lg:h-[600px]">
          <CircularGallery 
            bend={3} 
            textColor="#ffffff" 
            borderRadius={0.05} 
            scrollEase={0.02}
            items={circularGalleryItems}
          />
        </div>
      </div>

      {/* Grid Gallery Section */}
      <div>
        {gridTitle && (
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-white">{gridTitle}</h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {gridGalleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <img
                    src={item.image}
                    alt={item.text}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      e.currentTarget.src = `https://picsum.photos/seed/${folder}${index}/400/400`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-medium text-sm">{item.text}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
