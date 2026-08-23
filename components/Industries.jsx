"use client";

import { motion } from "framer-motion";


const industries = [
    {
        title: "Residential",
        description:
            "Luxury homes, estates, apartments and private residences designed for modern living.",
        icon: "🏠",
    },

    {
        title: "Commercial",
        description:
            "Office buildings, retail spaces and commercial developments built for businesses.",
        icon: "🏢",
    },

    {
        title: "Industrial",
        description:
            "Factories, warehouses and industrial facilities engineered for performance.",
        icon: "🏭",
    },

    {
        title: "Hospitality",
        description:
            "Hotels, resorts and leisure facilities that deliver exceptional experiences.",
        icon: "🏨",
    },

    {
        title: "Healthcare",
        description:
            "Hospitals and healthcare facilities built with safety and functionality in mind.",
        icon: "🏥",
    },

    {
        title: "Infrastructure",
        description:
            "Roads, civil works and public infrastructure projects delivered with excellence.",
        icon: "🛣️",
    },

    {
        title: "Education",
        description:
            "Schools, lecture theatres and educational facilities that inspire learning.",
        icon: "🏫",
    },

    {
        title: "Institutional",
        description:
            "Government, religious and organizational projects built to last.",
        icon: "🏛️",
    },
];



export default function Industries() {


    return (

        <section
            className="
                py-24
                bg-white
            "
        >

            <div
                className="
                    container
                    mx-auto
                    px-6
                    lg:px-10
                "
            >


                {/* Heading */}

                <div
                    className="
                        max-w-3xl
                        mb-14
                    "
                >

                    <p
                        className="
                            text-orange-600
                            uppercase
                            tracking-[0.3em]
                            text-sm
                            font-medium
                            mb-4
                        "
                    >
                        Industries We Serve
                    </p>


                    <h2
                        className="
                            text-4xl
                            lg:text-5xl
                            font-bold
                            text-gray-900
                            leading-tight
                        "
                    >
                        Building Solutions
                        Across Multiple Sectors
                    </h2>


                    <p
                        className="
                            mt-5
                            text-gray-500
                            text-lg
                            max-w-2xl
                        "
                    >
                        From luxury residences to large-scale
                        infrastructure projects, we provide
                        complete construction solutions tailored
                        to every industry.
                    </p>


                </div>





                {/* Cards */}

                <div
                    className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-4
                        gap-6
                    "
                >

                    {
                        industries.map((industry,index)=>(


                            <motion.div

                                key={industry.title}

                                initial={{
                                    opacity:0,
                                    y:30
                                }}

                                whileInView={{
                                    opacity:1,
                                    y:0
                                }}

                                viewport={{
                                    once:true
                                }}

                                transition={{
                                    delay:index * 0.08
                                }}

                                className="
                                    group
                                    p-8
                                    rounded-3xl
                                    border
                                    border-gray-100
                                    bg-gray-50
                                    hover:bg-gray-900
                                    transition
                                    duration-500
                                "
                            >


                                <div
                                    className="
                                        w-16
                                        h-16
                                        rounded-2xl
                                        bg-white
                                        flex
                                        items-center
                                        justify-center
                                        text-3xl
                                        mb-6
                                        group-hover:bg-orange-600
                                        transition
                                    "
                                >

                                    {industry.icon}

                                </div>





                                <h3
                                    className="
                                        text-xl
                                        font-bold
                                        text-gray-900
                                        group-hover:text-white
                                        transition
                                        mb-3
                                    "
                                >
                                    {industry.title}
                                </h3>





                                <p
                                    className="
                                        text-gray-500
                                        group-hover:text-gray-300
                                        transition
                                        leading-relaxed
                                        text-sm
                                    "
                                >
                                    {industry.description}
                                </p>



                            </motion.div>


                        ))
                    }

                </div>


            </div>


        </section>

    );
}