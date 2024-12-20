import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Icon } from '@iconify/react/offline';
import { Facebook, Github, Mail, Menu, SquareTerminal } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect } from 'react';

export default function SideBar({ pathname }: any) {

    const paths = [
        { name: "Home", to: "/", icon: "mdi:home" },
        { name: "Projects", to: "/project", icon: "mdi:github" },
        { name: "Demo", to: "/demo", icon: "mdi:react" },
        { name: "Pricing", to: "/price", icon: "mdi:github" },
        { name: "Skills", to: "/stack", icon: "mdi:react" },
        { name: "Blog", to: "/blog", icon: "mdi:blog" },
        { name: "Contact", to: "/contact", icon: "mdi:gmail" },
    ];

    useEffect(() => {
        // Since the component in this example is basic, the spinner only briefly shows
        const spinner = document.querySelector(".spinner");
        if (spinner) {
            spinner.remove();
        }
    }, []);

    const contact = [
        {
            icon: Github,
            path: ""
        },
    ]



    return (
        <>
            <header className="sticky top-0 flex h-16 border-b bg-muted/20 items-center gap-4 border-bx px-4 md:px-6 backdrop-blur-3xl  ">

                <a href='/' className='lg:ml-10 flex items-center justify-center gap-2 text-foreground text-nowrap font-bold'>
                    <SquareTerminal size={23} className='text-primary' />
                    Kira Aziz
                </a>
                <div className='flex-1' ></div>
                <div className='hidden lg:flex items-center justify-center w-full gap-6 flex-1 '>
                    {paths.map((p) => (
                        <a href={p.to} className={cn(pathname === p.to ? "font-medium" : "lg:hover:text-foreground text-foreground/60", "ease-in-out duration-200 text-sm group")}>
                            {p.name}
                            <div className={cn(p.to === pathname ? "scale-x-100" : "scale-x-0  group-hover:scale-x-100", 'ease-in-out duration-200 w-2/3 mx-auto h-1 shadow-[0px_0px_10px_px] shadow-primary rounded-full bg-primary')}></div>
                        </a>
                    ))}
                </div>
                {/* <div className='flex items-center justify-center gap-3 px-7'>
                    {contact.map((link) => (
                        <a href={link.path} >
                            <link.icon size={20} />
                        </a>
                    ))}
                </div> */}
                <div className='flex-1' ></div>
                <div  className='lg:ml-10 flex items-center justify-center gap-2 text-foreground text-nowrap font-bold opacity-0'>
                    <SquareTerminal size={23} className='text-primary' />
                    Kira Aziz
                </div>
                <Sheet >
                    <SheetTrigger asChild>
                        <Button variant='outline' size='icon' className='flex lg:hidden hover:bg-primary'>
                            <Menu size={19} />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className='p-4 flex flex-col gap-2'>
                        {paths.map((p) => (
                            <a href={p.to} className={cn(pathname === p.to ? "font-medium" : "lg:hover:text-foreground text-foreground/60", "ease-in-out duration-200 text-sm group")}>
                                {p.name}
                            </a>
                        ))}
                    </SheetContent>
                </Sheet>
            </header>
        </>
    )
}


export function ContactTools({ pathname }: any) {

    const contact = {
        "email": {
            "name": "mailto:kiraaziz2020@gmail.com",
            "icon": "devicon:nextjs",
        },
        "phone": {
            "name": "tel:+216 93 989 486",
            "icon": "devicon:nextjs",
        },
        "facebook": {
            "name": "https://www.facebook.com/aziz.kira.581/",
            "icon": "devicon:nextjs",
        },
        "github": {
            "name": "https://github.com/kiraaziz",
            "icon": "devicon:nextjs",
        },
        "linkedin": {
            "name": "https://www.linkedin.com/in/med-aziz-rjeibi-3b07832a5/",
        },
        "devto": {
            "name": "https://dev.to/kiraaziz",
            "icon": "devicon:nextjs",
        }
    }

    return (
        <>
            <div className='fixed left-0  mx-auto bottom-0 w-full lg:w-max  lg:h-full p-3 z-50 flex items-center justify-center'>
                <div className='lg:flex-col overflow-visible p-2 w-max bg-card rounded-full border flex items-center justify-center gap-2  ease-in-out duration-200'>
                    {Object.keys(contact).map((link) => (
                        <a href={contact[link].name} className='lg:hover:bg-primary h-8 w-8 flex items-center justify-center rounded-full lg:hover:my-3 lg:hover:-translate-yx-1 ease-in-out duration-200  lg:hover:shadow-[0px_0px_10px_1px] lg:hover:shadow-primary'>
                            <Icon icon={contact[link].icon} height={20} width={20} />
                        </a>
                    ))}
                </div>
            </div>

        </>
    )
}
