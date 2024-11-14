import { useEffect, useRef } from 'react';
import { ActivityCalendar } from 'react-activity-calendar';

export const Github = ({ activity }: any) => {

    useEffect(() => {
        const calendarContainer: any = document.querySelector('.react-activity-calendar__scroll-container');
        if (calendarContainer) {
            calendarContainer.scrollLeft = calendarContainer.scrollWidth - calendarContainer.clientWidth;
            calendarContainer.style.overflow = 'hidden';
        }
    }, []);

    return (
        <div className="w-full mt-5 lg:mt-20">
            <div className="flex items-center justify-between w-full mt-5 lg:mt-10 mb-4">
                <h1 className="text-xl font-bold">Last activities</h1>
            </div>
            <ActivityCalendar data={activity} blockMargin={3} theme={
                {
                    light: [
                        "hsla(229 100% 79% / 0.06)",
                        "hsl(253 100% 57%)"
                    ],
                    dark: [
                        "hsla(229 100% 79% / 0.06)",
                        "hsl(253 100% 57%)"
                    ]
                }
            } />
        </div>
    )
};
