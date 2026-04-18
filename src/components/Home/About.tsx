import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'
import { metaData } from '@/utils/content/metaData'

export default function About() {
    return (
        <div className="w-full max-w-5xl mx-auto lg:border-x border-dashed relative">
            <div className="to-start-animation w-full lg:px-5 max-w-4xl mx-auto pb-10 lg:py-10!">
                <div className="w-full h-full space-y-5 my-3">
                    <div className="max-w-2xl flex h-full items-center justify-between">
                        <div className="flex items-start justify-between w-full flex-col lg:mt-0 mt-5 lg:p-5">
                            <h1 className="text-xl lg:text-5xl font-bold to-start-animation mb-3.5 -tracking-wide">
                                {metaData.home.about.title}
                            </h1>
                            <p className="mb-0.5 font-light text-sm text-foreground/50 to-start-animation -tracking-wide">
                                - I'm Kira, a Tunisian developer with a CS degree, now studying engineering
                            </p>
                            <p className="mb-0.5 font-light text-sm text-foreground/50 to-start-animation -tracking-wide">
                                - 3+ years' experience and 60k+ reads on<a href="https://dev.to/kiraaziz" className="text-primary hover:underline mx-1" target="_blank" rel="noopener noreferrer">dev.to</a>
                            </p>
                            <p className="mb-0.5 font-light text-sm text-foreground/50 to-start-animation -tracking-wide">
                                - I build apps like{' '}
                                <a
                                    href="https://light-ai.vercel.app/"
                                    className="text-primary hover:underline mx-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Light AI
                                </a>
                                ,{' '}
                                <a
                                    href="https://eyebase.vercel.app/"
                                    className="text-primary hover:underline mx-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Eyebase
                                </a>
                                ,{' '}
                                <a
                                    href="https://healthybase.cloud"
                                    className="text-primary hover:underline mx-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    HealthyBase
                                </a>
                                , and{' '}
                                <a
                                    href="https://neoflow-kira.vercel.app/"
                                    className="text-primary hover:underline mx-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    NeoFlow
                                </a>
                            </p>
                       
                            <p className="mb-0.5 font-light text-sm text-foreground/50 to-start-animation -tracking-wide">
                                - Now working on my own startup,{' '}
                                <a
                                    href="https://lymoun.agency"
                                    className="text-primary hover:underline mx-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Lymoun
                                </a>
                            </p>
                            <p className="mb-0.5 font-light text-sm text-foreground/50 to-start-animation -tracking-wide">
                                - At work, I build apps from scratch and have helped scale products <br />  to over 200k active users! 
                            </p>
                            <a href={metaData.home.about.cv.href} target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost" className='mt-5 px-4! border border-border/30 bg-foreground/3 rounded-full gap-3  lg:mt-4 overflow-visible group'>
                                    {metaData.home.about.cv.label}
                                    <ArrowDown className="lg:group-hover:translate-y-2 ease-in-out duration-200" size={20} />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div >
            </div >
            <div className=' to-start-animation bottom-0 bg-ye absolute right-0 w-130 h-full -z-10'>
                <div className="relative w-full h-full max-h-120 hidden md:block ">
                    <img src="/images/globals/wave.webp" 
                        className="object-cover h-full w-full absolute opacity-40"
                        style={{
                            display: 'block',
                            mixBlendMode: 'screen',
                            filter: 'grayscale(0.4)'
                        }}
                    /> 
                    <div className="absolute h-full w-full bg-linear-to-r via-background/90 from-background" />
                    <div className="absolute h-full w-full bg-linear-to-r via-background/0 from-background" />
                </div>
            </div>
        </div >
    )
}
