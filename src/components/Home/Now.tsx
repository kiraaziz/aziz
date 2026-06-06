import React from 'react'
import { Button } from '../ui/button'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function Now() {
    return (
        <div className="relative gap-15 flex border-y lg:border-y-0 rounded-3xl lg:rounded-none! overflow-hidden mt-10 lg:mt-0 border-x border-dashed p-7 w-full max-w-5xl mx-auto lg:bg-background lg:overflow-hidden">
            <video
                src="/videos/4.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="top-0 left-0 object-cover h-full w-full absolute opacity-80"
                style={{ display: "block", mixBlendMode: "screen" }}
            />
            <div className=" top-0 left-0 absolute h-full w-full bg-linear-to-tr from-background" />
            <div className=" top-0 left-0 absolute h-full w-full bg-linear-to-tr from-background" />
            <div className=" top-0 left-0 absolute h-full w-full bg-linear-to-tr from-background" />
            <div className=" top-0 left-0 absolute h-full w-full bg-linear-to-tr from-background" />
            <div className=" top-0 left-0 absolute h-full w-full bg-linear-to-tr from-background" />
            <div className='to-start-animation hidden lg:flex w-100 z-1 relative'>
                <img src="/images/mac.png" />
                <div className='absolute top-20 left-16.5 w-66.5 h-51 shadow bg-black object-cover rounded-xl overflow-hidden'>
                    <iframe className='mt-7 w-full m-auto' src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2818907861799369%2F&show_text=false&width=560&t=0&autoplay=1" width="560" height="314" scrolling="no" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                </div>
            </div>
            <div className='my-auto z-1'>
                <div className='to-start-animation'>
                    <h1 className='text-2xl font-medium'>What I'm building Now ?</h1>
                </div>
                <p className='to-start-animation mt-3 text-foreground/60 font-light max-w-md'>
                    I'm currently building{' '}
                    <span className='bg-pink-200/40 px-2.5 rounded-full font-medium text-white inline-flex items-center gap-1 align-middle'>
                        <img src="/svg/logo/blossom.png" className='w-5 h-5 inline-block' />
                        <span>Blossom</span>
                    </span>
                    , an AI tool that helps users create a full CRM without any coding.
                    <br />
                    You simply describe your business and features, and the AI takes care of the rest—building everything for you automatically
                </p>
                <Link href="https://letter.kiraaziz.club/s/blossom">
                    <Button className='to-start-animation mt-4 group h-12 pr-1 rounded-full bg-pink-400 hover:bg-pink-300'>
                        Register Now
                        <span className='h-10 w-12 bg-black text-white rounded-full flex items-center justify-center'>
                            <ArrowUpRight className='group-hover:scale-125 ease-in-out duration-200' />
                        </span>
                    </Button>
                </Link>
            </div>
        </div>
    )
}
