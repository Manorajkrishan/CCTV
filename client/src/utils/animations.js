import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as anime from 'animejs';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// GSAP Animation Presets
export const gsapAnimations = {
  // Fade in from bottom
  fadeInUp: (element, delay = 0) => {
    return gsap.fromTo(element, 
      { opacity: 0, y: 100 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        delay,
        ease: "power3.out"
      }
    );
  },

  // Fade in from left
  fadeInLeft: (element, delay = 0) => {
    return gsap.fromTo(element, 
      { opacity: 0, x: -100 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1,
        delay,
        ease: "power3.out"
      }
    );
  },

  // Fade in from right
  fadeInRight: (element, delay = 0) => {
    return gsap.fromTo(element, 
      { opacity: 0, x: 100 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1,
        delay,
        ease: "power3.out"
      }
    );
  },

  // Scale in
  scaleIn: (element, delay = 0) => {
    return gsap.fromTo(element, 
      { opacity: 0, scale: 0.5 },
      { 
        opacity: 1, 
        scale: 1,
        duration: 0.8,
        delay,
        ease: "back.out(1.7)"
      }
    );
  },

  // Stagger animation for multiple elements
  staggerIn: (elements, delay = 0, stagger = 0.1) => {
    return gsap.fromTo(elements, 
      { opacity: 0, y: 100, scale: 0.8 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8,
        delay,
        stagger,
        ease: "power3.out"
      }
    );
  },

  // Scroll-triggered animation
  scrollTrigger: (element, animation, trigger, start = "top 80%", end = "bottom 20%") => {
    return gsap.fromTo(element, 
      animation.from, 
      {
        ...animation.to,
        scrollTrigger: {
          trigger,
          start,
          end,
          toggleActions: "play none none reverse"
        }
      }
    );
  }
};

// Anime.js Animation Presets
export const animeAnimations = {
  // Elastic bounce in
  bounceIn: (targets, delay = 0) => {
    return anime({
      targets,
      translateY: [100, 0],
      opacity: [0, 1],
      scale: [0.5, 1],
      duration: 800,
      delay,
      easing: 'easeOutElastic(1, 0.5)'
    });
  },

  // Slide in from left
  slideInLeft: (targets, delay = 0) => {
    return anime({
      targets,
      translateX: [-100, 0],
      opacity: [0, 1],
      duration: 600,
      delay,
      easing: 'easeOutQuart'
    });
  },

  // Slide in from right
  slideInRight: (targets, delay = 0) => {
    return anime({
      targets,
      translateX: [100, 0],
      opacity: [0, 1],
      duration: 600,
      delay,
      easing: 'easeOutQuart'
    });
  },

  // Fade in with stagger
  fadeInStagger: (targets, delay = 0) => {
    return anime({
      targets,
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 600,
      delay: anime.stagger(100, { startDelay: delay }),
      easing: 'easeOutQuart'
    });
  },

  // Scale in with bounce
  scaleInBounce: (targets, delay = 0) => {
    return anime({
      targets,
      scale: [0, 1],
      opacity: [0, 1],
      duration: 800,
      delay,
      easing: 'easeOutBounce'
    });
  }
};

// Framer Motion Animation Variants
export const motionVariants = {
  // Fade in up
  fadeInUp: {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
    transition: { duration: 0.8, ease: "easeOut" }
  },

  // Fade in left
  fadeInLeft: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
    transition: { duration: 0.8, ease: "easeOut" }
  },

  // Fade in right
  fadeInRight: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.8, ease: "easeOut" }
  },

  // Scale in
  scaleIn: {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
    transition: { duration: 0.6, ease: "easeOut" }
  },

  // Stagger children
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  },

  // Hover animations
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 }
  },

  tap: {
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

// Page entrance animations
export const pageAnimations = {
  // Hero section entrance
  heroEntrance: (heroRef) => {
    const tl = gsap.timeline();
    
    tl.fromTo(heroRef, 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    )
    .fromTo(heroRef.querySelector('h1'), 
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, "-=0.5"
    )
    .fromTo(heroRef.querySelector('p'), 
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, "-=0.5"
    )
    .fromTo(heroRef.querySelector('.flex.flex-col'), 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.5"
    );

    return tl;
  },

  // Section scroll animations
  sectionScroll: (sectionRef, elements) => {
    elements.forEach((element, index) => {
      gsap.fromTo(element, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: sectionRef,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }
};

// Utility functions
export const animationUtils = {
  // Debounce function for performance
  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Check if element is in viewport
  isInViewport: (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  // Smooth scroll to element
  scrollToElement: (element, offset = 0) => {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

export default {
  gsapAnimations,
  animeAnimations,
  motionVariants,
  pageAnimations,
  animationUtils
};

