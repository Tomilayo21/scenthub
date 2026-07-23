"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-20 bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-[0.5fr_1.5fr] gap-6">

        {/* Left */}
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-400 mb-6">
            Contact Us
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] text-gray-200">
            Let's build
            <br />
            something
            <br />
            exceptional.
          </h2>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-center max-w-3xl lg:ml-auto">

          <p className="text-lg leading-relaxed text-gray-300">
            Whether you're planning a residential or commercial development,
            civil engineering works, or require professional construction
            consultancy, our team is ready to deliver reliable solutions from
            concept to completion. Let's discuss your vision and bring it to
            life.
          </p>

          {/* Contact Details */}
          <div className="mt-10 space-y-6">

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center">
                <Phone size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-white font-medium">
                  +234 817 865 7674
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center">
                <Mail size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-white font-medium break-all">
                  info@scenthubrealtyconstruction.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-white font-medium">
                  52, Old Otta Road, Ile Epo, Oke Odo, Lagos, Nigeria
                </p>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-red-600 px-8 py-4 text-white transition-all duration-300 hover:bg-red-600"
            >
              <span>Get in Touch</span>

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center rounded-full border border-gray-600 px-8 py-4 text-white transition-all duration-300 hover:border-white"
            >
              View Our Projects
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}