"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";


export default function ProjectsGrid({
    projects
}) {


    return (

        <div
            id="projects"
            className="
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3
                gap-8
            "
        >


            {
                projects.map((project,index)=>(


                    <motion.div

                        key={project._id}

                        initial={{
                            opacity:0,
                            y:40
                        }}

                        whileInView={{
                            opacity:1,
                            y:0
                        }}

                        viewport={{
                            once:true,
                            amount:0.2
                        }}

                        transition={{
                            duration:0.5,
                            delay:index * 0.08
                        }}

                    >

                        <ProjectCard
                            project={project}
                        />


                    </motion.div>


                ))
            }



        </div>

    );
}