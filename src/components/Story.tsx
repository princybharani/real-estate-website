import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { animateTextReveal } from '../utils/animations';

export const Story = () => {
  const container = useRef<HTMLElement>(null);
  const textRef1 = useRef<HTMLHeadingElement>(null);
  const textRef2 = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      animateTextReveal(textRef1.current);
      animateTextReveal(textRef2.current, 0.2);

      // Parallax image
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: container.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      }
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="concept" ref={container} className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 flex flex-col justify-center">
          <span className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">The Concept</span>
          <h2 ref={textRef1} className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
            Where Architecture Meets <span className="text-zinc-400 italic">Elegance</span>
          </h2>
          <p ref={textRef2} className="text-zinc-400 leading-relaxed text-lg max-w-lg">
            Elysian is conceived as a sanctuary of refined living. Every material, every sightline, and every space has been meticulously crafted to offer an unparalleled residential experience. It is more than a home; it is a masterpiece of modern architecture.
          </p>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 relative h-[60vh] lg:h-[80vh] w-full overflow-hidden rounded-sm">
          <img 
            ref={imageRef}
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200" 
            alt="Minimalist Architecture" 
            className="absolute top-[-20%] left-0 w-full h-[140%] object-cover grayscale-[30%] opacity-90"
          />
        </div>
        
      </div>
    </section>
  );
};
