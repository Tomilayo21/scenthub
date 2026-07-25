// "use client";

// import React, { ReactNode } from "react";
// import "./globals.css";
// import { Outfit } from "next/font/google";
// import { AppContextProvider } from "@/context/AppContext";
// // import AnalyticsTracker from "@/components/admin/AnalyticsTracker";
// import { Toaster } from "react-hot-toast";
// import { SessionProvider } from "next-auth/react";
// import Script from "next/script";

// const outfit = Outfit({
//   subsets: ["latin"],
//   weight: ["300", "400", "500"],
// });

// interface RootLayoutProps {
//   children: ReactNode;
// }

// export default function RootLayout({ children }: RootLayoutProps) {
//   return (
//     <html lang="en" className={outfit.className}>
//       <body className="antialiased">
//         <SessionProvider>
//           <AppContextProvider>
//             <Toaster position="top-right" />
//             {/* <AnalyticsTracker>{children}</AnalyticsTracker> */}
//             {children}
//           </AppContextProvider>
//         </SessionProvider>

//         {/* Elfsight Script — works correctly in TSX */}
//         <Script
//           src="https://static.elfsight.com/platform/platform.js"
//           strategy="afterInteractive"
//         />
//       </body>
//     </html>
//   );
// }















































import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { ReactNode } from "react";
import Providers from "./providers";
import Script from "next/script";


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});


export const metadata: Metadata = {
  title: {
    default: "Scenthub Realty & Construction Limited",
    template: "%s | Scenthub Realty",
  },

  description:
    "Scenthub Realty & Construction Limited provides professional construction, renovation, project management, and real estate services in Nigeria.",

  icons: {
    icon: "/logo/1001366707-removebg-preview.png",
  },
};


interface RootLayoutProps {
  children: ReactNode;
}


export default function RootLayout({
  children,
}: RootLayoutProps) {

  return (
    <html lang="en" className={outfit.className}>

      <body className="antialiased">

        <Providers>
          {children}
        </Providers>


        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="afterInteractive"
        />

      </body>

    </html>
  );
}