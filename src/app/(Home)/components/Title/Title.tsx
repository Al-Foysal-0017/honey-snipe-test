"use client";
import React, { ReactNode } from 'react';
import {useInView} from "react-intersection-observer";
import styles from './title.module.css';
import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromTop } from '@/utils/motion';

interface TitleProps {
  children: ReactNode;
  className?: string; 
  top?:boolean
}

const Title: React.FC<TitleProps> = ({ children, className, top=false }) => {
  const {ref, inView} = useInView({
    triggerOnce: true
  });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView?"visible":"hidden"}
    >
      <motion.div
        variants={top?slideInFromTop:slideInFromBottom}
      >
        <div className={`${styles.title} ${className || ''}`}>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Title;
