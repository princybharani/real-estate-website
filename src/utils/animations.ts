
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useSmoothScroll = () => {
  // If we want smooth scrolling, we can use something like Lenis here,
  // but we can also just rely on CSS scroll-behavior or leave it to OS defaults
  // for maximum compatibility and performance, unless specifically asked.
  // We'll stick to OS smooth scrolling and GSAP ScrollTrigger for parallax.
};

export const animateTextReveal = (element: Element | null, delay = 0) => {
  if (!element) return;
  return gsap.fromTo(
    element,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out',
      delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
      },
    }
  );
};

export const animateImageReveal = (element: Element | null) => {
  if (!element) return;
  return gsap.fromTo(
    element,
    { scale: 1.1, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
      },
    }
  );
};
