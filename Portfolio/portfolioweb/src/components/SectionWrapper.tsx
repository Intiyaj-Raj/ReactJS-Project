import React, { ReactNode, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
  animationDelay?: number;
  animationType?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  id, 
  className = '', 
  animationDelay = 0,
  animationType = 'fade'
}) => {
  const ref = useRef<HTMLElement>(null);
  const { isVisible, setElement } = useScrollAnimation({ 
    threshold: 0.15,
    rootMargin: '-80px'
  });

  useEffect(() => {
    if (ref.current) {
      setElement(ref.current);
    }
  }, [setElement]);

  const getAnimationVariants = () => {
    switch (animationType) {
      case 'slideUp':
        return {
          hidden: { 
            opacity: 0, 
            y: 80,
            transition: { duration: 0.6, ease: 'easeInOut' }
          },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, delay: animationDelay, ease: 'easeOut' }
          }
        };
      case 'slideLeft':
        return {
          hidden: { 
            opacity: 0, 
            x: -80,
            transition: { duration: 0.6, ease: 'easeInOut' }
          },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.8, delay: animationDelay, ease: 'easeOut' }
          }
        };
      case 'slideRight':
        return {
          hidden: { 
            opacity: 0, 
            x: 80,
            transition: { duration: 0.6, ease: 'easeInOut' }
          },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.8, delay: animationDelay, ease: 'easeOut' }
          }
        };
      case 'scale':
        return {
          hidden: { 
            opacity: 0, 
            scale: 0.9,
            transition: { duration: 0.6, ease: 'easeInOut' }
          },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.8, delay: animationDelay, ease: 'easeOut' }
          }
        };
      default: // fade
        return {
          hidden: { 
            opacity: 0,
            transition: { duration: 0.6, ease: 'easeInOut' }
          },
          visible: { 
            opacity: 1,
            transition: { duration: 0.8, delay: animationDelay, ease: 'easeOut' }
          }
        };
    }
  };

  const variants = getAnimationVariants();

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative ${className}`}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;