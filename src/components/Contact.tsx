import React from 'react'
import { resume } from '../data/resume'

export default function Contact(){
  // Use Vite env var `VITE_FORM_ENDPOINT` or global window override; avoid `process` in browser.
  const endpoint = (window as any).FORM_ENDPOINT || (import.meta as any).env?.VITE_FORM_ENDPOINT || 'https://example.com/form-endpoint'

  async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    // honeypot spam field
    if(data.get('website')){
      return
    }
    const payload: any = {}
    data.forEach((v,k)=> payload[k]=v)

    try{
      const res = await fetch(endpoint, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
      if(res.ok){
        alert('Message sent — thank you!')
        form.reset()
      } else {
        alert('Submission failed — try again later')
      }
    }catch(err){
      alert('Submission error — check network')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h3 className="text-2xl font-semibold">Let's Build Something Great Together</h3>
        <p className="text-gray-300 mt-3">Reach out via email or the form below.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-xl">
            <div className="font-semibold">Contact</div>
            <div className="mt-3 text-sm text-gray-300">
              <div>Email: {resume.email || '—'}</div>
              <div>Phone No: {resume.phone || '—'}</div>
              <div>LinkedIn: {resume.linkedin ? <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View profile</a> : '—'}</div>
              <div>GitHub: {resume.github ? <a href={resume.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View profile</a> : '—'}</div>
            </div>
          </div>

          <form className="glass p-6 rounded-xl space-y-4" onSubmit={handleSubmit}>
            <input name="name" required className="w-full p-3 rounded-lg bg-transparent border border-white/10" placeholder="Your name" />
            <input name="email" type="email" required className="w-full p-3 rounded-lg bg-transparent border border-white/10" placeholder="Your email" />
            <input name="website" tabIndex={-1} autoComplete="off" style={{display:'none'}} />
            <textarea name="message" required className="w-full p-3 rounded-lg bg-transparent border border-white/10" rows={5} placeholder="Message" />
            <button type="submit" className="px-4 py-2 rounded-full bg-primary text-white">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
