import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { metaData } from '@/utils/content/metaData'
import Link from 'next/link'

export default function About() {
    return (
        <div className="w-full h-full lg:pl-10 space-y-5">
            <div className="max-w-4xl flex h-full items-center justify-between">
                <div className="flex items-start justify-between w-full flex-col lg:mt-0 mt-5 lg:p-5">
                    <h1 className="text-xl lg:text-4xl font-bold to-start-animation">
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
                <div className="flex items-end justify-end relative h-full to-start-animation">
                    {metaData.home.about.avatarImages.map((img, i) => (
                        <img key={i} src={img.src} className={img.className} alt={img.alt} />
                    ))}
                </div>
            </div>
        </div>
    )
}
