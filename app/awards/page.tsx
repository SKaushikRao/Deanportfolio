"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import Image from "next/image"

export default function AwardsPage() {
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const [previewAlt, setPreviewAlt] = useState<string>("")

  const openPreview = (src: string, alt: string) => {
    setPreviewImage(src)
    setPreviewAlt(alt)
  }

  const awardSections = [
    {
      title: "IGBC Award",
      images: [
        "imag1.JPG", "imag2.JPG", "imag3.JPG", "imag4.JPG", 
        "imag5.JPG", "imag6.JPG", "imag7.JPG", "imag8.JPG", 
        "imag9.JPG", "imag10.JPG", "imag11.JPG", "imag12.JPG"
      ]
    },
    {
      title: "MUJ Excellence Award",
      images: ["imag13.jpg"]
    },
    {
      title: "Standing Ovation Award",
      images: ["imag14.JPG"]
    },
    {
      title: "Education Leadership Award",
      images: ["imag15.jpg", "imag16.jpg"]
    },
    {
      title: "IBC Goel Memorial Award",
      images: ["imag18.jpeg"]
    },
    {
      title: "IGBC Fellow Award",
      images: ["imag19.jpg"]
    },
    {
      title: "ASHRAE Award",
      images: ["imag20.jpeg"]
    },
    {
      title: "World Education Congress Award",
      images: ["imag21.jpeg"]
    },
    {
      title: "Venus VIFA 2017",
      images: ["imag22.JPG", "imag23.JPG"]
    },
    {
      title: "Indo-Pacific Architechture Excellence award",
      images: ["imag24.jpg"]
    }
  ]

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
        
        <div className="relative z-10 max-w-full mx-auto px-4 py-12 lg:px-8 lg:py-16">
          <div className="mb-16">
            <h1 className="text-5xl font-bold mb-4 text-[#e6b815] text-center">Awards</h1>
            <div className="h-1 w-24 bg-[#e6b815] rounded-full mx-auto"></div>
          </div>

          {awardSections.map((section, idx) => (
            <section key={idx} className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-white text-center">{section.title}</h2>
                <div className="h-1 w-16 bg-white rounded-full mx-auto"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {section.images.map((imgName, imgIdx) => (
                  <div 
                    key={imgIdx} 
                    className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer bg-black/20 backdrop-blur-sm border border-white/10 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-lg"
                    onClick={() => openPreview(`/Awards/${imgName}`, `${section.title} - Image ${imgIdx + 1}`)}
                  >
                    <div className="relative w-full h-72 sm:h-80 md:h-[400px]">
                      <Image
                        src={`/Awards/${imgName}`}
                        alt={`${section.title} - Image ${imgIdx + 1}`}
                        fill
                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <svg className="w-12 h-12 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Image Preview Modal */}
      {previewImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 sm:p-8 cursor-pointer"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-full h-full max-h-[85vh]">
              <Image
                src={previewImage}
                alt={previewAlt}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <p className="text-white text-lg mt-4 font-semibold text-center">{previewAlt}</p>
          </div>
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-black/50 rounded-full p-2 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setPreviewImage(null)
            }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            <span className="sr-only">Close preview</span>
          </button>
        </div>
      )}
    </div>
  )
}