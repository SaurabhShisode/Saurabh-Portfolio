import { useEffect, useRef, useState, type ComponentProps } from "react"
import { AnimatePresence, motion, useMotionValue } from "motion/react"
import { cn } from "../../lib/utils"

export function Pointer({
  className,
  style,
  children,
  ...props
}: ComponentProps<typeof motion.div>): React.ReactNode {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const [isActive, setIsActive] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const parent = containerRef.current?.parentElement
    if (!parent) return

    parent.style.cursor = "none"

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      handleMouseMove(e)
      setIsActive(true)
    }

    const handleMouseLeave = () => setIsActive(false)

    parent.addEventListener("mousemove", handleMouseMove)
    parent.addEventListener("mouseenter", handleMouseEnter)
    parent.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      parent.style.cursor = ""
      parent.removeEventListener("mousemove", handleMouseMove)
      parent.removeEventListener("mouseenter", handleMouseEnter)
      parent.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [x, y])

  return (
    <>
      <div ref={containerRef} />
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="pointer-events-none fixed z-50 transform-[translate(-50%,-50%)] z-[9999]"
            style={{ top: y, left: x, ...style }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            {...props}
          >
            {children ?? (
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 16 16"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className={cn("rotate-[-70deg] stroke-white text-blue-500", className)}
              >
                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
              </svg>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
