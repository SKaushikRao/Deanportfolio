import { Card, CardContent } from "@/components/ui/card"
import Sidebar from "@/components/sidebar"

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
  ]
  //changes

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 lg:ml-72">
        <div className="max-w-5xl mx-auto px-6 py-12 lg:px-12 lg:py-16">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Professional Associations</h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {associations.map((association, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-md hover:bg-muted transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">{association}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
//awards images update
//spiritual tab (with gurus)
//international conferences
//community outreach (important) with the philanthropy aspect.