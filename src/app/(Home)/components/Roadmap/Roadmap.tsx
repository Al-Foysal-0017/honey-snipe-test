import React from 'react'
import styles from "./roadmap.module.css"
import Image from 'next/image'
import Notification from '../Notifications/Notification'
import Title from '../Title/Title'
import AnimationProvider from './AnimationProvider'

const Roadmap = () => {
  return (
    <div className={styles.container}>
        <div className={styles.roadmapContainer}>
        <div className={styles.roadmap}>
          <Title className={styles.title}>Roadmap</Title>
          <Image className={styles.beesHouseImg} width={270} height={396} src="/imgs/svg/beesHouse.svg" alt="" />
          <div>
            <Image 
              className={styles.lineForRoadmapImg} 
              width={1321}
              height={206} 
              layout="responsive" 
              src="/imgs/png/line.png" 
              alt="" 
            />
          </div>

          {/* Text for Big Desktop Screen */}
          <div className={styles.contextContainer}>
            <AnimationProvider 
              classStyle = "ul1"
              title="Q4(2023)-Early Q1(2024)"
              li1="Private Sale"
              li2="Public Sale"
              li3="Certik Audit"
              li4="List $HONEY on Uniswap & Pancakeswap"
              li5="Launch Web dApp"
              li6="Introduce Sniping Telegram Bot"
              index={1}
            />
            <AnimationProvider 
              classStyle = "ul2"
              title="Q2(2024)"
              li1="Reach 10,000 Users"
              li2="Achieve 20,000 Holders"
              li3="Introduce Copy Snipe Feature"
              li4=""
              li5=""
              li6=""
              index={2}
            />
            <AnimationProvider 
              classStyle = "ul3"
              title="Early Q3(2024)"
              li1="Support New Chains <br />(Major Chains)"
              li2="Implement DeFi Solutions"
              li3="Introduce Copy Futures Trade <br />on dApps (DYDX, GMX, etc.)"
              index={3}
            />
          </div>
          

          {/* Text for Small Screen */}
          <div className={styles.contextContainerSm}>
            <Image 
              className={styles.lineForRoadmapImgSm} 
              width={740}
              height={200}
              src="/imgs/svg/lineForRoadmap.svg" 
              alt="" 
            />
            {/* <ul className={styles.ul1_Sm}>
              <div className={styles.roadmapTitle}>Q4(2023)-Early Q1(2024)</div>
              <li>Private Sale</li>
              <li>Public Sale</li>
              <li>Certik Audit</li>
              <li>List $HONEY on Uniswap & Pancakeswap</li>
              <li>Launch Web dApp</li>
              <li>Introduce Sniping Telegram Bot</li>
            </ul>
            <ul className={styles.ul2_Sm}>
              <div className={styles.roadmapTitle}>Q2(2024)</div>
              <li>Reach 10,000 Users</li>
              <li>Achieve 20,000 Holders</li>
              <li>Introduce Copy Snipe Feature</li>
            </ul>
            <ul className={styles.ul3_Sm}>
              <div className={styles.roadmapTitle}>Early Q3(2024)</div>
              <li>Support New Chains (Major Chains)</li>
              <li>Implement DeFi Solutions</li>
              <li>Introduce Copy Futures Trade <br />on dApps (DYDX, GMX, etc.)</li>
            </ul> */}
            <AnimationProvider 
              classStyle = "ul1_Sm"
              title="Q4(2023)-Early Q1(2024)"
              li1="Private Sale"
              li2="Public Sale"
              li3="Certik Audit"
              li4="List $HONEY on Uniswap & Pancakeswap"
              li5="Launch Web dApp"
              li6="Introduce Sniping Telegram Bot"
              index={1}
            />
            <AnimationProvider 
              classStyle = "ul2_Sm"
              title="Q2(2024)"
              li1="Reach 10,000 Users"
              li2="Achieve 20,000 Holders"
              li3="Introduce Copy Snipe Feature"
              li4=""
              li5=""
              li6=""
              index={2}
            />
            <AnimationProvider 
              classStyle = "ul3_Sm"
              title="Early Q3(2024)"
              li1="Support New Chains <br />(Major Chains)"
              li2="Implement DeFi Solutions"
              li3="Introduce Copy Futures Trade <br />on dApps (DYDX, GMX, etc.)"
              index={3}
            /> 
          </div>
        </div>
        </div>

        
    </div>
  )
}

export default Roadmap