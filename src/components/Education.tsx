import React from 'react'
import { resume } from '../data/resume'

export default function Education(){
  return (
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-2xl font-semibold">Education</h3>
        <div className="mt-6 space-y-4">
          {resume.education.length===0 && <div className="text-gray-500">Add education in `src/data/resume.ts`</div>}
          {resume.education.map((e,idx)=> (
            <div key={idx} className="glass p-4 rounded-xl">
              <div className="font-semibold">{e.degree} — {e.institution}</div>
              <div className="text-sm text-gray-400">{e.dates}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
