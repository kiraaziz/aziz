export default function Footer() {
    return (
        <footer className="w-full mx-auto h-28 flex items-center justify-center bg-muted/20 border-t">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between w-full max-w-7xl mx-auto">
                <div className="text-foreground/70 font-light">
                    <p>&copy; {new Date().getFullYear()} Kira Aziz. All rights reserved.</p>
                </div>
                <div className="flex gap-4">
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
            </div>
        </footer>
    )
}
