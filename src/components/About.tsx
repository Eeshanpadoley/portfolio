import React from 'react'
import { resume } from '../data/resume'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h3 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} className="text-2xl font-semibold">About</motion.h3>
        <motion.p className="text-gray-300 mt-4" initial={{opacity:0}} whileInView={{opacity:1}}>
          {resume.summary}
        </motion.p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Stat label="Years" value={resume.stats.years} />
          <Stat label="Projects" value={resume.stats.projects} />
          <Stat label="Technologies" value={resume.stats.technologies} />
          <Stat label="Certifications" value={resume.stats.certifications} />
        </div>
      </div>
    </section>
  )
}

function Stat({label,value}:{label:string;value:string}){
  return (
    <div className="glass rounded-xl p-4 text-center">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  )
}
