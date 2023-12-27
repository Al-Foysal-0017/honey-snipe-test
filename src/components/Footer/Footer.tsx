"use client"
import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Container from '../Container/Container'
import Link from 'next/link'
import { communityLinks, localLinks } from './links'
import { usePathname } from 'next/navigation'

const Footer = () => {
    const pathname = usePathname()
  return (
    <footer className={styles.footerContainer}>
        <Container className={styles.footer}>
            <div className={styles.left}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/imgs/svg/logo.svg"
                        alt=""
                        width={240}
                        height={37}
                        style={{marginTop:"10px"}}
                    />
                </Link>
                <div className={styles.desc}>
                    Welcome to Honey Snipe, your go-to hybrid bot for navigating the world of crypto launches and arbitrage on both the Ethereum and Binance Smart Chain.
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.links}>
                    <div className={styles.linksHeader}>Useful Links</div>
                    <ul className={styles.ul}>
                        {localLinks.map((item, index)=>(
                            <Link href={item.route} key={index}>
                                <li className={`${styles.link} ${pathname === item.route ? styles.activeLink : ""}`}>
                                    {item.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className={styles.community}>
                    <div className={styles.communityHeader}>Our Community</div>
                   
                    <div className={styles.communityLinks}>
                        {communityLinks.map((item, index)=>(
                            <Link key={index} target="_blank" rel="honey snipe" href={item.href}>
                                <span className={styles.communityLink}>
                                    <Image className={styles.communityImg} width={20} height={20} src={item.src} alt="" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Container>

        <div className={styles.copyright}>
            © Copyright 2023 , All Rights Reserved
        </div>
    </footer>
  )
}

export default Footer