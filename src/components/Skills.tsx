import React from 'react'
import { resume } from '../data/resume'
import { motion } from 'framer-motion'

export default function Skills(){
  const groups = [
    {title:'Technical', items: resume.skills.technical},
    {title:'Data & Analytics', items: resume.skills.data},
    {title:'SQL & Databases', items: resume.skills.sql},
    {title:'AI / ML', items: resume.skills.ai},
    {title:'Data Visualization', items: resume.skills.visualization},
    {title:'Tools', items: resume.skills.tools},
    {title:'Cloud & APIs', items: resume.skills.cloud},
    {title:'Programming', items: resume.skills.programming},
    {title:'Business', items: resume.skills.business}
  ]
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold">Skills</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {groups.map((g,idx)=> (
            <motion.div key={idx} whileHover={{scale:1.02}} className="glass p-4 rounded-xl transition-shadow duration-200 hover:shadow-[0_8px_30px_rgba(124,58,237,0.12)]">
              <div className="font-semibold">{g.title}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {(!g.items || g.items.length===0) ? <span className="text-sm text-gray-500">—</span> : g.items.map((s,i)=> (
                  <span key={i} className="text-xs px-3 py-1 bg-gradient-to-r from-white/5 to-white/3 rounded-full">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
