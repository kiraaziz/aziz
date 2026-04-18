import About from "@/components/Home/About";
import Github from "@/components/Home/bento/Github";
import Experiance from "@/components/Home/bento/Experiance";
import TopProjects from "@/components/Home/bento/TopProjects";
import TopProjectsDetail from "@/components/Home/TopProjectsDetail";
import DesignSystem from "@/components/Home/DesignSystem";
import ExperienceDetail from "@/components/Home/ExperienceDetail";
import { metaData } from "@/utils/content/metaData";
import { ArrowUpRight } from "lucide-react";

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
            <div className="lg:order-1 order-2 lg:mb-0 space-y-3 lg:space-y-0 lg:border-t border-dashed">
              {metaData.home.about.announcements.map((ad, i) => (
                <a
                  target="_blank"
                  rel="noopener"
                  href={ad.button.href}
                  className={`group relative lg:border-dashed  h-1/2 lg:border-y-0 border-y border-l lg:border-r-0 border-r ${i === 0 && "border-b!"} rounded-3xl lg:rounded-none p-4 overflow-hidden justify-center flex flex-col`}
                >
                  {i === 0 && (
                    <div className="absolute top-0 right-0 h-full w-1/2 z-0 pointer-events-none">
                      <div className="relative w-full h-full max-h-120 ">
                        <video
                          src="/videos/2.mp4"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="object-cover h-full w-full absolute opacity-30"
                          style={{ display: "block", mixBlendMode: "screen" }}
                        />
                        <div className="absolute h-full w-full bg-linear-to-r from-background -translate-x-2" />
                      </div>
                    </div>
                  )}
                  {i === 1 && <div className='absolute bottom-3 right-0'>
                    <div className='relative h-15 w-15'>
                      <img src={ad.icon} className='h-15 absolute' />
                      <img src={ad.icon} className='h-15 absolute blur-3xl' />
                    </div>
                  </div>
                  }
                  {/* <img src={ad.icon} className='h-15 absolute' /> */}
                  {/* <img src={ad.icon} className='h-15 absolute blur-3xl' /> */}
                  <div className="relative z-10">
                    <span
                      className={`mb-2  w-max text-xs rounded-full  border  px-2 text-foreground/60 font-extralight! `}
                    >
                      {ad.badge}
                    </span>
                    <h2 className=" text-lg lg:max-w-max pr-10 font-medium">
                      <ArrowUpRight className="inline align-middle mr-1 ease-in-out duration-200 group-hover:mr-2 text-foreground/60" size={20} />
                      {ad.title}
                    </h2>
                  </div>
                </a>
              ))}

            </div>
            <div className="lg:order-0 order-4 mt-8 lg:mt-0 col-span-full lg:col-span-1 hidden lg:flex relative overflow-hidden">
              <img src="/images/globals/earth.jpg" className="absolute h-full w-full -translate-y-25 opacity-60  to-start-animation " style={{ display: 'block', filter: 'brightness(0.6) saturate(2) contrast(1.2)', mixBlendMode: 'screen' }} />
              <Experiance />
            </div>
            <div className="lg:border-l border-dashed  bg-muted/10 lg:order-0 order-2 mt-14 lg:mt-0 relative overflow-hidden col-span-2 hidden lg:flex">
              <TopProjects />
            </div>
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
  );
}
