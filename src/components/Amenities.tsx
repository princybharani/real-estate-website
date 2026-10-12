import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { animateTextReveal } from '../utils/animations';

const amenities = [
  {
    title: "Wellness Spa",
    desc: "A transcendent sanctuary featuring thermal baths, saunas, and private treatment rooms.",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Infinity Pool",
    desc: "Temperature-controlled oasis merging seamlessly with the horizon.",
    img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Private Cinema",
    desc: "State-of-the-art acoustic screening room with bespoke lounging.",
    img: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&q=80&w=800"
  }
];

export const Amenities = () => {
  const container = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      animateTextReveal(headingRef.current);
      
      const cards = gsap.utils.toArray('.amenity-card') as HTMLElement[];
      gsap.fromTo(cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cards[0],
            start: 'top 85%',
          }
        }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 bg-zinc-950 text-zinc-50 relative overflow-hidden" ref={container}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16">
        <span className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">03 / Amenities</span>
        <h2 ref={headingRef} className="font-serif text-5xl md:text-6xl text-white">Curated Lifestyle</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {amenities.map((amenity, idx) => (
            <div key={idx} className="amenity-card group cursor-pointer">
              <div className="overflow-hidden aspect-[4/5] relative mb-6">
                <div className="absolute inset-0 bg-zinc-950/20 z-10 transition-opacity duration-500 group-hover:opacity-0" />
                <img 
                  src={amenity.img} 
                  alt={amenity.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-2xl mb-3 text-zinc-100 group-hover:text-white transition-colors">{amenity.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                {amenity.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
