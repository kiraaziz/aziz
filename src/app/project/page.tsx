import ProjectDetails from "@/components/Global/ProjectDetails"
import { metaData } from "@/utils/content/metaData"
import { projects } from "@/utils/content/project"

export default function page() {
    return (
        <div className="w-full max-w-5xl mx-auto">
            <div className="w-full max-w-3xl mx-auto lg:mt-14 mt-2 grid gap-3 grid-cols-1 md:grid-cols-2">
                <div className="to-start-animation col-span-full w-full flex-col mb-2 to-start-animation">
                    <h1 className="to-start-animation text-xl lg:text-3xl font-bold w-full">{metaData.porjects.page.important.title}</h1>
                    <p className="to-start-animation text-foreground/60 hidden lg:flex">{metaData.porjects.page.important.text}</p>
                </div>
                {
                    projects.filter((project) => project.main).map((project: any) => (
                        <ProjectDetails data={project} />
                    ))
                }
            </div>
            <div className="w-full max-w-3xl mx-auto mt-14 lg:mt-20 mb-10 grid gap-3 grid-cols-1 md:grid-cols-2">
                <div className="to-start-animation col-span-full w-full flex-col mb-2 to-start-animation">
                    <h1 className="to-start-animation text-xl lg:text-3xl font-bold w-full">{metaData.porjects.page.old.title}</h1>
                    <p className="to-start-animation text-foreground/60 hidden lg:flex">{metaData.porjects.page.old.text}</p>
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
