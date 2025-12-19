import { Card, CardContent } from "@/components/ui/card"
import Sidebar from "@/components/sidebar"

export default function PapersPage() {
  const papers = [
    {
      year: "2024",
      title: "Sustainable construction: the use of cork material in the building industry",
      authors: "Madhura Yadav, Ishika Singhal",
      journal: "Materials for renewable and sustainable energy",
    },
    {
      year: "2023",
      title:
        "Thermal Study of Roof Shapes and Materials in Hot Dry Climates: Insights from a Simulation from Rajasthan, India",
      authors: "Saurabh Sharma & Madhura Yadav",
      journal: "ISVS Online Journal",
    },
    {
      year: "2023",
      title: "Assessment of Urban Growth and Ecological Sustainability: Study of Mumbai, India",
      authors: "Madhura Yadav",
      journal: "ISVS Online Journal",
    },
    {
      year: "2022",
      title: "Waste to Wealth: Overview of Waste and Recycled Material in Construction Industry",
      authors: "Madhura Yadav and Surbhi Sinha",
      journal: "Materials Today: Proceedings",
    },
    {
      year: "2022",
      title: "Opportunities and Challenges of Using Nanomaterials and Nanotechnology in Architecture: An overview",
      authors: "Antima Kuda and Madhura Yadav",
      journal: "Materials Today: Proceedings",
    },
    {
      year: "2022",
      title: "Opportunities & challenges of hempcrete as a building material for construction: An overview",
      authors: "Madhura Yadav and Ayushi Saini",
      journal: "Materials Today: Proceedings",
    },
    {
      year: "2021",
      title: "Campus Design of Universities: An Overview",
      authors: "Madhura Yadav & Preethi Agarwal",
      journal: "Journal of Design & Built Environment",
    },
    {
      year: "2021",
      title: "Redefining Design Education for 21st Century",
      authors: "Madhura Yadav",
      journal: "Proceedings of ICoRD'21, IIT Mumbai (Springer)",
    },
  ]

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 lg:ml-72">
        <div className="max-w-5xl mx-auto px-6 py-12 lg:px-12 lg:py-16">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Important Papers</h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
            <p className="text-muted-foreground mt-4">29+ published papers in international journals and conferences</p>
          </div>

          <div className="space-y-6">
            {papers.map((paper, idx) => (
              <Card key={idx} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="text-2xl font-bold text-primary min-w-[80px]">{paper.year}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                        {paper.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">{paper.authors}</p>
                      <p className="text-sm text-foreground italic">{paper.journal}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8">
            <CardContent className="p-6">
              <p className="text-center text-muted-foreground">
                For a complete list of all 29+ publications, please refer to the full CV or contact directly.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
