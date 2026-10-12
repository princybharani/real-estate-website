import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export const Architecture = () => {
  const container = useRef<HTMLElement>(null);
  const imagesWrapper = useRef<HTMLDivElement>(null);
  const textContent = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Pin the section and scroll the images horizontally
      const images = gsap.utils.toArray('.arch-image') as HTMLElement[];

      gsap.to(images, {
        xPercent: -100 * (images.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          scrub: 1,
          snap: 1 / (images.length - 1),
          end: () => `+=${imagesWrapper.current?.offsetWidth || 0}`,
        }
      });

      // Fade text out as we scroll
      gsap.to(textContent.current, {
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: '+=300',
          scrub: true,
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const architectureImages = [
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1613490908571-9ce224a1bba9?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
  ];

  return (
    <section id="architecture" ref={container} className="h-screen w-full bg-zinc-950 overflow-hidden relative flex items-center">
      
      {/* Absolute Header that fades out */}
      <div ref={textContent} className="absolute top-24 left-6 md:left-12 lg:left-24 z-20 pointer-events-none">
        <span className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">01 / Architecture</span>
        <h2 className="font-serif text-5xl md:text-6xl text-white">Visionary Design</h2>
      </div>

      {/* Horizontal scrolling images container */}
      <div ref={imagesWrapper} className="flex h-full w-[300vw]">
        {architectureImages.map((src, idx) => (
          <div key={idx} className="arch-image w-screen h-full flex-shrink-0 relative">
            <div className="absolute inset-0 bg-zinc-950/20 z-10" />
            <img 
              src={src} 
              alt={`Architecture view ${idx + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
    </section>
  );
};
