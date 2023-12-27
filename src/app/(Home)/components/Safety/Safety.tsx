"use client"
import React, { useRef } from 'react'
import styles from "./safety.module.css"
import Image from 'next/image'
import Title from '../Title/Title'
import Container from '@/components/Container/Container'
import Notification from '../Notifications/Notification'
import hover3d from '@/utils/hover'
import AnimationProvider from './AnimationProvider'

const Safety = ({triggerRef2}:any) => {
  const data = [
    {
      subtitle:"Anti-Rug Measures",
      desc:"Our bot is equipped with an anti-rug function, ensuring you participate in the safest launches."
    },
    {
      subtitle:"Certik Audited",
      desc:"Honey Snipe is audited by Certik, guaranteeing transparency and security."
    },
    {
      subtitle:"Locked Tokens",
      desc:"The Honey Snipe team has locked tokens and LP tokens, providing stability to the platform."
    }
  ]
  const hero = useRef<HTMLDivElement>(null);
  const hoverHero = hover3d(hero, {
    x: 30,
    y: -40,
    z: 30,
  });
  const imageHover = hover3d(hero, {
    x: 20,
    y: -5,
    z: 11,
  });
  return (
    <div ref={triggerRef2}>
    <div style={{overflow:'hidden'}} ref={hero}>
    <div className={styles.container}>
      {/* LEFT for Small Screen*/}
      <div className={styles.left}>
        <Container className={styles.container2}>
          <Title className={styles.title}>Safety First</Title>
          <div className={styles.content}>
            {data.map((item, index)=>(
              <div key={index} className={styles.item}>
              <div className={styles.subtitle}>{item.subtitle}</div>
              <p className={styles.desc}>
                {item.desc}
              </p>
            </div>
            ))}
          </div>
        </Container>
      </div>
      {/* Right */}
      <div className={styles.right}>
      <div className={styles.rightSide}>
              <div
                style={{
                  transform: hoverHero.transform,
                }}
              >
                <Image
                  src="/imgs/svg/saftyBear.svg"
                  width={444}
                  height={444}
                  alt="hero"
                  className={styles.bearImg2}
                  style={{
                    transform: imageHover.transform,
                  }}
                />
              </div>
          </div>
      </div>
    </div>
    {/* LEFT for Big Screen*/}
    {/* <div className={styles.leftForBigScreen}>
      <div>
        <Title className={styles.titleBigScreen}>Safety First</Title>
        {data.map((item, index)=>(
          <AnimationProvider item={item} index={index}/>
        ))}
      </div>
    </div> */}

    {/* Notification Block Part */}
    <Notification 
      title="Fees" 
      desc="Token Trading Fee: 4% of $HONEY token (fees reduce as market cap grows).Snipe Bot Fee: 2% for launching or arbitraging."
    />
    </div>
    </div>
  )
}

export default Safety