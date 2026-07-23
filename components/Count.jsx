"use client";

import { useLayoutEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: 25,
    suffix: "+",
    label: "Professional Team",
  },
  {
    value: 96,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    value: 6,
    suffix: "+",
    label: "Years Experience",
  },
];

export default function Count() {
  const sectionRef = useRef(null);
  const statRefs = useRef([]);
  const [startCount, setStartCount] = useState(false);

    useLayoutEffect(() => {
    const ctx = gsap.context(() => {

        const animate = (selector, vars) => {
        gsap.fromTo(
            selector,
            {
            opacity: 0,
            ...vars.from,
            },
            {
            opacity: 1,
            ...vars.to,
            scrollTrigger: {
                trigger: selector,
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
            }
        );
        };


        animate(".impact-heading", {
        from: {
            y: 80,
        },
        to: {
            y: 0,
            duration: 1.2,
            ease: "power3.out",
        },
        });


        animate(".stat-item", {
        from: {
            y: 100,
        },
        to: {
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power4.out",
        },
        });


        ScrollTrigger.create({
        trigger: ".stats-container",
        start: "top 75%",
        once: true,
        onEnter: () => setStartCount(true),
        });


        setTimeout(() => {
        ScrollTrigger.refresh();
        }, 100);


    }, sectionRef);


    return () => ctx.revert();

    }, []);



  return (
    <section
      ref={sectionRef}
      className="bg-stone-50 py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-black"
    >

      {/* Heading */}
      <div className="impact-heading max-w-3xl mb-20">

        <p className="uppercase tracking-[5px] text-sm text-white mb-4">
          Our Impact
        </p>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white">
          Building spaces that inspire confidence for generations.
        </h2>

        <p className="mt-6 text-gray-300 leading-8">
          Every project reflects our commitment to quality construction,
          innovative thinking, and delivering lasting value for our clients.
        </p>

      </div>


      {/* Stats */}
      <div className="stats-container grid grid-cols-2 lg:grid-cols-4 border-y border-gray-300">

        {stats.map((item, index) => (

          <div
            key={index}
            ref={(el) => (statRefs.current[index] = el)}
            className={`stat-item py-12 md:py-16 px-4 md:px-8 ${
              index !== stats.length - 1
                ? "lg:border-r border-gray-300"
                : ""
            }`}
          >

            <h3
              className="
                text-[58px]
                sm:text-[70px]
                md:text-[90px]
                lg:text-[120px]
                font-black
                leading-none
                text-gray-300
                transition-all
                duration-500
              "
              style={{
                WebkitTextStroke: "2px #acacac",
              }}
            >

              <CountUp
                start={0}
                end={startCount ? item.value : 0}
                duration={2.5}
              />

              {item.suffix}

            </h3>


            <p className="mt-6 uppercase tracking-[4px] text-xs md:text-sm font-medium text-gray-500">
              {item.label}
            </p>


          </div>

        ))}

      </div>

    </section>
  );
}