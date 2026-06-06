"use client"
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ActivityCalendar } from 'react-activity-calendar'

const Github = () => {
  const [activity, setActivity] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [scroll, setScroll] = useState(true)

  async function fetchActivity() {
    try {
      setLoading(true)
      const res = await fetch('https://github-contributions-api.jogruber.de/v4/kiraaziz?y=last')
      const data = await res.json()
      setActivity(data.contributions)
    } catch (err) {
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchActivity()
  }, [])

  useEffect(() => {
    const calendarContainer: any = document.querySelector(
      ".react-activity-calendar__scroll-container",
    );
    if (calendarContainer) {
      calendarContainer.style.overflow = "hidden";
      calendarContainer.scrollLeft =
        calendarContainer.scrollWidth - calendarContainer.clientWidth;
    }
    if (activity) {
      setTimeout(() => setScroll(false), 400)
    }
  }, [activity])

  if (!activity || loading) {
    return <div className="lg:order-1 order-2 lg:border-b border-dashed col-span-2 h-full relative  overflow-hidden">
      <div className="w-full h-56 lg:h-65 animate-pulse opacity-30!">
      </div>
    </div>
  }

  return (
    <div className={`xx lg:order-1 order-2 lg:border-b border-dashed col-span-2 h-full relative ${!scroll && " lg:p-0"}`}>
      <div className={`w-full  ${scroll ? "animate-pulse opacity-30! h-61" : "h-61"} lg:p-5`}>
        {!scroll && <div className="to-start-animation flex items-center justify-between w-full mb-4">
          <h1 className="text-lg lg:text-xl font-medium hidden lg:flex">Last activities</h1>
          <h1 className="text-lg lg:text-xl font-medium lg:hidden flex ">Activities</h1>
          <a
            className="text-sm font-light text-foreground/60 gap-2 transition-all ease-in-out duration-200 lg:hover:gap-5 flex items-center justify-center lg:bg-muted/20 px-4 py-2  lg:border rounded-xl"
            href="https://github.com/kiraaziz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hidden lg:flex">Explore Github</span>
            <span className="lg:hidden flex ">Explore</span>
            <ArrowRight size={20} />
          </a>
        </div>}
        <div className={`relative to-start-animation w-full overflow-hidden ${!scroll ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute -left-5 top-0 w-full h-full bg-linear-to-r from-background " />
          <ActivityCalendar
            data={activity}
            blockMargin={3}
            theme={{
              light: ['hsla(222, 100%, 28%, 0.12)', 'hsl(222, 100%, 45%)'],
              dark: ['hsla(222, 100%, 28%, 0.12)', 'hsl(222, 100%, 45%)']
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Github