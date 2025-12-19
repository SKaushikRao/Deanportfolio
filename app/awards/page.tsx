"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/sidebar"

export default function AwardsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const awards = [
    { year: "2022", award: "IGBC Fellow Award", organization: "Indian Green Building Council, India" },
    {
      year: "2021",
      award: "Indo Pacific Architecture Excellence Award",
      description: "Recognition to the Sustained Commitment in Architecture Education",
    },
    {
      year: "2020-21",
      award: "Smt. Satya Goel Memorial Award",
      organization: "Indian Building Congress",
      description: "Recognition of valuable services and outstanding contribution in the Building Profession",
    },
    { year: "2019", award: "Education Leadership Award", organization: "Dewang Mehta Foundation" },
    { year: "2018", award: "Global Outreach Education Award for Excellence in Teacher in Architecture" },
    { year: "2018", award: "Best Presentation Award", location: "Vancouver, Canada" },
    { year: "2017", award: "Distinguished Faculty in Architecture Award" },
    { year: "2017", award: "Asia Pacific Global Award" },
  ]

  const awardImages = [
    { url: "/architecture-excellence-award-ceremony.jpg", alt: "Award Ceremony" },
    { url: "/professional-recognition-award-trophy.jpg", alt: "Award Trophy" },
    { url: "/education-leadership-award-presentation.jpg", alt: "Leadership Award" },
    { url: "/international-architecture-conference-award.jpg", alt: "Conference Award" },
    { url: "/green-building-council-recognition-certificate.jpg", alt: "IGBC Award" },
    { url: "/academic-excellence-award-stage.jpg", alt: "Academic Award" },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % awardImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + awardImages.length) % awardImages.length)
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 lg:ml-72">
        <div className="max-w-5xl mx-auto px-6 py-12 lg:px-12 lg:py-16">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Awards & Recognition</h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          {/* Awards Gallery Carousel */}
          <section className="mb-12">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-[500px] bg-muted">
                  <Image
                    src={awardImages[currentImageIndex].url || "/placeholder.svg"}
                    alt={awardImages[currentImageIndex].alt}
                    fill
                    className="object-cover transition-opacity duration-500"
                  />

                  <div className="absolute inset-0 flex items-center justify-between p-4">
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={prevImage}
                      className="rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-300 hover:scale-110"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={nextImage}
                      className="rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-300 hover:scale-110"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </div>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                    {currentImageIndex + 1} / {awardImages.length}
                  </div>
                </div>

                <div className="p-4 bg-background">
                  <div className="flex gap-2 justify-center overflow-x-auto">
                    {awardImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 transition-all duration-300 ${
                          idx === currentImageIndex
                            ? "ring-2 ring-primary scale-110"
                            : "opacity-60 hover:opacity-100 hover:scale-105"
                        }`}
                      >
                        <Image src={img.url || "/placeholder.svg"} alt={img.alt} fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Awards List */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-foreground">All Awards</h2>
            <div className="space-y-4">
              {awards.map((item, idx) => (
                <Card key={idx} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <div className="text-2xl font-bold text-primary min-w-[80px]">{item.year}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {item.award}
                        </h3>
                        {item.organization && <p className="text-muted-foreground mb-1">{item.organization}</p>}
                        {item.location && <p className="text-muted-foreground mb-1">{item.location}</p>}
                        {item.description && <p className="text-sm text-foreground mt-2">{item.description}</p>}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
