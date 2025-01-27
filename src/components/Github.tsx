import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { ActivityCalendar } from "react-activity-calendar";

export const Github = ({ activity }: any) => {
  useEffect(() => {
    const calendarContainer: any = document.querySelector(
      ".react-activity-calendar__scroll-container",
    );
    if (calendarContainer) {
      calendarContainer.scrollLeft =
        calendarContainer.scrollWidth - calendarContainer.clientWidth;
      calendarContainer.style.overflow = "hidden";
    }
  }, []);

  useEffect(() => {
    const spinner = document.querySelector(".spinner");
    if (spinner) {
      spinner.remove();
    }
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full mb-4">
        <h1 className="text-lg lg:text-xl font-bold">Last activities</h1>
        <a className="text-sm font-light text-foreground/60 gap-2 transition-all ease-in-out duration-200 lg:hover:gap-5 flex items-center justify-center lg:bg-muted/20 px-4 py-2 rounded lg:border rounded-xl" href={"https://github.com/kiraaziz"} >
          Explore Github
          <ArrowRight size={20} />
        </a>
      </div>
      <div className="w-full h-max relative overflow-hidden">
        <div className="absolute -left-5 top-0 w-28 -translate-x-1/2  h-full bg-background blur-xl" />
        <ActivityCalendar
          data={activity}
          blockMargin={3}
          theme={{
            light: ["hsla(210 98.39% 52.23% / 0.06)", "hsl(210 98.39% 52.23%)"],
            dark: ["hsla(210 98.39% 52.23% / 0.06)", "hsl(210 98.39% 52.23%)"],
          }}
        />
      </div>
    </div>
  );
};
