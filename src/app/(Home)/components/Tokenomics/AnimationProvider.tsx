"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from "./tokenomics.module.css"

interface Props {
    text: string;
    index: number;
    textStyle?: string;
}

const AnimationProvider = ({ text, textStyle, index} : Props) => {
    const {ref, inView} = useInView({
        triggerOnce: false
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.1
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{delay: index * animationDelay}}
    >
      <p className={`${styles.subtitle} ${textStyle}`}>{text}</p>
    </motion.div>
  )
}

export default AnimationProvider