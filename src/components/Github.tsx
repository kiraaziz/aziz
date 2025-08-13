import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ActivityCalendar } from 'react-activity-calendar'

export const Github = () => {
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
    const spinner = document.querySelector(".spinner");
    if (spinner) {
      spinner.remove();
    }
  }, []);

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
    return <div className="lg:order-1 order-1 lg:border col-span-2 h-full  rounded-xl relative overflow-hidden">
      <div className="w-full h-[15.25rem] animate-pulse !opacity-30">
      </div>
    </div>
  }

  return (
    <div className={`lg:order-1 order-1 lg:border col-span-2 h-full rounded-xl relative ${!scroll && " lg:p-0"}`}>
      <div className={`w-full  ${scroll ? "animate-pulse !opacity-30 h-[15.25rem]": "h-[15.25rem]"} p-5`}>
        {!scroll && <div className="flex items-center justify-between w-full mb-4">
          <h1 className="text-lg lg:text-xl font-bold">Last activities</h1>
          <a
            className="text-sm font-light text-foreground/60 gap-2 transition-all ease-in-out duration-200 lg:hover:gap-5 flex items-center justify-center lg:bg-muted/20 px-4 py-2  lg:border rounded-xl"
            href={'https://github.com/kiraaziz'}>
            Explore Github
            <ArrowRight size={20} />
          </a>
        </div>}
        <div className={`w-full  relative overflow-hidden ${!scroll ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute -left-5 top-0 w-28 -translate-x-1/2  h-full bg-background blur-xl" />
          <ActivityCalendar
            data={activity}
            blockMargin={3}
            theme={{
              light: ['hsla(210 98.39% 52.23% / 0.06)', 'hsl(210 98.39% 52.23%)'],
              dark: ['hsla(210 98.39% 52.23% / 0.06)', 'hsl(210 98.39% 52.23%)'],
            }}
          />
        </div>
      </div>
    </div>
  )
}
