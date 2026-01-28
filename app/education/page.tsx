import { Card, CardContent } from "@/components/ui/card"
import Sidebar from "@/components/sidebar"

export default function EducationPage() {
  const qualifications = [
    {
      degree: "Ph.D. in Architecture",
      institution: "School of Planning and Architecture, New Delhi, India",
      note: "Recipient of AICTE scholarship",
    },
    {
      degree: "M.Plann.",
      institution: "Institute of Town Planners, New Delhi, India",
    },
    {
      degree: "B.Arch.",
      institution: "Dr. B.A.M University, Aurangabad, (M.S), India",
    },
    {
      degree: "M.B.A (HR)",
      institution: "Anna Malai University",
    },
    {
      degree: "M.Sc. in Value Education and Spirituality",
      institution: "Anna Malai University Chennai",
    },
    {
      degree: "P.G. Diploma in Value Education and Spirituality",
      institution: "Anna Malai University Chennai",
    },
    {
      degree: "IGBC Accredited Professional",
      institution: "Green Building Solutions",
    },
    {
      degree: "UNESCO Certified Mentor",
      institution: "Community-Based Participatory Research",
    },
  ]

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 lg:ml-80">
        <div className="max-w-5xl mx-auto px-6 py-12 lg:px-12 lg:py-16">
          <div className="mb-12">
            <h1 className="text-6xl font-bold mb-4 text-gray-400 text-center">Education Qualifications</h1>
            <div className="h-1 w-24 bg-gray-400 rounded-full mx-auto"></div>
          </div>

          <div className="space-y-6">
            {qualifications.map((qual, idx) => (
              <Card key={idx} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-black mb-3 group-hover:underline">{qual.degree}</h3>
                  <p className="text-lg text-gray-800 mb-2">{qual.institution}</p>
                  {qual.note && <p className="text-base text-gray-700 italic">{qual.note}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
