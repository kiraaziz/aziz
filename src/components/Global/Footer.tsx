import { metaData } from '@/utils/content/metaData'
import React from 'react'

export default function Footer() {
    return (
        <footer className="w-full mx-auto h-28 flex items-center justify-center bg-muted/20 border-t">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between w-full max-w-7xl mx-auto">
                <div>
                    <p>&copy; {new Date().getFullYear()} Kira Aziz. All rights reserved.</p>
                </div>
                <div>
                    <ul className="flex space-x-4">
                        {["instagram", "github", "linkedin"].map((social: any) => (
                            <li key={social}>
                                <a
                                    href={(metaData as any).contact[social].name}
                                    className="hover:text-primary transition duration-200"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={`/contact/${(metaData as any).contact[social].title.toLowerCase().replace(" ", "")}.svg`}
                                        className="h-5 w-5"
                                        alt={`${(metaData as any).contact[social].title} icon`}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}
