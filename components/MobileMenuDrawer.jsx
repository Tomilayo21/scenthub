"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Home, Building2, BadgeHelp, Info, Phone, Newspaper, Heart, GitCompare, Folder, Shield } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
// import AvatarMenu from "./AvatarMenu";

export default function MobileMenuDrawer({ isOpen, onClose }) {
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user;

  useEffect(() => {
    const scrollY = window.scrollY;

    if (isOpen) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      if (top) {
        window.scrollTo(0, parseInt(top || "0") * -1);
      }
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* DARK OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black backdrop-blur-sm z-[999] lg:hidden"
          />


          {/* SLIDE-IN DRAWER */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 1.05,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
            }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="
            fixed
            inset-0
            z-[1000]
            bg-black
            flex
            flex-col
            lg:hidden
            "
          >

            {/* HEADER */}
            <div className="flex items-center justify-between px-8 pt-8 mt-4">

              <div>

                  <p className="text-white uppercase tracking-[4px] text-xs">
                    Navigations
                  </p>

                  {user && (
                      <h3 className="text-white text-2xl font-bold mt-2">
                          Hello, {user.name.split(" ")[0]}
                      </h3>
                  )}

              </div>

              <button
                  onClick={onClose}
                  className="
                  w-12
                  h-12
                  rounded-full
                  bg-white/10
                  hover:bg-white/20
                  flex
                  items-center
                  justify-center
                  transition
                  cursor-pointer
                  "
              >
                  <X className="text-white" />
              </button>

          </div>


            {/* PROFILE */}
            {user && (
              <div className="px-6 py-6 border-b border-gray-50 flex items-center gap-4">
                {/* <AvatarMenu    /> */}
                <div className="flex flex-col">
                  <span className="text-lg font-semibold text-gray-200">{user.name}</span>
                  <span className="text-sm text-gray-500 truncate max-w-[180px]">{user.email}</span>
                  
                </div>
              </div>
            )}

            <div className="flex-1 flex items-center justify-center">

              <div className="flex flex-col items-center space-y-6 text-white text-3xl font-normal">

                <Link
                  href="/"
                  onClick={onClose}
                  className="flex justify-center hover:text-norms transition-colors"
                >
                  Home
                </Link>

                <Link
                  href="/properties"
                  onClick={onClose}
                  className="flex justify-center hover:text-norms transition-colors"
                >
                  Projects
                </Link>

                <Link
                  href="/company/services"
                  onClick={onClose}
                  className="flex justify-center hover:text-norms transition-colors"
                >
                  Services
                </Link>

                <Link
                  href="/company/about"
                  onClick={onClose}
                  className="flex justify-center hover:text-norms transition-colors"
                >
                  About Us
                </Link>

                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex justify-center hover:text-norms transition-colors"
                >
                  Contact
                </Link>

                <Link
                  href="/blog"
                  onClick={onClose}
                  className="flex justify-center hover:text-norms transition-colors"
                >
                  Blog
                </Link>

                {user && user.role === "admin" && (
                  <>

                    <div className="pt-4 pb-1 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">My Activity</div>
                  
                    <Link href="/admin" onClick={onClose} className="flex justify-center gap-3 py-3 border-b border-gray-200 dark:border-gray-800 hover:text-norms font-normal">
                      Admin Dashboard
                    </Link>

                  </>

                )}

              </div>

            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}