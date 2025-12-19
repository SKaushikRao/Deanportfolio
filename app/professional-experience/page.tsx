import { Card, CardContent } from "@/components/ui/card"
import Sidebar from "@/components/sidebar"

export default function ProfessionalExperiencePage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 lg:ml-72">
        <div className="max-w-5xl mx-auto px-6 py-12 lg:px-12 lg:py-16">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Professional Experience</h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
            <p className="text-2xl text-muted-foreground mt-4">30 Years</p>
          </div>

          <div className="space-y-8">
            {/* Major Projects */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Major Projects</h2>
                <div className="space-y-4">
                  <div className="group p-4 border-l-4 border-primary hover:bg-muted transition-colors rounded-r-lg">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary">
                      ISKCON Temples - Team Leader
                    </h3>
                    <p className="text-sm text-muted-foreground">Shri Ganganagar & Jhunjhunu, Rajasthan</p>
                  </div>
                  <div className="group p-4 border-l-4 border-primary hover:bg-muted transition-colors rounded-r-lg">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary">
                      City Palace Jaipur Garden - Team Leader
                    </h3>
                  </div>
                  <div className="group p-4 border-l-4 border-primary hover:bg-muted transition-colors rounded-r-lg">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary">
                      Consultant - MIT Aurangabad
                    </h3>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1 ml-4">
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
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Individual Projects</h2>
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
                    <div key={idx} className="flex items-start gap-2 p-3 rounded-md hover:bg-muted transition-colors">
                      <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <p className="text-sm text-foreground">{project}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Healthcare */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Healthcare / Hospitals</h2>
                <div className="space-y-3">
                  {[
                    "Hospital cum residence at Bhoom, dist: Osmanabad",
                    "Superspeciality Hospital at Ahmednagar",
                    "100 bedded ICU building at Barshi, dist. Solapur",
                  ].map((project, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-md hover:bg-muted transition-colors">
                      <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <p className="text-foreground">{project}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Planning */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Urban Planning</h2>
                <div className="space-y-3">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="font-semibold text-foreground mb-2">Team Leader - City Development Plans</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• City of Akot (Nov. 2010)</li>
                      <li>• City of Amrawati (Feb. 2011)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Heritage Conservation */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Heritage Conservation</h2>
                <p className="text-foreground mb-4">Team Leader for conservation of four forts of Maharashtra:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Paranda Fort", "Naldurg Fort", "Ausa Fort", "Mahur Fort"].map((fort, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-muted rounded-lg text-center hover:bg-primary hover:text-primary-foreground transition-colors group"
                    >
                      <p className="font-semibold">{fort}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Green Buildings */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Green Buildings</h2>
                <div className="space-y-3">
                  {[
                    "Marathwada Autocluster, Aurangabad",
                    "Residential Towers at Mumbai",
                    "Industrial Building at Bhiwadi, Rajasthan",
                  ].map((project, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-md hover:bg-muted transition-colors">
                      <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <p className="text-foreground">{project}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Energy Audit */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Energy Audit</h2>
                <p className="text-muted-foreground mb-4">Worked as a team member for energy audit of:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Mantralaya, Mumbai",
                    "Government Administrative Building, Mumbai",
                    "High Court, Aurangabad",
                    "High Court, Nagpur",
                  ].map((building, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-3 rounded-md hover:bg-muted transition-colors">
                      <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <p className="text-foreground">{building}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Countries Visited */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">International Exposure</h2>
                <p className="text-muted-foreground mb-4">Countries Visited:</p>
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
                      className="px-4 py-2 bg-muted rounded-full text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
