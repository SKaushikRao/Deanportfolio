"use client"

import { useState, useEffect } from "react"
import Sidebar from "@/components/sidebar"
import CircularGallery from "@/components/CircularGallery"
import { Card, CardContent } from "@/components/ui/card"

export default function HallOfFamePage() {
  const [galleryItems, setGalleryItems] = useState<Array<{ image: string; text: string }>>([])

  useEffect(() => {
    // Import images from the Hall of fame folder
    const hallOfFameImages = [
      { image: "/Hall of fame/personality1.jpg", text: "Distinguished Leader" },
      { image: "/Hall of fame/personality2.jpg", text: "Renowned Architect" },
      { image: "/Hall of fame/personality3.jpg", text: "Influential Educator" },
      { image: "/Hall of fame/personality4.jpg", text: "Visionary Designer" },
      { image: "/Hall of fame/personality5.jpg", text: "Esteemed Colleague" },
      { image: "/Hall of fame/personality6.jpg", text: "Notable Collaborator" },
      { image: "/Hall of fame/personality7.jpg", text: "Industry Pioneer" },
      { image: "/Hall of fame/personality8.jpg", text: "Respected Mentor" },
      { image: "/Hall of fame/personality9.jpg", text: "International Partner" },
      { image: "/Hall of fame/personality10.jpg", text: "Distinguished Guest" },
    ]
    
    setGalleryItems(hallOfFameImages)
  }, [])

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 lg:ml-72">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:px-12 lg:py-16">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Famous Personalities</h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          {/* Circular Gallery Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-foreground">Hall of Fame Gallery</h2>
            <div style={{ height: '600px', position: 'relative' }}>
              <CircularGallery 
                bend={3} 
                textColor="#ffffff" 
                borderRadius={0.05} 
                scrollEase={0.02}
                items={galleryItems}
              />
            </div>
          </div>

          {/* Grid Gallery Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-8 text-foreground">All Personalities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      <img
                        src={item.image}
                        alt={item.text}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback to placeholder if image doesn't exist
                          e.currentTarget.src = `https://picsum.photos/seed/halloffame${index}/400/400`
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
        </div>
      </main>
    </div>
  )
}
