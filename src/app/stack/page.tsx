import { stack } from '@/utils/content/stack'
import React from 'react'

export default function page() {
    return (
        <div className="mt-2 flex flex-col mx-auto w-full max-w-3xl  gap-10 lg:space-y-8 lg:py-24">
            {
                stack.map((val) => (
                    <div className="gap-3 w-full grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5 lg:px-5">
                        <h1 className="col-span-full to-start-animation text-xl lg:text-3xl font-bold w-full mb-2">
                            {val.name}
                        </h1>
                        {val.children.map((childVal: any) => (
                            <div className="to-start-animation border bg-muted/20 p-1 rounded-2xl">
                                <div className="w-full relative h-20 overflow-visible flex items-center justify-center">
                                    <img src={childVal.svg} style={childVal.style ? childVal.style : {}} className="h-16 absolute blur-lg opacity-40 to-start-animation" />
                                    <img src={childVal.svg} style={childVal.style ? childVal.style : {}} className="h-16 absolute to-start-animation" />
                                </div>
                                <div className="w-full flex items-center justify-center  mb-2 text-foreground/60 text-sm">{childVal.name}</div>
                            </div>
                        ))}
                    </div>
                ))
            }
        </div>
    )
}