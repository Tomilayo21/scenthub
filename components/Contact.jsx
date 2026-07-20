"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section className="px-6 md:px-12 lg:px-24 py-20 bg-black text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Left Content */}
                <div>
                    <p className="uppercase tracking-[5px] text-sm text-gray-400 mb-4">
                        Contact Us
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Let's Build Something <br />
                        Great Together
                    </h2>

                    <p className="text-gray-400 max-w-lg mb-8">
                        Have a project in mind or need more information? 
                        Reach out to our team and let's discuss how we can help 
                        bring your vision to life.
                    </p>

                    <div className="space-y-5">

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center">
                                <Phone size={20} />
                            </div>

                            <div>
                                <p className="text-sm text-gray-400">
                                    Phone
                                </p>
                                <p className="font-medium">
                                    +234 800 000 0000
                                </p>
                            </div>
                        </div>


                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center">
                                <Mail size={20} />
                            </div>

                            <div>
                                <p className="text-sm text-gray-400">
                                    Email
                                </p>
                                <p className="font-medium">
                                    info@scenthubrealtyconstruction.com
                                </p>
                            </div>
                        </div>


                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center">
                                <MapPin size={20} />
                            </div>

                            <div>
                                <p className="text-sm text-gray-400">
                                    Location
                                </p>
                                <p className="font-medium">
                                    Lagos, Nigeria
                                </p>
                            </div>
                        </div>

                    </div>
                </div>


                {/* Right Form */}
                <div className="bg-white text-black p-8 md:p-10 rounded-md">

                    <h3 className="text-2xl font-bold mb-6">
                        Send Us A Message
                    </h3>


                    <form className="space-y-5">

                        {/* Name + Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border border-gray-300 px-4 py-3 rounded-md outline-none focus:border-black"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full border border-gray-300 px-4 py-3 rounded-md outline-none focus:border-black"
                            />

                        </div>


                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full border border-gray-300 px-4 py-3 rounded-md outline-none focus:border-black"
                        />


                        <textarea
                            rows="4"
                            placeholder="Your Message"
                            className="w-full border border-gray-300 px-4 py-3 rounded-md outline-none focus:border-black resize-none"
                        />


                        <button
                            type="submit"
                            className="flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
                        >
                            Send Message
                            <ArrowRight size={18} />
                        </button>

                    </form>

                </div>

            </div>
        </section>
    );
}