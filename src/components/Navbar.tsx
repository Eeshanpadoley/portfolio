import React, { useEffect, useState } from 'react'
import { Sun, Moon, Download } from 'lucide-react'
import Button from './ui/Button'
import { resume } from '../data/resume'

export default function Navbar(){
  const [isDark, setIsDark] = useState<boolean>(() => {
    try{
      const v = localStorage.getItem('theme')
      if(v) return v === 'dark'
      return true
    }catch{ return true }
  })

  useEffect(()=>{
    const root = document.documentElement
    if(isDark){
      root.classList.remove('light')
      root.classList.add('dark')
      localStorage.setItem('theme','dark')
    } else {
      root.classList.remove('dark')
      root.classList.add('light')
      localStorage.setItem('theme','light')
    }
  },[isDark])

  return (
    <nav className="fixed w-full z-40 top-4 left-0 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between glass p-3 rounded-2xl backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="text-white font-semibold navbar-name">{resume.name}</div>
          <div className="text-sm text-gray-300 hidden md:block navbar-title">{resume.title}</div>
        </div>
        <div className="flex items-center gap-3">
          <button aria-pressed={!isDark} aria-label="Toggle theme" onClick={()=>setIsDark(s=>!s)} className="p-2 rounded-full hover:bg-white/5 focus-ring">
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href={resume.resumeUrl || '/resume.pdf'} className="flex items-center" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="min-w-[116px] gap-2"><Download size={14}/>Resume</Button>
          </a>
        </div>
      </div>
    </nav>
  )
}
