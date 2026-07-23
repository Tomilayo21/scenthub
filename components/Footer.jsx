import {
    Mail,
    Phone,
    MapPin,
    ArrowUpRight
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter
} from "react-icons/fa";


export default function Footer() {

    return (
        <footer className="text-black bg-gray-50">

            {/* Main Footer */}
            <div className="px-6 md:px-12 lg:px-24 py-16">

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">


                    {/* Brand */}
                    <div className="col-span-2 lg:col-span-1">

                        <h2 className="font-medium uppercase text-sm tracking-[3px] text-black">
                            Scenthub Realty
                        </h2>

                        <p className="text-xs uppercase tracking-wide text-gray-500 mt-1">
                            & Construction Limited
                        </p>


                        <p className="text-gray-500 leading-relaxed max-w-sm mt-5">
                            We deliver innovative real estate and construction solutions with
                            exceptional craftsmanship, quality, and attention to detail.
                            Building spaces that stand the test of time.
                        </p>


                        <div className="flex gap-4 mt-7">

                            <a 
                                href="#"
                                className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
                            >
                                <FaFacebookF size={18}/>
                            </a>

                            <a 
                                href="#"
                                className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
                            >
                                <FaInstagram size={18}/>
                            </a>

                            <a 
                                href="#"
                                className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
                            >
                                <FaLinkedinIn size={18}/>
                            </a>

                            <a 
                                href="#"
                                className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
                            >
                                <FaTwitter size={18}/>
                            </a>

                        </div>

                    </div>



                    {/* Navigation */}
                    <div>

                        <h3 className="text-lg font-medium mb-6">
                            Company
                        </h3>

                        <ul className="space-y-4 text-gray-500">

                            <li>
                                <a href="/company/about" className="hover:text-gray-400 transition">
                                    About Us
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-gray-400 transition">
                                    Our Projects
                                </a>
                            </li>

                            <li>
                                <a href="/company/services" className="hover:text-gray-400 transition">
                                    Services
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-gray-400 transition">
                                    Careers
                                </a>
                            </li>

                            <li>
                                <a href="/contact" className="hover:text-gray-400 transition">
                                    Contact
                                </a>
                            </li>

                        </ul>

                    </div>




                    {/* Services */}
                    <div>

                        <h3 className="text-lg font-medium mb-6">
                            Services
                        </h3>


                        <ul className="space-y-4 text-gray-500">

                            <li>
                                <a href="#" className="hover:text-gray-400 transition">
                                    Construction
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-gray-400 transition">
                                    Renovation
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-gray-400 transition">
                                    Architecture
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-gray-400 transition">
                                    Project Management
                                </a>
                            </li>

                        </ul>

                    </div>




                    {/* Contact */}
                    <div className="col-span-2 lg:col-span-1">

                        <h3 className="text-lg font-medium mb-6">
                            Contact
                        </h3>


                        <div className="space-y-5 text-gray-500">


                            <div className="flex gap-3">

                                <MapPin 
                                    size={20}
                                    className="text-black shrink-0"
                                />

                                <p>
                                    52, Old Otta Road, Ile Epo, Oke Odo, Lagos, Nigeria
                                </p>

                            </div>



                            <div className="flex gap-3">

                                <Phone 
                                    size={20}
                                    className="text-black shrink-0"
                                />

                                <p>
                                    +234 817 865 7674
                                </p>

                            </div>



                            <div className="flex gap-3 items-start">

                                <Mail 
                                    size={20}
                                    className="text-black shrink-0 mt-1"
                                />

                                <p className="break-all">
                                    info@scenthubrealtyconstruction.com
                                </p>

                            </div>


                        </div>


                        {/* <a
                            href="#"
                            className="inline-flex items-center gap-2 mt-8 border border-black px-5 py-3 rounded-full hover:bg-gray-800 hover:text-black transition"
                        >
                            Get A Quote
                            <ArrowUpRight size={17}/>
                        </a> */}


                    </div>


                </div>

            </div>



            {/* Bottom Bar */}
            <div className="border-t border-gray-800 px-6 md:px-12 lg:px-24 py-6">

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

                    <p>
                        © {new Date().getFullYear()} Scenthub Realty & Construction Ltd. All rights reserved.
                    </p>


                    <div className="flex gap-6">

                        <a href="#" className="hover:text-gray-400 transition">
                            Privacy Policy
                        </a>

                        <a href="#" className="hover:text-gray-400 transition">
                            Terms & Conditions
                        </a>

                    </div>

                </div>

            </div>


        </footer>
    );
}