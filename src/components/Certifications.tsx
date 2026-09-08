import React from 'react'
import { resume } from '../data/resume'

export default function Certifications(){
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold">Certifications & Achievements</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {resume.certifications.length===0 && <div className="text-gray-500">Add certifications in `src/data/resume.ts`</div>}
          {resume.certifications.map((c,idx)=> (
            <div key={idx} className="glass rounded-xl overflow-hidden">
              <a href={c.link} target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] bg-black/10 overflow-hidden">
                <img src={c.image} alt={`${c.name} certificate`} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
              </a>
              <div className="p-4">
                <div className="font-semibold">{c.name}</div>
                <div className="text-sm text-gray-400 mt-1">{c.issuer}{c.date ? ` — ${c.date}` : ''}</div>
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-primary hover:underline mt-3">View certificate</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
