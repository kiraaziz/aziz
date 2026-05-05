import ProjectDetails from "@/components/Global/ProjectDetails"
import { projects } from "@/utils/content/project"

export default function page() {
    return (
        <div className="w-full max-w-5xl mx-auto lg:py-10">
            <div className="w-full max-w-3xl mx-auto lg:mt-14 mt-2 grid gap-3 grid-cols-1 md:grid-cols-2">
                <div className="to-start-animation col-span-full w-full flex-col mb-2 to-start-animation">
                    <h1 className="to-start-animation text-xl lg:text-3xl font-bold w-full mb-2">
                        Check out my latest work
                    </h1>
                    <p className="to-start-animation text-foreground/60 hidden lg:flex mb-5">
                        I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
                    </p>
                </div>
                {
                    projects.filter((project) => project.main).map((project: any) => (
                        <ProjectDetails data={project} />
                    ))
                }
            </div>
            <div className="w-full max-w-3xl mx-auto mt-14 lg:mt-20 mb-10 grid gap-3 grid-cols-1 md:grid-cols-2">
                <div className="to-start-animation col-span-full w-full flex-col mb-2 to-start-animation">
                    <h1 className="to-start-animation text-xl lg:text-3xl font-bold w-full mb-2">
                        Previous Projects
                    </h1>
                    <p className="to-start-animation text-foreground/60 hidden lg:flex mb-5">
                        Here you can find some of my older projects and experiments, built over the years as I continued to learn and grow as a developer.
                    </p>
                </div>
                {
                    projects.filter((project) => !project.main).map((project: any) => (
                        <ProjectDetails data={project} />
                    ))
                }
            </div>
        </div>
    )
}
