import { projects } from '@/utils/content/project'
import ProjectDetails from '../Global/ProjectDetails'
import { metaData } from '@/utils/content/metaData'

export default function TopProjectsDetail() {
    return (
        <div className="pt-10 w-full max-w-3xl mx-auto mt-14 lg:mt-20 mb-10 grid gap-3 grid-cols-1 md:grid-cols-2">
            <div className="to-start-animation col-span-full w-full items-center justify-center flex-col mx-auto max-w-2xl lg:text-center mb-2 to-start-animation">
                <h1 className="to-start-animation text-lg lg:text-3xl font-bold w-full">{metaData.porjects.title}</h1>
                <p className="to-start-animation text-foreground/60 hidden lg:flex">{metaData.porjects.text}</p>
            </div>
            {
                projects.filter((project) => project.main).map((project: any) => (
                    <ProjectDetails data={project} />
                ))
            }
        </div>

    )
}
