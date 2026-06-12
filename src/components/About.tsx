import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(textRef.current, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      )
    }

    if (timelineRef.current) {
      gsap.fromTo(timelineRef.current.children,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
          }
        }
      )
    }
  }, [])

  return (
    <section id="about" ref={containerRef} className="bg-[#050505] text-[#f8f8f8] min-h-[70vh] flex items-center justify-center py-24 px-6 sm:px-12 section">
      <div className="max-w-5xl mx-auto flex flex-col items-start space-y-16">
        
        {/* Profile */}
        <div className="space-y-8">
          <h2 className="text-xl md:text-2xl font-bold tracking-[0.1em] text-[#ff4a00] uppercase font-sans">
            Profile
          </h2>
          
          <p ref={textRef} className="text-2xl md:text-4xl leading-relaxed md:leading-relaxed font-light font-sans text-gray-300">
            Talented and enthusiastic <strong className="font-bold text-white">Graphic Designer</strong> with 2 years of experience producing innovative digital and print designs. Impressive record in aiding in developing attractive assets and images for use in online and communication offline assets, campaigns, events, white papers, and social media banner advertisements. Demonstrated a creative ability, a keen eye for detail, and an understanding of the most recent design trends.
          </p>

          <div className="flex flex-wrap gap-4 pt-8">
            {['Responsive Designs', 'Info Graphic Designs', 'Video Editing', 'Motion Graphic Designs', 'UI/UX Designs', 'Graphic Designs'].map((skill) => (
              <span key={skill} className="px-6 py-3 border border-[#333] rounded-full text-sm tracking-wider uppercase hover:border-[#ff4a00] hover:text-[#ff4a00] transition-colors duration-300">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#333]"></div>

        {/* Timeline: Experience & Education */}
        <div ref={timelineRef} className="w-full grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Work Experience */}
          <div className="space-y-12">
            <h2 className="text-3xl font-bold font-[Oswald] uppercase tracking-wide text-[#ff4a00]">Work Experience</h2>
            
            <div className="space-y-8 border-l border-[#333] pl-6 relative">
              
              <div className="relative">
                <div className="absolute w-3 h-3 bg-[#ff4a00] rounded-full -left-[1.95rem] top-2"></div>
                <h3 className="text-xl font-bold font-sans">Graphic Designer, UI/UX Designer & Gen AI Artist</h3>
                <p className="text-sm tracking-widest text-[#ff4a00] font-bold mt-1 mb-3">2024 - PRESENT</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm leading-relaxed">
                  <li>Self-Practice / Freelance Graphic designer (2025 - Present)</li>
                  <li>Created social media posts, posters, banners, and promotional creatives</li>
                  <li>Generated realistic AI images using text-to-image prompts</li>
                  <li>Designed content for brands, products, and personal projects</li>
                  <li>Worked on image enhancement, background change, and creative compositions</li>
                  <li>Continuously learning new design trends and AI tools</li>
                  <li>Designed political campaign creatives including banners, posters, pamphlets, digital ads, and social media graphics.</li>
                </ul>
              </div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-[#333] rounded-full -left-[1.95rem] top-2"></div>
                <h3 className="text-xl font-bold font-sans">Freelance Graphic Designer</h3>
                <p className="text-sm tracking-widest text-gray-500 font-bold mt-1 mb-3">2024 - 2025</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm leading-relaxed">
                  <li>Created social media and campaign designs for political clients</li>
                  <li>Delivered creative and impactful visuals on time</li>
                  <li>Create visuals for various aspects of events, such as invitations, signage, and social media graphics. Branding and identity design, venue graphics, and production coordination.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Education */}
          <div className="space-y-12">
            <h2 className="text-3xl font-bold font-[Oswald] uppercase tracking-wide text-[#ff4a00]">Education</h2>
            
            <div className="space-y-8 border-l border-[#333] pl-6 relative">
              
              <div className="relative">
                <div className="absolute w-3 h-3 bg-[#ff4a00] rounded-full -left-[1.95rem] top-2"></div>
                <h3 className="text-xl font-bold font-sans">Bachelors of BSC IN SCIENCE</h3>
                <h4 className="text-lg font-medium text-gray-300">LUCKNOW University</h4>
                <p className="text-sm tracking-widest text-[#ff4a00] font-bold mt-1 mb-3">2024 - SINCE</p>
              </div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-[#333] rounded-full -left-[1.95rem] top-2"></div>
                <h3 className="text-xl font-bold font-sans">MAAC Academy</h3>
                <p className="text-sm tracking-widest text-gray-500 font-bold mt-1 mb-3">2024 - 2026</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Completed professional training in Graphic Design, Video Editing, UI/UX Design, from MAAC Academy, Hazratganj, Lucknow.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
