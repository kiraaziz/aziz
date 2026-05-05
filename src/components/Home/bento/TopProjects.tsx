import ProjectDetails from '@/components/Global/ProjectDetails'
import { metaData } from '@/utils/content/metaData'
import { projects } from '@/utils/content/project'
import { ArrowRight } from 'lucide-react'

export default function TopProjects() {
  return (
    <div className="lg:border-l border-dashed  bg-muted/10 lg:order-2 order-2 mt-14 lg:mt-0 relative overflow-hidden col-span-2 hidden lg:flex">
      <div className="w-full flex flex-col justify-between">
        <div className=" to-start-animation  p-4 flex items-center justify-between w-full flex-1">
          <h1 className="text-lg lg:text-xl to-start-animation font-medium ">Top apps</h1>
          <a href="/project" className="text-sm font-light text-foreground/60 gap-2 transition-all ease-in-out duration-200 lg:hover:gap-5 flex items-center justify-center">
            Read more
            <ArrowRight size={20} />
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 ">
          {
            projects.map(
              (projects: any, index) =>
                projects.bento && (
                  <ProjectDetails i={index} data={projects} isShort={true} />
                ),
            )
          }
        </div>
      </div>
    </div>
  )
}
