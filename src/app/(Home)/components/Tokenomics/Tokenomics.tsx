"use client"
import React from 'react';
import { motion } from 'framer-motion';
import styles from './tokenomics.module.css';
import Image from 'next/image';
import Container from '@/components/Container/Container';
import Title from '../Title/Title';
import AnimationProvider from './AnimationProvider';

const Tokenomics = () => {
  const data = [
    {
      text: "Holders: 20% (1,800,000 Honey)",
      textStyle: "Holders",
    },
    {
      text: "Liquidity: 13.7% (1,234,285 Honey)",
      textStyle: "Liquidity",
    },
    {
      text: "AIRDROP: 1% (90,000 HONEY)",
      textStyle: "Airdrop",
    },
    {
      text: "TEAM: 10% (900,000 HONEY, 6% LOCKED FOR 10 YEARS)",
      textStyle: "Team",
    },
    {
      text: "RELAUNCH BURN: 1% (90,000 HONEY)",
      textStyle: "Relaunch",
    },
    {
      text: "TREASURY (LIQUID): 4% (360,000 HONEY)",
      textStyle: "Treasury",
    },
    {
      text: "TREASURY (LOCKED): 50.28% (4,525,715 HONEY)",
      textStyle: "TreasuryLocked",
    },
  ];

  // Define animation variants
  const bounceVariant = {
    initial: { y: 0 },
    animate: { y: -20, transition: { repeat: Infinity, duration: 1.5, repeatType: 'mirror' } },
  } as const;

  const rotateVariant = {
    initial: { rotateY: 0 },
    animate: { rotateY: 360, transition: { repeat: Infinity, duration: 3, ease: 'easeInOut' } },
  } as const;

  return (
    <Container>
      <div className={styles.tokenomics}>
        <div className={styles.left}>
          <Title className={styles.title}>Tokenomics</Title>
          {data.map((item, index) => (
            <AnimationProvider
              key={index}
              text={item.text}
              textStyle={styles[`${item.textStyle}`]}
              index={index}
            />
          ))}
        </div>
        <div className={styles.right}>
          <motion.div className={styles.imageContainer} variants={bounceVariant} initial="initial" animate="animate">
            <motion.div className={styles.sheildImgContainer} variants={rotateVariant} initial="initial" animate="animate">
              <Image className={styles.sheildImg} width={278} height={323} src="/imgs/svg/sheild.svg" alt="sheild Image" />
            </motion.div>
          </motion.div>
          <div className={`${styles.subtitle} ${styles.imgTitle}`}>Liquidity: 13.7% (1,234,285 Honey)</div>
        </div>
      </div>
    </Container>
  );
};

export default Tokenomics;
