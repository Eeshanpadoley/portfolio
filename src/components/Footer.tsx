import React from 'react'

export default function Footer(){
  return (
    <footer className="py-12">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">© {new Date().getFullYear()} — Built with care</div>
    </footer>
  )
}
