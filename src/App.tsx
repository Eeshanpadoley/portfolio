import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
// import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Particles from './components/Particles'
import Cursor from './components/Cursor'

export default function App(){
  return (
    <div className="min-h-screen">
      <Navbar />
      <Particles />
      <Cursor />
      <motion.main initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.45}} className="pt-24">
        <Hero />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  )
}
