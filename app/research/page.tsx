import { Card, CardContent } from "@/components/ui/card"
import Sidebar from "@/components/sidebar"
import Image from "next/image"

interface Publication {
  title: string;
  journal: string;
  authors: string;
  year: string;
}

interface Patent {
  title: string;
  patentNumber: string;
  date: string;
  authors: string;
}

export default function ResearchPage() {
  const publications: Publication[] = [
    {
      title: "User behavioral patterns in inclusive public open space: A case from Indian towns, Cities & Health",
      journal: "Cities & Health",
      authors: "Yadav, M., Gupta, A. and Nayak, B.K.",
      year: "(2025)"
    },
    {
      title: "Simulation-based investigation of ETFE and autoheal polymers for energy efficiency and thermal comfort in adaptive building envelopes",
      journal: "International Journal of Applied Mathematics",
      authors: "Yadav, M. and Kuda, A.",
      year: "(2025)"
    },
    {
      title: "Performance of PTFE-based adaptive building facades for climate resilience: A simulation-driven analysis",
      journal: "International Journal of Engineering, Science and Information Technology",
      authors: "Yadav, M., Kuda, A. and Ali, S.M.",
      year: "(2025)"
    },
    {
      title: "Examination of key landscape characteristics and evaluation tools for assessing the impact of higher education campus landscapes on students' well-being: A systematic review",
      journal: "Multidisciplinary Reviews",
      authors: "Prabhu, M.K., Yadav, M., Arya, B., Kumar, D., Sharma, M. and Kumar, H.",
      year: "(2025)"
    },
    {
      title: "Impact of Higher Education Campus Landscape on Students' Mental Health: A Systematic Review",
      journal: "Indian Journal of Psychological Science",
      authors: "Prabhu, M.K. and Yadav, M.",
      year: "(2025)"
    },
    {
      title: "Pharad block printing: A cultural treasure resurging in contemporary times",
      journal: "TEXTILE",
      authors: "Mishra, P. and Yadav, M.",
      year: "(2025)"
    },
    {
      title: "A systematic literature review on inclusive public open spaces: Accessibility standards and universal design principles",
      journal: "Urban Sciences",
      authors: "Yadav, M., Gupta, A. and Nayak, B.K.",
      year: "(2025)"
    },
    {
      title: "Water, wheels and wisdom: Reviving Aurangabad Panchakki",
      journal: "Journal of Cultural Heritage Management and Sustainable Development",
      authors: "Yadav, M., Shamra, R. and Ozarkar, A.",
      year: "(2025)"
    },
    {
      title: "Optimizing thermal efficiency of building envelopes with sustainable composite materials",
      journal: "Buildings",
      authors: "Deshmukh, M. and Yadav, M.",
      year: "(2025)"
    },
    {
      title: "Sustainable construction: The use of cork material in building industry",
      journal: "Materials for Renewable and Sustainable Energy",
      authors: "Sharma, S. and Yadav, M.",
      year: "(2024)"
    },
    {
      title: "Thermal comfort study of roof shapes and materials in Jaisalmer, India",
      journal: "SSRG International Journal of Civil Engineering",
      authors: "Sharma, S. and Yadav, M.",
      year: "(2023)"
    },
    {
      title: "A thermal study of roof shapes and materials in hot dry climates: Insights from a simulation from Rajasthan, India",
      journal: "ISVS e-journal",
      authors: "Yadav, M. and Singhal, I.",
      year: "(2023)"
    },
    {
      title: "Assessment of urban growth and ecological sustainability: Study of Mumbai, India",
      journal: "ISVS e-journal",
      authors: "Mishra, P. and Yadav, M.",
      year: "(2023)"
    },
    {
      title: "Consumer behaviour towards adoption of sustainable clothing",
      journal: "Proceedings of the International Conference on Creative Futures (ICCF 2022)",
      authors: "Mishra, P. and Yadav, M.",
      year: "(2022)"
    },
    {
      title: "Post occupancy evaluation of elderly/senior housing projects in India",
      journal: "Responsible Pedagogies in Architecture: Combating Climate Change. Cambridge: Cambridge Scholars Publishing",
      authors: "Kuda, A. and Yadav, M.",
      year: "(2022)"
    },
    {
      title: "Opportunities and challenges of using nanomaterials and nanotechnology in architecture: An overview",
      journal: "Materials Today: Proceedings",
      authors: "Prabhu, M.K. and Yadav, M.",
      year: "(2023)"
    },
    {
      title: "Examination of key landscape characteristics and evaluation tools for assessing the impact of higher education campus landscapes on students' well-being: A systematic review",
      journal: "Multidisciplinary Reviews",
      authors: "Prabhu, M.K., Yadav, M., Arya, B., Kumar, D., Sharma, M. and Kumar, H.",
      year: "(2025)"
    },
    {
      title: "Waste to wealth: Overview of waste and recycled material in construction industry",
      journal: "Materials Today: Proceedings",
      authors: "Yadav, M. and Sinha, S.",
      year: "(2022)"
    },
    {
      title: "Opportunities and challenges of hempcrete as a building material for construction: An overview",
      journal: "Materials Today: Proceedings",
      authors: "Yadav, M. and Saini, A.",
      year: "(2022)"
    },
    {
      title: "Fast fashion and its impact on the environment: An overview",
      journal: "Journal of Contemporary Issues in Business and Government",
      authors: "Yadav, M.",
      year: "(2021)"
    },
    {
      title: "Redefining design education for 21st century",
      journal: "in Proceedings of the International Conference on Research into Design (ICoRD'21)",
      authors: "Yadav, M. and Verma, A.",
      year: "(2021)"
    },
    {
      title: "Application of nano materials in architecture: An overview",
      journal: "in Proceedings of the International Conference CRMSC-2021",
      authors: "Yadav, M. and Agarwal, M.",
      year: "(2021)"
    },
    {
      title: "Biobased building materials for sustainable future: An overview",
      journal: "in Proceedings of the International Conference CRMSC-2021",
      authors: "Yadav, M. and Mathur, A.",
      year: "(2021)"
    },
    {
      title: "Bamboo as a sustainable material in the construction industry: An overview",
      journal: "in Proceedings of the International Conference CRMSC-2021",
      authors: "Yadav, M. and Agarwal, P.",
      year: "(2021)"
    },
    {
      title: "Campus design of universities: An overview",
      journal: "Journal of Design & Built Environment",
      authors: "Yadav, M. and Jisthu, P.",
      year: "(2020)"
    },
    {
      title: "Application of augmented reality and virtual reality in architecture and planning: An overview",
      journal: "in Proceedings of the 6th International Conference on Signal and Image Processing (SIGI 2020)",
      authors: "Yadav, M.",
      year: "(2018)"
    },
    {
      title: "Experiences and challenges of community participation in urban renewal projects: A case study of Bhendi Bazzar, Mumbai, India",
      journal: "in Proceedings of the International Conference on Urban Redesign and Redevelopment",
      authors: "Yadav, M.",
      year: "(2018)"
    },
    {
      title: "Environment management through meditation: A sustainable approach",
      journal: "in Proceedings of the International Conference on Emerging Trends in Engineering Science & Technology",
      authors: "Yadav, M.",
      year: "(2018)"
    },
    {
      title: "Future cities: Envisioning human dimensions",
      journal: "International Journal of Advance & Innovative Research",
      authors: "Yadav, M. and Simion, I.G.",
      year: "(2017)"
    },
    {
      title: "Analysis of natural ventilation systems in heritage buildings: A case study of Hawa Mahal, Jaipur, India",
      journal: "Journal of Indian Institute of Architects",
      authors: "Yadav, M. and Joann, L.",
      year: "(2015)"
    },
    {
      title: "Study of roof types and technologies to reduce indoor air temperature: An overview",
      journal: "Journal of Indian Institute of Architects",
      authors: "Yadav, M. and Nayak, B.K.",
      year: "(2015)"
    },
    {
      title: "Green building rating systems through the lens of vernacular architecture",
      journal: "Journal of Indian Institute of Architects",
      authors: "Yadav, M. and Nayak, B.K.",
      year: "(2015)"
    },
    {
      title: "Impact of urban form on hydrology: A case study of Mumbai, India",
      journal: "in Proceedings of the International Congress of Association of Asian Planning Schools",
      authors: "Yadav, M.",
      year: "(2015)"
    },
    {
      title: "Architectural design pedagogy in the context of environmental sustainability",
      journal: "in Proceedings of the International Conference on Reinventing Design Pedagogy & Contextual Aesthetics",
      authors: "Yadav, M.",
      year: "(2013)"
    },
    {
      title: "Understanding architecture as a potent form of visual art",
      journal: "in Proceedings of the 4th Annual International Conference on Visual and Performing Arts",
      authors: "Yadav, M.",
      year: "(2013)"
    },
    {
      title: "Appropriate residential typologies for Mumbai",
      journal: "in Proceedings of the International Conference IES",
      authors: "Yadav, M.",
      year: "(2010)"
    },
    {
      title: "Embodied energy in vernacular houses",
      journal: "in Proceedings of the International Conference ISVS",
      authors: "Yadav, M.",
      year: "(2008)"
    },
    {
      title: "Defining ecological regionalism: A theoretical perspective",
      journal: "in Proceedings of the International Conference on Eco-Architecture",
      authors: "Yadav, M.",
      year: "(2008)"
    },
    {
      title: "Transforming habitats: A case study of Mumbai",
      journal: "in Proceedings of the International Conference ISVS-IV",
      authors: "Yadav, M.",
      year: "(2007)"
    },
    {
      title: "Heritage of Aurangabad: Problems and prospects",
      journal: "in Proceedings of the National Conference on Heritage Conservation",
      authors: "Yadav, M.",
      year: "(2003)"
    },
    {
      title: "Housing tenure for the urban poor: A case study of Mumbai city",
      journal: "in Proceedings of the International Conference on Housing for the Urban Poor",
      authors: "Yadav, M.",
      year: "(2004)"
    },
    {
      title: "Women empowerment through rainwater harvesting",
      journal: "in Proceedings of the National Conference on Emerging Technologies for Women",
      authors: "Yadav, M.",
      year: "(2003)"
    },
    {
      title: "Sustainable urban development of Aurangabad city",
      journal: "in Proceedings of the International Conference on Sustainable Habitats",
      authors: "Prabhu, M.K. and Yadav, M.",
      year: "(2025)"
    },
    {
      title: "The Therapeutic Campus: A Systematic Review of Green, Blue, and Grey Spaces Impact on Student Mental Health Outcomes",
      journal: "in 34th Annual Conference of Sports Psychology Association of India",
      authors: "Mishra, P. and Yadav, M.",
      year: "(2024)"
    },
    {
      title: "Unveiling the threads of change: Exploring influences on youth's intentions for sustainable clothing adoption in India",
      journal: "in Proceedings of the International Conference on Fashion as a Tool for Social Change (FTSC 2024)",
      authors: "Prabhu, M.K. and Yadav, M.",
      year: "(2025)"
    },
    {
      title: "Meta-Synthesis of Campus-Landscape Theories: Building an Integrated Framework for Student Well-being",
      journal: "in International Conference on Socially Conscious Built Environments",
      authors: "Prabhu, M.K. and Yadav, M.",
      year: "(2025)"
    }
  ]

  const patents: Patent[] = [
    {
      title: "NEW BHARAT GREEN BUILDING RATING SYSTEM",
      patentNumber: "202311055221",
      date: "Sept. 2023",
      authors: "Yadav, M."
    },
    {
      title: "BRICK COMPOSITION TO ENHANCE THERMAL COMFORT AND PREPARATION THEREOF",
      patentNumber: "202311055210",
      date: "Sept. 2023",
      authors: "Yadav, M."
    },
    {
      title: "IOT ENABLE SMART TABLE FOR ARCHITECTS AND DESIGNERS",
      patentNumber: "202311055218",
      date: "Sept. 2023",
      authors: "Yadav, M."
    },
    {
      title: "APPLICATION AND EFFECTIVENESS OF RESPONSIVE ADAPTIVE SKINS IN COMMERCIAL BUILDINGS IN INDIA",
      patentNumber: "202311055219",
      date: "Sept. 2023",
      authors: "Yadav, M."
    },
    {
      title: "ENERGY EFFICIENT BUILDING CLUSTERS FOR HOT & DRY CLIMATE",
      patentNumber: "202311055220",
      date: "Sept. 2023",
      authors: "Yadav, M."
    },
    {
      title: "ECO FRIENDLY BRICKS: WEALTH FROM WASTE INITIATIVES",
      patentNumber: "202311056373",
      date: "Sept. 2023",
      authors: "Yadav, M."
    },
    {
      title: "MULTI-STORY UNDERGROUND EARTH SHELTERED BUILDINGS",
      patentNumber: "202311056372",
      date: "Sept. 2023",
      authors: "Yadav, M."
    },
    {
      title: "TO DEVELOP A RATING SYSTEM FOR THE SUSTAINABLE CLOTHING",
      patentNumber: "202311071907",
      date: "Nov. 2023",
      authors: "Yadav, M."
    },
    {
      title: "GABLE ROOF INTEGRATED WITH VEGETATION FOR HOT AND DRY CLIMATE",
      patentNumber: "202311081242",
      date: "Dec. 2023",
      authors: "Yadav, M."
    },
    {
      title: "A BAMBOO BIOCHAR COMPOSITE PLASTER AND PREPARATION METHOD THEREOF",
      patentNumber: "202311075608",
      date: "Dec. 2023",
      authors: "Yadav, M."
    },
    {
      title: "A FRAMEWORK FOR ASSESSMENT FOR ADAPTIVE REUSE OF HISTORICAL HERITAGE BUILDINGS",
      patentNumber: "202411038717",
      date: "May 2024",
      authors: "Yadav, M."
    },
    {
      title: "A SUSTAINABLE COMPOSITE FOR ENHANCING THERMAL AND ENVIRONMENTAL PERFORMANCE IN BUILDING ENVELOPES",
      patentNumber: "202511004432",
      date: "Jan 2025",
      authors: "Yadav, M."
    }
  ]
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/pic_1.jpg"
            alt="Research Background"
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
            <h1 className="text-6xl font-bold mb-4 text-[#809949] text-center">Research and Patents</h1>
            <div className="h-1 w-24 bg-[#809949] rounded-full mx-auto"></div>
          </div>

          <div className="space-y-8">
            {/* Research Projects */}
            {/* Research Publications */}
            <Card className="bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#809949]">Research Publications</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "User behavioral patterns in inclusive public open space: A case from Indian towns, Cities & Health",
                      journal: "Cities & Health",
                      authors: "Yadav, M., Gupta, A. and Nayak, B.K.",
                      year: "(2025)"
                    },
                    {
                      title: "Simulation-based investigation of ETFE and autoheal polymers for energy efficiency and thermal comfort in adaptive building envelopes",
                      journal: "International Journal of Applied Mathematics",
                      authors: "Yadav, M. and Kuda, A.",
                      year: "(2025)"
                    },
                    {
                      title: "Performance of PTFE-based adaptive building facades for climate resilience: A simulation-driven analysis",
                      journal: "International Journal of Engineering, Science and Information Technology",
                      authors: "Yadav, M., Kuda, A. and Ali, S.M.",
                      year: "(2025)"
                    },
                    {
                      title: "Examination of key landscape characteristics and evaluation tools for assessing the impact of higher education campus landscapes on students' well-being: A systematic review",
                      journal: "Multidisciplinary Reviews",
                      authors: "Prabhu, M.K., Yadav, M., Arya, B., Kumar, D., Sharma, M. and Kumar, H.",
                      year: "(2025)"
                    },
                    {
                      title: "Impact of Higher Education Campus Landscape on Students' Mental Health: A Systematic Review",
                      journal: "Indian Journal of Psychological Science",
                      authors: "Prabhu, M.K. and Yadav, M.",
                      year: "(2025)"
                    },
                    {
                      title: "Pharad block printing: A cultural treasure resurging in contemporary times",
                      journal: "TEXTILE",
                      authors: "Mishra, P. and Yadav, M.",
                      year: "(2025)"
                    },
                    {
                      title: "A systematic literature review on inclusive public open spaces: Accessibility standards and universal design principles",
                      journal: "Urban Sciences",
                      authors: "Yadav, M., Gupta, A. and Nayak, B.K.",
                      year: "(2025)"
                    },
                    {
                      title: "Waste to wealth: Overview of waste and recycled material in construction industry",
                      journal: "Materials Today: Proceedings",
                      authors: "Yadav, M. and Sinha, S.",
                      year: "(2022)"
                    },
                    {
                      title: "Opportunities and challenges of hempcrete as a building material for construction: An overview",
                      journal: "Materials Today: Proceedings",
                      authors: "Yadav, M. and Saini, A.",
                      year: "(2022)"
                    },
                    {
                      title: "Fast fashion and its impact on the environment: An overview",
                      journal: "Journal of Contemporary Issues in Business and Government",
                      authors: "Yadav, M.",
                      year: "(2021)"
                    },
                    {
                      title: "Redefining design education for 21st century",
                      journal: "in Proceedings of the International Conference on Research into Design (ICoRD'21)",
                      authors: "Yadav, M. and Verma, A.",
                      year: "(2021)"
                    },
                    {
                      title: "Application of nano materials in architecture: An overview",
                      journal: "in Proceedings of the International Conference CRMSC-2021",
                      authors: "Yadav, M. and Agarwal, M.",
                      year: "(2021)"
                    },
                    {
                      title: "Biobased building materials for sustainable future: An overview",
                      journal: "in Proceedings of the International Conference CRMSC-2021",
                      authors: "Yadav, M. and Mathur, A.",
                      year: "(2021)"
                    },
                    {
                      title: "Bamboo as a sustainable material in the construction industry: An overview",
                      journal: "in Proceedings of the International Conference CRMSC-2021",
                      authors: "Yadav, M. and Agarwal, P.",
                      year: "(2021)"
                    },
                    {
                      title: "Campus design of universities: An overview",
                      journal: "Journal of Design & Built Environment",
                      authors: "Yadav, M. and Jisthu, P.",
                      year: "(2020)"
                    },
                    {
                      title: "Application of augmented reality and virtual reality in architecture and planning: An overview",
                      journal: "in Proceedings of the 6th International Conference on Signal and Image Processing (SIGI 2020)",
                      authors: "Yadav, M.",
                      year: "(2018)"
                    },
                    {
                      title: "Experiences and challenges of community participation in urban renewal projects: A case study of Bhendi Bazzar, Mumbai, India",
                      journal: "in Proceedings of the International Conference on Urban Redesign and Redevelopment",
                      authors: "Yadav, M.",
                      year: "(2018)"
                    },
                    {
                      title: "Environment management through meditation: A sustainable approach",
                      journal: "in Proceedings of the International Conference on Emerging Trends in Engineering Science & Technology",
                      authors: "Yadav, M.",
                      year: "(2018)"
                    },
                    {
                      title: "Future cities: Envisioning human dimensions",
                      journal: "International Journal of Advance & Innovative Research",
                      authors: "Yadav, M. and Simion, I.G.",
                      year: "(2017)"
                    },
                    {
                      title: "Analysis of natural ventilation systems in heritage buildings: A case study of Hawa Mahal, Jaipur, India",
                      journal: "Journal of Indian Institute of Architects",
                      authors: "Yadav, M. and Joann, L.",
                      year: "(2015)"
                    },
                    {
                      title: "Study of roof types and technologies to reduce indoor air temperature: An overview",
                      journal: "Journal of Indian Institute of Architects",
                      authors: "Yadav, M. and Nayak, B.K.",
                      year: "(2015)"
                    },
                    {
                      title: "Green building rating systems through the lens of vernacular architecture",
                      journal: "Journal of Indian Institute of Architects",
                      authors: "Yadav, M. and Nayak, B.K.",
                      year: "(2015)"
                    },
                    {
                      title: "Impact of urban form on hydrology: A case study of Mumbai, India",
                      journal: "in Proceedings of the International Congress of Association of Asian Planning Schools",
                      authors: "Yadav, M.",
                      year: "(2015)"
                    },
                    {
                      title: "Architectural design pedagogy in the context of environmental sustainability",
                      journal: "in Proceedings of the International Conference on Reinventing Design Pedagogy & Contextual Aesthetics",
                      authors: "Yadav, M.",
                      year: "(2013)"
                    },
                    {
                      title: "Understanding architecture as a potent form of visual art",
                      journal: "in Proceedings of the 4th Annual International Conference on Visual and Performing Arts",
                      authors: "Yadav, M.",
                      year: "(2013)"
                    },
                    {
                      title: "Appropriate residential typologies for Mumbai",
                      journal: "in Proceedings of the International Conference IES",
                      authors: "Yadav, M.",
                      year: "(2010)"
                    },
                    {
                      title: "Embodied energy in vernacular houses",
                      journal: "in Proceedings of the International Conference ISVS",
                      authors: "Yadav, M.",
                      year: "(2008)"
                    },
                    {
                      title: "Defining ecological regionalism: A theoretical perspective",
                      journal: "in Proceedings of the International Conference on Eco-Architecture",
                      authors: "Yadav, M.",
                      year: "(2008)"
                    },
                    {
                      title: "Transforming habitats: A case study of Mumbai",
                      journal: "in Proceedings of the International Conference ISVS-IV",
                      authors: "Yadav, M.",
                      year: "(2007)"
                    },
                    {
                      title: "Heritage of Aurangabad: Problems and prospects",
                      journal: "in Proceedings of the National Conference on Heritage Conservation",
                      authors: "Yadav, M.",
                      year: "(2003)"
                    },
                    {
                      title: "Housing tenure for the urban poor: A case study of Mumbai city",
                      journal: "in Proceedings of the International Conference on Housing for the Urban Poor",
                      authors: "Yadav, M.",
                      year: "(2004)"
                    },
                    {
                      title: "Women empowerment through rainwater harvesting",
                      journal: "in Proceedings of the National Conference on Emerging Technologies for Women",
                      authors: "Yadav, M.",
                      year: "(2003)"
                    },
                    {
                      title: "Sustainable urban development of Aurangabad city",
                      journal: "in Proceedings of the International Conference on Sustainable Habitats",
                      authors: "Prabhu, M.K. and Yadav, M.",
                      year: "(2025)"
                    },
                    {
                      title: "The Therapeutic Campus: A Systematic Review of Green, Blue, and Grey Spaces Impact on Student Mental Health Outcomes",
                      journal: "in 34th Annual Conference of Sports Psychology Association of India",
                      authors: "Mishra, P. and Yadav, M.",
                      year: "(2024)"
                    },
                    {
                      title: "Unveiling the threads of change: Exploring influences on youth's intentions for sustainable clothing adoption in India",
                      journal: "in Proceedings of the International Conference on Fashion as a Tool for Social Change (FTSC 2024)",
                      authors: "Prabhu, M.K. and Yadav, M.",
                      year: "(2025)"
                    },
                    {
                      title: "Meta-Synthesis of Campus-Landscape Theories: Building an Integrated Framework for Student Well-being",
                      journal: "in International Conference on Socially Conscious Built Environments",
                      authors: "Prabhu, M.K. and Yadav, M.",
                      year: "(2025)"
                    }].map((publication: any, idx: number) => (
                    <div key={idx} className="p-4 border-l-4 border-[#809949] hover:bg-white/10 transition-colors rounded-r-lg">
                      <h3 className="font-semibold text-white mb-1">{publication.title}</h3>
                      <p className="text-sm text-white/80">{publication.authors} {publication.year} {publication.journal}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Published Patents */}
            <Card className="bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-10">
                <h2 className="text-3xl font-bold mb-6 text-[#809949]">Published Patents</h2>
                <div className="space-y-4 text-lg">
                  {[
                    {
                      title: "NEW BHARAT GREEN BUILDING RATING SYSTEM",
                      patentNumber: "202311055221",
                      date: "Sept. 2023",
                      authors: "Yadav, M."
                    },
                    {
                      title: "BRICK COMPOSITION TO ENHANCE THERMAL COMFORT AND PREPARATION THEREOF",
                      patentNumber: "202311055210",
                      date: "Sept. 2023",
                      authors: "Yadav, M."
                    },
                    {
                      title: "IOT ENABLE SMART TABLE FOR ARCHITECTS AND DESIGNERS",
                      patentNumber: "202311055218",
                      date: "Sept. 2023",
                      authors: "Yadav, M."
                    },
                    {
                      title: "APPLICATION AND EFFECTIVENESS OF RESPONSIVE ADAPTIVE SKINS IN COMMERCIAL BUILDINGS IN INDIA",
                      patentNumber: "202311055219",
                      date: "Sept. 2023",
                      authors: "Yadav, M."
                    },
                    {
                      title: "ENERGY EFFICIENT BUILDING CLUSTERS FOR HOT & DRY CLIMATE",
                      patentNumber: "202311055220",
                      date: "Sept. 2023",
                      authors: "Yadav, M."
                    },
                    {
                      title: "ECO FRIENDLY BRICKS: WEALTH FROM WASTE INITIATIVES",
                      patentNumber: "202311056373",
                      date: "Sept. 2023",
                      authors: "Yadav, M."
                    },
                    {
                      title: "MULTI-STOREYED UNDERGROUND EARTH SHELTERED BUILDINGS",
                      patentNumber: "202311056372",
                      date: "Sept. 2023",
                      authors: "Yadav, M."
                    },
                    {
                      title: "TO DEVELOP A RATING SYSTEM FOR THE SUSTAINABLE CLOTHING",
                      patentNumber: "202311071907",
                      date: "Nov. 2023",
                      authors: "Yadav, M."
                    },
                    {
                      title: "GABLE ROOF INTEGRATED WITH VEGETATION FOR HOT AND DRY CLIMATE",
                      patentNumber: "202311081242",
                      date: "Dec. 2023",
                      authors: "Yadav, M."
                    },
                    {
                      title: "A BAMBOO BIOCHAR COMPOSITE PLASTER AND PREPARATION METHOD THEREOF",
                      patentNumber: "202311075608",
                      date: "Dec. 2023",
                      authors: "Yadav, M."
                    },
                    {
                      title: "A FRAMEWORK FOR ASSESSMENT FOR ADAPTIVE REUSE OF HISTORICAL HERITAGE BUILDINGS",
                      patentNumber: "202411038717",
                      date: "May 2024",
                      authors: "Yadav, M."
                    },
                    {
                      title: "A SUSTAINABLE COMPOSITE FOR ENHANCING THERMAL AND ENVIRONMENTAL PERFORMANCE IN BUILDING ENVELOPES",
                      patentNumber: "202511004432",
                      date: "Jan 2025",
                      authors: "Yadav, M."
                    }
                  ].map((patent: Patent, idx: number) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/10 transition-all duration-200">
                      <div className="w-3 h-3 bg-[#809949] rounded-full mt-1.5 flex-shrink-0"></div>
                      <p className="text-white">{patent.patentNumber}</p>
                      <p className="text-white/90 text-sm mt-1">{patent.title}</p>
                      <p className="text-white/80 text-xs mt-1">{patent.date} {patent.authors}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#809949]">Books</h2>
                <div className="space-y-4">
                  <div className="group p-4 border-l-4 border-[#809949] hover:bg-white/10 transition-colors rounded-r-lg">
                    <h3 className="font-semibold text-white group-hover:text-white/80">
                      Responsible Pedagogies in Architecture: Combating Climate Change
                    </h3>
                  </div>
                  <div className="group p-4 border-l-4 border-[#809949] hover:bg-white/10 transition-colors rounded-r-lg">
                    <h3 className="font-semibold text-white group-hover:text-white/80">Creative Futures</h3>
                  </div>
                  <div className="group p-4 border-l-4 border-[#809949] hover:bg-white/10 transition-colors rounded-r-lg">
                    <h3 className="font-semibold text-white group-hover:text-white/80">
                      Coffee Table Book on Stepwells of India
                    </h3>
                    <p className="text-sm text-white/80 mt-1">Ministry of Culture, Government of India</p>
                  </div>
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
