"use client";

import Image from "next/image";


const dummyServices = [
    {
        number: "01",
        title: "Building Construction",
        image: "/ricardo-gomez-angel-sYK-jN0sKBY-unsplash.jpg",
        description:
            "From residential developments to commercial structures, we deliver durable buildings with modern engineering standards and exceptional craftsmanship.",
        points: [
            "Residential and commercial buildings",
            "Structural planning and execution",
            "Quality materials and skilled workmanship",
            "Complete project management"
        ]
    },


    {
        number: "02",
        title: "Civil Engineering",
        image: "/services/civil-engineering.jpg",
        description:
            "We provide reliable infrastructure solutions including roads, drainage systems, foundations and other essential civil works.",
        points: [
            "Road and drainage construction",
            "Earthworks and site preparation",
            "Foundation engineering",
            "Infrastructure development"
        ]
    },


    {
        number: "03",
        title: "Real Estate Development",
        image: "/services/real-estate.jpg",
        description:
            "We transform ideas into valuable properties through strategic planning, innovative designs and sustainable development.",
        points: [
            "Property development",
            "Residential estates",
            "Land acquisition support",
            "Investment-focused solutions"
        ]
    },


    {
        number: "04",
        title: "Renovation & Remodeling",
        image: "/services/renovation.jpg",
        description:
            "We breathe new life into existing spaces through thoughtful renovations that improve functionality, aesthetics and value.",
        points: [
            "Interior upgrades",
            "Building extensions",
            "Structural improvements",
            "Modern finishing solutions"
        ]
    },


    {
        number: "05",
        title: "Project Management",
        image: "/services/project-management.jpg",
        description:
            "Our experts coordinate every stage of construction to ensure projects are completed on schedule, within budget and to specification.",
        points: [
            "Planning and scheduling",
            "Cost control",
            "Quality assurance",
            "Site supervision"
        ]
    },


    {
        number: "06",
        title: "Architectural Design",
        image: "/services/architectural-design.jpg",
        description:
            "We create innovative designs that combine functionality, beauty and sustainability while reflecting each client's vision.",
        points: [
            "Concept development",
            "3D visualization",
            "Technical drawings",
            "Design consultation"
        ]
    }
];



export default function ServicesSection() {


    return (

        <section className="bg-black text-white py-28 md:py-36 lg:py-44">

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">


                {/* Section Header */}
                <div className="max-w-4xl mb-20 md:mb-28">


                    <p className="
                        uppercase
                        tracking-[0.35em]
                        text-xs
                        font-semibold
                        text-[var(--norms)]
                    ">
                        Our Expertise
                    </p>



                    <h2 className="
                        mt-6
                        text-4xl
                        sm:text-5xl
                        md:text-6xl
                        lg:text-7xl
                        font-bold
                        leading-[1.05]
                    ">
                        What We Build
                    </h2>



                    <p className="
                        mt-8
                        max-w-3xl
                        text-base
                        md:text-lg
                        lg:text-xl
                        text-gray-400
                        leading-relaxed
                    ">
                        We deliver integrated construction, engineering and real estate
                        solutions designed with precision, innovation and uncompromising
                        quality.
                    </p>


                </div>





                {/* Services Grid */}
                <div className="
                    grid
                    md:grid-cols-2
                    gap-x-10
                    gap-y-20
                    lg:gap-x-16
                    lg:gap-y-24
                ">


                    {dummyServices.map((service) => (


                        <article
                            key={service.title}
                            className="
                                group
                                reveal
                            "
                        >



                            {/* Image */}
                            <div className="
                                relative
                                h-[280px]
                                sm:h-[340px]
                                lg:h-[420px]
                                overflow-hidden
                                rounded-xl
                            ">


                                <Image
                                    src={service.image}
                                    fill
                                    alt={service.title}
                                    className="
                                        object-cover
                                        transition-transform
                                        duration-700
                                        ease-out
                                        group-hover:scale-105
                                    "
                                />



                                <div className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-black/80
                                    via-black/30
                                    to-transparent
                                "/>



                                <span className="
                                    absolute
                                    top-6
                                    left-6
                                    text-xs
                                    md:text-sm
                                    font-semibold
                                    tracking-[0.3em]
                                    text-white/70
                                ">
                                    {service.number}
                                </span>


                            </div>





                            {/* Content */}
                            <div className="pt-8 md:pt-10">


                                <h3 className="
                                    text-2xl
                                    md:text-3xl
                                    lg:text-4xl
                                    font-bold
                                    leading-tight
                                    mt-8
                                ">
                                    {service.title}
                                </h3>




                                <p className="
                                    mt-5
                                    text-gray-400
                                    text-base
                                    md:text-lg
                                    leading-8
                                    max-w-xl
                                ">
                                    {service.description}
                                </p>




                                <div className="
                                    mt-8
                                    w-20
                                    h-[2px]
                                    bg-[var(--norms)]
                                "/>





                                <ul className="
                                    mt-8
                                    space-y-4
                                ">


                                    {service.points.map((point) => (


                                        <li
                                            key={point}
                                            className="
                                                flex
                                                items-start
                                                gap-4
                                                text-gray-300
                                                text-sm
                                                md:text-base
                                            "
                                        >


                                            <span className="
                                                mt-2
                                                shrink-0
                                                w-2
                                                h-2
                                                rounded-full
                                                bg-[var(--norms)]
                                            "/>



                                            <span>
                                                {point}
                                            </span>


                                        </li>


                                    ))}


                                </ul>


                            </div>



                        </article>


                    ))}


                </div>


            </div>


        </section>

    );

}