"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Plus
} from "lucide-react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        number:"01",
        title:"Building Construction",
        image:"/mostafa-meraji-AQ4Xy9O51J4-unsplash.jpg",
        description:
        "From residential developments to commercial structures, we deliver complete construction solutions with precision, safety and superior workmanship.",
        points:[
            "Structural Engineering",
            "Architectural Finishes",
            "Mechanical & Electrical Works"
        ]
    },

    {
        number:"02",
        title:"Civil Engineering",
        image:"/civil-engineering.jpg",
        description:
        "We execute infrastructure projects designed for durability, performance and long-term value.",
        points:[
            "Road Construction",
            "Drainage Systems",
            "Concrete Structures"
        ]
    },


    {
        number:"03",
        title:"Real Estate Development",
        image:"/real-estate.jpg",
        description:
        "We create modern properties combining innovative design, quality construction and investment value.",
        points:[
            "Residential Estates",
            "Commercial Buildings",
            "Mixed-use Development"
        ]
    },



    {
        number:"04",
        title:"Project Management",
        image:"/project-management.jpg",
        description:
        "Our team manages every stage of construction to achieve quality delivery within schedule and budget.",
        points:[
            "Planning",
            "Cost Control",
            "Quality Assurance"
        ]
    }

];

const projects=[
    {
        title:"Luxury Residential Duplex",
        location:"Lagos, Nigeria",
        image:"/project1.jpg"
    },

    {
        title:"Commercial Development",
        location:"Lekki, Nigeria",
        image:"/project2.jpg"
    },

    {
        title:"Estate Infrastructure",
        location:"Ibeju-Lekki, Nigeria",
        image:"/project3.jpg"
    }
];

const stats=[
    {
        value:"150+",
        label:"Projects Delivered"
    },

    {
        value:"₦500M+",
        label:"Project Value"
    },

    {
        value:"75+",
        label:"Satisfied Clients"
    },

    {
        value:"30+",
        label:"Industry Professionals"
    }
];

const process=[
    "Consultation",
    "Planning & Design",
    "Construction",
    "Inspection",
    "Project Handover"
];

const faqs = [
    {
        question: "What types of construction projects do you handle?",
        answer:
            "We handle a wide range of residential and commercial construction projects including buildings, estates, renovations and other development projects. Our team delivers complete solutions from planning to final execution."
    },

    {
        question: "Do you provide civil engineering services?",
        answer:
            "Yes, we provide civil engineering solutions including road construction, drainage systems, concrete structures and other infrastructure works designed for durability and long-term performance."
    },

    {
        question: "Can you manage an entire construction project?",
        answer:
            "Our project management team oversees every stage of construction including planning, cost control, contractor coordination, quality assurance and timely project delivery."
    },

    {
        question: "Do you offer real estate development services?",
        answer:
            "Yes, we develop residential estates, commercial buildings and mixed-use properties by combining innovative designs, quality construction and strategic development planning."
    },

    {
        question: "How can I request a project quotation?",
        answer:
            "You can contact our team through our enquiry form or contact page. We will review your project requirements and provide professional guidance with a detailed quotation."
    }
];

export default function Services(){


const sectionRef=useRef(null);

const [open,setOpen]=useState(null);

const [openFaq, setOpenFaq] = useState(null);



useLayoutEffect(()=>{


    const ctx=gsap.context(()=>{


    gsap.utils.toArray(".reveal").forEach((item)=>{


    gsap.from(item,{
        opacity:0,
        y:80,
        duration:1,
        ease:"power3.out",

        scrollTrigger:{
            trigger:item,
            start:"top 85%"
        }

    });


    });



    },sectionRef);



    return()=>ctx.revert();



},[]);





return (
        <>
            <Navbar />

            <section
                ref={sectionRef}
                className="bg-white text-black"
            >

                {/* HERO */}
                <section className="relative h-screen flex items-center">
                    <Image
                        src="/ricardo-gomez-angel-sYK-jN0sKBY-unsplash.jpg"
                        fill
                        priority
                        alt="Construction"
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/60"/>

                    <div className="relative z-10 px-6 md:px-12 lg:px-24 text-white max-w-6xl reveal">


                    <p className="uppercase tracking-[8px] text-sm mb-8">
                    Our Services
                    </p>


                    <h1 className="text-5xl md:text-8xl font-bold leading-[0.95]">

                    We Build
                    <br/>
                    Landmarks That
                    <br/>
                    Last Generations.

                    </h1>



                    <p className="mt-8 text-lg text-gray-300 max-w-xl">

                    Engineering excellence, innovative construction
                    and sustainable developments across Nigeria.

                    </p>



                    <Link
                    href="/contact"
                    className="
                    inline-flex items-center gap-3
                    mt-10 px-8 py-4
                    border border-white
                    hover:bg-white
                    hover:text-black
                    transition
                    "
                    >

                    Start A Project

                    <ArrowRight size={18}/>

                    </Link>


                    </div>
                </section>

                {/* INTRO */}
                <section className="px-6 md:px-12 lg:px-24 py-28 md:py-36">

                    <div className="max-w-7xl mx-auto">

                        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 lg:gap-24 items-center">

                            {/* LEFT */}
                            <div className="max-w-3xl">

                                <p className="uppercase tracking-[0.35em] text-xs font-semibold text-[var(--norms)] mb-8">
                                    Who We Are
                                </p>

                                <h2
                                    className="
                                        text-4xl
                                        sm:text-5xl
                                        lg:text-6xl
                                        xl:text-7xl
                                        font-bold
                                        leading-[1.08]
                                        tracking-tight
                                        text-black
                                    "
                                >
                                    Building Nigeria's

                                    <br />

                                    <span className="text-gray-400">
                                        Future Through
                                    </span>

                                    <br />

                                    Exceptional Engineering.
                                </h2>

                            </div>

                            {/* RIGHT */}
                            <div className="max-w-lg lg:ml-auto">

                                <p
                                    className="
                                        text-lg
                                        md:text-xl
                                        leading-9
                                        text-gray-700
                                    "
                                >
                                    Scenthub Realty & Construction Limited delivers
                                    world-class construction, civil engineering and
                                    real estate solutions built around quality,
                                    innovation and reliability.
                                </p>

                                <p
                                    className="
                                        mt-8
                                        text-base
                                        leading-8
                                        text-gray-500
                                    "
                                >
                                    From concept development to project completion,
                                    we combine technical expertise, strategic planning
                                    and disciplined execution to create spaces that
                                    stand the test of time.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

                {/* SERVICES */}
                <section className="relative">

                    <ServicesSection />

                </section>
                
                {/* PROJECTS */}
                <section className="px-6 mt-8 mb-8 md:px-12 lg:px-24 py-32">


                    <p className="uppercase tracking-widest text-gray-500">
                    Featured Projects
                    </p>


                    <h2 className="text-5xl font-bold mt-6 mb-16">
                    Selected Work
                    </h2>



                    <div className="grid md:grid-cols-3 gap-8">


                    {
                    projects.map(project=>(


                    <div
                    key={project.title}
                    className="group reveal"
                    >


                    <div className="relative h-[450px] overflow-hidden">


                    <Image
                    src={project.image}
                    fill
                    alt={project.title}
                    className="object-cover group-hover:scale-110 transition duration-700"
                    />


                    </div>


                    <h3 className="text-2xl font-bold mt-6">
                    {project.title}
                    </h3>


                    <p className="text-gray-500 mt-2">
                    {project.location}
                    </p>


                    </div>


                    ))
                    }


                    </div>


                </section>

                {/* STATS */}
                <section className="bg-black text-white px-6 md:px-12 lg:px-24 py-24">


                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">


                {
                stats.map(stat=>(


                <div key={stat.label}>


                <h3 className="text-5xl font-bold">
                {stat.value}
                </h3>


                <p className="text-gray-400 mt-3">
                {stat.label}
                </p>


                </div>


                ))
                }


                </div>


                </section>

                {/* PROCESS */}
                <section className="px-6 md:px-12 mt-8 mb-8 lg:px-24 py-32">


                <h2 className="text-5xl font-bold">
                Our Process
                </h2>



                <div className="grid md:grid-cols-5 mt-16 gap-5">


                {
                process.map((item,index)=>(


                <div
                key={item}
                className="border p-8"
                >


                <p className="text-red-600">
                0{index+1}
                </p>


                <h3 className="mt-5 font-semibold">
                {item}
                </h3>


                </div>


                ))
                }


                </div>


                </section>

                {/* FAQ */}
                <section className="
                    bg-gray-100
                    py-16
                    md:py-20
                    lg:py-20
                ">


                    <div className="
                        max-w-7xl
                        mx-auto
                        px-6
                        sm:px-8
                        lg:px-12
                    ">


                        {/* Header */}
                        <div className="
                            max-w-4xl
                            mb-20
                            md:mb-28
                        ">


                            <p className="
                                uppercase
                                tracking-[0.35em]
                                text-xs
                                font-semibold
                                text-[var(--norms)]
                                mb-8
                            ">
                                Frequently Asked Questions
                            </p>



                            <h2 className="
                                text-4xl
                                sm:text-3xl
                                md:text-3xl
                                lg:text-3xl
                                font-bold
                                leading-[1.05]
                                text-black
                                mb-4
                            ">
                                Everything You Need
                                To Know
                            </h2>



                        </div>






                        {/* FAQ List */}
                        <div className="
                            max-w-3xl
                        ">


                            {
                                faqs.map((faq,index)=>(


                                    <div
                                        key={faq.question}
                                        className="
                                            border-t
                                            border-gray-300
                                            py-2
                                            md:py-4
                                            cursor-pointer
                                        "
                                        onClick={() =>
                                            setOpenFaq(
                                                openFaq === index ? null : index
                                            )
                                        }
                                    >



                                        {/* Question */}
                                        <div className="
                                            flex
                                            items-center
                                            justify-between
                                            gap-2
                                        ">


                                            <h3 className="
                                                text-xl
                                                sm:text-2xl
                                                md:text-3xl
                                                font-semibold
                                                text-black
                                                leading-tight
                                            ">
                                                {faq.question}
                                            </h3>



                                            <Plus
                                                className={`
                                                    w-7
                                                    h-7
                                                    shrink-0
                                                    transition-transform
                                                    duration-300
                                                    ${
                                                        openFaq === index
                                                        ? "rotate-45"
                                                        : ""
                                                    }
                                                `}
                                            />


                                        </div>







                                        {/* Answer */}
                                        <div
                                            className={`
                                                overflow-hidden
                                                transition-all
                                                duration-500
                                                ${
                                                    openFaq === index
                                                    ? "max-h-40 opacity-100 mt-6"
                                                    : "max-h-0 opacity-0"
                                                }
                                            `}
                                        >

                                            <p className="
                                                max-w-3xl
                                                text-gray-600
                                                text-base
                                                md:text-lg
                                                leading-8
                                            ">
                                                {faq.answer}
                                            </p>


                                        </div>



                                    </div>


                                ))
                            }



                            {/* Bottom border */}
                            <div className="
                                border-t
                                border-gray-300
                            "/>


                        </div>


                    </div>


                </section>

                {/* CTA Section */}
                <section className="
                    relative
                    h-[520px]
                    sm:h-[600px]
                    lg:h-[680px]
                    flex
                    items-center
                    overflow-hidden
                
                ">


                    {/* Background Image */}
                    <Image
                        src="/james-sullivan-ESZRBtkQ_f8-unsplash.jpg"
                        fill
                        alt="Construction team"
                        className="
                            object-cover
                            object-center
                        "
                    />



                    {/* Overlay */}
                    <div className="
                        absolute
                        inset-0
                        bg-black/70
                    "/>





                    {/* Content */}
                    <div className="
                        relative
                        z-10
                        w-full
                        max-w-7xl
                        mx-auto
                        px-6
                        sm:px-8
                        md:px-10
                        lg:px-12
                    ">


                        <div className="
                            max-w-4xl
                            py-16
                            sm:py-20
                            lg:py-24
                        ">


                            {/* Label */}
                            <p className="
                                uppercase
                                tracking-[0.3em]
                                text-xs
                                md:text-sm
                                font-semibold
                                text-white/70
                                mb-6
                                md:mb-8
                            ">
                                Start Your Project
                            </p>





                            {/* Heading */}
                            <h2 className="
                                text-4xl
                                sm:text-5xl
                                md:text-6xl
                                lg:text-7xl
                                font-bold
                                leading-[1.05]
                                text-white
                                tracking-tight
                            ">
                                Let's Build
                                <br />
                                Something Remarkable.
                            </h2>





                            {/* Description */}
                            <p className="
                                mt-6
                                md:mt-8
                                max-w-2xl
                                text-norms
                                text-base
                                md:text-lg
                                leading-8
                            ">
                                Partner with us to bring your vision to life through
                                innovative design, quality construction and reliable
                                project execution.
                            </p>





                            {/* Button */}
                            <Link
                                href="/contact"
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    mt-8
                                    md:mt-10
                                    px-8
                                    md:px-10
                                    py-4
                                    md:py-5
                                    border
                                    border-white
                                    text-white
                                    text-sm
                                    font-semibold
                                    tracking-wide
                                    transition-all
                                    duration-300
                                    hover:bg-white
                                    hover:text-black
                                "
                            >
                                Contact Us
                            </Link>


                        </div>


                    </div>


                </section>

            </section>

            <Footer />
        </>
    );

}