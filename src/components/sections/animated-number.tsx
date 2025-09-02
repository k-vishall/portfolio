import React from "react"
import { cn } from "@/lib/utils"

type AnimatedNumberProps = {
  value: number
  durationMs?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function AnimatedNumber({ value, durationMs = 1200, prefix, suffix, className }: AnimatedNumberProps) {
  const ref = React.useRef<HTMLSpanElement | null>(null)
  const [display, setDisplay] = React.useState(0)
  const [hasAnimated, setHasAnimated] = React.useState(false)
  const rafRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced =
      typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false

    const startAnimation = () => {
      if (hasAnimated || prefersReduced) {
        setDisplay(value)
        setHasAnimated(true)
        return
      }

      const start = performance.now()
      const from = 0
      const to = value

      const tick = (now: number) => {
        const elapsed = now - start
        const p = Math.min(elapsed / durationMs, 1)
        // easeOutCubic
        const eased = 1 - Math.pow(1 - p, 3)
        const current = Math.round(from + (to - from) * eased)
        setDisplay(current)
        if (p < 1) {
          rafRef.current = requestAnimationFrame(tick)
        } else {
          setHasAnimated(true)
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            startAnimation()
            observer.disconnect()
            break
          }
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [value, durationMs, hasAnimated])

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {new Intl.NumberFormat().format(display)}
      {suffix}
    </span>
  )
}
