"use client"
import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { useHalfText } from '@/utils/global'

export default function ProjectDetails({ data, isShort = false , i}: any) {

  const [open, setOpen] = React.useState(false)
  const [isDesktop, setIsDesktop] = React.useState(false)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    setIsDesktop(mediaQuery.matches)

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches)
    }

    mediaQuery.addListener(handleMediaQueryChange)
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange)
    }
  }, [])

  React.useEffect(() => {
    if ((window as any).reinitScrollAnimation) {
      (window as any).reinitScrollAnimation()
    }
  }, [])

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {isShort ? (
            <div className={`w-full flex-col flex  bg-muted/20 p-2 hover:cursor-pointer to-start-animation border-t ${![4, 19].includes(i) && "border-r"}`}>
              <div className="gap-1 flex items-center justify-center w-full">
                {data.logo && <div className="h-10 w-10 flex items-center justify-center overflow-visible relative">
                  <img src={`/svg/app/${data.logo}`} className={`h-8`} />
                  <img src={`/svg/app/${data.logo}`} className={`h-8 hidden opacity-70 lg:block absolute blur-xl `} />
                </div>}
                <div className="w-full flex-1">
                  <h1 className="font-medium mr-2 text-foreground/80">{data.name}</h1>
                  <p className="text-sm text-foreground/60 w-full">{useHalfText(data.short, 13)}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full ">
              <Card data={data} />
            </div>
          )}
        </DialogTrigger>
        <DialogContent className="max-w-4xl! rounded-3xl overflow-hidden">
          <div className='bg' />
          <Details data={data} />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        {isShort ? (
          <div className="w-full flex-col flex  bg-muted/20 p-2  border rounded-2xl hover:cursor-pointer to-start-animation">
            <div className="gap-1 flex items-center justify-center w-full">
              {data.logo && <div className="h-10 w-10 flex items-center justify-center overflow-visible relative">
                <img src={`/svg/app/${data.logo}`} className={`h-8`} />
                <img src={`/svg/app/${data.logo}`} className={`h-8 hidden opacity-70 lg:block absolute blur-xl `} />
              </div>}
              <div className="w-full flex-1">
                <h1 className="font-medium mr-2 text-foreground/80">{data.name}</h1>
                <p className="text-sm text-foreground/60 w-full">{useHalfText(data.short, 13)}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full">
            <Card data={data} />
          </div>
        )}
      </DrawerTrigger>
      <DrawerContent className="w-full p-3 ">
        <div className='h-max overflow-auto'>
          <Details data={data} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

const Details = ({ data }: any) => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className=" hover:cursor-point flex md:flex-row flex-col lg:space-y-0 space-y-5 gap-5 w-full ">
      <div className="flex flex-col md:max-w-96 mt-5 lg:mt-0">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {data.demo &&
              <CarouselItem>
                <iframe src={data.demo} className="w-full h-full object-cover object-top-left bg-primary/20 rounded-xl border" />
              </CarouselItem>
            }
            {data.images.map((image: any) => (
              <CarouselItem>
                <img src={image.medium} className="w-full h-full object-cover object-top-left bg-primary/20 rounded-xl border" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="w-full flex items-center justify-start mt-4 gap-2">
          <div className="flex items-center justify-center gap-2">
            <Button variant="outline" size="icon" onClick={() => api?.scrollPrev()} className="rounded-full">
              <ChevronLeft size={20} />
            </Button>
            <Button variant="outline" size="icon" onClick={() => api?.scrollNext()} className="rounded-full">
              <ChevronRight size={20} />
            </Button>
          </div>
          <div className="py-2 text-center text-sm text-muted-foreground">
            Slide {current} of {count}
          </div>
        </div>
      </div>
      <div className=" flex flex-col ">
        <div className="w-full flex items-center justify-center gap-2">
          <div className={`h-9 flex items-center justify-center overflow-visible relative ${data.logo ? 'w-9' : 'w-0'}`}>
            {data.logo && <div className="h-10 w-10 flex items-center justify-center overflow-visible relative">
              <img src={`/svg/app/${data.logo}`} className={`h-8`} />
              <img src={`/svg/app/${data.logo}`} className={`h-8 hidden opacity-70 lg:block absolute blur-xl `} />
            </div>}
          </div>
          <h1 className="text-lg font-semibold">{useHalfText(data.name, 20)}</h1>
          <div className="flex-1 flex items-center justify-end" />
        </div>
        <div className="flex gap-1.5 flex-wrap mb-2 mt-2">
          {data.tags
            .split(' ')
            .map((tag: any) =>
              <div className="hover:cursor-pointer border text-xs text-foreground/60 bg-background/60 px-2 rounded-full flex items-center justify-center my-auto h-max py-1">
                {tag}
              </div>
            )}
        </div>
        <p className="text-sm  font-light text-foreground/50 max-w-md flex-1">{data.description}</p>
        <div className="flex items-center justify-center gap-2 mt-auto">
          <DrawerClose className="w-full md:hidden">
            <Button className="w-full gap-3 mt-3 rounded-xl bg-muted/20" variant="outline">
              Close
            </Button>
          </DrawerClose>
          {data.url && (
            <a 
              href={data.url} 
              onClick={(e) => e.stopPropagation()} 
              className="w-full h-full"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="w-full gap-3 mt-3 rounded-xl bg-muted/20" variant="outline">
                Visite
                <ArrowUpRight size={20} />
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const Card = ({ data }: any) => {
  return (
    <div className="w-full border bg-muted/20 rounded-3xl overflow-hidden hover:cursor-pointer h-full to-start-animation">
      <img src={data.images[0].small} className="to-start-animation h-40 lg:h-52 border-b w-full object-cover object-top-left bg-primary/20 " />
      <div className="p-4 pb-3 relative">
        <div className="w-full flex items-center justify-center gap-2">
          {data.logo && <div className="to-start-animation h-10 w-10 flex items-center justify-center overflow-visible relative">
            <img src={`/svg/app/${data.logo}`} className={`h-7 to-start-animation`} />
            <img src={`/svg/app/${data.logo}`} className={`h-7 hidden lg:block absolute blur-xl to-start-animation`} />
          </div>}
          <h1 className="to-start-animation text-lg font-semibold">{useHalfText(data.name, 20)}</h1>
          <div className="flex-1 flex items-center justify-end">
            {data.url && (
              <a
                href={data.url}
                onClick={(e) => e.stopPropagation()}
                className="to-start-animation text-sm underline text-foreground/60 hover:text-foreground pointer-events-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                visite
              </a>
            )}
          </div>
        </div>
        <div className="flex gap-1.5 flex-wrap mb-2">
          {data.tags
            .split(' ')
            .splice(0, 4)
            .map((tag: any) =>
              <div className="to-start-animation hover:cursor-pointer border text-xs text-foreground/60 bg-background/60 px-2 rounded-full flex items-center justify-center my-auto h-max py-1">
                {tag}
              </div>
            )}
        </div>
        <p className="text-sm  font-extralight text-foreground/50 max-w-md to-start-animation text-left">{useHalfText(data.description, 135)}</p>
      </div>
    </div>
  )
}
