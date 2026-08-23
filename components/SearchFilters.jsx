"use client";

import { useState } from "react";


const categories = [
    "All",
    "Residential",
    "Commercial",
    "Industrial",
    "Infrastructure",
    "Hospitality",
    "Healthcare",
    "Education",
];


const statuses = [
    "All",
    "Completed",
    "Ongoing",
    "Planned",
];


const projectTypes = [
    "All",
    "New Construction",
    "Renovation",
    "Interior Fit-Out",
    "Civil Works",
    "Design & Build",
];



export default function SearchFilters() {


    const [search,setSearch] = useState("");

    const [category,setCategory] = useState("All");

    const [status,setStatus] = useState("All");

    const [type,setType] = useState("All");



    function resetFilters(){

        setSearch("");

        setCategory("All");

        setStatus("All");

        setType("All");

    }



    return (

        <div
            className="
                bg-white
                rounded-3xl
                border
                border-gray-100
                shadow-sm
                p-6
                lg:p-8
            "
        >


            <div
                className="
                    flex
                    items-center
                    justify-between
                    mb-8
                    flex-wrap
                    gap-4
                "
            >

                <div>

                    <p
                        className="
                            text-orange-600
                            text-sm
                            uppercase
                            tracking-[0.25em]
                            font-medium
                        "
                    >
                        Find A Project
                    </p>


                    <h3
                        className="
                            text-2xl
                            font-bold
                            text-gray-900
                            mt-2
                        "
                    >
                        Search Our Portfolio
                    </h3>

                </div>



                <button

                    onClick={resetFilters}

                    className="
                        text-sm
                        text-gray-500
                        hover:text-orange-600
                        transition
                    "
                >
                    Reset Filters
                </button>


            </div>




            {/* Search */}

            <div
                className="
                    mb-6
                "
            >

                <input

                    value={search}

                    onChange={(e)=>setSearch(e.target.value)}

                    placeholder="
                        Search projects...
                    "

                    className="
                        w-full
                        h-14
                        px-5
                        rounded-xl
                        border
                        border-gray-200
                        outline-none
                        focus:border-orange-500
                        transition
                    "

                />

            </div>




            {/* Filters */}

            <div
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-3
                    gap-5
                "
            >



                <select

                    value={category}

                    onChange={(e)=>setCategory(e.target.value)}

                    className="
                        h-14
                        px-4
                        rounded-xl
                        border
                        border-gray-200
                        outline-none
                        bg-white
                        focus:border-orange-500
                    "
                >

                    {
                        categories.map(item=>(

                            <option 
                                key={item}
                            >
                                {item}
                            </option>

                        ))
                    }

                </select>





                <select

                    value={type}

                    onChange={(e)=>setType(e.target.value)}

                    className="
                        h-14
                        px-4
                        rounded-xl
                        border
                        border-gray-200
                        outline-none
                        bg-white
                        focus:border-orange-500
                    "
                >

                    {
                        projectTypes.map(item=>(

                            <option 
                                key={item}
                            >
                                {item}
                            </option>

                        ))
                    }

                </select>





                <select

                    value={status}

                    onChange={(e)=>setStatus(e.target.value)}

                    className="
                        h-14
                        px-4
                        rounded-xl
                        border
                        border-gray-200
                        outline-none
                        bg-white
                        focus:border-orange-500
                    "
                >

                    {
                        statuses.map(item=>(

                            <option 
                                key={item}
                            >
                                {item}
                            </option>

                        ))
                    }

                </select>



            </div>


        </div>

    );
}