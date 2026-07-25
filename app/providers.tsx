"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";


interface ProvidersProps {
  children: ReactNode;
}


export default function Providers({
  children,
}: ProvidersProps) {

  return (

    <SessionProvider>

      <AppContextProvider>

        <Toaster position="top-right" />

        {children}

      </AppContextProvider>

    </SessionProvider>

  );
}
