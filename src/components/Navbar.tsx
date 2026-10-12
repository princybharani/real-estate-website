import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center',
          isScrolled ? 'bg-zinc-950/80 backdrop-blur-md py-4 md:py-6' : 'bg-transparent'
        )}
      >
        <div className="font-serif text-xl tracking-[0.2em] font-semibold text-zinc-50 uppercase z-50 relative">
          Elysian
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-sm tracking-widest uppercase font-medium text-zinc-300">
          <a href="#concept" className="hover:text-white transition-colors duration-300 relative group">
            Concept
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#architecture" className="hover:text-white transition-colors duration-300 relative group">
            Architecture
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#interiors" className="hover:text-white transition-colors duration-300 relative group">
            Interiors
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#enquiry" className="hover:text-white transition-colors duration-300 relative group">
            Enquire
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-zinc-50 z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={clsx(
          'fixed inset-0 bg-zinc-950 z-40 flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {['Concept', 'Architecture', 'Interiors', 'Enquiry'].map((item, i) => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className="font-serif text-3xl text-zinc-50 hover:text-zinc-400 transition-colors"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {item}
          </a>
        ))}
      </div>
    </>
  );
};
