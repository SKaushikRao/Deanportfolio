import { Card, CardContent } from "@/components/ui/card"
import Sidebar from "@/components/sidebar"

export default function ResearchPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 lg:ml-72">
        <div className="max-w-5xl mx-auto px-6 py-12 lg:px-12 lg:py-16">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Research and Patents</h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="space-y-8">
            {/* Research Projects */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Research Projects</h2>
                <div className="space-y-4 text-foreground">
                  <div className="p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors">
                    <p className="font-semibold mb-2">Co-PI with University of Canada</p>
                    <p className="text-sm">
                      Bridging Knowledge Cultures: The Knowledge for Change Global Consortium on Training of
                      Community-Based Participatory Research funded by Social Sciences and Humanities Research Council
                      Canada
                    </p>
                    <span className="text-xs text-primary">Completed</span>
                  </div>
                  <div className="p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors">
                    <p className="font-semibold mb-2">Principal Investigator for DST Projects</p>
                    <span className="text-xs text-primary">Ongoing</span>
                  </div>
                  <div className="p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors">
                    <p className="font-semibold">Team member for Heritage Place Lab</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Patents */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Patents Published</h2>
                <div className="text-center p-8 bg-muted rounded-lg">
                  <div className="text-6xl font-bold text-primary mb-2">10</div>
                  <p className="text-muted-foreground">Patents Published</p>
                </div>
              </CardContent>
            </Card>

            {/* Books */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Books</h2>
                <div className="space-y-4">
                  <div className="group p-4 border-l-4 border-primary hover:bg-muted transition-colors rounded-r-lg">
                    <h3 className="font-semibold text-foreground group-hover:text-primary">
                      Responsible Pedagogies in Architecture: Combating Climate Change
                    </h3>
                  </div>
                  <div className="group p-4 border-l-4 border-primary hover:bg-muted transition-colors rounded-r-lg">
                    <h3 className="font-semibold text-foreground group-hover:text-primary">Creative Futures</h3>
                  </div>
                  <div className="group p-4 border-l-4 border-primary hover:bg-muted transition-colors rounded-r-lg">
                    <h3 className="font-semibold text-foreground group-hover:text-primary">
                      Coffee Table Book on Stepwells of India
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">Ministry of Culture, Government of India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
