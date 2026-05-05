"use client"
import { useEffect, useRef } from "react"

export default function DotesLayout() {
    return (
        <div className='bottom-0 absolute right-0 w-130 h-full -z-50 hidden lg:block'>
            <div className="h-full w-full absolute">
                <div className="absolute h-120 w-full bg-linear-to-tr from-background z-10" />
                <div className="absolute h-120 w-full bg-linear-to-tr from-background z-10" />
                <div className="absolute h-120 w-full bg-linear-to-tr from-background z-10" />
                <div className="absolute h-120 w-full bg-linear-to-t from-background z-10" />
                <div className="absolute h-120 w-full bg-linear-to-t from-background z-10" />
                <div className="absolute h-120 w-full bg-linear-to-t from-background z-10" />
                <div className="absolute h-120 w-full bg-linear-to-t from-background z-10" />
                <div className="absolute h-120 w-full bg-linear-to-r from-background z-10" />
                <DotsCanvas />
            </div>
        </div>
    )
}

const COLS = 50
const ROWS = 30
const DOT_RADIUS = 3
const GAP = 4
const COLORS = [
    { r: 115, g: 115, b: 115 },
    { r: 59, g: 130, b: 246 },
]

const DotsCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")!

        const CELL = DOT_RADIUS * 2 + GAP
        canvas.width = COLS * CELL
        canvas.height = ROWS * CELL

        const dots = Array.from({ length: COLS * ROWS }, () => ({
            opacity: Math.random() * 0.75 + 0.1,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            targetOp: Math.random() * 0.75 + 0.1,
            targetCol: COLORS[Math.floor(Math.random() * COLORS.length)],
            speed: Math.random() * 0.05 + 0.01,
            timer: Math.floor(Math.random() * 120) + 30,
            tick: Math.floor(Math.random() * 120),
        }))

        let raf: number

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            dots.forEach((d: any, i) => {
                d.tick++
                if (d.tick >= d.timer) {
                    d.tick = 0
                    d.timer = Math.floor(Math.random() * 120) + 30
                    d.targetOp = Math.random() * 0.75 + 0.1
                    d.targetCol = COLORS[Math.floor(Math.random() * COLORS.length)]
                }

                d.opacity += (d.targetOp - d.opacity) * d.speed

                const col = i % COLS
                const row = Math.floor(i / COLS)
                const x = col * CELL + DOT_RADIUS
                const y = row * CELL + DOT_RADIUS

                const { r, g, b } = d.color
                ctx.beginPath()
                ctx.arc(x, y, DOT_RADIUS, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(${r},${g},${b},${d.opacity.toFixed(2)})`
                ctx.fill()
            })

            raf = requestAnimationFrame(draw)
        }

        draw()
        return () => cancelAnimationFrame(raf)
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="h-50 w-full object-cover opacity-80"
        />
    )
}