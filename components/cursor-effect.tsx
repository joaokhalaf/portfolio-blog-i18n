'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 0.3,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference" as const,
      opacity: 1
    }
  }

  useEffect(() => {
    const textEnter = () => setCursorVariant("text")
    const textLeave = () => setCursorVariant("default")

    document.querySelectorAll("h1, h2, h3, a, button").forEach(element => {
      element.addEventListener("mouseenter", textEnter)
      element.addEventListener("mouseleave", textLeave)
    })

    return () => {
      document.querySelectorAll("h1, h2, h3, a, button").forEach(element => {
        element.removeEventListener("mouseenter", textEnter)
        element.removeEventListener("mouseleave", textLeave)
      })
    }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </AnimatePresence>
  )
}

