import ProjectDetails from '@/components/Global/ProjectDetails'
import { metaData } from '@/utils/content/metaData'
import { projects } from '@/utils/content/project'
import { ArrowRight } from 'lucide-react'

export default function TopProjects() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-lg lg:text-xl to-start-animation font-medium ">{metaData.bento.topApp.title}</h1>
        <a href="/project" className="to-start-animation  text-sm font-light text-foreground/60 gap-2 transition-all ease-in-out duration-200 lg:hover:gap-5 flex items-center justify-center">
          {metaData.bento.topApp.more}
          <ArrowRight size={20} />
        </a>
      </div>
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-4 gap-2 ">
        {
          projects.map(
            (projects: any) =>
              projects.logo && (
                <ProjectDetails data={projects} isShort={true} />
              ),
          )
        }
      </div>
    </div>
  )
}
