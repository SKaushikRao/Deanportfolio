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

      <main className="flex-1 lg:ml-72">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:px-12 lg:py-16">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-gray-400 text-center">Awards</h1>
            <div className="h-1 w-24 bg-gray-400 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, idx) => (
              <Card key={idx} className="overflow-hidden bg-gray-200">
                <div className="relative h-60 w-full">
                  <Image
                    src={award.image}
                    alt={award.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-black">
                    {award.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}