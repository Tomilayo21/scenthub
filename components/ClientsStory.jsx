"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";

gsap.registerPlugin(ScrollTrigger);



const testimonials = [
  {
    id: 1,
    name: "Tunde Adeyemi",
    role: "Property Developer",
    company: "Adeyemi Properties, Lagos",
    review:
      "Working with the team was a great experience. From the initial planning stage to the final finishing, they handled every aspect professionally and delivered a quality building that exceeded our expectations.",
  },
  {
    id: 2,
    name: "Mrs. Amaka Okafor",
    role: "Homeowner",
    company: "Residential Project, Lekki",
    review:
      "Building a home in Nigeria can be challenging, but their team made the process seamless. Their attention to detail, communication, and commitment to quality gave us complete confidence throughout the project.",
  },
  {
    id: 3,
    name: "Engr. Chinedu Eze",
    role: "Project Consultant",
    company: "Eze Construction Partners",
    review:
      "Their professionalism and technical expertise stand out. They understand construction standards and consistently deliver projects with excellent workmanship and proper project management.",
  },
  {
    id: 4,
    name: "Mrs. Bola Williams",
    role: "Business Owner",
    company: "BW Enterprises, Lagos",
    review:
      "The renovation of our commercial space was handled with great care. They delivered on schedule while maintaining high-quality finishing and ensuring minimal disruption to our operations.",
  },
  {
    id: 5,
    name: "Femi Balogun",
    role: "Real Estate Investor",
    company: "Balogun Developments",
    review:
      "Finding a reliable construction partner is not easy, but this team has proven to be dependable. Their transparency, workmanship, and ability to meet deadlines make them highly recommended.",
  },
  {
    id: 6,
    name: "Mrs. Ngozi Nwosu",
    role: "Homeowner",
    company: "Family Residence, Abuja",
    review:
      "Every stage of our building project was handled professionally. The finishing quality, communication, and dedication of the team made our dream home become a reality.",
  },
];


export default function ClientsStory() {

    const sectionRef = useRef(null);


  const autoplay = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );


  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop:true,
      align:"start",
      dragFree:false,
    },
    [
      autoplay.current
    ]
  );


  const [selectedIndex,setSelectedIndex] = useState(0);



  const [isDragging,setIsDragging] = useState(false);



  const scrollPrev = useCallback(()=>{
    emblaApi?.scrollPrev();
  },[emblaApi]);



  const scrollNext = useCallback(()=>{
    emblaApi?.scrollNext();
  },[emblaApi]);



  useEffect(()=>{

    if(!emblaApi) return;


    const onSelect = ()=>{

      setSelectedIndex(
        emblaApi.selectedScrollSnap()
      );

    };


    emblaApi.on(
      "select",
      onSelect
    );


    onSelect();


  },[emblaApi]);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {


        gsap.fromTo(
        ".testimonial-title",
        {
            opacity:0,
            y:100,
        },
        {
            opacity:1,
            y:0,
            duration:1.2,
            ease:"power3.out",
            scrollTrigger:{
            trigger:".testimonial-title",
            start:"top 85%",
            toggleActions:"play none none reverse",
            }
        }
        );



        gsap.fromTo(
        ".testimonial-link",
        {
            opacity:0,
            x:100,
        },
        {
            opacity:1,
            x:0,
            duration:1,
            ease:"power3.out",
            scrollTrigger:{
            trigger:".testimonial-link",
            start:"top 85%",
            toggleActions:"play none none reverse",
            }
        }
        );




        gsap.fromTo(
        ".testimonial-card",
        {
            opacity:0,
            y:80,
        },
        {
            opacity:1,
            y:0,
            duration:1,
            stagger:0.15,
            ease:"power3.out",
            scrollTrigger:{
            trigger:".testimonial-card",
            start:"top 90%",
            toggleActions:"play none none reverse",
            }
        }
        );




        gsap.fromTo(
        ".testimonial-controls",
        {
            opacity:0,
            y:50,
        },
        {
            opacity:1,
            y:0,
            duration:1,
            ease:"power3.out",
            scrollTrigger:{
            trigger:".testimonial-controls",
            start:"top 90%",
            toggleActions:"play none none reverse",
            }
        }
        );



        setTimeout(()=>{
        ScrollTrigger.refresh();
        },100);



    },sectionRef);



    return ()=>ctx.revert();


    },[]);



  return (

        <section
            ref={sectionRef}
            className="py-24 px-6 md:px-12 lg:px-24 text-black"
            >

            <div className="max-w-7xl mx-auto">


            {/* HEADER */}

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">

                <div className="testimonial-title">

                    <p className="uppercase tracking-[5px] text-sm text-norms mb-3">
                        Testimonials
                    </p>


                    <h2 className="text-4xl md:text-5xl font-bold">
                        What Our Clients Say
                    </h2>


                    <div className="w-24 h-1 bg-norms mt-6 rounded-full"/>


                </div>

                <Link
                    href="/testimonials"
                    className="testimonial-link mt-6 md:mt-0 text-norms font-medium flex items-center gap-2"
                >
                    See All →
                </Link>

            </div>




            {/* CAROUSEL */}


            <div
            ref={emblaRef}

            onMouseDown={()=>{
            setIsDragging(true)
            }}

            onMouseUp={()=>{
            setIsDragging(false)
            }}

            className={`
            overflow-hidden
            cursor-${isDragging ? "grabbing":"grab"}
            `}
            >


            <div className="flex -ml-6">
                {
                testimonials.map((item,index)=>(

                <div
                    key={item.id}
                    className="
                        testimonial-card
                        flex-[0_0_100%]
                        md:flex-[0_0_65%]
                        lg:flex-[0_0_55%]
                        pl-8
                    "
                >


                <TestimonialCard
                testimonial={item}
                />


                </div>


                ))
                }
            </div>


            </div>





            {/* CONTROLS */}


            <div className="testimonial-controls mt-12 flex items-center justify-between">


                {/* INDICATOR */}

                <div className="flex items-center gap-3">


                {
                testimonials.map((_,index)=>(

                <button

                key={index}

                onClick={()=>emblaApi?.scrollTo(index)}

                className={`
                rounded-full transition-all duration-300

                ${
                selectedIndex===index
                ?
                "w-12 h-2 bg-norms"
                :
                "w-2 h-2 bg-gray-300"
                }

                `}

                />

                ))
                }


            </div>





            {/* ARROWS */}


            <div className="flex gap-4">


            <button
            onClick={scrollPrev}

            className="
            w-12
            h-12
            rounded-full
            border
            border-gray-300
            flex
            items-center
            justify-center
            hover:bg-norms
            hover:text-white
            transition
            "
            >

            <ChevronLeft size={22}/>

            </button>



            <button
            onClick={scrollNext}

            className="
            w-12
            h-12
            rounded-full
            border
            border-gray-300
            flex
            items-center
            justify-center
            hover:bg-norms
            hover:text-white
            transition
            "
            >

            <ChevronRight size={22}/>

            </button>



            </div>


            </div>



            </div>

        </section>

  );
}