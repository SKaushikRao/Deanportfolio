import { Card, CardContent } from "@/components/ui/card"
import Sidebar from "@/components/sidebar"
import Image from "next/image"
//imagesupdates

export default function AwardsPage() {
  const awards = [
    {
      title: "Architecture Excellence Award (2023)",
      image: "/architecture-excellence-award-ceremony.jpg",
    },
    {
      title: "Green Building Council Recognition (2022)",
      image: "/green-building-council-recognition-certificate.jpg",
    },
    {
      title: "International Architecture Conference Award (2021)",
      image: "/international-architecture-conference-award.jpg",
    },
    {
      title: "Professional Recognition Award (2020)",
      image: "/professional-recognition-award-trophy.jpg",
    },
    {
      title: "Academic Excellence Award (2019)",
      image: "/academic-excellence-award-stage.jpg",
    },
    {
      title: "Education Leadership Award (2018)",
      image: "/education-leadership-award-presentation.jpg",
    },
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-16">
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#e6b815] text-center">Awards</h1>
            <div className="h-1 w-16 sm:w-24 bg-[#e6b815] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {awards.map((award, idx) => (
              <Card key={idx} className="overflow-hidden bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl">
                <div className="relative h-40 sm:h-48 lg:h-60 w-full">
                  <Image
                    src={award.image}
                    alt={award.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardContent className="p-4 sm:p-6 text-center">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white line-clamp-2">
                    {award.title}
                  </h3>
                  <div className="mt-3 sm:mt-4 flex justify-center">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#e6b815]"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Decorative line at the bottom */}
          <div className="mt-8 sm:mt-12 h-0.5 bg-[#e6b815] w-full max-w-4xl mx-auto"></div>
        </div>
      </main>
    </div>
  )
}