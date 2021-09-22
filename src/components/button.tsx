import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

const Button = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring' }}
      className={`button ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
