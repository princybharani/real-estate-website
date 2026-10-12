import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const subtitle = useRef<HTMLParagraphElement>(null);
  const bgImage = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background subtle scale (ken burns effect)
      gsap.to(bgImage.current, {
        scale: 1.1,
        duration: 10,
        ease: 'none',
        repeat: -1,
        yoyo: true
      });

      // Text reveal animation
      gsap.from([title.current, subtitle.current], {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.2
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative h-screen w-full overflow-hidden bg-zinc-950 flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          ref={bgImage}
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Mansion Exterior" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center mt-16">
        <h1 
          ref={title} 
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-widest mb-6"
        >
          ELYSIAN
        </h1>
        <p 
          ref={subtitle}
          className="font-sans text-sm md:text-base tracking-[0.3em] text-zinc-300 uppercase max-w-xl mx-auto"
        >
          A New Standard of Luxury Living
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 opacity-70 animate-bounce">
        <span className="text-xs uppercase tracking-widest text-white font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};
