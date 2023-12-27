// "use client"
// import React, { useRef } from "react";
// import styles from "./hero.module.css";
// import Image from 'next/image';
// import Container from '@/components/Container/Container';
// import Title from '../Title/Title';
// import Subtitle from '../Subtitle/Subtitle';
// import hover3d from "@/utils/hover";

// const Hero = ({imgRef}:any) => {
  // // Framer-Motion Set on Bear Image
  // const heroBearImg = useRef<HTMLDivElement>(null);
  // const hoverBearImg = hover3d(heroBearImg, {
  //   x: 30,
  //   y: -40,
  //   z: 30,
  // });
  // const imageHover = hover3d(hoverBearImg, {
  //   x: 20,
  //   y: -5,
  //   z: 11,
  // });

  // // Framer-Motion Set on Text
  // const heroText = useRef<HTMLDivElement>(null);
  // const hoverHeroText = hover3d(heroText, {
  //   y: 30,
  //   x: -40,
  //   z: 11,
  // });
  // const textHover = hover3d(hoverHeroText, {
  //   y: 20,
  //   x: -5,
  //   z: 30,
  // });
  
//   return (
//     <div ref={heroBearImg} className={styles.hero}>
//       {/* <div ref={heroText} className={styles.heroSection}> */}
//       <div className={styles.heroSection}>
//         <Container className={styles.wrapper}>
//           <div 
//             style={{
//               transform: hoverHeroText.transform,
//             }}
//             className={styles.leftSide}
//           >
//             <Image ref={imgRef} className={styles.beeImg} src="./imgs/svg/bee1.svg" alt="" height={300} width={300} />
//             <div 
//               style={{
//                 transform: textHover.transform,
//               }}
//             >
//               <div data-scroll data-scroll-speed="0.7">
//                 <Title top className={styles.title}>
//                     Unlock the Power of Honey Snipe
//                 </Title>
//                 <Subtitle className={styles.subtitle}>
//                   Welcome to Honey Snipe, your go-to hybrid bot for navigating the world of crypto launches and arbitrage on both the Ethereum and Binance Smart Chain.
//                 </Subtitle>
//               </div>
//             </div>
//           </div>
//           <div className={styles.rightSide} data-scroll data-scroll-speed="0.5">
//             <div
//               style={{
//                 transform: hoverBearImg.transform,
//               }}
//             >
//               <Image
//                 src="/imgs/svg/heroBear.svg"
//                 width={456}
//                 height={483}
//                 alt="hero"
//                 className={styles.heroImg}
//                 style={{
//                   transform: imageHover.transform,
//                 }}
//               />
//             </div>
//           </div>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default Hero;


"use client"
import React, { useRef } from "react";
import styles from "./hero.module.css";
import Image from 'next/image';
import Container from '@/components/Container/Container';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';
import hover3d from "@/utils/hover";

const Hero = ({imgRef}:any) => {
    // Framer-Motion Set on Bear Image
    const heroBearImg = useRef<HTMLDivElement>(null);
    const hoverBearImg = hover3d(heroBearImg, {
      x: 30,
      y: -40,
      z: 30,
    });
    const imageHover = hover3d(hoverBearImg, {
      x: 20,
      y: -5,
      z: 11,
    });
  
    // Framer-Motion Set on Text
    const heroText = useRef<HTMLDivElement>(null);
    const hoverHeroText = hover3d(heroText, {
      y: 30,
      x: -40,
      z: 11,
    });
    const textHover = hover3d(hoverHeroText, {
      y: 20,
      x: -5,
      z: 30,
    });
  return (
    <div ref={heroBearImg} className={styles.hero}>
      <div ref={heroText} className={styles.heroSection}>
      {/* <div className={styles.heroSection}> */}
        <Container className={styles.wrapper}>
          <div
          
            className={styles.leftSide}
          >
            <Image ref={imgRef} className={styles.beeImg} src="./imgs/svg/bee1.svg" alt="" height={300} width={300} />
            <div 
            style={{
              transform: hoverHeroText.transform,
            }}
              >
              <div 
              style={{
                transform: textHover.transform,
              }}
              >
              {/* <div data-scroll data-scroll-speed="0.7"> */}
                <Title top className={styles.title}>
                    Unlock the Power of Honey Snipe
                </Title>
                <Subtitle className={styles.subtitle}>
                  Welcome to Honey Snipe, your go-to hybrid bot for navigating the world of crypto launches and arbitrage on both the Ethereum and Binance Smart Chain.
                </Subtitle>
              </div>
            </div>
          </div>
          <div className={styles.rightSide} >
          {/* <div className={styles.rightSide} data-scroll data-scroll-speed="0.5"> */}
            <div style={{
                transform: hoverBearImg.transform,
              }}>
              <Image
                src="/imgs/svg/heroBear.svg"
                width={456}
                height={483}
                alt="hero"
                className={styles.heroImg}
                style={{
                                    transform: imageHover.transform,
                                  }}
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
