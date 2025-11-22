"use client"
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, SquareTerminal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/global'
import { metaData } from '@/utils/content/metaData'
import Link from 'next/link'
import { useState } from 'react'

export default function SideBar() {
    
    const pathname = usePathname()

    const [sheetOpen, setSheetOpen] = useState(false)
    const navbar = metaData?.global?.navbar 
    const { paths, title } = navbar

    return (
        <>
            <header className="to-start-animation sticky top-0 flex h-16 border-b bg-muted/10 items-center gap-4 border-bx px-4 md:px-6 ">
                <Link href="/" className="lg:ml-10 flex items-center justify-center gap-2 text-foreground whitespace-nowrap font-bold to-start-animation">
                    <SquareTerminal size={23} className="text-primary" />
                    {title}
                </Link>
                <div className="flex-1"></div>
                <div className="hidden lg:flex items-center justify-center w-full gap-6 flex-1 ">
                    {paths.map((p) => (
                        <Link
                            key={p.to}
                            href={p.to}
                            className={cn(
                                pathname === p.to ? 'font-medium' : 'lg:hover:text-foreground text-foreground/60',
                                'ease-in-out duration-200 text-sm group to-start-animation'
                            )}>
                            {p.name}
                            <div
                                className={cn(
                                    p.to === pathname ? 'scale-x-100' : 'scale-x-0  group-hover:scale-x-100',
                                    'ease-in-out duration-200 w-2/3 mx-auto h-1 shadow-[0px_0px_10px_px] shadow-primary rounded-full bg-primary',
                                )}
                            ></div>
                        </Link>
                    ))}
                </div>
                <div className="flex-1"></div>
                <Sheet onOpenChange={(e)=>setSheetOpen(e)} open={sheetOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="flex lg:hidden bg-transparent border-0">
                            <Menu size={19} />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="p-4 flex flex-col gap-2">
                        {paths.map((p) => (
                            <Link
                                key={p.to}
                                href={p.to} 
                                onClick={()=>setSheetOpen(false)}
                                className={cn(
                                    pathname === p.to ? 'font-medium' : 'lg:hover:text-foreground text-foreground/60',
                                    'ease-in-out duration-200 text-lg group'
                                )}
                            >
                                {p.name}
                            </Link>
                        ))}
                    </SheetContent>
                </Sheet>
            </header>
        </>
    )
}
