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
    { url: "/gallery/img14.JPEG", alt: "Gallery Image 14" },
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

      <main className="flex-1">
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
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 mobile-spacing">
            <div className="flex flex-col gap-8 lg:gap-12 items-center justify-center text-center lg:text-left">
              {/* Profile Image */}
              <div className={`relative group ${isLoaded ? 'animate-fade-in' : 'opacity-0'} flex-shrink-0`}>
                <div className="relative w-48 sm:w-64 lg:w-80 h-64 sm:h-72 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl transition-all duration-700 group-hover:shadow-3xl group-hover:scale-105 mobile-image">
                  <Image
                    src="/images/image.jpg"
                    alt="Dr. Madhura Yadav"
                    fill
                    className="object-cover retina-image"
                    priority
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 40vw, 320px"
                  />
                  {/* Translucent overlay */}
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Text Content */}
              <div className={`flex-1 ${isLoaded ? 'animate-slide-in-right' : 'opacity-0'} min-w-0`}>
                <div className="space-y-4 sm:space-y-6 mobile-spacing">
                  <div>
                    <h1 className="text-2xl sm:text-3xl lg:text-6xl lg:text-7xl font-black text-white mb-2 sm:mb-4 leading-tight">
                      Dr. Madhura Yadav
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl lg:text-3xl font-bold text-white">
                      Dean, Student Welfare, Manipal University Jaipur
                    </p>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4 text-white">
                    <p className="text-base sm:text-lg lg:text-xl lg:text-2xl font-bold small-mobile-text">Architect Planner | Sustainability Expert | UNESCO Certified Mentor</p>
                    <p className="text-sm sm:text-base lg:text-lg lg:text-xl leading-relaxed small-mobile-text">
                      Dr. Madhura Yadav is a visionary academic leader with over 30 years of distinguished experience in architecture, Design, Fine arts, urban planning, and sustainability. As Dean of the Faculty of Design at Manipal University Jaipur, she has pioneered the establishment of all Design and Planning programs, nurturing a generation of socially conscious and sustainability-driven professionals.
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg lg:text-xl leading-relaxed small-mobile-text">
                      An expert in sustainability, Dr. Yadav, is widely recognized for her advocacy of eco-conscious materials, particularly bamboo—for construction and thermal comfort. She contributes as an expert to UPSC, AICTE, CoA, DST Rajasthan, and NITI Aayog, and played a pivotal role in drafting the Indian Standards for Bamboo. Her leadership extends to large-scale projects including City Development Plans, heritage conservation of forts, and slum rehabilitation in Maharashtra.
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg lg:text-xl leading-relaxed small-mobile-text">
                      Dr. Yadav has received international acclaim for her research, including multiple awards and publications. A UNESCO-certified mentor in Community-Based Participatory Research, she also represents India in global policy reports such as the GUNI World Report on Higher Education.
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg lg:text-xl leading-relaxed small-mobile-text">
                      With qualifications spanning architecture, planning, value education, and leadership training from ASHRAE, USA, she embodies interdisciplinary excellence. Her work not only bridges academia, policy, and community but also sets a benchmark for ethical, inclusive, and future-ready Architecture & Design education.
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg lg:text-xl leading-relaxed">
                      Dr. Madhura Yadav continues to inspire the next generation of professionals to create resilient, sustainable environments through knowledge, compassion, and action.
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base" asChild>
                      <Link href="/contact">Get in Touch</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 text-sm sm:text-base" asChild>
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
              {/* Translucent overlay */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
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
                <Link href="/professional-experience">
                  <Card className="group relative overflow-hidden bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Target className="h-8 w-8 text-black" />
                      </div>
                      <div className="text-5xl font-bold text-white mb-4 group-hover:scale-105 transition-transform duration-300">30+</div>
                      <p className="text-white text-lg font-medium">Years of Professional Experience</p>
                    </CardContent>
                  </Card>
                </Link>
                
                <Link href="/awards">
                  <Card className="group relative overflow-hidden bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Award className="h-8 w-8 text-black" />
                      </div>
                      <div className="text-5xl font-bold text-white mb-4 group-hover:scale-105 transition-transform duration-300">8</div>
                      <p className="text-white text-lg font-medium">Major Awards & Recognitions</p>
                    </CardContent>
                  </Card>
                </Link>
                
                <Link href="/research">
                  <Card className="group relative overflow-hidden bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                        <BookOpen className="h-8 w-8 text-black" />
                      </div>
                      <div className="text-5xl font-bold text-white mb-4 group-hover:scale-105 transition-transform duration-300">10</div>
                      <p className="text-white text-lg font-medium">Patents Published</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </section>

        {/* Main Content Area */}
        <div className="max-w-full px-4 sm:px-6 lg:px-8 py-20">
          {/* Image Gallery */}
          <section className="mb-16 relative">
            {/* Background Image with Mirror Effect - Full viewport width */}
            <div className="fixed inset-0 -z-10">
              <Image
                src="/bw.jpg"
                alt="Project Gallery Background"
                fill
                className="object-cover scale-x-[-1]" // Mirror effect
              />
              {/* Translucent overlay */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
              {/* Overlay for better content visibility */}
              <div className="absolute inset-0 bg-black/30" />
            </div>
            
            <div className="relative z-10">
              <div className="relative h-[500px] sm:h-[600px] lg:h-[700px]">
                <Image
                      src={galleryImages[currentImageIndex].url || "/placeholder.svg"}
                      alt={galleryImages[currentImageIndex].alt}
                      fill
                      className="object-cover transition-opacity duration-500 grayscale"
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
                  <div className="p-4 bg-black/30 backdrop-blur-sm">
                    <div className="flex gap-2 justify-center overflow-x-auto">
                      {galleryImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`relative w-16 sm:w-20 rounded-md overflow-hidden flex-shrink-0 transition-all duration-300 ${
                            idx === currentImageIndex
                              ? "ring-2 ring-primary scale-110"
                              : "opacity-60 hover:opacity-100 hover:scale-105"
                          }`}
                        >
                          <Image src={img.url || "/placeholder.svg"} alt={img.alt} fill className="object-cover grayscale" />
                        </button>
                      ))}
                    </div>
                  </div>
            </div>
          </section>

          {/* Key Contributions */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-400 text-center">Key Contributions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-black">Sustainability Expertise</h3>
                  <p className="text-gray-800 leading-relaxed">
                    Prof. (Dr.) Madhura Yadav is a recognised sustainability expert whose work brings together architecture, planning, green building, climate-conscious design, and value-based education. With decades of academic and professional experience, she has consistently advanced built environment practices that are environmentally responsible, context-sensitive, and future-ready.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-black">Bamboo Advocacy</h3>
                  <p className="text-gray-800 leading-relaxed">
                    A strong voice in sustainable material innovation, Prof. Yadav has actively championed bamboo as a strategic material for ecological and resilient construction. Through her association with the India Bamboo Forum, BIS Bamboo Handbook, and national policy-level conversations, she has helped position bamboo as an important part of India's sustainable development future.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-black">Urban Planning Leadership</h3>
                  <p className="text-gray-800 leading-relaxed">
                    Prof. Yadav's leadership in urban planning reflects a rare combination of academic depth, field insight, and long-term vision. Her work spans urban growth, ecological sustainability, community participation, housing, and city development, demonstrating a strong commitment to shaping cities that are inclusive, resilient, and rooted in human needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-black">Research Publications</h3>
                  <p className="text-gray-800 leading-relaxed">
                    With an extensive body of published work across sustainability, architecture, planning, heritage, and material innovation, Prof. Yadav's research reflects both depth and relevance. Her publications engage with contemporary challenges in the built environment while contributing thoughtful, interdisciplinary perspectives to academic and professional discourse.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Quick Links */}
          <section>
            <h2 className="text-4xl font-bold mb-6 text-gray-400 text-center">Explore More</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/education">
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full bg-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-black group-hover:underline">
                      Education Qualifications
                    </h3>
                    <p className="text-sm text-gray-800 mt-2">
                      Ph.D., M.Plann., B.Arch. and more certifications
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/teaching">
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full bg-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-black group-hover:underline">Teaching Experience</h3>
                    <p className="text-sm text-gray-800 mt-2">30 years U.G., 20 years P.G. & Research</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/awards">
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full bg-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-black group-hover:underline">Awards & Recognition</h3>
                    <p className="text-sm text-gray-800 mt-2">View all prestigious awards received</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/research">
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full bg-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-black group-hover:underline">Research & Patents</h3>
                    <p className="text-sm text-gray-800 mt-2">Publications, patents, and research projects</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/professional-experience">
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full bg-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-black group-hover:underline">
                      Professional Experience
                    </h3>
                    <p className="text-sm text-gray-800 mt-2">Major projects and consultancy work</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/contact">
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full bg-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-black group-hover:underline">Get in Touch</h3>
                    <p className="text-sm text-gray-800 mt-2">Contact information and social links</p>
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
