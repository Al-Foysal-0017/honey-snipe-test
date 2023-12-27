"use client"
import React, { ReactNode } from 'react';
import {motion, AnimatePresence} from "framer-motion"

interface PageWrapperProps {
    children: ReactNode;
    className?: string; 
  }

const PageWrapper: React.FC<PageWrapperProps> = ({children, className}) => {
  return (
    <div>
        <AnimatePresence>
            <motion.div
            initial={{opacity: 0, y:15}}
            animate={{opacity: 1, y:0}}
            exit={{opacity:0, y:15}}
            transition={{delay: 0.25}}
            // className={`${styles.title} ${className || ''}`}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    </div>
  )
}

export default PageWrapper