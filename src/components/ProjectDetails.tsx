import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "./ui/button"
import { useHalfText } from "@/lib/functions/useHelfText"

export default function ProjectDetails({ data }: any) {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <div className="w-full border bg-muted/20 rounded-lg overflow-hidden hover:cursor-pointer">
                    <img src={data.images[0].replace("upload", "upload/w_600")} className="h-52 border-b w-full object-cover object-left-top bg-primary/20" />
                    <div className="p-4 pb-3 relative">
                        <div className="w-full flex items-center justify-center gap-2">
                            <div className={`h-9 flex items-center justify-center overflow-visible relative ${data.logo ? "w-9" : "w-0"}`}>
                                {data.logo && (<>
                                    <img src={`/svg/${data.logo}`} className={`${data.logo.includes("png") ? "h-6 -translate-y-0.5 " : "h-7"} `} /> <img src={`/svg/${data.logo}`} className={`${data.logo.includes("png") ? "h-6 -translate-y-0.5 " : "h-7"} hidden lg:block absolute blur-xl `} />
                                </>)}
                            </div>
                            <h1 className="text-lg font-semibold">
                                {useHalfText(data.name, 20)}
                            </h1>
                            <div className="flex-1 flex items-center justify-end">
                                {data.url && (
                                    <a href={data.url} onClick={(e) => e.stopPropagation()}
                                        className="text-sm underline text-foreground/60 hover:text-foreground pointer-events-auto" >
                                        visite
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="flex gap-1.5 flex-wrap mb-2">
                            {data.tags &&
                                data.tags
                                    .split(" ")
                                    .splice(0, 4)
                                    .map((tag) => (
                                        <div className="hover:cursor-pointer border text-xs text-foreground/60 bg-background/60 px-2 rounded-full flex items-center justify-center my-auto h-max py-1">
                                            {tag}
                                        </div>
                                    ))}
                        </div>
                        <p className="text-sm  font-light text-foreground/50 max-w-md">
                            {useHalfText(data.description, 150)}
                        </p>
                    </div>
                </div>
            </DrawerTrigger>
            <DrawerContent className="bg-background">
                <DrawerHeader>
                    <DrawerTitle>
                        {data.name}
                    </DrawerTitle>
                    <DrawerDescription>
                    </DrawerDescription>
                </DrawerHeader>
                {/* <DrawerFooter>
                    <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter> */}
            </DrawerContent>
        </Drawer>
    )
}
