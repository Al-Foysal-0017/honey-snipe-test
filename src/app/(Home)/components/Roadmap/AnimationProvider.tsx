"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from "./roadmap.module.css";

const AnimationProvider = ({ classStyle, title, li1, li2, li3, li4, li5, li6, index }: any) => {
  const { ref, inView } = useInView({
    triggerOnce: false
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className={styles[`${classStyle}`]}
    >
      <ul>
        <div className={styles.roadmapTitle}>{title}</div>
        <li dangerouslySetInnerHTML={{ __html: li1 }} />
        <li dangerouslySetInnerHTML={{ __html: li2 }} />
        <li dangerouslySetInnerHTML={{ __html: li3 }} />
        {li4 && <li>{li4}</li>}
        {li5 && <li>{li5}</li>}
        {li6 && <li>{li6}</li>}
      </ul>
    </motion.div>
  );
};

export default AnimationProvider;
