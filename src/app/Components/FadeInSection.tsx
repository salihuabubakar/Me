// components/FadeInSection.tsx
import React, { useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface FadeInSectionProps {
  children: ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [ref]);

  return (
    <section ref={ref} className="fade-in-section">
      {children}
    </section>
  );
};

export default FadeInSection;
