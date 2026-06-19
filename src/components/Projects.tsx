import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WORK_SECTIONS = [
  {
    title: 'UI Works',
    projects: [
      { id: 'ui-1', title: 'Fieldroot Landing Page', category: 'Grocery Delivery UI', height: 'h-96', color: 'bg-[#4a7a32]', redirect: '/fieldroot', image: '/images/ui/fieldroot.png' },
    ]
  },
  {
    title: 'Social/Political Posters',
    projects: [
      { id: 'sp-2', title: 'Gratitude Message', category: 'Election Poster', height: 'h-96', color: 'bg-orange-500', image: '/images/political/poster-2.jpg' },
      { id: 'sp-3', title: 'Free Electricity Promise', category: 'Manifesto Poster', height: 'h-[30rem]', color: 'bg-blue-600', image: '/images/political/poster-3.jpg' },
      { id: 'sp-4', title: 'Rights Awareness March', category: 'Yatra Campaign', height: 'h-80', color: 'bg-sky-700', image: '/images/political/poster-4.jpg' },
      { id: 'sp-5', title: 'International Relations', category: 'News Update', height: 'h-72', color: 'bg-red-800', image: '/images/political/poster-5.png' },
      { id: 'sp-6', title: 'Education System Trap', category: 'Social Issue Thumbnail', height: 'h-96', color: 'bg-red-900', image: '/images/political/poster-6.png' },
      { id: 'sp-7', title: 'Political Poster 7', category: 'Political Campaign', height: 'h-[32rem]', color: 'bg-orange-700', image: '/images/political/poster-7.png' },
      { id: 'sp-8', title: 'Political Poster 8', category: 'Political Campaign', height: 'h-[30rem]', color: 'bg-blue-700', image: '/images/political/poster-8.jpeg' },
      { id: 'sp-9', title: 'Political Poster 9', category: 'Political Campaign', height: 'h-96', color: 'bg-green-700', image: '/images/political/poster-9.jpeg' },
      { id: 'sp-10', title: 'Political Poster 10', category: 'Political Campaign', height: 'h-80', color: 'bg-purple-700', image: '/images/political/poster-10.jpeg' },
      { id: 'sp-11', title: 'Political Poster 11', category: 'Political Campaign', height: 'h-[32rem]', color: 'bg-red-700', image: '/images/political/poster-11.jpeg' },
      { id: 'sp-13', title: 'Political Poster 13', category: 'Political Campaign', height: 'h-96', color: 'bg-indigo-700', image: '/images/political/poster-13.jpeg' },
      { id: 'sp-14', title: 'Political Poster 14', category: 'Political Campaign', height: 'h-[32rem]', color: 'bg-gray-700', image: '/images/political/poster-14.jpeg' },
      { id: 'sp-15', title: 'Bhagalpur Campaign', category: 'Political Campaign', height: 'h-[32rem]', color: 'bg-green-700', image: '/images/political/poster-15.jpeg' },
      { id: 'sp-16', title: 'Mahila Suraksha Campaign', category: 'Political Campaign', height: 'h-96', color: 'bg-blue-700', image: '/images/political/poster-16.jpeg' },
      { id: 'sp-17', title: 'PDA Movement', category: 'Political Campaign', height: 'h-[30rem]', color: 'bg-red-700', image: '/images/political/poster-17.png' },
    ]
  },
  {
    title: 'Brand Designs',
    projects: [
      { id: 'bd-1', title: 'Nike Promotion', category: 'Brand Graphic', height: 'h-96', color: 'bg-zinc-800', image: '/images/brand/nike-shoe.jpg' },
      { id: 'bd-2', title: 'Van Heusen Sale', category: 'Fashion Campaign', height: 'h-[30rem]', color: 'bg-emerald-800', image: '/images/brand/van-heusen-jacket.jpg' },
      { id: 'bd-3', title: 'Wow Momos Offer', category: 'Food Marketing', height: 'h-80', color: 'bg-rose-900', image: '/images/brand/wow-momos.jpg' },
      { id: 'bd-4', title: 'Mega Sale Campaign', category: 'Social Media Ad', height: 'h-96', color: 'bg-slate-800', image: '/images/brand/headphones-sale.png' },
      { id: 'bd-5', title: 'Lit Energy Drink', category: 'Product Ad', height: 'h-[32rem]', color: 'bg-purple-900', image: '/images/brand/lit-energy.jpg' },
      { id: 'bd-6', title: 'Brand Graphic 1', category: 'Brand Design', height: 'h-[30rem]', color: 'bg-cyan-600', image: '/images/brand/brand-design-1.jpeg' },
      { id: 'bd-7', title: 'Brand Graphic 2', category: 'Brand Design', height: 'h-[32rem]', color: 'bg-yellow-600', image: '/images/brand/brand-design-2.jpeg' },
      { id: 'bd-8', title: 'Brand Graphic 3', category: 'Brand Design', height: 'h-96', color: 'bg-gray-800', image: '/images/brand/brand-design-3.jpeg' },
      { id: 'bd-9', title: 'Brand Graphic 4', category: 'Brand Design', height: 'h-[32rem]', color: 'bg-orange-800', image: '/images/brand/brand-design-4.jpeg' },
      { id: 'bd-10', title: 'Brand Graphic 5', category: 'Brand Design', height: 'h-96', color: 'bg-stone-800', image: '/images/brand/brand-design-5.jpeg' },
      { id: 'bd-11', title: 'Brand Graphic 6', category: 'Brand Design', height: 'h-[30rem]', color: 'bg-zinc-800', image: '/images/brand/brand-design-6.jpeg' },
      { id: 'bd-12', title: 'Brand Graphic 7', category: 'Brand Design', height: 'h-[32rem]', color: 'bg-emerald-800', image: '/images/brand/brand-design-7.jpeg' },
      { id: 'bd-13', title: 'Brand Graphic 8', category: 'Brand Design', height: 'h-96', color: 'bg-rose-900', image: '/images/brand/brand-design-8.jpeg' },
    ]
  }
]

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const items = gsap.utils.toArray<HTMLElement>('.project-item')
    
    items.forEach((item) => {
      gsap.fromTo(item,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      )
    })
  }, [])

  return (
    <>
      <section id="works" ref={containerRef} className="bg-[#f8f8f8] text-[#050505] min-h-screen py-24 px-6 sm:px-12 section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold font-[Oswald] uppercase mb-16 tracking-tight">
            Selected <span className="text-[#ff4a00]">Works</span>
          </h2>

          <div className="flex flex-col gap-24">
            {WORK_SECTIONS.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="text-3xl md:text-5xl font-[Oswald] uppercase mb-12 border-b-2 border-[#050505]/10 pb-4">
                  {section.title}
                </h3>
                
                {/* Masonry-style Grid for each section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-8">
                    {section.projects.filter((_, i) => i % 2 === 0).map((project) => (
                      <div 
                        key={project.id} 
                        className={`project-item relative group w-full overflow-hidden flex items-center justify-center ${project.image ? 'cursor-pointer rounded-lg shadow-lg' : ((project as any).redirect ? 'cursor-pointer ' : '') + project.height + ' ' + project.color}`}
                        onClick={() => {
                          if ((project as any).redirect) {
                            navigate((project as any).redirect)
                          } else if (project.image) {
                            setSelectedImage(project.image)
                          }
                        }}
                      >
                        {project.image && (
                          <img src={project.image} alt={project.title} className="w-full h-auto block" />
                        )}
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6 z-10">
                          <h4 className="text-2xl md:text-3xl font-[Oswald] uppercase tracking-wide text-center">{project.title}</h4>
                          <p className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase mt-4 opacity-80 border-t border-white/20 pt-4">{project.category}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-8 md:mt-16">
                    {section.projects.filter((_, i) => i % 2 !== 0).map((project) => (
                      <div 
                        key={project.id} 
                        className={`project-item relative group w-full overflow-hidden flex items-center justify-center ${project.image ? 'cursor-pointer rounded-lg shadow-lg' : ((project as any).redirect ? 'cursor-pointer ' : '') + project.height + ' ' + project.color}`}
                        onClick={() => {
                          if ((project as any).redirect) {
                            navigate((project as any).redirect)
                          } else if (project.image) {
                            setSelectedImage(project.image)
                          }
                        }}
                      >
                        {project.image && (
                          <img src={project.image} alt={project.title} className="w-full h-auto block" />
                        )}
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6 z-10">
                          <h4 className="text-2xl md:text-3xl font-[Oswald] uppercase tracking-wide text-center">{project.title}</h4>
                          <p className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase mt-4 opacity-80 border-t border-white/20 pt-4">{project.category}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-12 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <button 
              className="absolute top-4 right-4 sm:top-0 sm:right-0 text-white hover:text-[#ff4a00] transition-colors z-50 p-2"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Full screen preview" 
              className="max-w-full max-h-full object-contain select-none"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  )
}
