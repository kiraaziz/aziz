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
      <div className="to-start-animation w-full max-w-5xl mx-auto lg:border-x">
        <div className="to-start-animation w-full lg:px-5 max-w-4xl mx-auto pb-10 lg:!py-10">
          <About />
        </div>
      </div>
      <div className="to-start-animation h-5 border-t w-full overflow-hidden hidden lg:flex items-center justify-center">
        <div className="container opacity-40 scale-125"></div>
      </div>
      <div className="to-start-animation w-full lg:border-y">
        <div className="to-start-animation w-full max-w-5xl mx-auto">
          <div className="to-start-animation w-full grid grid-cols-1 lg:grid-cols-3">
            <Github />
            <div className="lg:order-1 order-2 lg:mb-0 space-y-3 lg:space-y-0">
              {metaData.home.about.announcements.map((ad, i) => (
                <a target="_blank" rel="noopener" href={ad.button.href} className={`to-start-animation relative h-1/2 lg:border-y-0 border-y border-x ${i === 0 && "border-b!"} rounded-3xl lg:rounded-none p-4 overflow-hidden bg-muted/10 justify-center flex flex-col`}>
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
            <div className="to-start-animation lg:order-1 order-4 mt-8 lg:mt-0 col-span-full lg:border-l lg:border-t lg:col-span-1 hidden lg:flex">
              <Experiance />
            </div>
            <div className="to-start-animation bg-muted/10 lg:order-1 order-2 mt-14 lg:mt-0 relative border-b-0 overflow-hidden col-span-2 border hidden lg:flex">
              <TopProjects />
            </div>
          </div>
        </div>
      </div>
      <div className="to-start-animation h-5 border-b w-full overflow-hidden hidden lg:flex items-center justify-center">
        <div className="container opacity-40 scale-125"></div>
      </div>
      <TopProjectsDetail />
      <DesignSystem />
      <ExperienceDetail />
    </main>
  );
}
