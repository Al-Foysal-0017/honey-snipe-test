// "use client";
// import React, { useRef } from 'react';
// import {useInView} from "react-intersection-observer";
// import styles from "./joinMsg.module.css";
// import hover3d from '@/utils/hover';
// import { motion } from "framer-motion";
// import { slideInFromBottom } from '@/utils/motion';

// const JoinMsg = () => {
//   const {ref, inView} = useInView({
//     triggerOnce: false
//   });

//   const hero = useRef<HTMLDivElement>(null);
//   const hoverHero = hover3d(hero, {
//     x: 20,
//     y: -30,
//     z: 20,
//   });
//   const imageHover = hover3d(hero, {
//     x: 10,
//     y: 5,
//     z: 1,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={inView?"visible":"hidden"}
//     >
//     <section style={{ overflow: 'hidden' }} ref={hero} className={styles.container}>
//       <div style={{
//         transform: hoverHero.transform,
//       }}>
//         <motion.div 
//           style={{
//             transform: imageHover.transform,
//           }} 
//           className={styles.joinMsg}
//           variants={slideInFromBottom}
//         >
//           Join Honey Snipe and Unlock Limitless Possibilities in Crypto Trading!
//         </motion.div>
//       </div>
//     </section>
//     </motion.div>
//   );
// };

// export default JoinMsg;





'use client'
import Image from 'next/image'
import styles from './joinMsg.module.css'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
// import { slideUp } from './animation';
import { motion } from 'framer-motion';

export default function Home() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.09 * direction;
  }

  return (
    <motion.main 
    // variants={slideUp} 
    initial="initial" animate="enter" className={styles.landing}>
      {/* <Image 
        src="/images/background.jpg"
        fill={true}
        alt="background"
      /> */}
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          {/* <p ref={firstText}>Freelance Developer -</p>
          <p ref={secondText}>Freelance Developer -</p> */}
          <p ref={firstText}>Join Honey Snipe and Unlock Limitless Possibilities in Crypto Trading! -</p>
          <p ref={secondText}>Join Honey Snipe and Unlock Limitless Possibilities in Crypto Trading! -</p>
        </div>
      </div>
      {/* <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
        </svg>
        <p>Freelance</p>
        <p>Designer & Developer</p>
      </div> */}
    </motion.main>
  )
}

