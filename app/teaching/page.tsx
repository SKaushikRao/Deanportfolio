import { Card, CardContent } from "@/components/ui/card"
import Sidebar from "@/components/sidebar"
import Image from "next/image"

export default function TeachingPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/pic_1.jpg"
            alt="Teaching Background"
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
            <h1 className="text-6xl font-bold mb-4 text-[#a1574c] text-center">Teaching Experience</h1>
            <div className="h-1 w-24 bg-[#a1574c] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-10 text-center">
                <div className="text-6xl font-bold text-white mb-3">30</div>
                <p className="text-lg text-white">Years</p>
                <p className="text-lg text-white font-semibold mt-2">U.G. Level</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-10 text-center">
                <div className="text-6xl font-bold text-white mb-3">22</div>
                <p className="text-lg text-white">Years</p>
                <p className="text-lg text-white font-semibold mt-2">P.G. Level</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-10 text-center">
                <div className="text-6xl font-bold text-white mb-3">20</div>
                <p className="text-lg text-white">Years</p>
                <p className="text-lg text-white font-semibold mt-2">Research</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-10">
                <h2 className="text-3xl font-bold mb-6 text-[#a1574c]">Research Guidance</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-white">10</div>
                    <p className="text-lg text-white">P.G. theses guided</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-white">8</div>
                    <p className="text-lg text-white">Ph.D. thesis guiding (3 completed)</p>
                  </div>
                  <div className="mt-6 space-y-2 text-lg text-white">
                    <p>• Supervisor for Second Cohort of K4C Consortium of UNESCO</p>
                    <p>• Supervisor for IAESTE Students</p>
                    <p>• Supervisor for DST biodiversity fellowship</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-10">
                <h2 className="text-3xl font-bold mb-6 text-[#a1574c]">Academic Leadership</h2>
                <div className="space-y-3 text-lg text-white">
                  <p>• Founder Head of Design and Planning programs at Manipal University Jaipur</p>
                  <p>• Trained in Academy Leadership by ASHRAE, USA</p>
                  <p>• As Dean, responsible for strategic plans and policies aligned with university mission</p>
                  <p>• Hub coordinator for community-based participatory research</p>
                  <p>• Panellist on Design for Social Change, Heritage Conservation, and Sustainable Buildings</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Decorative line at the bottom */}
          <div className="mt-12 h-0.5 bg-[#a1574c] w-full max-w-4xl mx-auto"></div>
        </div>
      </main>
    </div>
  )
}
