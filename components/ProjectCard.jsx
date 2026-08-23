"use client";

import Image from "next/image";
import { motion } from "framer-motion";


export default function ProjectCard({
    project
}) {


    return (

        <motion.article

            whileHover={{
                y:-8
            }}

            transition={{
                duration:0.3
            }}

            className="
                group
                bg-white
                rounded-3xl
                overflow-hidden
                border
                border-gray-100
                shadow-sm
                hover:shadow-xl
                transition
            "
        >



            {/* Image */}

            <div
                className="
                    relative
                    h-[280px]
                    overflow-hidden
                "
            >


                <Image

                    src={project.coverImage}

                    alt={project.title}

                    fill

                    className="
                        object-cover
                        group-hover:scale-110
                        transition
                        duration-700
                    "

                />



                {/* Overlay */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-black/0
                        group-hover:bg-black/40
                        transition
                    "
                />




                {/* Status */}

                <div
                    className="
                        absolute
                        top-5
                        left-5
                        flex
                        gap-2
                        flex-wrap
                    "
                >

                    <span
                        className="
                            px-4
                            py-2
                            bg-orange-600
                            text-white
                            text-xs
                            rounded-full
                            font-medium
                        "
                    >
                        {project.category}
                    </span>



                    <span
                        className="
                            px-4
                            py-2
                            bg-white/90
                            text-gray-900
                            text-xs
                            rounded-full
                            font-medium
                        "
                    >
                        {project.status}
                    </span>


                </div>



            </div>





            {/* Content */}

            <div
                className="
                    p-6
                "
            >



                <div
                    className="
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-gray-500
                        mb-3
                    "
                >

                    <span>
                        📍
                    </span>

                    <span>
                        {project.location.city}, {project.location.state}
                    </span>

                </div>





                <h3
                    className="
                        text-2xl
                        font-bold
                        text-gray-900
                        mb-3
                        group-hover:text-orange-600
                        transition
                    "
                >
                    {project.title}
                </h3>





                <p
                    className="
                        text-gray-500
                        leading-relaxed
                        line-clamp-3
                        mb-6
                    "
                >
                    {project.shortDescription}
                </p>





                {/* Project Details */}

                <div
                    className="
                        grid
                        grid-cols-2
                        gap-4
                        mb-6
                        border-t
                        pt-5
                    "
                >

                    <div>

                        <p
                            className="
                                text-xs
                                text-gray-400
                                uppercase
                            "
                        >
                            Type
                        </p>


                        <p
                            className="
                                text-sm
                                font-semibold
                                text-gray-800
                            "
                        >
                            {project.projectType}
                        </p>

                    </div>





                    <div>

                        <p
                            className="
                                text-xs
                                text-gray-400
                                uppercase
                            "
                        >
                            Duration
                        </p>


                        <p
                            className="
                                text-sm
                                font-semibold
                                text-gray-800
                            "
                        >
                            {project.duration}
                        </p>

                    </div>



                    <div>

                        <p
                            className="
                                text-xs
                                text-gray-400
                                uppercase
                            "
                        >
                            Area
                        </p>


                        <p
                            className="
                                text-sm
                                font-semibold
                                text-gray-800
                            "
                        >
                            {project.statistics.area.toLocaleString()} sqm
                        </p>

                    </div>




                    <div>

                        <p
                            className="
                                text-xs
                                text-gray-400
                                uppercase
                            "
                        >
                            Budget
                        </p>


                        <p
                            className="
                                text-sm
                                font-semibold
                                text-gray-800
                            "
                        >

                            ₦
                            {
                                (
                                    project.budget.amount /
                                    1000000
                                ).toFixed(0)
                            }
                            M

                        </p>


                    </div>


                </div>





                <a

                    href={`/project/${project.slug}`}

                    className="
                        inline-flex
                        items-center
                        gap-2
                        text-orange-600
                        font-semibold
                        hover:gap-4
                        transition-all
                    "
                >

                    View Project

                    <span>
                        →
                    </span>

                </a>



            </div>


        </motion.article>

    );
}