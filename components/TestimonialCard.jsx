"use client";

import { Quote } from "lucide-react";


export default function TestimonialCard({ testimonial }) {

  return (

    <div
      className="
        relative
        h-full
        bg-gray-50
        p-8
        md:p-10
        overflow-hidden
        border
        border-gray-100
      "
    >


      {/* Quote watermark */}

      <Quote
        size={90}
        className="
          absolute
          top-6
          right-6
          text-gray-200
        "
      />



      {/* Review */}

      <p
        className="
          relative
          z-10
          text-gray-800
          text-lg
          leading-8
          mb-10
          max-w-xl
        "
      >
        "{testimonial.review}"
      </p>




      {/* Client */}

      <div
        className="
          relative
          z-10
          flex
          items-center
          justify-between
        "
      >

        <div>


          <h4
            className="
              text-xl
              font-semibold
              text-black
            "
          >
            {testimonial.name}
          </h4>



          <p
            className="
              text-sm
              text-gray-500
              mt-1
            "
          >
            {testimonial.role}
          </p>



          <p
            className="
              text-sm
              text-norms
              mt-1
              font-medium
            "
          >
            {testimonial.company}
          </p>


        </div>




      </div>


    </div>

  );

}