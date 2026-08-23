import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }) {

    const { slug } = await params;

    const project = projects.find(
        (item) => item.slug === slug
    );

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: project.seo?.title || project.title,
        description:
            project.seo?.description ||
            project.shortDescription,
    };
}

export default async function ProjectDetailsPage({ params }) {

    const { slug } = await params;

    const project = projects.find(
        (item) => item.slug === slug
    );

    if (!project) {
        notFound();
    }

    return (
        <main className="bg-white">

            {/* HERO */}

            <section className="relative h-[80vh] overflow-hidden">

                <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 container mx-auto px-6 lg:px-10 h-full flex flex-col justify-end pb-20">

                    <nav className="mb-6 text-white/80 text-sm">

                        <Link
                            href="/"
                            className="hover:text-orange-400"
                        >
                            Home
                        </Link>

                        <span className="mx-2">
                            /
                        </span>

                        <Link
                            href="/projects"
                            className="hover:text-orange-400"
                        >
                            Projects
                        </Link>

                        <span className="mx-2">
                            /
                        </span>

                        <span>
                            {project.title}
                        </span>

                    </nav>

                    <div className="flex flex-wrap gap-3 mb-6">

                        <span className="bg-orange-600 px-4 py-2 rounded-full text-sm text-white">

                            {project.category}

                        </span>

                        <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white text-sm">

                            {project.status}

                        </span>

                        <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white text-sm">

                            {project.projectType}

                        </span>

                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold text-white max-w-5xl leading-tight">

                        {project.title}

                    </h1>

                    <p className="mt-6 text-xl text-gray-200 max-w-3xl">

                        {project.shortDescription}

                    </p>

                </div>

            </section>

            {/* PROJECT OVERVIEW */}

            <section className="container mx-auto px-6 lg:px-10 py-20">

                <div className="grid lg:grid-cols-4 gap-6">

                    <div className="rounded-2xl border p-6">

                        <p className="text-gray-500 text-sm">

                            Client

                        </p>

                        <h3 className="font-semibold mt-2">

                            {project.client}

                        </h3>

                    </div>

                    <div className="rounded-2xl border p-6">

                        <p className="text-gray-500 text-sm">

                            Contractor

                        </p>

                        <h3 className="font-semibold mt-2">

                            {project.contractor}

                        </h3>

                    </div>

                    <div className="rounded-2xl border p-6">

                        <p className="text-gray-500 text-sm">

                            Architect

                        </p>

                        <h3 className="font-semibold mt-2">

                            {project.architect}

                        </h3>

                    </div>

                    <div className="rounded-2xl border p-6">

                        <p className="text-gray-500 text-sm">

                            Status

                        </p>

                        <h3 className="font-semibold mt-2">

                            {project.status}

                        </h3>

                    </div>

                </div>

                <div className="grid lg:grid-cols-5 gap-6 mt-6">

                    <div className="rounded-2xl border p-6">

                        <p className="text-gray-500 text-sm">

                            Budget

                        </p>

                        <h3 className="font-semibold mt-2">

                            {project.budget.currency}{" "}
                            {project.budget.amount.toLocaleString()}

                        </h3>

                    </div>

                    <div className="rounded-2xl border p-6">

                        <p className="text-gray-500 text-sm">

                            Duration

                        </p>

                        <h3 className="font-semibold mt-2">

                            {project.duration}

                        </h3>

                    </div>

                    <div className="rounded-2xl border p-6">

                        <p className="text-gray-500 text-sm">

                            Started

                        </p>

                        <h3 className="font-semibold mt-2">

                            {project.startDate}

                        </h3>

                    </div>

                    <div className="rounded-2xl border p-6">

                        <p className="text-gray-500 text-sm">

                            Completed

                        </p>

                        <h3 className="font-semibold mt-2">

                            {project.completionDate}

                        </h3>

                    </div>

                    <div className="rounded-2xl border p-6">

                        <p className="text-gray-500 text-sm">

                            Location

                        </p>

                        <h3 className="font-semibold mt-2">

                            {project.location.city},{" "}
                            {project.location.state}

                        </h3>

                    </div>

                </div>

            </section>

            {/* DESCRIPTION */}

            <section className="container mx-auto px-6 lg:px-10 pb-20">

                <div className="max-w-4xl">

                    <h2 className="text-4xl font-bold mb-8">

                        Project Overview

                    </h2>

                    <p className="text-gray-600 leading-8 text-lg">

                        {project.description}

                    </p>

                </div>

            </section>

            {/* GALLERY */}

            <section className="container mx-auto px-6 lg:px-10 pb-24">

                <div className="flex items-center justify-between mb-10">

                    <h2 className="text-4xl font-bold">

                        Project Gallery

                    </h2>

                    <span className="text-gray-500">

                        {project.images.length} Photos

                    </span>

                </div>

                {/* Gallery Grid begins in Part 2 */}

            </section>

            {/* Gallery */}

            <section className="container mx-auto px-6 lg:px-10 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {project.images.map((image, index) => (

                        <div
                            key={index}
                            className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
                        >

                            <Image
                                src={image.url}
                                alt={`${project.title} ${index + 1}`}
                                fill
                                className="
                                    object-cover
                                    transition-transform
                                    duration-700
                                    group-hover:scale-110
                                "
                            />

                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-black/0
                                    group-hover:bg-black/30
                                    transition
                                "
                            />

                        </div>

                    ))}

                </div>
            </section>

            {/* BEFORE & AFTER */}

            {(project.beforeImages?.length > 0 ||
                project.afterImages?.length > 0) && (

                <section className="container mx-auto px-6 lg:px-10 pb-24">

                    <h2 className="text-4xl font-bold mb-12">

                        Before & After

                    </h2>

                    <div className="grid lg:grid-cols-2 gap-10">

                        <div>

                            <h3 className="text-xl font-semibold mb-6">

                                Before

                            </h3>

                            <div className="grid gap-6">

                                {project.beforeImages.map((image, index) => (

                                    <div
                                        key={index}
                                        className="relative h-72 rounded-2xl overflow-hidden"
                                    >

                                        <Image
                                            src={image.url}
                                            alt="Before"
                                            fill
                                            className="object-cover"
                                        />

                                    </div>

                                ))}

                            </div>

                        </div>

                        <div>

                            <h3 className="text-xl font-semibold mb-6">

                                After

                            </h3>

                            <div className="grid gap-6">

                                {project.afterImages.map((image, index) => (

                                    <div
                                        key={index}
                                        className="relative h-72 rounded-2xl overflow-hidden"
                                    >

                                        <Image
                                            src={image.url}
                                            alt="After"
                                            fill
                                            className="object-cover"
                                        />

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </section>

            )}

            {/* PROJECT STATISTICS */}

            <section className="bg-gray-50 py-24">

                <div className="container mx-auto px-6 lg:px-10">

                    <h2 className="text-4xl font-bold mb-14">

                        Project Statistics

                    </h2>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">

                        <div className="bg-white rounded-2xl p-8">

                            <p className="text-gray-500">

                                Floors

                            </p>

                            <h3 className="text-4xl font-bold mt-3">

                                {project.statistics.floors}

                            </h3>

                        </div>

                        <div className="bg-white rounded-2xl p-8">

                            <p className="text-gray-500">

                                Bedrooms

                            </p>

                            <h3 className="text-4xl font-bold mt-3">

                                {project.statistics.bedrooms}

                            </h3>

                        </div>

                        <div className="bg-white rounded-2xl p-8">

                            <p className="text-gray-500">

                                Bathrooms

                            </p>

                            <h3 className="text-4xl font-bold mt-3">

                                {project.statistics.bathrooms}

                            </h3>

                        </div>

                        <div className="bg-white rounded-2xl p-8">

                            <p className="text-gray-500">

                                Parking

                            </p>

                            <h3 className="text-4xl font-bold mt-3">

                                {project.statistics.parking}

                            </h3>

                        </div>

                        <div className="bg-white rounded-2xl p-8">

                            <p className="text-gray-500">

                                Area

                            </p>

                            <h3 className="text-4xl font-bold mt-3">

                                {project.statistics.area.toLocaleString()}

                            </h3>

                            <p className="text-sm text-gray-500 mt-2">

                                sqm

                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* CONSTRUCTION DETAILS */}

            <section className="container mx-auto px-6 lg:px-10 py-24">

                <h2 className="text-4xl font-bold mb-12">

                    Construction Details

                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {Object.entries(project.constructionDetails).map(
                        ([key, value]) => (

                            <div
                                key={key}
                                className="rounded-2xl border p-8"
                            >

                                <h3 className="capitalize text-xl font-semibold mb-4">

                                    {key}

                                </h3>

                                <p className="text-gray-600">

                                    {value}

                                </p>

                            </div>

                        )
                    )}

                </div>

            </section>

            {/* SERVICES / MATERIALS / FEATURES */}

            <section className="bg-gray-50 py-24">

                <div className="container mx-auto px-6 lg:px-10">

                    <div className="grid lg:grid-cols-3 gap-10">

                        <div>

                            <h2 className="text-3xl font-bold mb-8">

                                Services

                            </h2>

                            <div className="flex flex-wrap gap-3">

                                {project.services.map((item) => (

                                    <span
                                        key={item}
                                        className="
                                            px-5
                                            py-3
                                            rounded-full
                                            bg-white
                                            border
                                        "
                                    >
                                        {item}
                                    </span>

                                ))}

                            </div>

                        </div>

                        <div>

                            <h2 className="text-3xl font-bold mb-8">

                                Materials

                            </h2>

                            <div className="flex flex-wrap gap-3">

                                {project.materials.map((item) => (

                                    <span
                                        key={item}
                                        className="
                                            px-5
                                            py-3
                                            rounded-full
                                            bg-white
                                            border
                                        "
                                    >
                                        {item}
                                    </span>

                                ))}

                            </div>

                        </div>

                        <div>

                            <h2 className="text-3xl font-bold mb-8">

                                Features

                            </h2>

                            <div className="flex flex-wrap gap-3">

                                {project.features.map((item) => (

                                    <span
                                        key={item}
                                        className="
                                            px-5
                                            py-3
                                            rounded-full
                                            bg-orange-600
                                            text-white
                                        "
                                    >
                                        {item}
                                    </span>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            // PROJECT TIMELINE

            <section className="container mx-auto px-6 lg:px-10 py-24">

                <h2 className="text-4xl font-bold mb-12">
                    Project Timeline
                </h2>


                <div className="relative">

                    <div
                        className="
                            absolute
                            left-5
                            top-0
                            bottom-0
                            w-px
                            bg-gray-200
                        "
                    />


                    <div className="space-y-10">

                        {project.milestones?.map((milestone,index)=>(

                            <div
                                key={index}
                                className="
                                    relative
                                    flex
                                    gap-8
                                    items-start
                                "
                            >

                                <div
                                    className={`
                                        relative
                                        z-10
                                        w-10
                                        h-10
                                        rounded-full
                                        flex
                                        items-center
                                        justify-center
                                        font-bold
                                        ${
                                            milestone.completed
                                            ?
                                            "bg-orange-600 text-white"
                                            :
                                            "bg-gray-200 text-gray-500"
                                        }
                                    `}
                                >

                                    {index + 1}

                                </div>


                                <div>

                                    <h3 className="text-xl font-semibold">

                                        {milestone.title}

                                    </h3>


                                    <p className="text-gray-500 mt-2">

                                        {milestone.completed
                                        ?
                                        "Completed"
                                        :
                                        "Pending"}

                                    </p>

                                </div>


                            </div>

                        ))}

                    </div>

                </div>

            </section>


            // PROJECT PROGRESS

            {
                project.status === "Ongoing" && (

                    <section className="bg-gray-900 py-20">

                        <div className="container mx-auto px-6 lg:px-10">


                            <div className="max-w-3xl">


                                <p className="
                                    text-orange-400
                                    uppercase
                                    tracking-[0.3em]
                                    text-sm
                                    mb-5
                                ">
                                    Construction Progress
                                </p>


                                <h2 className="
                                    text-4xl
                                    font-bold
                                    text-white
                                    mb-8
                                ">
                                    Current Project Completion
                                </h2>


                                <div
                                    className="
                                        h-5
                                        rounded-full
                                        bg-white/20
                                        overflow-hidden
                                    "
                                >

                                    <div
                                        className="
                                            h-full
                                            bg-orange-600
                                            rounded-full
                                        "
                                        style={{
                                            width:`${project.progress}%`
                                        }}
                                    />


                                </div>


                                <p className="
                                    mt-5
                                    text-white
                                    text-3xl
                                    font-bold
                                ">
                                    {project.progress}%
                                </p>


                            </div>


                        </div>

                    </section>

                )
            }



            // PROJECT TEAM

            <section className="container mx-auto px-6 lg:px-10 py-24">


                <h2 className="text-4xl font-bold mb-12">

                    Project Team

                </h2>



                <div className="
                    grid
                    md:grid-cols-2
                    lg:grid-cols-4
                    gap-6
                ">


                    {
                        project.team?.map((member,index)=>(


                            <div
                                key={index}
                                className="
                                    rounded-3xl
                                    border
                                    p-8
                                "
                            >

                                <div
                                    className="
                                        w-14
                                        h-14
                                        rounded-full
                                        bg-orange-100
                                        flex
                                        items-center
                                        justify-center
                                        text-orange-600
                                        font-bold
                                        text-xl
                                        mb-6
                                    "
                                >

                                    {member.name?.charAt(0)}

                                </div>


                                <h3 className="
                                    text-xl
                                    font-semibold
                                ">
                                    {member.name}
                                </h3>


                                <p className="
                                    text-gray-500
                                    mt-2
                                ">
                                    {member.role}
                                </p>


                                {
                                    member.company && (

                                        <p className="
                                            text-sm
                                            text-orange-600
                                            mt-2
                                        ">
                                            {member.company}
                                        </p>

                                    )
                                }


                            </div>


                        ))
                    }


                </div>


            </section>



            // VIDEOS

            {
                project.videos?.length > 0 && (

                    <section className="
                        bg-gray-50
                        py-24
                    ">


                        <div className="
                            container
                            mx-auto
                            px-6
                            lg:px-10
                        ">


                            <h2 className="
                                text-4xl
                                font-bold
                                mb-12
                            ">
                                Project Videos
                            </h2>



                            <div className="
                                grid
                                md:grid-cols-2
                                gap-8
                            ">


                                {
                                    project.videos.map((video,index)=>(


                                        <div
                                            key={index}
                                            className="
                                                rounded-3xl
                                                overflow-hidden
                                                bg-black
                                            "
                                        >


                                            <video
                                                controls
                                                className="
                                                    w-full
                                                    aspect-video
                                                "
                                                poster={
                                                    video.thumbnail
                                                }
                                            >

                                                <source
                                                    src={video.url}
                                                />

                                            </video>


                                            <div className="
                                                p-5
                                                text-white
                                            ">

                                                <h3 className="
                                                    font-semibold
                                                ">
                                                    {video.title}
                                                </h3>

                                            </div>


                                        </div>


                                    ))
                                }


                            </div>


                        </div>


                    </section>

                )
            }


            // DOCUMENTS

            {
                project.documents?.length > 0 && (

                    <section className="
                        container
                        mx-auto
                        px-6
                        lg:px-10
                        py-24
                    ">


                        <h2 className="
                            text-4xl
                            font-bold
                            mb-10
                        ">
                            Project Documents
                        </h2>


                        <div className="
                            grid
                            md:grid-cols-3
                            gap-6
                        ">


                            {
                                project.documents.map((doc,index)=>(


                                    <a
                                        key={index}
                                        href={doc.url}
                                        target="_blank"
                                        className="
                                            border
                                            rounded-2xl
                                            p-6
                                            hover:border-orange-600
                                            transition
                                        "
                                    >

                                        <h3 className="
                                            font-semibold
                                        ">
                                            {doc.title}
                                        </h3>


                                        <p className="
                                            text-gray-500
                                            text-sm
                                            mt-2
                                        ">
                                            View Document →
                                        </p>


                                    </a>


                                ))
                            }


                        </div>


                    </section>

                )
            }
                    


            // VIRTUAL TOUR

            {
                project.virtualTour?.url && (

                    <section className="
                        container
                        mx-auto
                        px-6
                        lg:px-10
                        py-24
                    ">


                        <div className="
                            rounded-3xl
                            overflow-hidden
                            bg-gray-900
                            p-8
                            lg:p-12
                        ">


                            <div className="
                                max-w-3xl
                            ">


                                <p className="
                                    text-orange-400
                                    uppercase
                                    tracking-[0.3em]
                                    text-sm
                                    mb-5
                                ">
                                    Virtual Experience
                                </p>



                                <h2 className="
                                    text-4xl
                                    font-bold
                                    text-white
                                    mb-6
                                ">
                                    Explore The Project Virtually
                                </h2>



                                <p className="
                                    text-gray-300
                                    mb-8
                                ">
                                    Take a complete digital walkthrough
                                    of this project through our interactive
                                    virtual tour experience.
                                </p>



                                <a
                                    href={project.virtualTour.url}
                                    target="_blank"
                                    className="
                                        inline-flex
                                        items-center
                                        px-8
                                        py-4
                                        rounded-full
                                        bg-orange-600
                                        text-white
                                        font-semibold
                                        hover:bg-orange-700
                                        transition
                                    "
                                >
                                    Launch Virtual Tour →
                                </a>


                            </div>


                        </div>


                    </section>

                )
            }





            // CLIENT TESTIMONIAL

            {
                project.testimonial?.quote && (

                    <section className="
                        bg-gray-50
                        py-24
                    ">


                        <div className="
                            container
                            mx-auto
                            px-6
                            lg:px-10
                        ">


                            <div className="
                                max-w-4xl
                                mx-auto
                                text-center
                            ">


                                <p className="
                                    text-orange-600
                                    uppercase
                                    tracking-[0.3em]
                                    text-sm
                                    mb-6
                                ">
                                    Client Experience
                                </p>



                                <h2 className="
                                    text-4xl
                                    font-bold
                                    mb-10
                                ">
                                    What Our Client Says
                                </h2>



                                <div className="
                                    bg-white
                                    rounded-3xl
                                    p-10
                                    shadow-sm
                                    border
                                ">


                                    <div className="
                                        text-orange-500
                                        text-4xl
                                        mb-6
                                    ">
                                        ★★★★★
                                    </div>



                                    <blockquote className="
                                        text-xl
                                        lg:text-2xl
                                        text-gray-600
                                        leading-relaxed
                                    ">

                                        "{project.testimonial.quote}"

                                    </blockquote>




                                    <div className="
                                        mt-8
                                    ">


                                        {
                                            project.testimonial.image && (

                                                <img
                                                    src={
                                                        project.testimonial.image
                                                    }
                                                    alt={
                                                        project.testimonial.name
                                                    }
                                                    className="
                                                        w-16
                                                        h-16
                                                        rounded-full
                                                        object-cover
                                                        mx-auto
                                                        mb-4
                                                    "
                                                />

                                            )
                                        }


                                        <h3 className="
                                            font-bold
                                            text-gray-900
                                        ">
                                            {
                                                project.testimonial.name
                                            }
                                        </h3>


                                        <p className="
                                            text-gray-500
                                        ">
                                            {
                                                project.testimonial.company
                                            }
                                        </p>


                                    </div>


                                </div>


                            </div>


                        </div>


                    </section>

                )
            }



            // RELATED PROJECTS

            <section className="
                container
                mx-auto
                px-6
                lg:px-10
                py-24
            ">


                <div className="
                    flex
                    justify-between
                    items-center
                    mb-12
                ">


                    <h2 className="
                        text-4xl
                        font-bold
                    ">
                        Related Projects
                    </h2>



                    <Link
                        href="/projects"
                        className="
                            text-orange-600
                            font-semibold
                        "
                    >
                        View All Projects →
                    </Link>


                </div>




                <div className="
                    grid
                    md:grid-cols-3
                    gap-8
                ">


                    {
                        projects
                            .filter(
                                item =>
                                item.slug !== project.slug &&
                                item.category === project.category
                            )
                            .slice(0,3)
                            .map((item)=>(


                                <Link

                                    href={`/projects/${item.slug}`}

                                    key={item._id}

                                    className="
                                        group
                                        rounded-3xl
                                        overflow-hidden
                                        border
                                        bg-white
                                        hover:shadow-xl
                                        transition
                                    "

                                >


                                    <div className="
                                        relative
                                        h-64
                                    ">


                                        <Image
                                            src={item.coverImage}
                                            alt={item.title}
                                            fill
                                            className="
                                                object-cover
                                                group-hover:scale-110
                                                transition
                                                duration-700
                                            "
                                        />


                                    </div>



                                    <div className="
                                        p-6
                                    ">


                                        <p className="
                                            text-orange-600
                                            text-sm
                                            mb-2
                                        ">
                                            {item.category}
                                        </p>



                                        <h3 className="
                                            text-xl
                                            font-bold
                                        ">
                                            {item.title}
                                        </h3>



                                        <p className="
                                            text-gray-500
                                            mt-2
                                        ">
                                            {item.location.city},{" "}
                                            {item.location.state}
                                        </p>


                                    </div>


                                </Link>


                            ))
                    }


                </div>


            </section>



            // FINAL CTA

            <section className="
                bg-gray-900
                py-24
            ">


                <div className="
                    container
                    mx-auto
                    px-6
                    lg:px-10
                    text-center
                ">


                    <h2 className="
                        text-4xl
                        lg:text-5xl
                        font-bold
                        text-white
                        max-w-4xl
                        mx-auto
                    ">
                        Have A Similar Project In Mind?
                    </h2>



                    <p className="
                        text-gray-300
                        max-w-2xl
                        mx-auto
                        mt-6
                        text-lg
                    ">
                        Our team is ready to help transform your
                        construction vision into reality.
                    </p>



                    <div className="
                        flex
                        justify-center
                        gap-5
                        mt-10
                        flex-wrap
                    ">


                        <Link

                            href="/contact"

                            className="
                                px-8
                                py-4
                                rounded-full
                                bg-orange-600
                                text-white
                                font-semibold
                                hover:bg-orange-700
                                transition
                            "
                        >
                            Request A Quote
                        </Link>




                        <Link

                            href="/projects"

                            className="
                                px-8
                                py-4
                                rounded-full
                                border
                                border-white/30
                                text-white
                                hover:bg-white
                                hover:text-gray-900
                                transition
                            "
                        >
                            Back To Projects
                        </Link>


                    </div>


                </div>


            </section>

        </main>
    );
}

