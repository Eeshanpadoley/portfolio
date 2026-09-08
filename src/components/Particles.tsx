import React, { useEffect, useRef } from 'react'

export default function Particles(){
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(()=>{
    const canvas = ref.current
    if(!canvas) return
    const ctx = canvas.getContext('2d')!
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight
    const particles = Array.from({length: 60}).map(()=>({
      x: Math.random()*w,
      y: Math.random()*h,
      r: Math.random()*1.8 + 0.3,
      vx: (Math.random()-0.5)*0.3,
      vy: (Math.random()-0.5)*0.3
    }))

    let raf = 0
    function draw(){
      ctx.clearRect(0,0,w,h)
      ctx.fillStyle = 'rgba(255,255,255,0.04)'
      for(const p of particles){
        p.x += p.vx
        p.y += p.vy
        if(p.x<0) p.x = w
        if(p.x>w) p.x = 0
        if(p.y<0) p.y = h
        if(p.y>h) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    const onResize = ()=>{ w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight }
    window.addEventListener('resize', onResize)
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  },[])

  return <canvas id="particle-canvas" ref={ref} />
}
