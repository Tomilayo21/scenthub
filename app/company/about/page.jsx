"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const values = [
    "Quality workmanship and attention to detail",
    "Safety-first construction practices",
    "Transparent communication with clients",
    "Timely project delivery",
    "Innovative construction solutions",
];


const documents = [
    {
        title: "Certificate of Incorporation",
        file: "/documents/certificate-of-incorporation.pdf",
    },
    {
        title: "Company Registration Documents",
        file: "/documents/company-registration.pdf",
    },
    {
        title: "Tax Identification Certificate",
        file: "/documents/tax-certificate.pdf",
    },
];


export default function AboutPage() {

    return (

        <>
            <Navbar />
                <main className="bg-white">
                    {/* HERO */}
                    <section className="
                        relative
                        h-[70vh]
                        min-h-[600px]
                        mt-20
                        flex
                        items-center
                        bg-black
                        overflow-hidden
                    ">


                        <Image
                            src="/jezael-melgoza-HYQvV8wWX18-unsplash.jpg"
                            alt="Construction company"
                            fill
                            className="object-cover"
                        />


                        {/* Dark Image Overlay */}
                        <div className="
                            absolute
                            inset-0
                            bg-black/50
                            z-[1]
                        "></div>


                        <div className="
                            relative
                            z-10
                            max-w-7xl
                            mx-auto
                            px-3
                            py-6
                            md:px-12
                            text-white
                        ">

                            <p className="
                                uppercase
                                tracking-[0.3em]
                                text-sm
                                text-gray-300
                                mb-6
                            ">
                                About Us
                            </p>


                            <h1 className="
                                text-5xl
                                md:text-7xl
                                font-bold
                                max-w-4xl
                                leading-tight
                            ">
                                Building Nigeria's Future 
                                Through Excellence
                            </h1>


                            <p className="
                                mt-8
                                max-w-2xl
                                text-lg
                                text-gray-100
                            ">
                                We deliver innovative construction solutions 
                                through quality engineering, professional management,
                                and a commitment to excellence.
                            </p>


                        </div>


                    </section>

                    {/* INTRODUCTION */}
                    <section className="
                    py-28
                    max-w-7xl
                    mx-auto
                    px-6
                    md:px-12
                    grid
                    lg:grid-cols-2
                    gap-16
                    items-center
                    ">


                    <div>

                    <p className="
                    uppercase
                    tracking-widest
                    text-sm
                    text-gray-500
                    mb-6
                    ">
                    Who We Are
                    </p>


                    <h2 className="
                    text-4xl
                    md:text-5xl
                    font-bold
                    leading-tight
                    ">

                    A Construction Partner Built On Trust

                    </h2>


                    <p className="
                    mt-8
                    text-gray-600
                    leading-relaxed
                    ">

                    Scenthub Realty & Construction Limited is a Nigerian
                    construction company committed to delivering high-quality
                    residential, commercial, and infrastructure projects.

                    Through skilled professionals, modern construction methods,
                    and strict quality control, we transform architectural visions
                    into durable structures that stand the test of time.

                    </p>

                    </div>



                    <div className="
                    relative
                    h-[450px]
                    ">

                    <Image
                    src="/josh-olalde-X1P1_EDNnok-unsplash.jpg"
                    alt="Construction project"
                    fill
                    className="object-cover"
                    />

                    </div>


                    </section>

                    {/* COMPANY STATISTICS */}
                    <section className="
                    py-20
                    bg-black
                    text-white
                    ">

                        <div className="
                        max-w-7xl
                        mx-auto
                        px-6
                        md:px-12
                        grid
                        grid-cols-2
                        md:grid-cols-4
                        gap-10
                        ">


                        {
                        [
                        {
                        number:"150+",
                        label:"Projects Completed"
                        },
                        {
                        number:"5+",
                        label:"Years Experience"
                        },
                        {
                        number:"50+",
                        label:"Skilled Professionals"
                        },
                        {
                        number:"10+",
                        label:"Major Developments"
                        }
                        ].map((item,index)=>(

                        <div key={index}
                        className="text-center"
                        >

                        <h3 className="
                        text-5xl
                        md:text-6xl
                        font-bold
                        ">

                        {item.number}

                        </h3>


                        <p className="
                        mt-4
                        text-gray-400
                        ">

                        {item.label}

                        </p>


                        </div>

                        ))

                        }


                        </div>

                    </section>

                    {/* STORY */}
                    <section className="
                    bg-gray-100
                    py-28
                    ">

                    <div className="
                    max-w-7xl
                    mx-auto
                    px-6
                    md:px-12
                    grid
                    lg:grid-cols-2
                    gap-16
                    ">


                    <div>

                    <h2 className="
                    text-4xl
                    font-bold
                    mb-8
                    ">
                    Our Story
                    </h2>


                    <p className="
                    text-gray-600
                    leading-relaxed
                    ">

                    Established with a vision to redefine construction standards,
                    our company has successfully executed projects ranging from
                    residential developments to commercial facilities.

                    We combine technical expertise, project management excellence,
                    and industry experience to provide clients with reliable
                    construction solutions.

                    </p>


                    </div>



                    <div className="
                    grid
                    grid-cols-2
                    gap-6
                    ">


                    <div className="bg-white p-8">
                    <h3 className="text-4xl font-bold">
                    100+
                    </h3>
                    <p className="text-gray-500 mt-2">
                    Projects Completed
                    </p>
                    </div>


                    <div className="bg-white p-8">
                    <h3 className="text-4xl font-bold">
                    5+
                    </h3>
                    <p className="text-gray-500 mt-2">
                    Years Experience
                    </p>
                    </div>


                    </div>


                    </div>

                    </section>

                    {/* DIRECTOR MESSAGE */}
                    <section className="
                        py-28
                        max-w-7xl
                        mx-auto
                        px-6
                        md:px-12
                    ">


                    <div className="
                        grid
                        lg:grid-cols-[0.8fr_1.2fr]
                        gap-20
                        xl:gap-28
                        items-center
                    ">



                        {/* PORTRAIT IMAGE */}

                        <div className="
                            flex
                            justify-center
                        ">

                            <div className="
                                relative
                                w-full
                                max-w-sm
                                h-[520px]
                                overflow-hidden
                            ">


                                <Image
                                    src="/james-sullivan-ESZRBtkQ_f8-unsplash.jpg"
                                    alt="Managing Director"
                                    width={600}
                                    height={800}
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                    "
                                    priority
                                />


                            </div>


                        </div>





                        {/* MESSAGE CONTENT */}

                        <div className="
                            max-w-2xl
                        ">


                            <p className="
                                uppercase
                                tracking-[0.3em]
                                text-sm
                                text-gray-500
                                mb-6
                            ">
                                Leadership
                            </p>



                            <h2 className="
                                text-4xl
                                md:text-5xl
                                font-bold
                                leading-tight
                            ">

                                A Message From Our Managing Director

                            </h2>



                            <p className="
                                mt-8
                                text-gray-600
                                leading-relaxed
                                text-lg
                            ">

                                At Scenthub Realty & Construction Limited,
                                we believe every structure tells a story.

                                Our commitment is to deliver projects that combine
                                innovation, durability, and exceptional craftsmanship.

                                We continue to invest in our people, technology,
                                and processes to ensure every client receives
                                world-class construction solutions.

                            </p>



                            <div className="
                                mt-10
                                border-l-4
                                border-black
                                pl-6
                            ">


                                <h3 className="
                                    font-bold
                                    text-xl
                                ">

                                    Engr. Oluwatobiloba Friday Victory - Ikolo

                                </h3>


                                <p className="
                                    text-gray-500
                                    mt-1
                                ">

                                    Managing Director

                                </p>


                            </div>


                        </div>


                    </div>


                    </section>

                    {/* EXPERTISE */}
                    <section className="
                    bg-gray-100
                    py-28
                    ">


                        <div className="
                        max-w-7xl
                        mx-auto
                        px-6
                        md:px-12
                        ">


                        <div className="max-w-3xl mb-16">


                        <p className="
                        uppercase
                        tracking-widest
                        text-sm
                        text-gray-500
                        ">

                        Our Expertise

                        </p>


                        <h2 className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        mt-5
                        ">

                        Construction Solutions Designed For Excellence

                        </h2>


                        </div>



                        <div className="
                        grid
                        md:grid-cols-2
                        lg:grid-cols-4
                        gap-6
                        ">


                        {
                        [
                        "Residential Construction",
                        "Commercial Buildings",
                        "Renovation & Remodeling",
                        "Project Management",
                        "Interior Finishing",
                        "Civil Engineering Works",
                        "Real Estate Development",
                        "Infrastructure Projects"

                        ].map((item,index)=>(


                        <div
                        key={index}
                        className="
                        bg-white
                        p-8
                        hover:-translate-y-2
                        transition
                        duration-300
                        "
                        >


                        <h3 className="
                        text-xl
                        font-semibold
                        ">

                        {item}

                        </h3>


                        <p className="
                        mt-4
                        text-gray-500
                        text-sm
                        ">

                        Professional solutions delivered
                        with precision and quality.

                        </p>


                        </div>


                        ))

                        }


                        </div>


                        </div>


                    </section>

                    {/* MISSION VALUES */}
                    <section className="
                    py-28
                    max-w-7xl
                    mx-auto
                    px-6
                    md:px-12
                    ">


                    <div className="
                    grid
                    lg:grid-cols-3
                    gap-10
                    ">


                    <div>
                    <h2 className="text-4xl font-bold">
                    Our Mission
                    </h2>

                    <p className="mt-6 text-gray-600">
                    To provide exceptional construction services
                    through innovation, professionalism, and commitment
                    to client satisfaction.
                    </p>

                    </div>


                    <div>
                    <h2 className="text-4xl font-bold">
                    Our Vision
                    </h2>

                    <p className="mt-6 text-gray-600">
                    To become one of Africa's most trusted construction
                    companies delivering world-class projects.
                    </p>

                    </div>



                    <div>

                    <h2 className="text-4xl font-bold">
                    Our Values
                    </h2>


                    <ul className="mt-6 space-y-4">

                    {
                    values.map((item,index)=>(

                    <li 
                    key={index}
                    className="flex gap-3 text-gray-600"
                    >

                    <CheckCircle 
                    size={22}
                    className="text-black"
                    />

                    {item}

                    </li>

                    ))
                    }

                    </ul>


                    </div>


                    </div>


                    </section>

                    {/* CONSTRUCTION PROCESS */}
                    <section className="
                        py-28
                        bg-gray-100
                    ">

                    <div className="
                        max-w-7xl
                        mx-auto
                        px-6
                        md:px-12
                    ">


                    {/* HEADER */}

                    <div className="
                        max-w-3xl
                        mb-20
                    ">


                    <p className="
                        uppercase
                        tracking-[0.3em]
                        text-sm
                        text-gray-500
                        mb-5
                    ">
                        Our Approach
                    </p>


                    <h2 className="
                        text-4xl
                        md:text-6xl
                        font-bold
                        leading-tight
                    ">

                        A Seamless Construction Process 
                        From Vision To Completion

                    </h2>


                    <p className="
                        mt-6
                        text-gray-600
                        text-lg
                        leading-relaxed
                    ">

                        Every project follows a structured approach
                        designed to maintain quality, efficiency,
                        and complete client satisfaction.

                    </p>


                    </div>





                    {/* PROCESS CARDS */}

                    <div className="
                        grid
                        md:grid-cols-2
                        lg:grid-cols-5
                        gap-6
                    ">


                    {
                    [
                    {
                    number:"01",
                    title:"Consultation",
                    text:"Understanding your goals, requirements, and project expectations."
                    },

                    {
                    number:"02",
                    title:"Planning",
                    text:"Developing budgets, schedules, and construction strategies."
                    },

                    {
                    number:"03",
                    title:"Design & Engineering",
                    text:"Transforming concepts into detailed technical solutions."
                    },

                    {
                    number:"04",
                    title:"Construction",
                    text:"Executing the project with quality materials and skilled professionals."
                    },

                    {
                    number:"05",
                    title:"Handover",
                    text:"Delivering a completed project that meets our quality standards."
                    }

                    ].map((step,index)=>(


                    <div
                    key={index}
                    className="
                    relative
                    bg-white
                    p-8
                    min-h-[280px]
                    border
                    border-gray-200
                    hover:-translate-y-3
                    transition-all
                    duration-300
                    group
                    "
                    >


                    {/* NUMBER */}

                    <div className="
                    w-14
                    h-14
                    bg-black
                    text-white
                    flex
                    items-center
                    justify-center
                    text-lg
                    font-bold
                    mb-8
                    group-hover:scale-110
                    transition
                    ">

                    {step.number}

                    </div>



                    <h3 className="
                    text-xl
                    font-bold
                    mb-4
                    ">

                    {step.title}

                    </h3>



                    <p className="
                    text-gray-600
                    leading-relaxed
                    text-sm
                    ">

                    {step.text}

                    </p>



                    </div>


                    ))

                    }


                    </div>


                    </div>


                    </section>

                    {/* SAFETY & QUALITY COMMITMENT */}
                    <section className="
                        bg-black
                        text-white
                        py-28
                    ">

                        <div className="
                            max-w-7xl
                            mx-auto
                            px-6
                            md:px-12
                        ">


                            <div className="
                                grid
                                md:grid-cols-2
                                gap-16
                                xl:gap-24
                                items-center
                            ">


                                {/* CONTENT LEFT */}

                                <div className="
                                    max-w-xl
                                ">


                                    <p className="
                                        uppercase
                                        tracking-[0.3em]
                                        text-sm
                                        text-gray-400
                                        mb-6
                                    ">
                                        Our Commitment
                                    </p>



                                    <h2 className="
                                        text-4xl
                                        md:text-6xl
                                        font-bold
                                        leading-tight
                                    ">
                                        Safety, Quality 
                                        & Reliability
                                    </h2>



                                    <p className="
                                        mt-8
                                        text-gray-300
                                        text-lg
                                        leading-relaxed
                                    ">
                                        Every project is executed with strict attention
                                        to safety standards, material quality,
                                        and professional construction practices.

                                        We combine experienced professionals,
                                        quality materials, and proven processes
                                        to deliver structures built to last.
                                    </p>



                                    <ul className="
                                        mt-10
                                        space-y-5
                                    ">


                                        {
                                        [
                                            "Quality controlled materials",
                                            "Experienced site professionals",
                                            "Safety focused operations",
                                            "Professional project management"

                                        ].map((item,index)=>(


                                            <li
                                                key={index}
                                                className="
                                                    flex
                                                    items-center
                                                    gap-4
                                                    text-gray-200
                                                "
                                            >

                                                <CheckCircle size={22}/>

                                                <span>
                                                    {item}
                                                </span>

                                            </li>


                                        ))
                                        }


                                    </ul>


                                </div>





                                {/* IMAGE RIGHT */}

                                <div className="
                                    flex
                                    justify-center
                                    md:justify-end
                                ">


                                    <div className="
                                        relative
                                        w-full
                                        max-w-md
                                        h-[500px]
                                        overflow-hidden
                                    ">


                                        <Image
                                            src="/mostafa-meraji-AQ4Xy9O51J4-unsplash.jpg"
                                            alt="Construction safety"
                                            width={700}
                                            height={900}
                                            className="
                                                w-full
                                                h-full
                                                object-cover
                                            "
                                        />


                                    </div>


                                </div>



                            </div>


                        </div>


                    </section>                

                    {/* PROJECTS */}
                    <section className="
                    py-28
                    max-w-7xl
                    mx-auto
                    px-6
                    md:px-12
                    ">


                    <div className="
                    flex
                    justify-between
                    items-end
                    mb-14
                    ">


                    <h2 className="
                    text-4xl
                    md:text-5xl
                    font-bold
                    ">

                    Featured Projects

                    </h2>


                    <p className="
                    text-gray-500
                    ">

                    View All Projects →

                    </p>


                    </div>



                    <div className="
                        grid mt-6
                        md:grid-cols-3
                        gap-6
                    ">

                    {
                    [
                        "/rick-hyne-cqNgo3sQ_24-unsplash.jpg",
                        "",
                        "/project3.jpg"

                    ].map((image, index) => (

                        <div
                            key={index}
                            className="
                                relative
                                h-[400px]
                            "
                        >

                            <Image
                                src={image}
                                alt="Project"
                                fill
                                className="object-cover"
                            />

                        </div>

                    ))

                    }

                    </div>


                    </section>

                    {/* REGISTRATION */}
                    <section className="
                    bg-black
                    text-white
                    py-28
                    ">


                    <div className="
                    max-w-7xl
                    mx-auto
                    px-6
                    md:px-12
                    ">


                    <h2 className="
                    text-4xl
                    md:text-5xl
                    font-bold
                    ">
                    Company Registration & Certifications
                    </h2>


                    <p className="
                    mt-6
                    text-gray-300
                    max-w-3xl
                    ">

                    We operate as a legally registered construction company.
                    Our documentation reflects our commitment to professionalism,
                    accountability, and compliance.

                    </p>



                    <div className="
                    mt-12
                    grid
                    md:grid-cols-3
                    gap-8
                    ">


                    {
                    documents.map((doc,index)=>(

                    <a
                    key={index}
                    href={doc.file}
                    target="_blank"
                    className="
                    bg-white
                    text-black
                    p-8
                    hover:-translate-y-2
                    transition
                    "
                    >


                    <h3 className="
                    font-semibold
                    text-xl
                    ">

                    {doc.title}

                    </h3>


                    <p className="
                    mt-4
                    text-sm
                    text-gray-500
                    ">

                    View Document →

                    </p>


                    </a>


                    ))
                    }


                    </div>


                    </div>


                    </section>

                    {/* CTA */}
                    <section className="
                    py-28
                    text-center
                    max-w-5xl
                    mx-auto
                    px-6
                    ">


                    <h2 className="
                    text-5xl
                    font-bold
                    ">

                    Let's Build Something Exceptional

                    </h2>


                    <p className="
                    mt-6
                    text-gray-600
                    ">

                    Partner with us for your next residential,
                    commercial, or infrastructure project.

                    </p>


                    <button className="
                    mt-10
                    border border-[-var(--norms)] px-5 py-3 rounded-full hover:bg-gray-800 hover:text-white cursor-pointer transition
                    text-black
                    px-10
                    py-5
                    ">

                    Request A Quote

                    </button>


                    </section>
                </main>
            <Footer />
        </>
    )

}