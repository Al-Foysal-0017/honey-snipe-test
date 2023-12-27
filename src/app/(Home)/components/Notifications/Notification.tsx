"use client"
import React from 'react'
import { motion } from "framer-motion";
import {useInView} from "react-intersection-observer"
import styles from "./notifications.module.css"
import Title from '../Title/Title'
import { slideInFromLeft } from '@/utils/motion';

interface NotificationProps{
    title: string;
    desc: string;
}

const Notification:React.FC<NotificationProps> = ({title, desc}) => {
  const {ref, inView} = useInView({
    triggerOnce: true
  });
  return (
    <div className={styles.container}>
        <div className={styles.notification}>
        <Title className={styles.notificationTitle}>{title}</Title>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView?"visible":"hidden"}
        >
          <motion.div
            variants={slideInFromLeft(0.5)}
          >
            <div className={styles.notificationDesc}>{desc}</div>
          </motion.div>
        </motion.div> 
    </div>
    </div>
  )
}

export default Notification
