"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/mostafa-meraji-AQ4Xy9O51J4-unsplash.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl mt-20 lg:mt-32 lg:text-left">


            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold  text-white tracking-wide leading-tight">
              Building Tomorrow's
              <br />
              <span className="text-norms">
                Landmarks Today
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-200 leading-8 tracking-wide max-w-2xl">
              We deliver world-class construction, engineering,
              infrastructure, and project management services with an
              uncompromising commitment to quality, innovation, and safety.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">


              <button
                onClick={() => router.push("/projects")}
                className="border-2 border-white text-white tracking-wide 
                    hover:bg-white hover:text-black px-8 py-4 rounded-full 
                    font-medium transition-all duration-300"
              >
                View Projects
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-7 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}