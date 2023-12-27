"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from "./safety.module.css"

interface Props {
    item: {
      subtitle: string,
      desc: string
    },
    index: number;
    textStyle?: string;
}

const AnimationProvider = ({ item, index} : Props) => {
    const {ref, inView} = useInView({
        triggerOnce: false
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.2
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{delay: index * animationDelay}}
    >
      <div key={index} className={styles.itemBigScreen}>
          <div className={styles.subtitle}>{item.subtitle}</div>
          <p className={styles.desc}>
            {item.desc}
          </p>
        </div>
    </motion.div>
  )
}

export default AnimationProvider