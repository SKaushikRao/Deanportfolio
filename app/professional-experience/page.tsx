import { Card, CardContent } from "@/components/ui/card"
import Sidebar from "@/components/sidebar"
import Image from "next/image"

export default function ProfessionalExperiencePage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/pic_1.jpg"
            alt="Professional Experience Background"
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
            <h1 className="text-5xl font-bold mb-4 text-[#809949] text-center">Professional Experience</h1>
            <div className="h-1 w-24 bg-[#809949] rounded-full mx-auto"></div>
            <p className="text-2xl text-white/80 mt-4 text-center">30+ Years</p>
          </div>

          <div className="space-y-12">
            {/* Featured Projects */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Sustainable Architecture",
                    description: "Innovative and eco-friendly building design.",
                    image: "/sustainable-architecture-building-design.jpg",
                  },
                  {
                    title: "Heritage Conservation",
                    description: "Preserving architectural history for future generations.",
                    image: "/heritage-conservation-architecture.jpg",
                  },
                  {
                    title: "University Campus Design",
                    description: "Creating inspiring spaces for learning and growth.",
                    image: "/university-campus-design.jpg",
                  },
                  {
                    title: "Green Building Project",
                    description: "A commitment to environmentally responsible construction.",
                    image: "/green-building-project.jpg",
                  },
                  {
                    title: "Bamboo Construction",
                    description: "Exploring the versatility of sustainable materials.",
                    image: "/bamboo-construction-project.jpg",
                  },
                  {
                    title: "Urban Planning Solutions",
                    description: "Designing sustainable cities for the future.",
                    image: "/arc.jpg",
                  },
                ].map((project, idx) => (
                  <Card key={idx} className="overflow-hidden bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl">
                    <div className="relative h-60 w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="grayscale"
                      />
                    </div>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-sm text-white/80">{project.description}</p>
                      <div className="mt-4 flex justify-center">
                        <div className="w-3 h-3 bg-[#809949]"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Major Projects */}
<Card className="bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#809949]">Major Projects</h2>
                <div className="space-y-4">
                  <div className="group p-4 border-l-4 border-[#809949] hover:bg-white/10 transition-colors rounded-r-lg">
                    <h3 className="font-semibold text-white mb-2 group-hover:text-white/80">
                      ISKCON Temples - Team Leader
                    </h3>
                    <p className="text-sm text-white/80">Shri Ganganagar & Jhunjhunu, Rajasthan</p>
                  </div>
                  <div className="group p-4 border-l-4 border-[#809949] hover:bg-white/10 transition-colors rounded-r-lg">
                    <h3 className="font-semibold text-white mb-2 group-hover:text-white/80">
                      City Palace Jaipur Garden - Team Leader
                    </h3>
                  </div>
                  <div className="group p-4 border-l-4 border-[#809949] hover:bg-white/10 transition-colors rounded-r-lg">
                    <h3 className="font-semibold text-white mb-2 group-hover:text-white/80">
                      Consultant - MIT Aurangabad
                    </h3>
                    <ul className="text-sm text-white/80 mt-2 space-y-1 ml-4">
                      <li>• Institute of sericulture at Takli</li>
                      <li>• Residential layout for staff quarters</li>
                      <li>• Hostel buildings</li>
                      <li>• MIT polytechnic college at Bulandshahar, Uttar Pradesh</li>
                      <li>• Redevelopment of Nath Mandir Parisar at Paithan</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Individual Projects */}
<Card className="bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#809949]">Individual Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Slum Rehabilitation Scheme at Kamala, Dist: Solapur",
                    "Residential school at Omerga",
                    "Residential school at Beed",
                    "Residential layout in Aurangabad",
                    "Arts and Crafts Village at Aurangabad",
                    "Various Residences and Interiors",
                    "Mangal Karyalaya at Karmala",
                    "Global Meditorium at Ranchi for Brahmakumaris",
                    "Renovation of Ajmer Retreat center",
                  ].map((project, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-3 rounded-md hover:bg-white/10 transition-colors">
                      <div className="w-2 h-2 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                      <p className="text-sm text-white">{project}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Healthcare */}
<Card className="bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#809949]">Healthcare / Hospitals</h2>
                <div className="space-y-3">
                  {[
                    "Hospital cum residence at Bhoom, dist: Osmanabad",
                    "Superspeciality Hospital at Ahmednagar",
                    "100 bedded ICU building at Barshi, dist. Solapur",
                  ].map((project, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-md hover:bg-white/10 transition-colors">
                      <div className="w-2 h-2 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                      <p className="text-white">{project}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Planning */}
<Card className="bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#809949]">Urban Planning</h2>
                <div className="space-y-3">
                  <div className="p-4 bg-white/10 rounded-lg">
                    <p className="font-semibold text-white mb-2">Team Leader - City Development Plans</p>
                    <ul className="text-sm text-white/80 space-y-1">
                      <li>• City of Akot (Nov. 2010)</li>
                      <li>• City of Amrawati (Feb. 2011)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Heritage Conservation */}
<Card className="bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#809949]">Heritage Conservation</h2>
                <p className="text-white mb-4">Team Leader for conservation of four forts of Maharashtra:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Paranda Fort", "Naldurg Fort", "Ausa Fort", "Mahur Fort"].map((fort, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-white/10 rounded-lg text-center hover:bg-white hover:text-primary-foreground transition-colors group"
                    >
                      <p className="font-semibold text-white">{fort}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Green Buildings */}
<Card className="bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#809949]">Green Buildings</h2>
                <div className="space-y-3">
                  {[
                    "Marathwada Autocluster, Aurangabad",
                    "Residential Towers at Mumbai",
                    "Industrial Building at Bhiwadi, Rajasthan",
                  ].map((project, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-md hover:bg-white/10 transition-colors">
                      <div className="w-2 h-2 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                      <p className="text-white">{project}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Energy Audit */}
<Card className="bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#809949]">Energy Audit</h2>
                <p className="text-white/80 mb-4">Worked as a team member for energy audit of:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Mantralaya, Mumbai",
                    "Government Administrative Building, Mumbai",
                    "High Court, Aurangabad",
                    "High Court, Nagpur",
                  ].map((building, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-3 rounded-md hover:bg-white/10 transition-colors">
                      <div className="w-2 h-2 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                      <p className="text-white">{building}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Countries Visited */}
<Card className="bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#809949]">International Exposure</h2>
                <p className="text-white/80 mb-4">Countries Visited:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "United States of America",
                    "France",
                    "Greece",
                    "Portugal",
                    "Japan",
                    "Malaysia",
                    "Singapore",
                    "Sri Lanka",
                    "Canada",
                  ].map((country, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-white/10 rounded-full text-sm text-white hover:bg-white hover:text-primary-foreground transition-colors"
                    >
                      {country}
                    </span>
                  ))}
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
