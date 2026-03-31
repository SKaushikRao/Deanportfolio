"use client"

import Sidebar from "@/components/sidebar"
import SquareTileGallery from "@/components/SquareTileGallery"

export default function CommunityOutreachPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 lg:px-12 lg:pt-20 lg:pb-16">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Community Outreach</h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <SquareTileGallery 
            folder="community-outreach"
            imageCount={15}
            title="All Community Initiatives"
          />
        </div>
      </main>
    </div>
  )
}
