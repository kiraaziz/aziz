import DotesLayout from "../Global/DotesLayout";

export default function About() {
    return (
        <div className="w-full max-w-5xl mx-auto lg:border-x border-dashed relative">
            <div className="to-start-animation w-full pb-10 lg:p-10!">
                <div className="w-full h-full">
                    <div className="max-w-2xl flex h-full items-center justify-between">
                        <div className="flex items-start justify-between w-full flex-col lg:mt-0 mt-5 lg:p-5">
                            <h1 className="text-xl lg:text-3xl font-bold to-start-animation mb-3.5 -tracking-wide">
                                Hi, I’m Kira Aziz
                            </h1>
                            <p className="mt-1.5 mb-0.5 font-extralight text- text-foreground/50 to-start-animation -tracking-wide">
                                - I am currently working as a Tech Lead at a <a href="https://dev.delib.pro/" className="text-primary border-b border-dashed border-primary font-medium mx-1 " target="_blank" rel="noopener noreferrer">Délib</a>,  In parallel, I am pursuing a degree in software engineering.
                                <div className="h-1.5" />
                                - Also I ship scalable features for application used by a global audience of over <span className="text-primary border-b border-dashed border-primary font-medium mx-1 ">+200k users</span>.
                                <div className="h-1.5" />
                                - I also contribute to open-source projects with over <span className="text-primary border-b border-dashed border-primary font-medium mx-1 ">300 Stars</span>, on GitHub, and reaching over <span className="text-primary border-b border-dashed border-primary font-medium mx-1 ">60,000</span> readers on Dev.to.
                            </p>

                            <div className="flex gap-4 mt-7">
                                <a
                                    href="https://github.com/kiraaziz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-foreground/70 hover:text-primary text-sm"
                                >
                                    <img src="/contact/github.svg" alt="GitHub" className="h-4 w-4 mr-2" />
                                    GitHub
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/med-aziz-rjeibi/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-foreground/70 hover:text-primary text-sm border-x px-4"
                                >
                                    <img src="/contact/linkedin.svg" alt="LinkedIn" className="h-4 w-4 mr-2" />
                                    LinkedIn
                                </a>
                                <a
                                    href="https://www.facebook.com/aziz.kira.581/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-foreground/70 hover:text-primary text-sm "
                                >
                                    <img src="/contact/facebook.svg" alt="Facebook" className="h-4 w-4 mr-2" />
                                    Facebook
                                </a>
                            </div>
                            {/* <DotesLayout /> */}
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}

