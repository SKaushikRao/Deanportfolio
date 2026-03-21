"use client"

import Sidebar from "@/components/sidebar"
import Image from "next/image"

export default function ConsultancyProjectsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 lg:ml-72 relative">
        {/* Background Image - same as spirituality page */}
        <div className="absolute inset-0">
          <Image
            src="/spirit1.jpg"
            alt="Consultancy Projects Background"
            fill
            className="object-cover grayscale"
          />
          {/* Translucent overlay */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          {/* Color filter overlay */}
          <div className="absolute inset-0 bg-[#524135]/30" />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 max-w-full mx-auto px-2 pt-24 pb-12 lg:px-4 lg:pt-20 lg:pb-16">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-white text-center">Consultancy Projects</h1>
            <div className="h-1 w-24 bg-white rounded-full mx-auto"></div>
          </div>

          {/* Section 1: Proposed ISKCON temple at Shri Ganganagar */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white text-center">Proposed ISKCON temple at Shri Ganganagar</h2>
              <div className="h-1 w-16 bg-white rounded-full mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="relative group overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={`/consultancy/img${num}.jpeg`}
                    alt={`ISKCON Temple Shri Ganganagar - Image ${num}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Proposed ISKCON temple at Junjhunu, Rajasthan */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white text-center">Proposed ISKCON temple at Junjhunu, Rajasthan</h2>
              <div className="h-1 w-16 bg-white rounded-full mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[6, 7].map((num) => (
                <div key={num} className="relative group overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={`/consultancy/img${num}.jpeg`}
                    alt={`ISKCON Temple Junjhunu - Image ${num}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Proposed ISKCON temple at Chomu, Rajasthan */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white text-center">Proposed ISKCON temple at Chomu, Rajasthan</h2>
              <div className="h-1 w-16 bg-white rounded-full mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[8, 9].map((num) => (
                <div key={num} className="relative group overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={`/consultancy/img${num}.jpeg`}
                    alt={`ISKCON Temple Chomu - Image ${num}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
