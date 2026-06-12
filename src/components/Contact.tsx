import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(textRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      )
    }
  }, [])

  return (
    <section id="contact" ref={containerRef} className="bg-[#ff4a00] text-[#050505] min-h-[60vh] flex flex-col items-center justify-center py-24 px-6 section relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute -top-20 -right-20 text-[30vw] font-[Oswald] opacity-10 select-none leading-none tracking-tighter">
        CONTACT
      </div>

      <div className="z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <p className="text-xl md:text-2xl font-sans tracking-[0.2em] uppercase font-bold mb-6">
          Ready to tell your story?
        </p>
        
        <h2 ref={textRef} className="text-6xl md:text-9xl font-bold font-[Oswald] uppercase leading-none tracking-tighter mb-12">
          Let's Work<br/>Together.
        </h2>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <a 
            href="tel:+919236073667" 
            className="inline-block px-10 py-5 bg-[#050505] text-[#f8f8f8] text-xl font-bold tracking-widest uppercase hover:bg-white hover:text-[#050505] transition-colors duration-300 rounded-full"
          >
            +91 9236073667
          </a>
          <a 
            href="mailto:KP2078353@gmail.com" 
            className="inline-block px-10 py-5 bg-[#050505] text-[#f8f8f8] text-xl font-bold tracking-widest uppercase hover:bg-white hover:text-[#050505] transition-colors duration-300 rounded-full"
          >
            Email Me
          </a>
        </div>
        <p className="font-sans font-bold tracking-widest uppercase text-xl">Gosaiganj, Lucknow</p>
      </div>
    </section>
  )
}
