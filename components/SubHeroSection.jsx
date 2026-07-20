"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);



const galleryImages = [
    "/hero.jfif",
    "/james-sullivan-ESZRBtkQ_f8-unsplash.jpg",
    "/jezael-melgoza-HYQvV8wWX18-unsplash.jpg",
    "/rick-hyne-cqNgo3sQ_24-unsplash.jpg",
    "/mostafa-meraji-AQ4Xy9O51J4-unsplash.jpg",
    "/ricardo-gomez-angel-sYK-jN0sKBY-unsplash.jpg",
    "/josh-olalde-X1P1_EDNnok-unsplash.jpg",
    "/rick-hyne-cqNgo3sQ_24-unsplash.jpg",
];



export default function SubHeroSection() {


    const sectionRef = useRef(null);

    const galleryRef = useRef(null);

    const textRefs = useRef([]);





    useLayoutEffect(() => {


        const ctx = gsap.context(() => {



            /*
                THE MAGIC:

                The collage already exists.

                At scale 4.5 only the center image
                is visible.

                Zooming out reveals the collage.
            */


            gsap.set(galleryRef.current,{
                scale:5.5,
                x:0,
                y:0,
                transformOrigin:"center center"
            });




            gsap.set(textRefs.current,{
                opacity:0,
                y:80
            });



            gsap.set(textRefs.current[0],{
                opacity:1,
                y:0
            });






            const tl = gsap.timeline({

                scrollTrigger:{

                    trigger:sectionRef.current,

                    start:"top top",

                    end:"+=2200",

                    scrub:1,

                    pin:true,

                }

            });







            /*
                FRAME 1 -> FRAME 2
            */


            tl.to(textRefs.current[0],{

                opacity:0,

                y:-80,

                duration:.5

            })

            .to(textRefs.current[1],{

                opacity:1,

                y:0,

                duration:.5

            });








            /*
                FRAME 2 -> FRAME 3
            */


            tl.to(textRefs.current[1],{

                opacity:0,

                y:-80,

                duration:.5

            })

            .to(textRefs.current[2],{

                opacity:1,

                y:0,

                duration:.5

            });









            /*
                FRAME 3 -> FRAME 4

                THE COLLAGE REVEAL
            */


            tl.to(galleryRef.current,{

                scale:1,

                duration:2,

                ease:"none"

            })

            .to(textRefs.current[2],{

                opacity:0,

                y:-80,

                duration:.5

            },"<")

            .to(textRefs.current[3],{

                opacity:1,

                y:0,

                duration:.5

            });







        },sectionRef);



        return ()=>ctx.revert();



    },[]);








    return (

        <section
            ref={sectionRef}
            className="
                relative
                h-screen
                w-screen
                overflow-hidden
                bg-black
            "
        >






            {/* 
                COLLAGE

                This is the background
                from Frame 1 onwards.

                It starts zoomed in.
            */}



            <div
                ref={galleryRef}
                className="
                    absolute
                    inset-0
                    origin-center
                "
            >




                {
                    galleryImages.map((img,index)=>(


                        <div
                            key={index}
                            className={`
                                absolute
                                overflow-hidden
                                border-[16px]
                                border-black
                                shadow-2xl


                                ${
                                index===0 &&
                                `
                                left-[-5%]
                                top-10
                                w-[28%]
                                h-[55%]
                                `
                                }


                                ${
                                index===1 &&
                                `
                                left-[25%]
                                top-[5%]
                                w-[22%]
                                h-[45%]
                                `
                                }


                                ${
                                index===2 &&
                                `
                                right-[5%]
                                top-10
                                w-[30%]
                                h-[60%]
                                `
                                }


                                ${
                                index===3 &&
                                `
                                left-[10%]
                                bottom-[-10%]
                                w-[25%]
                                h-[50%]
                                z-20
                                `
                                }


                                ${
                                index===4 &&
                                `
                                left-[40%]
                                bottom-[5%]
                                w-[25%]
                                h-[45%]
                                `
                                }


                                ${
                                index===5 &&
                                `
                                right-[25%]
                                bottom-[-5%]
                                w-[22%]
                                h-[40%]
                                `
                                }


                                ${
                                index===6 &&
                                `
                                right-[-5%]
                                top-[35%]
                                w-[25%]
                                h-[50%]
                                `
                                }


                                ${
                                index===7 &&
                                `
                                left-[55%]
                                top-[20%]
                                w-[18%]
                                h-[35%]
                                `
                                }
                            `}
                        >

                            <Image

                                src={img}

                                fill

                                alt=""

                                className="
                                    object-cover
                                "

                            />

                        </div>


                    ))
                }




            </div>






            {/* DARK OVERLAY */}


            <div
                className="
                    absolute
                    inset-0
                    bg-black/50
                    z-30
                "
            />
            



            {/* TEXT CONTENT */}



            <div
                className="
                    absolute
                    inset-0
                    flex
                    items-center
                    px-8
                    lg:px-24
                    z-40
                "
            >






                {/* FRAME 1 */}


                <div
                    ref={el=>textRefs.current[0]=el}
                    className="
                        absolute
                    "
                >


                    <p
                        className="
                            text-white
                            uppercase
                            tracking-[0.4em]
                            text-sm
                        "
                    >

                        Construction Excellence

                    </p>




                    <h1
                        className="
                            mt-6
                            text-white
                            text-4xl
                            md:text-6xl
                            font-semibold
                            leading-tight
                        "
                    >

                        We Don't Just Build

                        <br/>

                        <span className="text-norms">

                            We Create Landmarks

                        </span>


                    </h1>


                </div>












                {/* FRAME 2 */}


                <div
                    ref={el=>textRefs.current[1]=el}
                    className="
                        absolute
                    "
                >


                    <h2
                        className="
                            text-white
                            text-4xl
                            md:text-6xl
                            font-semibold
                        "
                    >

                        Strong Foundations

                        <br/>

                        <span className="text-norms">

                            Exceptional Results

                        </span>


                    </h2>


                </div>












                {/* FRAME 3 */}


                <div
                    ref={el=>textRefs.current[2]=el}
                    className="
                        absolute
                    "
                >


                    <h2
                        className="
                            text-white
                            text-4xl
                            md:text-6xl
                            font-semibold
                        "
                    >

                        Built For The Future


                    </h2>




                    <div
                        className="
                            flex
                            gap-5
                            mt-10
                        "
                    >


                        <button
                            className="
                                bg-norms
                                px-6
                                py-3
                                rounded-full
                                font-medium
                                text-white
                                flex
                                items-center
                                gap-2
                            "
                        >

                            Projects

                            <ArrowRight size={20}/>


                        </button>




                        <button
                            className="
                                border
                                border-white
                                text-white
                                px-6
                                py-3
                                rounded-full
                            "
                        >

                            Contact


                        </button>



                    </div>



                </div>












                {/* FRAME 4 */}



                <div
                    ref={el=>textRefs.current[3]=el}
                    className="
                        absolute
                    "
                >



                    <h2
                        className="
                            text-white
                            text-5xl
                            md:text-7xl
                            font-semibold
                        "
                    >

                        Your Vision.

                        <br/>

                        <span className="text-norms">

                            Our Execution.

                        </span>


                    </h2>






                    <div
                        className="
                            flex
                            gap-5
                            mt-10
                        "
                    >




                        <button
                            className="
                                bg-norms
                                px-6
                                py-3
                                rounded-full
                                font-medium
                                text-white
                                flex
                                items-center
                                gap-2
                            "
                        >

                            Projects

                            <ArrowRight size={20}/>


                        </button>






                        <button
                            className="
                                border
                                border-white
                                text-white
                                px-6
                                py-3
                                rounded-full
                            "
                        >

                            Contact


                        </button>




                    </div>





                </div>






            </div>





        </section>

    );

}