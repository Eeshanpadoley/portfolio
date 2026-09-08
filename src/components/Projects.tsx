import React from 'react'
import { resume } from '../data/resume'
import { generateProjectSVG } from '../utils/generateProjectImage'
import { motion } from 'framer-motion'

export default function Projects(){
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold">Projects</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {resume.projects.length===0 && <div className="text-gray-500">Add projects in `src/data/resume.ts`</div>}
          {resume.projects.map((p,idx)=> (
            <motion.div key={idx} whileHover={{scale:1.02}} className="relative rounded-2xl overflow-hidden">
              <div className="h-44 w-full overflow-hidden">
                <img src={p.image || generateProjectSVG(p.name, p.tech||[])} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 glass hover:shadow-2xl transition-shadow duration-300 -mt-10 relative rounded-b-2xl">
                <div className="font-semibold text-lg">{p.name}</div>
                <div className="text-sm text-gray-300 mt-2">{p.description}</div>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {(p.tech||[]).map((t:string,i:number)=>(<span key={i} className="text-xs px-2 py-1 bg-gradient-to-r from-white/6 to-white/3 rounded text-white/90">{t}</span>))}
                </div>
                <div className="mt-4">
                  {p.link ? <a href={p.link} className="text-primary hover:underline">View Project</a> : <span className="text-gray-400">No public link</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
