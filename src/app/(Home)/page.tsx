'use client';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from './components/Hero/Hero'
import Roadmap from './components/Roadmap/Roadmap'
import HowWorks from './components/howWorks/HowWorks'
import Safety from './components/Safety/Safety'
import Tokenomics from './components/Tokenomics/Tokenomics'
import JoinMsg from './components/JoinMsg/JoinMsg'
import SplitDesign from './components/Roadmap/SplitDesign';

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imgRef = useRef(null);
  const triggerRef = useRef(null);
  const triggerRef2 = useRef(null);
  // const part3 = useRef(null);
  // const part4 = useRef(null);
  // const part5 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const part2El = triggerRef.current;
    const part3El = triggerRef2.current;
    // const part4El = part4.current;
    // const part5El = part5.current;
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: part2El,
        scrub: true,
        start: "top bottom",
        end: "+=500px",
      },
    });
    tl.to(imgRef.current, {
      rotate: 150,
      y: "84vh",
      left: "62%",
      scale: 0.5
    });




    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: part3El,
        scrub: true,
        start: "top bottom",
        end: "+=500px",
        // markers: true
      },
    });
    tl2.to(imgRef.current, {
      y: "150vh",
      left: "4%",
      scale: 1
    })
    .to(imgRef.current, {
      y: "190vh",
      left: "0%",
      rotate: -5,
      scale: 0.6
    });


    // const tl3 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: part4El,
    //     scrub: true,
    //     start: "top 80%",
    //     end: "+=500px",
    //     markers: true,
    //   },
    // });
    // tl3.to(el, {
    //   y: "300vh",
    //   left: "0%",
    //   pin: true
    // });





    // const pin = gsap.to(part5El, {
    //   scrollTrigger: {
    //     trigger: part5El,
    //     start: 'top 10%',
    //     // end: 'bottom 30%',
    //     end: '2500 70%',
    //     markers: true,
    //     pin: true,
    //     scrub: 1, 
    //   },
    //   // y: 0
    // });
    return ()=>{
      tl.kill()
      tl2.kill()
    }

  }, []);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])
  return (
    <div>
      <Hero imgRef={imgRef}/>
      <HowWorks triggerRef={triggerRef}/>
      <Safety triggerRef2={triggerRef2}/>
      <Tokenomics/>
      {/* <Roadmap/> */}
      <SplitDesign/>
      <JoinMsg/>
    </div>
  )
}

export default Home