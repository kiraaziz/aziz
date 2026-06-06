export default function DotesLayout() {
    return (
        <div className='to-start-animation  bottom-0 absolute right-0 w-130 h-full overflow-hidden -z-50 hidden lg:block'>
            <div className="h-full w-full absolute">
                <div className="absolute h-120 w-full bg-linear-to-tr via-transparent from-background z-10" />
                <div className="absolute h-120 w-full bg-linear-to-tr via-transparent from-background z-10" />
                <div className="absolute h-120 w-full bg-linear-to-t from-background z-10" />
                <div className="absolute h-120 w-full bg-linear-to-t from-background z-10" />
                <div className="absolute h-120 w-full bg-linear-to-t from-background z-10" />
                <div className="absolute h-120 w-full bg-linear-to-t from-background z-10" />
                <div className="absolute h-120 w-full bg-linear-to-r from-background z-10" />
                <div className="flex items-center justify-end">
                    <div className="to-start-animation  relative w-full h-120 ">
                        <video
                            src="/videos/3.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="object-cover h-full w-full absolute opacity-70"
                            style={{ display: "block", mixBlendMode: "screen" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
