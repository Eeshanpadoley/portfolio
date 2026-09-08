export function generateProjectSVG(title: string, tags: string[] = []){
  const hue = Math.abs(hashCode(title)) % 360
  const tagText = tags.slice(0,3).join(' • ')
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='700' viewBox='0 0 1200 700'>
    <defs>
      <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
        <stop offset='0%' stop-color='hsl(${hue} 70% 60%)' stop-opacity='0.95'/>
        <stop offset='100%' stop-color='hsl(${(hue+60)%360} 70% 45%)' stop-opacity='0.9'/>
      </linearGradient>
      <filter id='f' x='-20%' y='-20%' width='140%' height='140%'>
        <feGaussianBlur stdDeviation='30' result='b'/>
        <feBlend in='SourceGraphic' in2='b'/>
      </filter>
    </defs>
    <rect width='100%' height='100%' fill='url(#g)' />
    <g fill='rgba(255,255,255,0.06)'>
      <circle cx='100' cy='120' r='120' />
      <circle cx='1100' cy='600' r='200' />
      <rect x='700' y='40' width='420' height='260' rx='24' />
    </g>
    <g filter='url(#f)'>
      <text x='72' y='140' font-family='Inter, Arial, sans-serif' font-size='56' fill='rgba(255,255,255,0.95)' font-weight='700'>${escapeXml(title)}</text>
      <text x='72' y='200' font-family='Inter, Arial, sans-serif' font-size='22' fill='rgba(255,255,255,0.85)'>${escapeXml(tagText)}</text>
    </g>
  </svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

function escapeXml(s: string){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;') }

function hashCode(str: string){
  let h=0; for(let i=0;i<str.length;i++){ h = ((h<<5)-h)+str.charCodeAt(i); h |= 0 }
  return h
}
