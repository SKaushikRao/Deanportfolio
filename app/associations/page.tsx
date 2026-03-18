import { Card, CardContent } from "@/components/ui/card"
import Sidebar from "@/components/sidebar"
import Image from "next/image"

export default function AssociationsPage() {
  const associations = [
    "Life Member of Indian Institute of Architects",
    "Fellow Member of Institute of Town Planners, New Delhi, India",
    "Life Member of Indian Institute of Engineers",
    "Patron - Indian Green Building Council",
    "Life Member of Indian National Trust for Art and Cultural Heritage",
    "Member of Governing council of IBC, New Delhi",
    "Founding member of India bamboo forum",
    "Member and Student activity chair of ASHRAE Rajasthan Chapter",
    "Member and Student activity chair of ISHRAE Rajasthan Chapter",
    "Expert member for Bureau of Indian standards (BIS)",
    "Member of ICOMOS",
    "NITI Aayog Expert Member",
    "Indian Building Congress (IBC) Member",
    "General Secretary for Indian Building Congress, Rajasthan Chapter",
  ]
  //changes

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 lg:ml-72 relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/pic_1.jpg"
            alt="Professional Associations Background"
            fill
            className="object-cover"
          />
          {/* Translucent overlay */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 lg:px-12 lg:py-16">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-[#809949] text-center">Professional Associations</h1>
            <div className="h-1 w-24 bg-[#809949] rounded-full mx-auto"></div>
          </div>

          <Card className="bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {associations.map((association, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-md hover:bg-white/10 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-[#809949] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white">{association}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Decorative line at the bottom */}
          <div className="mt-12 h-0.5 bg-[#809949] w-full max-w-4xl mx-auto"></div>
        </div>
      </main>
    </div>
  )
}
//awards images update
//spiritual tab (with gurus)
//international conferences
//community outreach (important) with tBookshe philanthropy aspect.