import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-8 z-[70] flex flex-col gap-2 w-12 h-10 justify-center items-end mix-blend-difference"
        aria-label="Menu"
      >
        <span className={`block h-[6px] bg-white transition-all duration-300 ease-out origin-center ${isOpen ? 'w-full rotate-45 translate-y-[14px]' : 'w-full'}`}></span>
        <span className={`block h-[6px] bg-white transition-all duration-300 ease-out ${isOpen ? 'opacity-0 translate-x-4' : 'w-full'}`}></span>
        <span className={`block h-[6px] bg-white transition-all duration-300 ease-out origin-center ${isOpen ? 'w-full -rotate-45 -translate-y-[14px]' : 'w-5/6'}`}></span>
      </button>

      {/* Fullscreen Menu Overlay */}
      <div className={`fixed inset-0 bg-white text-black z-[60] flex flex-col items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="flex flex-col gap-8 text-center text-6xl md:text-8xl font-bold uppercase font-[Oswald]">
          <a href="#home" className="hover:text-[#ff4a00] transition-colors" onClick={() => setIsOpen(false)}>HOME</a>
          <a href="#about" className="hover:text-[#ff4a00] transition-colors" onClick={() => setIsOpen(false)}>ABOUT</a>
          <a href="#works" className="hover:text-[#ff4a00] transition-colors" onClick={() => setIsOpen(false)}>WORKS</a>
          <a href="#contact" className="hover:text-[#ff4a00] transition-colors" onClick={() => setIsOpen(false)}>CONTACT</a>
        </nav>
      </div>
    </>
  )
}
