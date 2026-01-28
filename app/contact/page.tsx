import { Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Sidebar from "@/components/sidebar"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 lg:ml-80">
        <div className="max-w-5xl mx-auto px-6 py-12 lg:px-12 lg:py-16">
          <div className="mb-12">
            <h1 className="text-6xl font-bold mb-4 text-gray-400 text-center">Contact</h1>
            <div className="h-1 w-24 bg-gray-400 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-200">
              <CardContent className="p-10">
                <Mail className="w-10 h-10 text-black mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-black">Email</h3>
                <a
                  href="mailto:ymadhura@gmail.com"
                  className="text-lg text-gray-800 hover:text-black block mb-1 transition-colors"
                >
                  ymadhura@gmail.com
                </a>
                <a
                  href="mailto:madhura.yadav@jaipur.manipal.edu"
                  className="text-lg text-gray-800 hover:text-black block transition-colors"
                >
                  madhura.yadav@jaipur.manipal.edu
                </a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-200">
              <CardContent className="p-10">
                <Phone className="w-10 h-10 text-black mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-black">Phone</h3>
                <a href="tel:+918890306647" className="text-lg text-gray-800 hover:text-black transition-colors">
                  +91-8890306647
                </a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-200">
              <CardContent className="p-10">
                <MapPin className="w-10 h-10 text-black mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-black">Address</h3>
                <p className="text-gray-800 leading-relaxed">
                  19, GF, Kadamba Lane
                  <br />
                  Vatika Infotech City
                  <br />
                  Ajmer Road, Jaipur
                  <br />
                  Pin: 302026, India
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-200">
              <CardContent className="p-8">
                <Linkedin className="w-8 h-8 text-black mb-4" />
                <h3 className="text-lg font-semibold mb-3 text-black">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/ymadhura-yadav-b047697"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-black transition-colors break-all"
                >
                  linkedin.com/in/ymadhura-yadav-b047697
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-gray-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-black">Academic Affiliation</h2>
              <h3 className="text-xl font-semibold text-black mb-2">Manipal University Jaipur</h3>
              <p className="text-gray-800 mb-4">
                Dean, Faculty of Design
                <br />
                Professor & Founder Head of Design and Planning Programs
              </p>
              <p className="text-gray-800 leading-relaxed">
                For academic inquiries, research collaborations, or consultancy projects, please feel free to reach out
                via the contact information provided above.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
