"use client";

import { motion } from "framer-motion";


export default function CTA() {


    return (

        <section
            className="
                py-24
                relative
                overflow-hidden
                bg-gray-900
            "
        >


            {/* Background */}

            <div
                className="
                    absolute
                    inset-0
                    opacity-20
                    bg-cover
                    bg-center
                "
                style={{
                    backgroundImage:
                    "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')"
                }}
            />



            {/* Overlay */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gray-900/80
                "
            />




            <div
                className="
                    relative
                    z-10
                    container
                    mx-auto
                    px-6
                    lg:px-10
                "
            >


                <motion.div

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

                    className="
                        text-center
                        max-w-4xl
                        mx-auto
                        text-white
                    "
                >



                    <p
                        className="
                            text-orange-400
                            uppercase
                            tracking-[0.3em]
                            text-sm
                            font-medium
                            mb-5
                        "
                    >
                        Start Your Project
                    </p>





                    <h2
                        className="
                            text-4xl
                            md:text-5xl
                            lg:text-6xl
                            font-bold
                            leading-tight
                            mb-6
                        "
                    >
                        Ready To Build
                        Something Exceptional?
                    </h2>





                    <p
                        className="
                            text-gray-300
                            text-lg
                            max-w-2xl
                            mx-auto
                            mb-10
                        "
                    >
                        Whether you are planning a luxury
                        residence, commercial development,
                        or large-scale construction project,
                        our team is ready to bring your vision
                        to life.
                    </p>





                    <div
                        className="
                            flex
                            flex-wrap
                            justify-center
                            gap-5
                        "
                    >


                        <a

                            href="/contact"

                            className="
                                px-8
                                py-4
                                rounded-full
                                bg-orange-600
                                hover:bg-orange-700
                                transition
                                font-semibold
                            "
                        >
                            Request A Quote
                        </a>





                        <a

                            href="/projects"

                            className="
                                px-8
                                py-4
                                rounded-full
                                border
                                border-white/40
                                hover:bg-white
                                hover:text-gray-900
                                transition
                                font-semibold
                            "
                        >
                            Explore More Projects
                        </a>



                    </div>



                </motion.div>


            </div>


        </section>

    );
}