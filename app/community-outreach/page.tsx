"use client"

import { useState, useEffect } from "react"
import Sidebar from "@/components/sidebar"
import CircularGallery from "@/components/CircularGallery"
import { Card, CardContent } from "@/components/ui/card"

export default function CommunityOutreachPage() {
  const [galleryItems, setGalleryItems] = useState<Array<{ image: string; text: string }>>([])

  useEffect(() => {
    // Import images from the Community outreach folder
    const communityOutreachImages = [
      { image: "/Community outreach/outreach1.jpg", text: "Educational Workshop" },
      { image: "/Community outreach/outreach2.jpg", text: "Community Development" },
      { image: "/Community outreach/outreach3.jpg", text: "Youth Mentorship" },
      { image: "/Community outreach/outreach4.jpg", text: "Rural Initiative" },
      { image: "/Community outreach/outreach5.jpg", text: "Social Welfare" },
      { image: "/Community outreach/outreach6.jpg", text: "Environmental Awareness" },
      { image: "/Community outreach/outreach7.jpg", text: "Health Camp" },
      { image: "/Community outreach/outreach8.jpg", text: "Cultural Exchange" },
      { image: "/Community outreach/outreach9.jpg", text: "Skill Development" },
      { image: "/Community outreach/outreach10.jpg", text: "Philanthropy Event" },
      { image: "/Community outreach/outreach11.jpg", text: "Volunteer Program" },
      { image: "/Community outreach/outreach12.jpg", text: "Community Leadership" },
    ]
    
    setGalleryItems(communityOutreachImages)
  }, [])

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 lg:ml-72">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:px-12 lg:py-16">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Community Outreach</h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          {/* Circular Gallery Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-foreground">Outreach Gallery</h2>
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
            <h2 className="text-3xl font-semibold mb-8 text-foreground">All Community Initiatives</h2>
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
                          e.currentTarget.src = `https://picsum.photos/seed/community${index}/400/400`
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
