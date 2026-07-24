"use client";

export default function BackToTop() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className="
                w-10
                h-10
                border
                border-gray-300
                flex
                items-center
                justify-center
                text-sm
                hover:bg-black
                hover:text-white
                transition-all
                duration-300
                cursor-pointer
            "
        >
            ↑
        </button>
    );
}
