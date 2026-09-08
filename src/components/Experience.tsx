import React from 'react'
import { resume } from '../data/resume'
import { motion } from 'framer-motion'

export default function Experience(){
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold">Experience</h3>
        <div className="mt-8 space-y-6">
          {resume.experience.length===0 && <div className="text-gray-500">Add experience in `src/data/resume.ts`</div>}
          {resume.experience.map((e,idx)=> (
            <motion.div key={idx} initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} className="glass p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{e.title}</div>
                  <div className="text-sm text-gray-300">{e.company} — {e.location || ''}</div>
                </div>
                <div className="text-sm text-gray-400">{e.duration}</div>
              </div>
              <ul className="mt-3 list-disc ml-5 text-gray-300">
                {e.responsibilities?.map((r:string,i:number)=>(<li key={i}>{r}</li>))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
