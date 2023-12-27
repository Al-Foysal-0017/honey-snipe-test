// "use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from "./howWorks.module.css";
import Image from 'next/image';

interface Props {
  cardTitle: string;
  cardDesc: string;
  index: number;
  imgPath: string;
}

const AnimationProvider = ({ imgPath, cardTitle, cardDesc, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: false
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const animationDelay = 0.2;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className={styles.motionCard}
    >
      <div key={index} className={styles.card}>
        <div className={styles.iconAndTitle}>
          <div className={styles.cardIcon}>
            <Image width={118} height={118} src={imgPath} alt="" />
          </div>
          <div className={styles.cardTitle}>{cardTitle}</div>
        </div>
        <p className={styles.cardDesc}>{cardDesc}</p>
      </div>
    </motion.div>
  );
};

export default AnimationProvider;
