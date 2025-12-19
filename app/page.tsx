"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/sidebar"

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const galleryImages = [
    { url: "/sustainable-architecture-building-design.jpg", alt: "Sustainable Architecture" },
    { url: "/university-campus-design.jpg", alt: "Campus Design" },
    { url: "/green-building-project.jpg", alt: "Green Building" },
    { url: "/heritage-conservation-architecture.jpg", alt: "Heritage Conservation" },
    { url: "/bamboo-construction-project.jpg", alt: "Bamboo Construction" },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 lg:ml-72">
        <div className="max-w-6xl mx-auto px-6 py-12 lg:px-12 lg:py-16">
          {/* Profile Header with Photo */}
          <section className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Profile Photo */}
              <div className="relative group">
                <div className="relative w-64 h-80 rounded-lg overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl">
                  <Image
                    src="/images/image.png"
                    alt="Dr. Madhura Yadav"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <h1 className="text-5xl font-bold mb-3 text-foreground text-balance">Dr. Madhura Yadav</h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Dean, Department Of Student Welfare | Manipal University Jaipur
                </p>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p className="text-lg">Architect - Planner | Sustainability Expert | UNESCO Certified Mentor</p>
                  <p>
                    An accomplished Architect Planner with over <strong>30 years</strong> of extensive experience in
                    Administration, Academics, and Research. Currently serving as the Dean of the Faculty of Design at
                    Manipal University Jaipur, where she has been the founder head of all Design and Planning programs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Highlights */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">30+</div>
                  <p className="text-muted-foreground">Years of Professional Experience</p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">8</div>
                  <p className="text-muted-foreground">Major Awards & Recognitions</p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">10</div>
                  <p className="text-muted-foreground">Patents Published</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Image Gallery */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Project Gallery</h2>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-96 bg-muted">
                  <Image
                    src={galleryImages[currentImageIndex].url || "/placeholder.svg"}
                    alt={galleryImages[currentImageIndex].alt}
                    fill
                    className="object-cover transition-opacity duration-500"
                  />

                  {/* Navigation Arrows */}
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

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                    {currentImageIndex + 1} / {galleryImages.length}
                  </div>
                </div>

                {/* Thumbnail Strip */}
                <div className="p-4 bg-background">
                  <div className="flex gap-2 justify-center overflow-x-auto">
                    {galleryImages.map((img, idx) => (
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

          {/* Key Contributions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Key Contributions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Sustainability Expertise</h3>
                  <p className="text-foreground leading-relaxed">
                    Delivered keynote addresses on Sustainable Architecture & Planning, Smart Villages, and Sustainable
                    Rural Development across various universities and government organizations.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Bamboo Advocacy</h3>
                  <p className="text-foreground leading-relaxed">
                    Active proponent of bamboo, focusing on its application in construction, furniture, and skill
                    development. Contributed to the Indian Standard code for Bamboo.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Urban Planning Leadership</h3>
                  <p className="text-foreground leading-relaxed">
                    Led the development of City Development Plans, Heritage Conservation of Forts, and Slum
                    Rehabilitation Projects in Maharashtra.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Research & Publications</h3>
                  <p className="text-foreground leading-relaxed">
                    Published 10 patents and extensively in international journals and conferences. Currently mentoring
                    PhD scholars on sustainability themes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Quick Links */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Explore More</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/education">
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-primary group-hover:underline">
                      Education Qualifications
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Ph.D., M.Plann., B.Arch. and more certifications
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/teaching">
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-primary group-hover:underline">Teaching Experience</h3>
                    <p className="text-sm text-muted-foreground mt-2">30 years U.G., 20 years P.G. & Research</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/awards">
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-primary group-hover:underline">Awards & Recognition</h3>
                    <p className="text-sm text-muted-foreground mt-2">View all prestigious awards received</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/research">
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-primary group-hover:underline">Research & Patents</h3>
                    <p className="text-sm text-muted-foreground mt-2">Publications, patents, and research projects</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/professional-experience">
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-primary group-hover:underline">
                      Professional Experience
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">Major projects and consultancy work</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/contact">
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-primary group-hover:underline">Get in Touch</h3>
                    <p className="text-sm text-muted-foreground mt-2">Contact information and social links</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
