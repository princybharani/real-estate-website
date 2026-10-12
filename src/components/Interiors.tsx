import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { animateTextReveal } from '../utils/animations';

export const Interiors = () => {
  const container = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      animateTextReveal(headingRef.current);

      const images = gsap.utils.toArray('.interior-img') as HTMLElement[];
      images.forEach((img) => {
        gsap.fromTo(img, 
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: img,
              start: 'top 85%',
            }
          }
        );
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="interiors" ref={container} className="py-32 bg-zinc-900 text-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-24">
        <span className="text-zinc-400 uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">02 / Interiors</span>
        <h2 ref={headingRef} className="font-serif text-5xl md:text-6xl max-w-2xl">
          Crafted for the <span className="italic text-zinc-400">Senses</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Main Large Image */}
          <div className="interior-img md:col-span-8 md:col-start-1 mt-12">
            <div className="relative aspect-[4/3] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200" 
                alt="Living Space"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 flex justify-between items-end">
              <h3 className="font-serif text-2xl">Living Spaces</h3>
              <span className="text-sm text-zinc-400 tracking-widest uppercase">Bespoke Finishes</span>
            </div>
          </div>

          {/* Secondary Image Offset */}
          <div className="interior-img md:col-span-5 md:col-start-8 mt-12 md:-mt-32 relative z-10">
            <div className="relative aspect-[3/4] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800" 
                alt="Kitchen"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 flex justify-between items-end">
              <h3 className="font-serif text-xl">Culinary Suite</h3>
              <span className="text-xs text-zinc-400 tracking-widest uppercase">Gaggenau Appliances</span>
            </div>
          </div>

          {/* Third Image */}
          <div className="interior-img md:col-span-6 md:col-start-2 mt-12 md:mt-24">
            <div className="relative aspect-[16/9] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1200" 
                alt="Master Bedroom"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 flex justify-between items-end">
              <h3 className="font-serif text-2xl">Master Sanctuary</h3>
              <span className="text-sm text-zinc-400 tracking-widest uppercase">Panoramic Views</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
