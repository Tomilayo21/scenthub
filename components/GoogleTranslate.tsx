"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

export default function GoogleTranslate() {

  useEffect(() => {

    window.googleTranslateElementInit = () => {

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "fr,es,de,it,ar,pt,zh",
          autoDisplay: false,
        },
        "google_translate_element"
      );

    };


    const script = document.createElement("script");

    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

    script.async = true;

    document.body.appendChild(script);

  }, []);


  function changeLanguage(lang:string){

    const select =
      document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement;


    if(select){

      select.value = lang;

      select.dispatchEvent(
        new Event("change")
      );

    }

  }


  return (
    <>
      {/* Hidden Google Widget */}
      <div 
        id="google_translate_element"
        className="hidden"
      />


      {/* Your Custom Dropdown */}
      <select
        onChange={(e)=>changeLanguage(e.target.value)}
        className="
          rounded-lg
          border
          px-3
          py-2
          text-sm
          bg-white
        "
      >
        <option value="en">
          🇬🇧 English
        </option>

        <option value="fr">
          🇫🇷 French
        </option>

        <option value="es">
          🇪🇸 Spanish
        </option>

        <option value="de">
          🇩🇪 German
        </option>

        <option value="ar">
          🇸🇦 Arabic
        </option>

      </select>
    </>
  );
}