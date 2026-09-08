import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor(){
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const smoothX = useSpring(x, { stiffness: 55, damping: 24, mass: 1.4 })
  const smoothY = useSpring(y, { stiffness: 55, damping: 24, mass: 1.4 })
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(()=>{
    const move = (e:MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return ()=> window.removeEventListener('mousemove', move)
  },[x,y])

  return (
    <motion.div className="custom-cursor" style={{left:smoothX, top:smoothY}} ref={ref} aria-hidden>
      <div className="dot" />
    </motion.div>
  )
}
