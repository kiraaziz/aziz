import React from 'react'
import { ArrowUpRight } from "lucide-react"

export default function Announcements() {
    return (
        <div className="lg:order-1 order-2 lg:mb-0 space-y-3 lg:space-y-0 lg:border-b border-dashed">
            <a
                target="_blank"
                rel="noopener"
                href="https://lymoun.agency"
                className="group relative border-dashed  h-1/2 lg:border-y-0 border-y border-l lg:border-r-0 border-r border-b! rounded-3xl lg:rounded-none p-4 overflow-hidden justify-center flex flex-col"
            >
                <div className="to-start-animation absolute top-0 right-0 h-full w-1/2 z-0 pointer-events-none">
                    <div className="relative w-full h-full max-h-120 ">
                        <video
                            src="/videos/2.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="object-cover h-full w-full absolute opacity-80"
                            style={{ display: "block", mixBlendMode: "screen" }}
                        />
                        <div className="absolute h-full w-full bg-linear-to-r from-background -translate-x-2" />
                    </div>
                </div>
                {/* <img src="/svg/app/lymoun.svg" className='h-15 absolute blur-3xl' /> */}
                <div className="to-start-animation relative z-10">
                    <span className="mb-2 w-max text-xs rounded-full border px-2 text-foreground/60 font-extralight! ">
                        New Venture
                    </span>
                    <h2 className=" text-lg lg:max-w-max pr-10 font-medium">
                        <ArrowUpRight className="inline align-middle mr-1 ease-in-out duration-200 group-hover:mr-2 text-foreground/60" size={20} />
                        Introducing Lymoun - Our Software Engineering Agency
                    </h2>
                </div>
            </a>
            <a
                target="_blank"
                rel="noopener"
                href="https://letter.kiraaziz.club"
                className="group relative border-dashed  h-1/2 lg:border-y-0 border-y border-l lg:border-r-0 border-r rounded-3xl lg:rounded-none p-4 overflow-hidden justify-center flex flex-col"
            >
                <div className='to-start-animation absolute bottom-7 right-5'>
                    <div className='relative h-12 w-12'>
                        <img src="/svg/app/letter.svg" className='h-12 absolute' />
                        <img src="/svg/app/letter.svg" className='h-15 absolute blur-xl opacity-40' />
                    </div>
                </div>
                <div className="to-start-animation relative z-10">
                    <span className="mb-2 w-max text-xs rounded-full border px-2 text-foreground/60 font-extralight! ">
                        New SAAS Launch
                    </span>
                    <h2 className=" text-lg lg:max-w-max pr-10 font-medium">
                        <ArrowUpRight className="inline align-middle mr-1 ease-in-out duration-200 group-hover:mr-2 text-foreground/60" size={20} />
                        Kira Letter - Build newsletters in minutes
                    </h2>
                </div>
            </a>
        </div>
    )
}
