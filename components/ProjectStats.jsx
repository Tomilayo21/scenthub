"use client";

import { motion } from "framer-motion";


const stats = [
    {
        value: "250+",
        label: "Completed Projects",
    },

    {
        value: "₦150B+",
        label: "Project Value Delivered",
    },

    {
        value: "18+",
        label: "States Covered",
    },

    {
        value: "98%",
        label: "Client Satisfaction",
    },
];



export default function ProjectStats() {


    return (

        <section
            className="
                relative
                -mt-16
                z-20
                container
                mx-auto
                px-6
                lg:px-10
            "
        >


            <div
                className="
                    bg-white
                    rounded-3xl
                    shadow-xl
                    border
                    border-gray-100
                    grid
                    grid-cols-2
                    lg:grid-cols-4
                    overflow-hidden
                "
            >


                {
                    stats.map((stat,index)=>(


                        <motion.div

                            key={index}

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
                                delay:index * 0.1,
                                duration:0.5
                            }}

                            className="
                                p-8
                                lg:p-10
                                text-center
                                border-b
                                lg:border-b-0
                                border-gray-100
                                last:border-0
                            "
                        >


                            <h3
                                className="
                                    text-4xl
                                    lg:text-5xl
                                    font-bold
                                    text-gray-900
                                    mb-3
                                "
                            >
                                {stat.value}
                            </h3>


                            <p
                                className="
                                    text-gray-500
                                    text-sm
                                    lg:text-base
                                "
                            >
                                {stat.label}
                            </p>


                        </motion.div>


                    ))
                }


            </div>


        </section>

    );
}