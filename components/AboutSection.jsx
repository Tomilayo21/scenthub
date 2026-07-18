"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function AboutSection() {

  const sectionRef = useRef(null);

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


        animate(".about-title", {
        from: {
            y: 100,
        },
        to: {
            y: 0,
            duration: 1.2,
            ease: "power3.out",
        },
        });


        animate(".about-content", {
        from: {
            y: 80,
        },
        to: {
            y: 0,
            duration: 1.2,
            ease: "power3.out",
        },
        });


        animate(".career-left", {
        from: {
            x: -100,
        },
        to: {
            x: 0,
            duration: 1,
            ease: "power3.out",
        },
        });


        animate(".career-right", {
        from: {
            x: 100,
        },
        to: {
            x: 0,
            duration: 1,
            ease: "power3.out",
        },
        });


        gsap.fromTo(
        ".project-image",
        {
            scale: 1.15,
            opacity: 0,
        },
        {
            scale: 1,
            opacity: 1,
            duration: 1.4,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
            trigger: ".project-image",
            start: "top 90%",
            toggleActions: "play none none reverse",
            },
        }
        );


        // Force recalculation after Next.js navigation
        setTimeout(() => {
        ScrollTrigger.refresh();
        }, 100);


    }, sectionRef);


    return () => {
        ctx.revert();
    };

    }, []);



  return (
    <section ref={sectionRef} className="bg-white">

      {/* PART 1 */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-12 lg:px-24 py-28 border-b">

        {/* Left */}
        <div className="about-title relative z-10 lg:-translate-y-16">
            <h2 className="w-full lg:w-[850px] text-7xl md:text-7xl font-bold leading-[1.05] text-neutral-900">
                Building the future with
                <br />
                precision and lasting
                <br />
                passion.
            </h2>
        </div>


        {/* Right */}
        <div className="about-content relative z-0 flex flex-col justify-center max-w-xl lg:pt-52">

            <p className="text-lg leading-relaxed text-neutral-600">
            Scenthub Realty & Construction Limited is a Lagos-based construction
            and real estate company founded in 2021, delivering quality projects
            built on precision and excellence.
            </p>

            <p className="text-lg leading-relaxed text-neutral-600 mt-6">
            We have successfully completed projects worth hundreds of millions of
            naira, providing reliable solutions through quality craftsmanship and
            attention to detail.
            </p>

            <p className="text-lg leading-relaxed text-neutral-600 mt-6">
            We build lasting spaces with integrity, innovation and a commitment
            to exceeding our clients' expectations.
            </p>


            <div className="mt-10 flex items-center text-lg font-medium">

            <Link
                href="/contact"
                className="hover:opacity-70 transition text-norms"
            >
                Start a Conversation
            </Link>

            <span className="mx-4 text-neutral-400">/</span>

            <Link
                href="/careers"
                className="hover:opacity-70 transition text-norms"
            >
                Careers
            </Link>

            </div>

        </div>

        </div>


        {/* PART 2 */}
        <div className="px-6 md:px-12 lg:px-24 py-16 bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-[0.5fr_1.5fr] gap-6">

            {/* Left */}
            <div className="career-left">
            <p className="uppercase tracking-widest text-sm text-white mb-6">
                Careers
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] text-gray-200">
                Become an
                <br />
                employee
                <br />
                owner.
            </h2>
            </div>


            {/* Right */}
            <div className="career-right flex flex-col justify-center max-w-3xl lg:ml-auto">
            <p className="text-lg leading-relaxed text-gray-300">
                At Scenthub Realty & Construction Limited, we believe our people are
                the foundation of every successful project. We foster a collaborative
                environment where talent is nurtured, innovation is encouraged, and
                every team member is empowered to grow professionally while delivering
                excellence to our clients.
            </p>

            <Link
                href="/careers"
                className="group mt-10 inline-flex self-start items-center gap-3 rounded-full border-2 border-red-600 px-8 py-4 text-white transition-all duration-300 hover:bg-red-600"
            >
                <span>Apply Now</span>

                <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
                />
            </Link>
            </div>

        </div>
        </div>



        {/* PART 3 */}
        <div className="bg-black py-16">
        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-6">

            {/* Left Image */}
            <div className="project-image relative h-[320px] overflow-hidden">
            <Image
                src="/mostafa-meraji-AQ4Xy9O51J4-unsplash.jpg"
                alt="Construction team"
                fill
                className="object-cover"
            />
            </div>


            {/* Right Image */}
            <div className="project-image relative h-[320px] overflow-hidden">
            <Image
                src="/james-sullivan-ESZRBtkQ_f8-unsplash.jpg"
                alt="Construction site"
                fill
                className="object-cover"
            />
            </div>

        </div>
        </div>


    </section>
  );
}