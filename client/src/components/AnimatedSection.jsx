import React from 'react';
import { motion } from 'framer-motion';
import { motionVariants } from '../utils/animations';

const AnimatedSection = ({ 
  children, 
  variant = 'fadeInUp', 
  delay = 0, 
  className = '',
  ...props 
}) => {
  const selectedVariant = motionVariants[variant] || motionVariants.fadeInUp;
  
  return (
    <motion.div
      variants={selectedVariant}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        ...selectedVariant.transition, 
        delay: delay 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;

