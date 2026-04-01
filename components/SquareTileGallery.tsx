"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface SquareTileGalleryProps {
  folder: string
  imageCount: number
  title?: string
}

export default function SquareTileGallery({ folder, imageCount, title }: SquareTileGalleryProps) {
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const [previewAlt, setPreviewAlt] = useState<string>("")

  const openPreview = (src: string, alt: string) => {
    setPreviewImage(src)
    setPreviewAlt(alt)
  }

  // Helper function to get image path
  const getImagePath = (index: number) => {
    if (folder === "spirituality") {
      return `/spirituality/image${index + 1}.jpeg`
    }
    if (folder === "books") {
      return `/books/image${index + 1}.jpeg`
    }
    if (folder === "Hall of fame") {
      if (index < 25) {
        return `/Hall of fame/imag${index + 1}.jpeg`
      } else if (index < 27) {
        return `/Hall of fame/imag${index + 1}.jpeg` // imag26, imag27 in main folder
      } else if (index < 50) {
        return `/Hall of fame/img${index - 26}.jpeg` // img1-img23 all in main folder (starting from index 27)
      }
    }
    if (folder === "community-outreach") {
      return `/Community outreach/image${index + 1}.jpeg`
    }
    return `/${folder}/image${index + 1}.jpeg`
  }

  const images = Array.from({ length: imageCount }, (_, i) => ({
    src: getImagePath(i),
    alt: `${title || folder} - Image ${i + 1}`
  }))

  return (
    <>
      {title && (
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-white">{title}</h2>
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mobile-grid">
        {images.map((image, index) => (
          <Card 
            key={index} 
            className="overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer mobile-card touch-target"
            onClick={() => openPreview(image.src, image.alt)}
          >
            <CardContent className="p-0">
              <div className="relative aspect-square mobile-image">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 retina-image"
                  loading="lazy"
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  onError={(e) => {
                    e.currentTarget.src = `https://picsum.photos/seed/${folder}${index}/400/400`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                    <p className="text-white font-medium text-xs sm:text-sm small-mobile-text">{image.alt}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 sm:p-8 cursor-pointer mobile-modal"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-full h-full max-h-[85vh] rounded-lg overflow-hidden">
              <Image
                src={previewImage}
                alt={previewAlt}
                fill
                className="object-contain retina-image"
                unoptimized
                sizes="100vw"
              />
            </div>
            <p className="text-white text-base sm:text-lg mt-2 sm:mt-4 font-semibold text-center small-mobile-text px-2">{previewAlt}</p>
          </div>
          <button 
            className="absolute top-2 right-2 sm:top-4 sm:right-8 text-white/70 hover:text-white bg-black/50 rounded-full p-2 sm:p-2 transition-colors touch-target"
            onClick={(e) => {
              e.stopPropagation()
              setPreviewImage(null)
            }}
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            <span className="sr-only">Close preview</span>
          </button>
        </div>
      )}
    </>
  )
}
