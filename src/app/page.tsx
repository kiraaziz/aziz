import About from "@/components/Home/About"
import Github from "@/components/Home/bento/Github"
import Experiance from "@/components/Home/bento/Experiance"
import TopProjects from "@/components/Home/bento/TopProjects"
import TopProjectsDetail from "@/components/Home/TopProjectsDetail"
import DesignSystem from "@/components/Home/DesignSystem"
import ExperienceDetail from "@/components/Home/ExperienceDetail"
import Announcements from "@/components/Home/bento/Announcements"

export default function HomePage() {
  return (
    <main className="relative">
      <About />
      <div className=" h-5 border-y border-dashed w-full overflow-hidden hidden lg:flex items-center justify-center">
        <div className="container opacity-25 scale-150"></div>
      </div>
      <div className=" w-full ">
        <div className=" w-full max-w-5xl mx-auto lg:bg-background lg:overflow-hidden">
          <div className=" w-full grid grid-cols-1 lg:grid-cols-3 lg:border-x border-dashed">
            <Github />
            <Announcements />
            <Experiance />
            <TopProjects />
          </div>
        </div>
      </div>
      <div className=" h-5 border-y border-dashed w-full overflow-hidden hidden lg:flex items-center justify-center">
        <div className="container opacity-25 scale-150"></div>
      </div>
      <TopProjectsDetail />
      <DesignSystem />
      <ExperienceDetail />
    </main>
  )
}
