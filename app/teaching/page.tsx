import { Card, CardContent } from "@/components/ui/card"
import Sidebar from "@/components/sidebar"

export default function TeachingPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 lg:ml-72">
        <div className="max-w-5xl mx-auto px-6 py-12 lg:px-12 lg:py-16">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Teaching Experience</h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-primary mb-2">30</div>
                <p className="text-muted-foreground">Years</p>
                <p className="text-foreground font-semibold mt-2">U.G. Level</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-primary mb-2">20</div>
                <p className="text-muted-foreground">Years</p>
                <p className="text-foreground font-semibold mt-2">P.G. Level</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-primary mb-2">20</div>
                <p className="text-muted-foreground">Years</p>
                <p className="text-foreground font-semibold mt-2">Research</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Research Guidance</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold text-primary">10</div>
                    <p className="text-foreground">P.G. theses guided</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold text-primary">8</div>
                    <p className="text-foreground">Ph.D. thesis guiding (3 completed)</p>
                  </div>
                  <div className="mt-6 space-y-2 text-foreground">
                    <p>• Supervisor for Second Cohort of K4C Consortium of UNESCO</p>
                    <p>• Supervisor for IAESTE Students</p>
                    <p>• Supervisor for DST biodiversity fellowship</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Academic Leadership</h2>
                <div className="space-y-3 text-foreground">
                  <p>• Founder Head of Design and Planning programs at Manipal University Jaipur</p>
                  <p>• Trained in Academy Leadership by ASHRAE, USA</p>
                  <p>• As Dean, responsible for strategic plans and policies aligned with university mission</p>
                  <p>• Hub coordinator for community-based participatory research</p>
                  <p>• Panellist on Design for Social Change, Heritage Conservation, and Sustainable Buildings</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
