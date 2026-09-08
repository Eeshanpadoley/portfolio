import React from 'react'
import Button from './ui/Button'
import { resume } from '../data/resume'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

export default function Hero(){
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{duration:0.6}}>
          <p className="text-sm text-gray-300">Hi, my name is</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2">{resume.name}</h1>
          <h2 className="text-2xl text-primary mt-2">{resume.title}</h2>
          <p className="text-gray-300 mt-6 max-w-xl">{resume.summary}</p>
          <div className="flex gap-3 mt-6">
            <a href="#projects"><Button>View My Work</Button></a>
            <a href={resume.resumeUrl || '/resume.pdf'} target="_blank" rel="noopener noreferrer"><Button variant="ghost">Download Resume</Button></a>
            <a href="#contact"><Button variant="ghost">Contact Me</Button></a>
          </div>
          <div className="mt-6 text-sm text-gray-400">
            <AnimatedKeywords />
          </div>
        </motion.div>

        <motion.div className="flex justify-center md:justify-end" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{duration:0.6}}>
          <ParallaxPortrait />
        </motion.div>
      </div>
    </section>
  )
}

function AnimatedKeywords(){
  const items = [
    ...(resume.skills.programming || []),
    ...(resume.skills.data || []),
    ...(resume.skills.ai || [])
  ].slice(0,6)
  return (
    <div className="flex flex-wrap gap-2">
      {items.length===0? <span className="text-gray-500">Add keywords to `src/data/resume.ts`</span> : items.map((k,i)=>(
        <span key={i} className="text-sm px-3 py-1 bg-white/3 rounded-full">{k}</span>
      ))}
    </div>
  )
}

function ParallaxPortrait(){
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springConfig = { damping: 20, stiffness: 120 }
  const sx = useSpring(x, springConfig)
  const sy = useSpring(y, springConfig)
  const rot = useTransform(sx, [-40,40], [-6,6])
  const tilt = useTransform(sy, [-40,40], [6,-6])

  return (
    <div onMouseMove={(e)=>{
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
      const px = (e.clientX - rect.left) - rect.width/2
      const py = (e.clientY - rect.top) - rect.height/2
      // reduce motion scale for smoother, less jumpy effect
      x.set(px / 14)
      y.set(py / 14)
    }} onMouseLeave={()=>{x.set(0); y.set(0)}} className="relative">
      <motion.div style={{x:sx,y:sy,rotate:rot}} whileHover={{scale:1.03}} transition={{type:'spring', stiffness:200}} className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
        <motion.img src={resume.photoPath || '/photo.jpg'} alt={resume.name} className="w-full h-full object-cover" style={{rotate:tilt}} />
      </motion.div>
      <div className="pointer-events-none absolute -right-6 -bottom-6 w-40 h-40 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-20 blur-3xl" />
    </div>
  )
}
