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
  // Static image paths for circular gallery (15 images)
  const circularGalleryItems = Array.from({ length: 15 }, (_, i) => ({
    image: `/${folder}/image${i + 1}.jpeg`,
    text: `${title} ${i + 1}`
  }))

  // Static image paths for grid gallery (20 images)
  const gridGalleryItems = Array.from({ length: 20 }, (_, i) => ({
    image: `/${folder}/image${i + 1}.jpeg`,
    text: `${title} ${i + 1}`
  }))

  return (
    <>
      {/* Circular Gallery Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-foreground">{galleryTitle}</h2>
        <div style={{ height: '600px', position: 'relative' }}>
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
        <h2 className="text-3xl font-semibold mb-8 text-foreground">{gridTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
