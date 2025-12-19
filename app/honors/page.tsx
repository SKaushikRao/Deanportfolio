import { Card, CardContent } from "@/components/ui/card"
import Sidebar from "@/components/sidebar"

export default function HonorsPage() {
  const honors = [
    "Expert member of ICOMOS National Scientific Committee in Working Group of Sustainable Development and in climate Change and Heritage",
    "Nominated by BIS to represent India for the international Meeting on ISO/TC 165 Timber Structures Committee",
    "Expert member of Bureau of Indian Standards for Bamboo Handbook",
    "Expert member NITI Aayog on the subgroup of Bamboo",
    "Expert member for the selection of layout for 18th National Scout Guide Jamboree, Rohat, Pali, Rajasthan",
    "Expert member on UPSC panel",
    "Distinguished Speaker in Plenary session of SANMANTRANA-2021 on Good Practices and Capacity Building for Sustainable Development Goals at International congress",
    "Keynote address on Sustainable practices at Rajasthan Technical University",
    "Keynote speaker for India Bamboo forum",
    "Expert talk on Design of SMART village at DST Rajasthan",
    "Keynote Speaker in National Conference on Spiritual Empowerment of Architects 2019 at Abu Road, India",
    "Invited as an expert on DD Rajasthan for a talk on Career in Design",
    "Invited as an expert by India Today television as a panelist for Outdoor Lighting",
    "Invited as an expert by CNBC Awaz television as a panelist for Smart City",
    "Member of Editorial Committee of International Journal of Urban Design",
    "Member of Editorial Committee of International Journal of Built Environment, University of technology, Malaysia",
    "Expert Member of AICTE to inspect Engineering Institutes",
    "Expert Member of Council of Architecture to inspect Architecture schools",
    "Conference Chair for 1st International Conference on Waste Management at Manipal University Jaipur",
  ]

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 lg:ml-72">
        <div className="max-w-5xl mx-auto px-6 py-12 lg:px-12 lg:py-16">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Honors</h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="space-y-3">
                {honors.map((honor, idx) => (
                  <div
                    key={idx}
                    className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <div className="w-3 h-3 bg-primary rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                    <p className="text-foreground leading-relaxed">{honor}</p>
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
