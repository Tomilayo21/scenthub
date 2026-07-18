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
    const scenesRef = useRef([]);
    const heroImageRef = useRef(null);
    const contentRef = useRef([]);



    useLayoutEffect(() => {

        const ctx = gsap.context(() => {


            const scenes = scenesRef.current;


            gsap.set(scenes, {
                opacity: 0,
                scale: 0.98
            });


            gsap.set(scenes[0], {
                opacity: 1,
                scale: 1
            });

            gsap.set(contentRef.current,{
                opacity:0,
                y:80
            });


            gsap.set(contentRef.current[0],{
                opacity:1,
                y:0
            });



            const timeline = gsap.timeline({

                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=1800",
                    scrub: 1,
                    pin: true,
                }

            });



            scenes.forEach((scene,index)=>{


                if(index === 0) return;



                timeline
                .to(
                    contentRef.current[index-1],
                    {
                        opacity:0,
                        y:-80,
                        duration:0.5,
                        ease:"power2.in"
                    }
                )


                .to(
                    scenes[index-1],
                    {
                        opacity:0,
                        duration:0.3
                    }
                )


                .to(
                    scenes[index],
                    {
                        opacity:1,
                        scale:1,
                        duration:0.4
                    }
                )


                .fromTo(
                    contentRef.current[index],
                    {
                        opacity:0,
                        y:80
                    },
                    {
                        opacity:1,
                        y:0,
                        duration:0.6,
                        ease:"power3.out"
                    }
                );


            });



        }, sectionRef);



        return () => ctx.revert();


    }, []);




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



            {/* FRAME 1 */}

            <div
                ref={el => scenesRef.current[0] = el}
                className="
                    absolute
                    inset-0
                    flex
                    items-center
                    px-8
                    lg:px-24
                "
            >

                <Image
                    src="/rick-hyne-cqNgo3sQ_24-unsplash.jpg"
                    fill
                    alt=""
                    className="object-cover"
                />


                <div className="absolute inset-0 bg-black/60"/>


                <div
                    ref={el => contentRef.current[0] = el}
                    className="relative z-10"
                >


                    <p className="
                        text-white
                        uppercase
                        tracking-[0.4em]
                        text-sm
                    ">
                        Construction Excellence
                    </p>


                    <h1 className="
                        mt-6
                        text-white
                        text-4xl
                        md:text-6xl
                        font-semibold
                        leading-tight
                    ">

                        We Don't Just Build

                        <br/>

                        <span className="text-norms">
                            We Create Landmarks
                        </span>

                    </h1>


                </div>


            </div>







            {/* FRAME 2 */}

            <div
                ref={el => scenesRef.current[1] = el}
                className="
                    absolute
                    inset-0
                    flex
                    items-center
                    px-8
                    lg:px-24
                "
            >

                <Image
                    src="/rick-hyne-cqNgo3sQ_24-unsplash.jpg"
                    fill
                    alt=""
                    className="object-cover"
                />


                <div className="absolute inset-0 bg-black/60"/>



                <div
                    ref={el => contentRef.current[1] = el}
                    className="relative z-10"
                >


                    <h2 className="
                        text-white
                        text-4xl
                        md:text-6xl
                        font-semibold
                    ">

                        Strong Foundations

                        <br/>

                        <span className="text-norms">
                            Exceptional Results
                        </span>

                    </h2>


                </div>


            </div>







            {/* FRAME 3 */}

            <div
                ref={el => scenesRef.current[2] = el}
                className="
                    absolute
                    inset-0
                    flex
                    items-center
                    px-8
                    lg:px-24
                "
            >

                <div
                    ref={heroImageRef}
                    className="
                        absolute
                        inset-0
                        origin-center
                    "
                >
                    <Image
                        src="/rick-hyne-cqNgo3sQ_24-unsplash.jpg"
                        fill
                        alt=""
                        className="object-cover"
                    />
                </div>


                <div className="absolute inset-0 bg-black/60"/>



                <div
                    ref={el => contentRef.current[2] = el}
                    className="relative z-10"
                >


                    <h2 className="
                        text-white
                        text-4xl
                        md:text-6xl
                        font-semibold
                    ">

                        Built For The Future

                    </h2>



                    <div className="
                        flex
                        gap-5
                        mt-10
                    ">


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








            {/* FRAME 4 */}

            <div
                ref={el => scenesRef.current[3] = el}
                className="
                    absolute
                    inset-0
                "
            >


                <div className="
                    relative
                    w-full
                    h-full
                ">


                    {
                        galleryImages.map((img, index) => (

                            <div
                                key={img}
                                className={`
                                    absolute
                                    border-[12px]
                                    border-black
                                    overflow-hidden
                                    shadow-2xl

                                    ${
                                        index === 0
                                        ? "left-[-5%] top-10 w-[28%] h-[55%]"
                                        :
                                        index === 1
                                        ? "left-[25%] top-[5%] w-[22%] h-[45%]"
                                        :
                                        index === 2
                                        ? "right-[5%] top-10 w-[30%] h-[60%]"
                                        :
                                        index === 3
                                        ? "left-[10%] bottom-[-10%] w-[25%] h-[50%]"
                                        :
                                        index === 4
                                        ? "left-[40%] bottom-[5%] w-[25%] h-[45%]"
                                        :
                                        index === 5
                                        ? "right-[25%] bottom-[-5%] w-[22%] h-[40%]"
                                        :
                                        index === 6
                                        ? "right-[-5%] top-[35%] w-[25%] h-[50%]"
                                        :
                                        "left-[55%] top-[20%] w-[18%] h-[35%]"
                                    }
                                `}
                            >


                                <Image
                                    src={img}
                                    fill
                                    alt=""
                                    className="
                                        object-cover
                                        transition
                                        duration-700
                                        hover:scale-110
                                    "
                                />


                            </div>

                        ))
                    }


                </div>





                <div className="
                    absolute
                    inset-0
                    bg-black/50
                "/>




                <div className="
                    absolute
                    inset-0
                    flex
                    items-center
                    px-8
                    lg:px-24
                ">


                    <div
                        ref={el => contentRef.current[3] = el}
                        className="relative z-10"
                    >


                        <h2 className="
                            text-white
                            text-5xl
                            md:text-7xl
                            font-semibold
                        ">

                            Your Vision.

                            <br/>

                            <span className="text-norms">
                                Our Execution.
                            </span>

                        </h2>



                        <div className="
                            flex
                            gap-5
                            mt-10
                        ">


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


            </div>


        </section>

    );
}