"use client";

import { motion } from "framer-motion";


export default function ProjectHeroSection() {

    return (
        <section
            className="
                relative
                min-h-[80vh]
                flex
                items-center
                overflow-hidden
            "
        >

            {/* Background Image */}
            <div
                className="
                    absolute
                    inset-0
                    bg-cover
                    bg-center
                    scale-105
                "
                style={{
                    backgroundImage:
                    "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5')"
                }}
            />


            {/* Overlay */}
            <div
                className="
                    absolute
                    inset-0
                    bg-black/60
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
                    text-white
                "
            >

                <motion.div

                    initial={{
                        opacity:0,
                        y:40
                    }}

                    animate={{
                        opacity:1,
                        y:0
                    }}

                    transition={{
                        duration:0.8
                    }}

                    className="
                        max-w-4xl
                    "
                >


                    <p
                        className="
                            uppercase
                            tracking-[0.4em]
                            text-sm
                            text-orange-400
                            font-medium
                            mb-6
                        "
                    >
                        Our Portfolio
                    </p>



                    <h1
                        className="
                            text-5xl
                            md:text-6xl
                            lg:text-7xl
                            font-bold
                            leading-tight
                            mb-8
                        "
                    >
                        Building Excellence
                        <br />
                        Through Every Project
                    </h1>



                    <p
                        className="
                            text-lg
                            md:text-xl
                            text-gray-200
                            max-w-2xl
                            leading-relaxed
                        "
                    >
                        Explore our portfolio of residential,
                        commercial, industrial and infrastructure
                        projects delivered with innovation,
                        quality craftsmanship and engineering
                        excellence.
                    </p>



                    <div
                        className="
                            flex
                            flex-wrap
                            gap-5
                            mt-10
                        "
                    >

                        <a
                            href="#projects"
                            className="
                                px-8
                                py-4
                                bg-orange-600
                                hover:bg-orange-700
                                transition
                                rounded-full
                                font-semibold
                            "
                        >
                            View Projects
                        </a>



                        <a
                            href="/contact"
                            className="
                                px-8
                                py-4
                                border
                                border-white/50
                                hover:bg-white
                                hover:text-black
                                transition
                                rounded-full
                                font-semibold
                            "
                        >
                            Request A Quote
                        </a>

                    </div>


                </motion.div>



            </div>



            {/* Bottom Gradient */}
            <div
                className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-32
                    bg-gradient-to-t
                    from-white
                    to-transparent
                "
            />


        </section>
    );
}