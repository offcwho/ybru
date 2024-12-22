'use client'

import Link from "next/link"

import styles from "./header.module.scss"

import NavDesktop from "./Nav-desktop/NavDesktop"
import NavMobile from "./NavMobile/NavMobile"

export default function Header(){
    return(
        <header className={styles.root}>
            <div className={styles.root__container}>
                <Link href="/" className={styles.root__link}>
                    <span className={styles.root__logo}>YBRU</span>
                </Link>
                <NavDesktop/>
                <NavMobile/>
            </div>
        </header>
    )
}