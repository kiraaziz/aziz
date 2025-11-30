import About from "@/components/Home/About";
import Github from "@/components/Home/bento/Github";
import Experiance from "@/components/Home/bento/Experiance";
import TopProjects from "@/components/Home/bento/TopProjects";
import TopProjectsDetail from "@/components/Home/TopProjectsDetail";
import DesignSystem from "@/components/Home/DesignSystem";
import ExperienceDetail from "@/components/Home/ExperienceDetail";
import { metaData } from "@/utils/content/metaData";

export default function HomePage() {
  return (
    <main className="relative">
      <div className="to-start-animation w-full lg:p-5 max-w-4xl mx-auto">
        <About />
      </div>
      <div className="w-full max-w-5xl mx-auto mt-10 lg:mt-14">
        <div className="to-start-animation w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
          <Github />
          <div className="lg:order-1 order-2 space-y-3 lg:mb-0 rounded-3xl ">
              {metaData.home.about.announcements.map((ad, i) => (
                <a target="_blank" rel="noopener" href={ad.button.href} className={`to-start-animation relative rounded-3xl border p-4 overflow-hidden bg-muted/10 justify-center flex flex-col`}>
                  {ad.icon && <div className='absolute bottom-2 right-2'>
                    <div className='relative h-10 w-10'>
                      <img src={ad.icon} className='h-10 absolute' />
                      <img src={ad.icon} className='h-10 absolute blur-3xl' />
                    </div>
                  </div>
                  }
                  <span className={`mb-2 to-start-animation w-max text-xs font-light rounded-full  border  px-3 ${i === 1 ? "bg-[#72e3ad]/10 text-[#72e3ad] border-[#72e3ad]/20" : i === 0 ? "bg-[#f6c303]/10 text-[#f6c303] border-[#f6c303]/20" : "bg-primary/10 text-primary"} `}>
                    {ad.badge}
                  </span>
                  <h2 className="to-start-animation text-lg lg:max-w-max max-w-[70svw] font-medium">
                    {ad.title}
                  </h2>
                </a>
              ))}
          </div>
          <div className="to-start-animation lg:order-1 order-4 mt-8 lg:mt-0 col-span-full lg:border lg:col-span-1 rounded-3xl border hidden lg:flex">
            <Experiance />
          </div>
          <div className="to-start-animation bg-muted/10 lg:order-1 order-2 lg:border mt-14 lg:mt-0 relative overflow-hidden col-span-2 rounded-3xl border hidden lg:flex">
            <TopProjects />
          </div>
        </div>
      </div>
      <TopProjectsDetail />
      <DesignSystem />
      <ExperienceDetail />
    </main>
  );
}
