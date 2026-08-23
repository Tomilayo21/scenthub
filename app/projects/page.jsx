import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectHeroSection from "@/components/ProjectHeroSection";
import ProjectStats from "@/components/ProjectStats";
import SearchFilters from "@/components/SearchFilters";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectsGrid from "@/components/ProjectsGrid";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

import { projects } from "@/data/projects";


export const metadata = {
    title: "Our Projects | Scenthub Realty & Construction",
    description:
        "Explore our portfolio of residential, commercial, industrial and infrastructure construction projects.",
};


export default function ProjectsPage() {

    const featuredProject = projects.find(
        (project) => project.featured
    );


    return (
        <>
            <Navbar/>
            <main className="bg-white overflow-hidden">
                


                {/* HERO */}
                <ProjectHeroSection />


                {/* COMPANY STATS */}
                <ProjectStats />


                {/* SEARCH + FILTERS */}
                <section className="
                    container
                    mx-auto
                    px-6
                    lg:px-10
                    py-16
                ">
                    <SearchFilters />
                </section>



                {/* FEATURED PROJECT */}
                {
                    featuredProject && (
                        <section className="
                            container
                            mx-auto
                            px-6
                            lg:px-10
                            pb-20
                        ">
                            <FeaturedProject 
                                project={featuredProject}
                            />
                        </section>
                    )
                }



                {/* ALL PROJECTS */}
                <section className="
                    bg-gray-50
                    py-20
                ">

                    <div className="
                        container
                        mx-auto
                        px-6
                        lg:px-10
                    ">

                        <div className="
                            flex
                            justify-between
                            items-end
                            mb-12
                        ">

                            <div>

                                <p className="
                                    text-sm
                                    uppercase
                                    tracking-[0.3em]
                                    text-orange-600
                                    font-medium
                                    mb-3
                                ">
                                    Our Portfolio
                                </p>


                                <h2 className="
                                    text-4xl
                                    lg:text-5xl
                                    font-bold
                                    text-gray-900
                                ">
                                    Featured Projects
                                </h2>

                            </div>


                            <p className="
                                hidden
                                md:block
                                max-w-md
                                text-gray-500
                            ">
                                Explore our completed and ongoing projects
                                delivered with precision, innovation and
                                engineering excellence.
                            </p>

                        </div>



                        <ProjectsGrid 
                            projects={projects}
                        />


                    </div>

                </section>




                {/* INDUSTRIES */}
                <Industries />



                {/* TESTIMONIALS */}
                <Testimonials />



                {/* CTA */}
                <CTA />


            </main>
            <Footer/>
        </>
    );
}