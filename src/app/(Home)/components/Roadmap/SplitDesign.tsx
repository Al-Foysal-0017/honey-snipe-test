'use client';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./myStyle.module.css"
import Image from 'next/image';
import Notification from '../Notifications/Notification';

const SplitDesign = () => {
    const triggerRef = useRef(null);

    const topRef = useRef(null);
    const centerRef = useRef(null);
    const bottomRef = useRef(null);

    const contentRef = useRef(null);

    const top_h1_Ref = useRef(null);
    const center_h1_Ref = useRef(null);
    const bottom_h1_Ref = useRef(null);


    gsap.registerPlugin(ScrollTrigger);

    useEffect(()=>{
        var tl = gsap.timeline({scrollTrigger:{
            trigger: triggerRef.current,
            // markers:true,
            start:"50% 50%",
            end:"150% 50%",
            scrub:2,
            pin:true
        }});
        tl
        .to(centerRef.current,{
           height: "100vh",
        },'a')
        .to(topRef.current,{
            top: "-50%",
         },'a')
         .to(bottomRef.current,{
            bottom: "-50%",
         },'a')
        // .to(top_h1_Ref.current,{
        //     bottom: "-30%"
        //  },'a')
        //  .to(bottom_h1_Ref.current,{
        //     bottom: "-30%"
        //  },'a')
        .to(center_h1_Ref.current,{
           top: "-30%"
        },'a')
        .to(contentRef.current,{
           delay: -0.2,
           marginTop: "0%"
        })

        return ()=>{
            tl.kill()
        }
    },[])
  return (
    <>
    <div ref={triggerRef} className={styles.main}>
        <div ref={topRef} className={styles.top}>
            <h1 ref={top_h1_Ref} className={`${styles.main_h1} ${styles.top_h1}`}>ROADMAP</h1>
        </div>
        <div ref={centerRef} className={styles.center}>
        <div ref={contentRef} className={styles.content}>
                {/* <h4 className={styles.content_h4}>ROADMAP</h4>
                <h3 className={styles.content_h3}><i>Browse</i> the work that define a <i>movement</i> and created a craft.</h3>
                <div className={styles.btn}>
                    <h5>ENTER GALLERY</h5>
                </div>
                <h2 className={styles.content_h2}>(17)</h2> */}
                <div className={styles.contextContainerSm}>
                   <Image className={styles.beesHouseImg} width={150} height={270} src="/imgs/svg/beesHouse.svg" alt="" />
                    <Image 
                        className={styles.lineForRoadmapImgSm} 
                        width={740}
                        height={200}
                        src="/imgs/svg/lineForRoadmap.svg" 
                        alt="" 
                    />
                    <ul className={styles.ul1_Sm}>
                    <div className={styles.roadmapTitle}>Q4(2023)-Early Q1(2024)</div>
                    <li className={styles.li}>Private Sale</li>
                    <li className={styles.li}>Public Sale</li>
                    <li className={styles.li}>Certik Audit</li>
                    <li className={styles.li}>List $HONEY on Uniswap & Pancakeswap</li>
                    <li className={styles.li}>Launch Web dApp</li>
                    <li className={styles.li}>Introduce Sniping Telegram Bot</li>
                    </ul>
                    <ul className={styles.ul2_Sm}>
                    <div className={styles.roadmapTitle}>Q2(2024)</div>
                    <li className={styles.li}>Reach 10,000 Users</li>
                    <li className={styles.li}>Achieve 20,000 Holders</li>
                    <li className={styles.li}>Introduce Copy Snipe Feature</li>
                    </ul>
                    <ul className={styles.ul3_Sm}>
                    <div className={styles.roadmapTitle}>Early Q3(2024)</div>
                    <li className={styles.li}>Support New Chains (Major Chains)</li>
                    <li className={styles.li}>Implement DeFi Solutions</li>
                    <li className={styles.li}>Introduce Copy Futures Trade <br />on dApps (DYDX, GMX, etc.)</li>
                    </ul>
                </div>
            </div>
        </div>
        <div ref={bottomRef} className={styles.bottom}>
            <h1 ref={bottom_h1_Ref} className={`${styles.main_h1} ${styles.bottom_h1}`}>ROADMAP</h1>
        </div>
    </div>
    {/* <div style={{marginBottom:'100vh'}} /> */}
    {/* Notification Text in Bottom */}
    <Notification
          title="Liquidity" 
          desc="Honey Snipe's liquidity comprises 1,234,285 $Honey and $864,000 (launch price 0.7$), with an initial market cap of $2.4 million."
        />
    </>
  )
}

export default SplitDesign