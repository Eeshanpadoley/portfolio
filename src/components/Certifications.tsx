import React from 'react'
import { resume } from '../data/resume'

export default function Certifications(){
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold">Certifications & Achievements</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {resume.certifications.length===0 && <div className="text-gray-500">Add certifications in `src/data/resume.ts`</div>}
          {resume.certifications.map((c,idx)=> (
            <div key={idx} className="glass p-4 rounded-xl">
              <div className="font-semibold">{c.name}</div>
              <div className="text-sm text-gray-400">{c.issuer} — {c.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
