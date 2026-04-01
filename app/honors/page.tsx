"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Sidebar from "@/components/sidebar"
import Image from "next/image"

export default function HonorsPage() {
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const [previewAlt, setPreviewAlt] = useState<string>("")

  const openPreview = (src: string, alt: string) => {
    setPreviewImage(src)
    setPreviewAlt(alt)
  }

  const honorsList = [
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

  const honorSections = [
    {
      title: "Newspapers and Articles",
      images: [
        "image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg",
        "image5.jpeg", "image6.jpeg", "image7.jpeg", "image9.jpeg"
      ]
    },
    {
      title: "Interaction with Shri Nitin Gadkari",
      images: ["image11.jpeg"]
    },
    {
      title: "Rajasthan TV Channel",
      images: ["image12.jpeg"]
    },
    {
      title: "CNBC Channel",
      images: ["image14.jpeg"]
    },
    {
      title: "Press",
      images: ["image17.jpeg"]
    },
    {
      title: "IMRF institute of Higher Education",
      images: ["image18.jpeg"]
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
            alt="Awards and Honors Background"
            fill
            className="object-cover"
          />
          {/* Translucent overlay */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 max-w-full mx-auto px-4 pt-24 pb-12 lg:px-8 lg:pt-20 lg:pb-16">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-[#a1574c] text-center">Honors</h1>
            <div className="h-1 w-24 bg-[#a1574c] rounded-full mx-auto"></div>
          </div>

          {honorSections.map((section, idx) => (
            <section key={idx} className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-white text-center">{section.title}</h2>
                <div className="h-1 w-16 bg-white rounded-full mx-auto"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {section.images.map((imgName, imgIdx) => (
                  <div 
                    key={imgIdx} 
                    className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer bg-black/20 backdrop-blur-sm border border-white/10 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-lg"
                    onClick={() => openPreview(`/honors_awards/${imgName}`, `${section.title} - Image ${imgIdx + 1}`)}
                  >
                    <div className="relative w-full h-72 sm:h-80 md:h-[400px]">
                      <Image
                        src={`/honors_awards/${imgName}`}
                        alt={`${section.title} - Image ${imgIdx + 1}`}
                        fill
                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <svg className="w-12 h-12 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">Recognitions & Announcements</h2>
            <Card className="bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-3">
                  {honorsList.map((honor, idx) => (
                    <div
                      key={idx}
                      className="group flex items-start gap-4 p-4 rounded-lg hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <div className="w-3 h-3 bg-[#a1574c] rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                      <p className="text-white leading-relaxed">{honor}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Decorative line at the bottom */}
          <div className="mt-12 h-0.5 bg-[#a1574c] w-full max-w-4xl mx-auto"></div>
        </div>
      </main>

      {/* Image Preview Modal */}
      {previewImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 sm:p-8 cursor-pointer"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-full h-full max-h-[85vh]">
              <Image
                src={previewImage}
                alt={previewAlt}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <p className="text-white text-lg mt-4 font-semibold text-center">{previewAlt}</p>
          </div>
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-black/50 rounded-full p-2 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setPreviewImage(null)
            }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            <span className="sr-only">Close preview</span>
          </button>
        </div>
      )}
    </div>
  )
}
