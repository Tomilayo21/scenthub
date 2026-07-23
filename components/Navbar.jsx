"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";
import { useAppContext } from "@/context/AppContext";
// import AvatarMenu from "./AvatarMenu";
// import Signup from "@/components/Signup";
import MobileMenuDrawer from "@/components/MobileMenuDrawer";

const Navbar = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showSignup, setShowSignup] = useState(false);


  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ESC close for modal
  const handleEsc = useCallback((e) => {
    if (e.key === "Escape") setShowSignup(false);
  }, []);

  useEffect(() => {
    if (showSignup) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [showSignup, handleEsc]);


  if (!mounted) return null;

  return (
    <>
      <nav
        id="main-navbar"
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-black backdrop-blur-md shadow-xl border-b border-amber-500/20"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 lg:px-8">

          {/* Logo */}
          <div
            onClick={() => router.push("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src="/default-logo.png"
              alt="logo"
              className="h-12 w-auto"
            />

            <div>
              <h2
                className={`font-medium uppercase text-xs tracking-wide ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                Scenthub realty
              </h2>

              <p className="text-xs uppercase tracking-wide text-norms">
                 & Construction limited
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {[
              ["Home", "/"],
              ["Projects", "/projects"],
              ["Services", "/company/services"],
              ["About", "/company/about"],
              ["Blog", "/blog"],
            ].map(([name, href]) => (
              <Link
                key={name}
                href={href}
                className={`relative font-normal tracking-wide after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-norms after:transition-all hover:after:w-full ${
                  isScrolled
                    ? "text-white hover:text-norms"
                    : "text-white hover:text-norms"
                }`}
              >
                {name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => router.push("/contact")}
              className="bg-white hover:bg-norms text-black hover:text-white cursor-pointer 
                font-medium tracking-wide px-7 py-3 rounded rounded-full transition-all duration-300 
                shadow-lg hover:shadow-amber-500/30"
            >
              {/* Request a Quote */}
              Contact
            </button>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden text-white p-2"
          >
            <Menu size={30} strokeWidth={2.5} />
          </button>

        </div>
      </nav>


      {/* ⭐ SEPARATE DRAWER COMPONENT ⭐ */}
      <MobileMenuDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        user={user}
      />

      {showSignup && <Signup onClose={() => setShowSignup(false)} mode="signin" />}
    </>
  );
};

export default Navbar;