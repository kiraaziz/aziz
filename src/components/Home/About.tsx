"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'
import { metaData } from '@/utils/content/metaData'

export default function About() {
    const [sw, setSw] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        function handleResize() {
            setSw(window.innerWidth / 100);
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className="w-full h-full space-y-5 my-3">
            <div className="max-w-4xl flex h-full items-center justify-between">
                <div className="flex items-start justify-between w-full flex-col lg:mt-0 mt-5 lg:p-5">
                    <h1 className="text-xl lg:text-4xl font-bold to-start-animation mb-1.5">
                        {metaData.home.about.title}
                    </h1>
                    <p className="font-light text-sm text-foreground/60 to-start-animation"
                        dangerouslySetInnerHTML={{ __html: metaData.home.about.description.join(' ') }}
                    />
                    <a href={metaData.home.about.cv.href} target="_blank" rel="noopener noreferrer">
                        <Button className="to-start-animation group bg-primary/10 rounded-full gap-3 mt-2 lg:mt-4 text-primary overflow-visible hover:text-black">
                            {metaData.home.about.cv.label}
                            <ArrowDown className="lg:group-hover:translate-y-2 ease-in-out duration-200" size={20} />
                        </Button>
                    </a>
                </div>
                <div className="flex items-end justify-end relative h-full to-start-animation translate-y-1.5">
                    {metaData.home.about.avatarImages.map((img, i) => (
                        <img key={i} src={img.src} className={img.className} alt={img.alt} />
                    ))}
                </div>
            </div>
            {sw < 17.5 && sw > 14 && (
                <>
                    <svg className='absolute top-75 left-165 w-svw overflow-visible -z 2xl:block hidden' viewBox="0 0 100 50">
                        <path className="drawing-path" d="M 8 0 L 8 2 L 25 2 L 25 16 L 0 16" />
                        <path className="drawing-path delay-500!" d="M 7 0 L 7 3 L 24 3 L 24 9 L 0 9 " />
                        <path className="drawing-path delay-200!" d="M 5 0 L 5 2 L -50 2 L -50 27 L -20 27" />
                        <path className="drawing-path delay-900!" d="M 6 0 L 6 3 L -49 3 L -49 12 L -20 12" />
                    </svg>
                    <svg className='absolute top-75 left-165 w-svw overflow-visible blur-xs -z 2xl:block hidden' viewBox="0 0 100 50">
                        <path className="drawing-path" d="M 8 0 L 8 2 L 25 2 L 25 16 L 0 16" />
                        <path className="drawing-path delay-500!" d="M 7 0 L 7 3 L 24 3 L 24 9 L 0 9 " />
                        <path className="drawing-path delay-200!" d="M 5 0 L 5 2 L -50 2 L -50 27 L -20 27" />
                        <path className="drawing-path delay-900!" d="M 6 0 L 6 3 L -49 3 L -49 12 L -20 12" />
                    </svg>
                </>
            )}
        </div>
    )
}
