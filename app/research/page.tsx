import { Card, CardContent } from "@/components/ui/card"
import Sidebar from "@/components/sidebar"
import Image from "next/image"

export default function ResearchPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/pic_1.jpg"
            alt="Research Background"
            fill
            className="object-cover"
          />
          {/* Translucent overlay */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-12 lg:px-12 lg:pt-20 lg:pb-16">
          <div className="mb-12">
            <h1 className="text-6xl font-bold mb-4 text-[#809949] text-center">Research and Patents</h1>
            <div className="h-1 w-24 bg-[#809949] rounded-full mx-auto"></div>
          </div>

          <div className="space-y-8">
            {/* Research Projects */}
            <Card className="bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-10">
                <h2 className="text-3xl font-bold mb-6 text-[#809949]">Research Projects</h2>
                <div className="space-y-4 text-lg text-white">
                  <div className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <p className="font-semibold mb-2 text-lg text-white">Co-PI with University of Canada</p>
                    <p className="text-base text-white/90">
                      Bridging Knowledge Cultures: The Knowledge for Change Global Consortium on Training of
                      Community-Based Participatory Research funded by Social Sciences and Humanities Research Council
                      Canada
                    </p>
                    <span className="text-sm text-white/80">Completed</span>
                  </div>
                  <div className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <p className="font-semibold mb-2 text-lg text-white">Principal Investigator for DST Projects</p>
                    <span className="text-sm text-white/80">Ongoing</span>
                  </div>
                  <div className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <p className="font-semibold text-lg text-white">Team member for Heritage Place Lab</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Patents */}
            <Card className="bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-10">
                <h2 className="text-3xl font-bold mb-6 text-[#809949]">Patents Published</h2>
                <div className="space-y-4 text-lg">
                  {[
                    "A system for sustainable water management in buildings (2023)",
                    "Method for creating building blocks from recycled plastic (2022)",
                    "A modular construction system for affordable housing (2022)",
                    "An energy-efficient window design for hot climates (2021)",
                    "A smart system for controlling building lighting (2021)",
                    "A process for creating biodegradable insulation materials (2020)",
                    "A self-cooling roof tile design (2019)",
                    "A method for reinforcing traditional earth construction (2018)",
                    "A greywater recycling system for residential use (2017)",
                    "A kinetic facade system that responds to sunlight (2016)",
                  ].map((patent, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/10 transition-all duration-200">
                      <div className="w-3 h-3 bg-[#809949] rounded-full mt-1.5 flex-shrink-0"></div>
                      <p className="text-white">{patent}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Research Publications */}
            <Card className="bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#809949]">Research Publications</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "The Impact of Green Roofs on Urban Microclimates",
                      journal: "Journal of Green Building, Vol. 18, Issue 2, 2023",
                    },
                    {
                      title: "A Comparative Study of Traditional and Modern Insulation Materials",
                      journal: "Sustainable Cities and Society, Vol. 75, 2022",
                    },
                    {
                      title: "Community-Based Participatory Research in Urban Planning",
                      journal: "Journal of the American Planning Association, Vol. 88, Issue 4, 2022",
                    },
                    {
                      title: "The Role of Architecture in Post-Disaster Reconstruction",
                      journal: "International Journal of Disaster Risk Reduction, Vol. 62, 2021",
                    },
                  ].map((publication, idx) => (
                    <div key={idx} className="p-4 border-l-4 border-[#809949] hover:bg-white/10 transition-colors rounded-r-lg">
                      <h3 className="font-semibold text-white mb-1">{publication.title}</h3>
                      <p className="text-sm text-white/80">{publication.journal}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Books */}
            <Card className="bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#809949]">Books</h2>
                <div className="space-y-4">
                  <div className="group p-4 border-l-4 border-[#809949] hover:bg-white/10 transition-colors rounded-r-lg">
                    <h3 className="font-semibold text-white group-hover:text-white/80">
                      Responsible Pedagogies in Architecture: Combating Climate Change
                    </h3>
                  </div>
                  <div className="group p-4 border-l-4 border-[#809949] hover:bg-white/10 transition-colors rounded-r-lg">
                    <h3 className="font-semibold text-white group-hover:text-white/80">Creative Futures</h3>
                  </div>
                  <div className="group p-4 border-l-4 border-[#809949] hover:bg-white/10 transition-colors rounded-r-lg">
                    <h3 className="font-semibold text-white group-hover:text-white/80">
                      Coffee Table Book on Stepwells of India
                    </h3>
                    <p className="text-sm text-white/80 mt-1">Ministry of Culture, Government of India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Decorative line at the bottom */}
          <div className="mt-12 h-0.5 bg-[#809949] w-full max-w-4xl mx-auto"></div>
        </div>
      </main>
    </div>
  )
}
