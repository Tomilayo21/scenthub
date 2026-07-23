"use client";

import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
    return (
        <>
            <Navbar />

            <main className="bg-white text-black pt-24">


                {/* CONTACT AREA */}
                <section className="
                    px-6
                    md:px-12
                    py-24
                    mt-16
                    md:mt-8
                    md:py-36
                ">


                    <div className="
                        max-w-7xl
                        mx-auto
                        grid
                        lg:grid-cols-2
                        gap-20
                        lg:gap-28
                        items-start
                    ">



                    {/* LEFT */}
                    <div className="max-w-xl">

                        <h2 className="
                            text-4xl
                            md:text-5xl
                            lg:text-6xl
                            font-bold
                            leading-[1.1]
                            tracking-tight
                        ">
                            Let's start your
                            <br />
                            next project.
                        </h2>

                        <p className="
                            mt-10
                            text-lg
                            leading-9
                            text-gray-600
                            max-w-lg
                        ">
                            We'd love to hear about your project.
                            Whether you're planning a residential,
                            commercial or industrial development,
                            our team is ready to help.
                        </p>



                        <div className="mt-12 border-t border-gray-200">

                            {[
                                {
                                    title: "Office",
                                    value: (
                                        <>
                                            52 Old Otta Road, Ile Epo,
                                            <br />
                                            Oke Odo, Lagos, Nigeria
                                        </>
                                    )
                                },
                                {
                                    title: "Phone",
                                    value: "+234 817 865 7674"
                                },
                                {
                                    title: "Email",
                                    value: "info@scenthubrealtyconstruction.com"
                                },
                                {
                                    title: "Hours",
                                    value: (
                                        <>
                                            Monday – Friday
                                            <br />
                                            8:00 AM – 6:00 PM
                                        </>
                                    )
                                }
                            ].map((item) => (

                                <div
                                    key={item.title}
                                    className="
                                        grid
                                        grid-cols-12
                                        gap-8
                                        py-10
                                        border-b
                                        border-gray-200
                                        items-start
                                    "
                                >

                                    {/* Label */}
                                    <div className="col-span-3">

                                        <p className="
                                            text-sm
                                            uppercase
                                            tracking-[0.2em]
                                            text-gray-400
                                            font-medium
                                            mt-2
                                        ">
                                            {item.title}
                                        </p>

                                    </div>


                                    {/* Value */}
                                    <div className="col-span-8">

                                        <p className="
                                            text-2xl
                                            md:text-2xl
                                            font-light
                                            leading-snug
                                            text-black
                                            max-w-md
                                        ">
                                            {item.value}
                                        </p>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>


                        {/* FORM CARD */}
                        <div className="lg:pl-12">

                            <div className="max-w-xl">

                                <p className="
                                    uppercase
                                    tracking-[0.3em]
                                    text-sm
                                    text-gray-500
                                    mb-5
                                ">
                                    Request a Quote
                                </p>

                                <h3 className="
                                    text-4xl
                                    md:text-5xl
                                    font-bold
                                    leading-tight
                                    mb-6
                                ">
                                    Tell us about
                                    <br />
                                    your project.
                                </h3>

                                <p className="
                                    text-gray-600
                                    text-lg
                                    leading-8
                                    max-w-md
                                    mb-14
                                ">
                                    Complete the form below and our team will
                                    get back to you within one business day.
                                </p>

                            </div>


                            <form className="space-y-10">

                                <div className="
                                    grid
                                    md:grid-cols-2
                                    gap-x-8
                                    gap-y-10
                                ">

                                    <div>

                                        <label className="
                                            block
                                            text-sm
                                            font-medium
                                            mb-3
                                        ">
                                            Full Name
                                        </label>

                                        <input
                                            type="text"
                                            className="
                                                w-full
                                                border-0
                                                border-b
                                                border-gray-300
                                                bg-transparent
                                                pb-4
                                                text-lg
                                                outline-none
                                                focus:border-black
                                                transition-colors
                                            "
                                        />

                                    </div>


                                    <div>

                                        <label className="
                                            block
                                            text-sm
                                            font-medium
                                            mb-3
                                        ">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            className="
                                                w-full
                                                border-0
                                                border-b
                                                border-gray-300
                                                bg-transparent
                                                pb-4
                                                text-lg
                                                outline-none
                                                focus:border-black
                                                transition-colors
                                            "
                                        />

                                    </div>

                                </div>


                                <div>

                                    <label className="
                                        block
                                        text-sm
                                        font-medium
                                        mb-3
                                    ">
                                        Project Type
                                    </label>

                                    <input
                                        type="text"
                                        className="
                                            w-full
                                            border-0
                                            border-b
                                            border-gray-300
                                            bg-transparent
                                            pb-4
                                            text-lg
                                            outline-none
                                            focus:border-black
                                            transition-colors
                                        "
                                    />

                                </div>


                                <div>

                                    <label className="
                                        block
                                        text-sm
                                        font-medium
                                        mb-3
                                    ">
                                        Project Details
                                    </label>

                                    <textarea
                                        rows={5}
                                        className="
                                            w-full
                                            border-0
                                            border-b
                                            border-gray-300
                                            bg-transparent
                                            resize-none
                                            pb-4
                                            text-lg
                                            outline-none
                                            focus:border-black
                                            transition-colors
                                        "
                                    />

                                </div>


                                <button
                                    className="
                                        inline-flex
                                        items-center
                                        gap-3
                                        text-lg
                                        font-semibold
                                        group
                                    "
                                >

                                    Send Inquiry

                                    <ArrowRight
                                        size={20}
                                        className="
                                            transition-transform
                                            duration-300
                                            group-hover:translate-x-1
                                        "
                                    />

                                </button>

                            </form>

                        </div>

                    </div>


                </section>



                {/* MAP */}
                <section className="
                    px-6
                    md:px-12
                    pb-32
                ">


                    <div className="
                        max-w-7xl
                        mx-auto
                        h-[450px]
                        bg-gray-100
                        border
                        border-gray-200
                        flex
                        items-center
                        justify-center
                    ">

                        <p className="
                            uppercase
                            tracking-[0.3em]
                            text-sm
                            text-gray-500
                        ">
                            Google Map Location
                        </p>


                    </div>


                </section>


            </main>


            <Footer />

        </>
    );
}