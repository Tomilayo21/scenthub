"use client";

import { motion } from "framer-motion";


const testimonials = [
    {
        quote:
            "Scenthub Realty delivered beyond our expectations. The attention to detail, quality of work and professionalism throughout the project was outstanding.",

        name:
            "Daniel James",

        role:
            "Private Client",

        project:
            "Luxury Duplex Development",

    },


    {
        quote:
            "From planning to completion, the team demonstrated excellent project management and engineering expertise.",

        name:
            "Mrs. Adeola Williams",

        role:
            "CEO, Williams Holdings",

        project:
            "Commercial Office Complex",

    },


    {
        quote:
            "A reliable construction partner with great communication and exceptional workmanship.",

        name:
            "Engr. Michael Okafor",

        role:
            "Project Consultant",

        project:
            "Industrial Facility",

    },
];



export default function Testimonials() {


    return (

        <section
            className="
                py-24
                bg-gray-50
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



                {/* Header */}

                <div
                    className="
                        text-center
                        max-w-3xl
                        mx-auto
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
                        Client Feedback
                    </p>


                    <h2
                        className="
                            text-4xl
                            lg:text-5xl
                            font-bold
                            text-gray-900
                        "
                    >
                        What Our Clients Say
                    </h2>


                </div>






                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-3
                        gap-8
                    "
                >

                    {
                        testimonials.map((item,index)=>(


                            <motion.article

                                key={index}

                                initial={{
                                    opacity:0,
                                    y:40
                                }}

                                whileInView={{
                                    opacity:1,
                                    y:0
                                }}

                                viewport={{
                                    once:true
                                }}

                                transition={{
                                    delay:index * 0.1
                                }}

                                className="
                                    bg-white
                                    rounded-3xl
                                    p-8
                                    shadow-sm
                                    border
                                    border-gray-100
                                "
                            >


                                {/* Stars */}

                                <div
                                    className="
                                        flex
                                        gap-1
                                        mb-6
                                        text-orange-500
                                    "
                                >

                                    ★★★★★

                                </div>





                                <p
                                    className="
                                        text-gray-600
                                        leading-relaxed
                                        mb-8
                                    "
                                >
                                    "{item.quote}"
                                </p>






                                <div
                                    className="
                                        border-t
                                        pt-6
                                    "
                                >

                                    <h3
                                        className="
                                            font-bold
                                            text-gray-900
                                        "
                                    >
                                        {item.name}
                                    </h3>


                                    <p
                                        className="
                                            text-sm
                                            text-gray-500
                                            mt-1
                                        "
                                    >
                                        {item.role}
                                    </p>


                                    <p
                                        className="
                                            text-sm
                                            text-orange-600
                                            mt-2
                                        "
                                    >
                                        {item.project}
                                    </p>


                                </div>



                            </motion.article>


                        ))
                    }


                </div>



            </div>


        </section>

    );
}