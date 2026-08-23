"use client";

import Image from "next/image";
import { motion } from "framer-motion";


export default function FeaturedProject({
    project
}) {


    return (

        <motion.section

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
                duration:0.7
            }}

            className="
                relative
                overflow-hidden
                rounded-3xl
                bg-gray-900
                min-h-[600px]
            "
        >


            {/* Background Image */}

            <Image

                src={project.coverImage}

                alt={project.title}

                fill

                className="
                    object-cover
                "

            />



            {/* Overlay */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-black/80
                    via-black/50
                    to-black/20
                "
            />




            <div
                className="
                    relative
                    z-10
                    h-full
                    min-h-[600px]
                    flex
                    items-end
                    p-8
                    lg:p-14
                "
            >


                <div
                    className="
                        max-w-3xl
                        text-white
                    "
                >



                    <div
                        className="
                            flex
                            flex-wrap
                            gap-3
                            mb-6
                        "
                    >

                        <span
                            className="
                                px-4
                                py-2
                                rounded-full
                                bg-orange-600
                                text-sm
                                font-medium
                            "
                        >
                            Featured Project
                        </span>



                        <span
                            className="
                                px-4
                                py-2
                                rounded-full
                                bg-white/20
                                backdrop-blur
                                text-sm
                            "
                        >
                            {project.category}
                        </span>


                        <span
                            className="
                                px-4
                                py-2
                                rounded-full
                                bg-white/20
                                backdrop-blur
                                text-sm
                            "
                        >
                            {project.status}
                        </span>


                    </div>





                    <h2
                        className="
                            text-4xl
                            lg:text-6xl
                            font-bold
                            leading-tight
                            mb-5
                        "
                    >
                        {project.title}
                    </h2>





                    <p
                        className="
                            text-gray-200
                            text-lg
                            max-w-2xl
                            mb-8
                        "
                    >
                        {project.shortDescription}
                    </p>





                    {/* Details */}

                    <div
                        className="
                            grid
                            grid-cols-2
                            md:grid-cols-4
                            gap-5
                            mb-10
                        "
                    >

                        <div>

                            <p
                                className="
                                    text-gray-400
                                    text-sm
                                "
                            >
                                Location
                            </p>


                            <p
                                className="
                                    font-semibold
                                    mt-1
                                "
                            >
                                {project.location.city}
                            </p>

                        </div>




                        <div>

                            <p
                                className="
                                    text-gray-400
                                    text-sm
                                "
                            >
                                Duration
                            </p>


                            <p
                                className="
                                    font-semibold
                                    mt-1
                                "
                            >
                                {project.duration}
                            </p>

                        </div>




                        <div>

                            <p
                                className="
                                    text-gray-400
                                    text-sm
                                "
                            >
                                Area
                            </p>


                            <p
                                className="
                                    font-semibold
                                    mt-1
                                "
                            >
                                {project.statistics.area.toLocaleString()} sqm
                            </p>

                        </div>





                        <div>

                            <p
                                className="
                                    text-gray-400
                                    text-sm
                                "
                            >
                                Budget
                            </p>


                            <p
                                className="
                                    font-semibold
                                    mt-1
                                "
                            >
                                ₦{(
                                    project.budget.amount /
                                    1000000
                                ).toFixed(0)}M
                            </p>

                        </div>


                    </div>





                    <a

                        href={`/projects/${project.slug}`}

                        className="
                            inline-flex
                            items-center
                            gap-3
                            px-8
                            py-4
                            rounded-full
                            bg-white
                            text-gray-900
                            font-semibold
                            hover:bg-orange-600
                            hover:text-white
                            transition
                        "
                    >
                        View Project

                        <span>
                            →
                        </span>

                    </a>



                </div>


            </div>



        </motion.section>

    );
}