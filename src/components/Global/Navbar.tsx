"use client"
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/utils/global'
import Link from 'next/link'
import { useState } from 'react'

const paths = [
    { name: 'Home', to: '/' },
    { name: 'Projects', to: '/project' },
    { name: 'Skills', to: '/stack' },
    { name: 'Blog', to: '/blog' },
    { name: 'Pricing', to: '/price' },
    { name: 'Contact', to: '/contact' },
]

export default function SideBar() {

    const pathname = usePathname()
    const router = useRouter()

    const [sheetOpen, setSheetOpen] = useState(false)

    return (
        <>
            <header className="sticky top-0 flex h-16 border-b border-dashed items-center gap-4 border-bx px-4 md:px-6 ">
                <Link href="/" className="lg:ml-10 flex items-center justify-center gap-2 text-foreground whitespace-nowrap font-bold to-start-animation">
                    <div className='flex items-center justify-center mr-2'>
                        <span className='text-xl! text-primary/70 '>~</span>
                        <span className='mr-1.5 text-lg font-light text-foreground/70'>/</span>
                        <div className='h-5.5 w-2 bg-primary animate-blink ' />
                    </div>
                    Kira Aziz
                </Link>
                <div className="flex-1"></div>
                <div className="hidden lg:flex items-center justify-end w-full gap-6 flex-1 ">
                    {paths.map((p) => (
                        <Link
                            key={p.to}
                            href={p.to}
                            className={cn(
                                pathname === p.to ? 'font-medium border bg-muted/15 px-4 py-1 rounded-full' : 'lg:hover:text-foreground text-foreground/60',
                                'ease-in-out duration-200 text-sm group to-start-animation'
                            )}>
                            {p.name}
                        </Link>
                    ))}
                </div>
                <div className="flex-1 "></div>
                <Link href="/" className="opacity-0 lg:ml-10 flex items-center justify-center gap-2 text-foreground whitespace-nowrap font-bold to-start-animation">
                    <div className='flex items-center justify-center mr-2'>
                        <span className=' text-lg text-primary/70 '>~</span>
                        <span className='mr-1.5 text-lg font-light text-foreground/70'>/</span>
                        <div className='h-5.5 w-2 bg-primary animate-blink ' />
                    </div>
                    Kira Aziz
                </Link>
                <Sheet onOpenChange={(e) => setSheetOpen(e)} open={sheetOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="flex lg:hidden bg-transparent border-0">
                            <Menu size={19} />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="p-6 flex flex-col items-start gap-2">
                        {paths.map((p) => (
                            <button
                                key={p.to}
                                onClick={() => {
                                    setSheetOpen(false)
                                    router.push(p.to)
                                }}
                                className={cn(
                                    pathname === p.to ? 'font-medium' : 'lg:hover:text-foreground text-foreground/60',
                                    'ease-in-out duration-200 text-lg group'
                                )}
                            >
                                {p.name}
                            </button>
                        ))}
                    </SheetContent>
                </Sheet>
            </header>
        </>
    )
}
