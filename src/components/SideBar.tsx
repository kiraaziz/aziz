import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu, SquareTerminal } from 'lucide-react'
import { Button } from './ui/button'
import contact from '@/lib/json/contact.json'
import { useEffect } from 'react'

export default function SideBar({ pathname }: any) {
  const paths = [
    { name: 'Home', to: '/', icon: 'mdi:home' },
    { name: 'Projects', to: '/project', icon: 'mdi:github' },
    { name: 'Skills', to: '/stack', icon: 'mdi:react' },
    { name: 'Blog', to: '/blog', icon: 'mdi:blog' },
    { name: 'Pricing', to: '/price', icon: 'mdi:github' },
    { name: 'Contact', to: '/contact', icon: 'mdi:gmail' },
  ]

  useEffect(() => {
    const spinner = document.querySelector(".spinner");
    if (spinner) {
      spinner.remove();
    }
  }, []);


  return (
    <>
      <header className="sticky top-0 flex h-16 border-b bg-muted/10 items-center gap-4 border-bx px-4 md:px-6 ">
        <a href="/" className="lg:ml-10 flex items-center justify-center gap-2 text-foreground whitespace-nowrap font-bold to-start-animation">
          <SquareTerminal size={23} className="text-primary" />
          Kira Aziz
        </a>
        <div className="flex-1"></div>
        <div className="hidden lg:flex items-center justify-center w-full gap-6 flex-1 ">
          {paths.map((p) => (
            <a href={p.to} className={cn(pathname === p.to ? 'font-medium' : 'lg:hover:text-foreground text-foreground/60', 'ease-in-out duration-200 text-sm group to-start-animation')}>
              {p.name}
              <div
                className={cn(
                  p.to === pathname ? 'scale-x-100' : 'scale-x-0  group-hover:scale-x-100',
                  'ease-in-out duration-200 w-2/3 mx-auto h-1 shadow-[0px_0px_10px_px] shadow-primary rounded-full bg-primary',
                )}></div>
            </a>
          ))}
        </div>
        <div className="flex-1"></div>
        <div className="lg:flex hidden gap-6 mr-10">
          {['github', 'Instagram', 'devto'].map((link) => (
            <a href={contact[link].name} className="hover:opacity-100 ease-in-out duration-200 opacity-70 to-start-animation">
              <img src={`/contact/${contact[link].icon}.svg`} height={18} width={18} />
            </a>
          ))}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="flex lg:hidden hover:bg-primary">
              <Menu size={19} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-4 flex flex-col gap-2">
            {paths.map((p) => (
              <a href={p.to} className={cn(pathname === p.to ? 'font-medium' : 'lg:hover:text-foreground text-foreground/60', 'ease-in-out duration-200 text-lg group')}>
                {p.name}
              </a>
            ))}
          </SheetContent>
        </Sheet>
      </header>
    </>
  )
}
