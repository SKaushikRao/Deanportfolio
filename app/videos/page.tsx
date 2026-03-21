"use client"

import Sidebar from "@/components/sidebar"

export default function VideosPage() {
  const videos = [
    "kzZofYSJkbs",
    "qV9YTsj7YzI",
    "XYnplg1BBbA",
    "qX_il_tQ8jc",
    "1UG64roF76Q",
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 lg:ml-80">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 lg:px-12 lg:pt-20 lg:pb-16">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Videos</h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((id, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg bg-card border border-border">
                <div className="aspect-video relative">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${id}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
