"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Award, BookOpen, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/sidebar"

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const galleryImages = [
    { url: "/sustainable-architecture-building-design.jpg", alt: "Sustainable Architecture" },
    { url: "/university-campus-design.jpg", alt: "Campus Design" },
    { url: "/green-building-project.jpg", alt: "Green Building" },
    { url: "/heritage-conservation-architecture.jpg", alt: "Heritage Conservation" },
    { url: "/bamboo-construction-project.jpg", alt: "Bamboo Construction" },
  ]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 lg:ml-80">
        {/* Hero Section with Background */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/children.png"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Translucent Background - Covering entire hero section */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-md"></div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
              {/* Profile Image - Left Side */}
              <div className={`relative group ${isLoaded ? 'animate-fade-in' : 'opacity-0'} flex-shrink-0`}>
                <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-3xl group-hover:scale-105">
                  <Image
                    src="/images/image.png"
                    alt="Dr. Madhura Yadav"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Text Content - Right Side */}
              <div className={`flex-1 text-center lg:text-left ${isLoaded ? 'animate-slide-in-right' : 'opacity-0'} min-w-0`}>
                <div className="space-y-6">
                  <div>
                    <h1 className="text-5xl lg:text-7xl font-black text-white mb-4 leading-tight">
                      Dr. Madhura Yadav
                    </h1>
                    <p className="text-xl lg:text-2xl font-bold text-white">
                      Dean, Student Welfare | Manipal University Jaipur
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-white">
                    <p className="text-lg lg:text-xl font-bold">Professor in Architecture | UNESCO Certified Mentor</p>
                    <p className="text-base lg:text-lg font-semibold leading-relaxed max-w-2xl">
                      An accomplished Architect Planner with over <strong className="text-white font-black">30 years</strong> of extensive experience in Administration, Academics, and Research. Currently serving as the Dean of the Faculty of Design at Manipal University Jaipur, where she has been the founder head of all Design and Planning programs.
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg" asChild>
                      <Link href="/contact">Get in Touch</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full transition-all duration-300" asChild>
                      <Link href="/research">View Research</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </section>

          {/* Key Highlights - Moved after hero */}
          <section className="py-80 relative">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/arc.jpg"
                alt="Professional Excellence Background"
                fill
                className="object-cover"
              />
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/40" />
            </div>
            
            <div className="relative z-10 max-w-full px-5 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Professional Excellence</h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Three decades of impactful contributions to architecture, education, and sustainable development
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="group relative overflow-hidden bg-gray-200/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Target className="h-8 w-8 text-black" />
                    </div>
                    <div className="text-5xl font-bold text-black mb-4 group-hover:scale-105 transition-transform duration-300">30+</div>
                    <p className="text-black text-lg font-medium">Years of Professional Experience</p>
                  </CardContent>
                </Card>
                
                <Card className="group relative overflow-hidden bg-gray-200/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-8 w-8 text-black" />
                    </div>
                    <div className="text-5xl font-bold text-black mb-4 group-hover:scale-105 transition-transform duration-300">8</div>
                    <p className="text-black text-lg font-medium">Major Awards & Recognitions</p>
                  </CardContent>
                </Card>
                
                <Card className="group relative overflow-hidden bg-gray-200/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="h-8 w-8 text-black" />
                    </div>
                    <div className="text-5xl font-bold text-black mb-4 group-hover:scale-105 transition-transform duration-300">10</div>
                    <p className="text-black text-lg font-medium">Patents Published</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

        {/* Main Content Area */}
        <div className="max-w-full px-4 sm:px-6 lg:px-8 py-20">
          {/* Image Gallery */}
          <section className="mb-16 relative">
            {/* Background Image with Mirror Effect - Full viewport width */}
            <div className="fixed inset-0 left-80 -z-10">
              <Image
                src="/bw.jpg"
                alt="Project Gallery Background"
                fill
                className="object-cover scale-x-[-1]" // Mirror effect
              />
              {/* Overlay for better content visibility */}
              <div className="absolute inset-0 bg-black/30" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Project Gallery</h2>
              <Card className="overflow-hidden bg-white/50 backdrop-blur-sm border-0">
                <CardContent className="p-0">
                  <div className="relative h-[700px] bg-muted">
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
                        className="rounded-full bg-foreground/90 hover:bg-foreground shadow-lg transition-all duration-300 hover:scale-110"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </Button>
                      <Button
                        variant="secondary"
                        size="icon"
                        onClick={nextImage}
                        className="rounded-full bg-foreground/90 hover:bg-foreground shadow-lg transition-all duration-300 hover:scale-110"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </Button>
                    </div>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-sm">
                      {currentImageIndex + 1} / {galleryImages.length}
                    </div>
                  </div>

                  {/* Thumbnail Strip */}
                  <div className="p-4 bg-background/90 backdrop-blur-sm">
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
            </div>
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
