import React from 'react';
import { motion } from 'framer-motion';
import { motionVariants } from '../utils/animations';

const AnimatedCard = ({ 
  children, 
  delay = 0, 
  className = '',
  hoverEffect = true,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: "easeOut"
      }}
      whileHover={hoverEffect ? motionVariants.hover : {}}
      whileTap={hoverEffect ? motionVariants.tap : {}}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;

