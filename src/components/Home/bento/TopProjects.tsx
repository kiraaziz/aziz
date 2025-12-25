import ProjectDetails from '@/components/Global/ProjectDetails'
import { metaData } from '@/utils/content/metaData'
import { projects } from '@/utils/content/project'
import { ArrowRight } from 'lucide-react'

export default function TopProjects() {
  return (
    <div className="w-full flex flex-col justify-between">
      <div className="p-4 flex items-center justify-between w-full flex-1">
        <h1 className="text-lg lg:text-xl to-start-animation font-medium ">{metaData.bento.topApp.title}</h1>
        <a href="/project" className="text-sm font-light text-foreground/60 gap-2 transition-all ease-in-out duration-200 lg:hover:gap-5 flex items-center justify-center">
          {metaData.bento.topApp.more}
          <ArrowRight size={20} />
        </a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 ">
        {
          projects.map(
            (projects: any, index) =>
              projects.logo && (
                <ProjectDetails i={index} data={projects} isShort={true} />
              ),
          )
        }
      </div>
    </div>
  )
}
