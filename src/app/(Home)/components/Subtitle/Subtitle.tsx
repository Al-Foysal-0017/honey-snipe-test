"use client";
import React, { ReactNode } from 'react';
import { motion } from "framer-motion";
import {useInView} from "react-intersection-observer"
import { slideInFromLeft } from '@/utils/motion';
import styles from './subtitle.module.css';

interface SubtitleProps {
  children: ReactNode;
  className?: string; 
}

const Subtitle: React.FC<SubtitleProps> = ({ children, className }) => {
  const {ref, inView} = useInView({
    triggerOnce: true
  })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView?"visible":"hidden"}
    >
      <motion.div
        variants={slideInFromLeft(0.5)}
      >
        <div className={`${styles.subtitle} ${className || ''}`}>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Subtitle;

