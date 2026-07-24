"use client";
import BackToTop from "@/components/BackToTop";
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
    FaTwitter,
    FaWhatsapp,
} from "react-icons/fa";

console.log(BackToTop);


export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

    return (
        <>
            <footer className="bg-gray-50 text-black relative">

                {/* Main Footer */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-6 md:py-6">
                    {/* ================= MOBILE ================= */}
                    <div className="lg:hidden">

                        {/* Brand */}
                        <div className="text-center max-w-md mx-auto">

                            <h2 className="uppercase tracking-[4px] text-sm font-semibold">
                                Scenthub Realty
                            </h2>

                            <p className="uppercase tracking-[3px] text-xs text-gray-500 mt-2">
                                & Construction Limited
                            </p>

                            <p className="mt-5 md:mt-8 text-gray-600 leading-7 md:leading-8">
                                We deliver innovative real estate and construction
                                solutions with exceptional craftsmanship, quality,
                                and attention to detail—building spaces designed
                                to stand the test of time.
                            </p>

                        </div>

                        {/* Company + Contact */}
                        <div className="grid grid-cols-2 gap-6 mt-10 md:mt-16">

                            {/* Company */}
                            <div className="justify-self-end pr-8">

                                <h3 className="uppercase tracking-[3px] text-sm font-semibold mb-5">
                                    Company
                                </h3>

                                <ul className="space-y-5 text-gray-600">

                                    <li>
                                        <a
                                            href="/company/about"
                                            className="hover:text-black transition-colors"
                                        >
                                            About Us
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="/projects"
                                            className="hover:text-black transition-colors"
                                        >
                                            Projects
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            className="hover:text-black transition-colors"
                                        >
                                            Careers
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="/contact"
                                            className="hover:text-black transition-colors"
                                        >
                                            Contact
                                        </a>
                                    </li>

                                </ul>

                            </div>


                            {/* Contact */}
                            <div>

                                <h3 className="uppercase tracking-[3px] text-sm font-semibold mb-5">
                                    Contact
                                </h3>

                                <div className="space-y-4 md:space-y-6 text-gray-600">

                                    <div className="flex items-start gap-4">
                                        {/* <MapPin size={18} className="mt-1 shrink-0" /> */}

                                        <p className="leading-7">
                                            52, Old Otta Road,<br />
                                            Ile Epo, Oke Odo,<br />
                                            Lagos, Nigeria
                                        </p>
                                    </div>


                                    <div className="flex items-center gap-4">
                                        {/* <Phone size={18} /> */}
                                        <div className="flex flex-col gap-2">
                                            {/* <Phone size={18} /> */}
                                            <p>+234 817 865 7674,</p>
                                            <p>+234 706 897 8759</p>
                                        </div>
                                    </div>


                                    <div className="flex items-start gap-4">
                                        {/* <Mail size={18} className="mt-1 shrink-0" /> */}
                                        <p className="break-all">
                                            info@scenthubrealtyconstruction.com
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                    {/* ================= DESKTOP ================= */}
                    <div className="hidden lg:block">

                        <div className="grid grid-cols-3 gap-16 lg:gap-20">


                            {/* Brand */}
                            <div className="text-center lg:text-left">

                                <h2 className="uppercase tracking-[4px] text-sm font-semibold">
                                    Scenthub Realty
                                </h2>

                                <p className="uppercase tracking-[3px] text-xs text-gray-500 mt-2">
                                    & Construction Limited
                                </p>

                                <p className="mt-8 text-gray-600 leading-8 max-w-md">
                                    We deliver innovative real estate and construction
                                    solutions with exceptional craftsmanship, quality,
                                    and attention to detail—building spaces designed
                                    to stand the test of time.
                                </p>

                            </div>



                            {/* Company */}

                            <div className="text-center">

                                <h3 className="uppercase tracking-[3px] text-sm font-semibold mb-8">
                                    Company
                                </h3>

                                <ul className="space-y-5 text-gray-600">

                                    <li>
                                        <a
                                            href="/company/about"
                                            className="hover:text-black transition-colors"
                                        >
                                            About Us
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="/properties"
                                            className="hover:text-black transition-colors"
                                        >
                                            Projects
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            className="hover:text-black transition-colors"
                                        >
                                            Careers
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="/contact"
                                            className="hover:text-black transition-colors"
                                        >
                                            Contact
                                        </a>
                                    </li>

                                </ul>

                            </div>



                            {/* Contact */}

                            <div>

                                <h3 className="uppercase tracking-[3px] text-sm font-semibold mb-8">
                                    Contact
                                </h3>

                                <div className="space-y-6 text-gray-600">

                                    <div className="flex items-start gap-4">

                                        {/* <MapPin
                                            size={18}
                                            className="mt-1 shrink-0"
                                        /> */}

                                        <p className="leading-7">
                                            52, Old Otta Road,
                                            Ile Epo, Oke Odo,
                                            Lagos, Nigeria
                                        </p>

                                    </div>


                                    <div className="flex items-center gap-4">

                                        {/* <Phone
                                            size={18}
                                            className="shrink-0"
                                        /> */}

                                        <p className="break-all">
                                            +234 817 865 7674, +234 706 897 8759
                                        </p>

                                    </div>


                                    <div className="flex items-start gap-4">

                                        {/* <Mail
                                            size={18}
                                            className="mt-1 shrink-0"
                                        /> */}

                                        <p className="break-all">
                                            info@scenthubrealtyconstruction.com
                                        </p>

                                    </div>

                                </div>

                            </div>


                        </div>

                    </div>

                </div>



                {/* Bottom */}
                <div className="border-t border-gray-200">

                    <div className="
                        max-w-7xl
                        mx-auto
                        px-6
                        md:px-12
                        lg:px-16
                        py-2
                        flex
                        items-center
                        justify-between
                    ">

                        {/* Center Content */}
                        <div className="flex-1 flex flex-col items-center gap-5">

                            {/* Copyright */}
                            <p className="text-sm text-gray-500 text-center">
                                © {new Date().getFullYear()} Scenthub Realty &
                                Construction Ltd. All rights reserved.
                            </p>


                            {/* Privacy + Terms */}
                            <div className="flex items-center gap-6 text-sm">

                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-black transition-colors"
                                >
                                    Privacy Policy
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-black transition-colors"
                                >
                                    Terms & Conditions
                                </a>

                            </div>


                            {/* Social Icons */}
                            <div className="flex items-center gap-3">

                                {[
                                    {
                                        icon: FaFacebookF,
                                        link: "https://facebook.com/senthubrealtycontructionltd",
                                    },
                                    {
                                        icon: FaInstagram,
                                        link: "https://instagram.com/senthubrealtycontructionltd",
                                    },
                                    {
                                        icon: FaLinkedinIn,
                                        link: "https://linkedin.com/company/yourcompany",
                                    },
                                    {
                                        icon: FaTwitter,
                                        link: "https://twitter.com/yourpage",
                                    },
                                    {
                                        icon: FaWhatsapp,
                                        link: `https://wa.me/2347068978759?text=${encodeURIComponent(
                                            "Hi, I'm reaching out to learn more about your projects and services."
                                        )}`
                                    },
                                ].map(({ icon: Icon, link }, index) => (

                                    <a
                                        key={index}
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            w-10
                                            h-10
                                            rounded-full
                                            border
                                            border-gray-300
                                            flex
                                            items-center
                                            justify-center
                                            hover:bg-black
                                            hover:text-white
                                            hover:border-black
                                            transition-all
                                            duration-300
                                        "
                                    >
                                        <Icon size={16} />
                                    </a>

                                ))}

                            </div>

                        </div>


                        {/* Back To Top Right */}
                        <BackToTop />

                    </div>

                </div>

            </footer>
        </>
    );
}