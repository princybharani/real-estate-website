import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { animateTextReveal } from '../utils/animations';
import { ArrowRight } from 'lucide-react';

export const Footer = () => {
  const container = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      animateTextReveal(headingRef.current);
      
      if (formRef.current) {
        gsap.fromTo(formRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: formRef.current,
              start: 'top 90%',
            }
          }
        );
      }
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <footer id="enquiry" ref={container} className="bg-zinc-900 text-zinc-50 pt-32 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          <div>
            <h2 ref={headingRef} className="font-serif text-5xl md:text-6xl mb-8">
              Experience <br/><span className="italic text-zinc-400">Elysian</span>
            </h2>
            <p className="text-zinc-400 max-w-sm mb-12">
              Register your interest to receive an exclusive preview of the residences and priority access to private viewings.
            </p>
            
            <div className="space-y-4 text-sm tracking-widest uppercase text-zinc-400">
              <p>Sales Gallery</p>
              <p className="text-zinc-50">100 Luxury Avenue<br/>Metropolis, NY 10001</p>
              <p className="text-zinc-50 mt-4">+1 (555) 123-4567</p>
              <p className="text-zinc-50">enquiries@elysian-residences.com</p>
            </div>
          </div>

          <div className="flex items-center">
            <form ref={formRef} className="w-full space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-transparent border-b border-zinc-700 py-3 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer"
                  placeholder="Full Name"
                />
                <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-zinc-300 uppercase tracking-widest">
                  Full Name
                </label>
              </div>

              <div className="relative">
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-transparent border-b border-zinc-700 py-3 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer"
                  placeholder="Email Address"
                />
                <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-zinc-300 uppercase tracking-widest">
                  Email Address
                </label>
              </div>

              <div className="relative">
                <input 
                  type="tel" 
                  id="phone"
                  className="w-full bg-transparent border-b border-zinc-700 py-3 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer"
                  placeholder="Phone Number"
                />
                <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-zinc-300 uppercase tracking-widest">
                  Phone Number
                </label>
              </div>

              <button type="submit" className="group flex items-center gap-4 text-sm uppercase tracking-[0.2em] text-white hover:text-zinc-300 transition-colors mt-12">
                Submit Enquiry 
                <span className="w-10 h-[1px] bg-white group-hover:w-16 transition-all duration-300 relative">
                  <ArrowRight size={14} className="absolute -right-1 -top-[6.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800 text-xs tracking-widest uppercase text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Elysian Residences.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
