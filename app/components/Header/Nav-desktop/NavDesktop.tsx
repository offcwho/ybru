import Link from "next/link"
import Button from "../../Button/Button"

import styles from "./navdesktop.module.scss"

export default function NavDesktop(){
    return(
        <nav className={styles.root}>
            <menu className={styles.root__menu}>
                <li className={styles.root__item}>
                    <Link className={styles.root__link} href="/">Ссылка</Link>
                </li>
                <li className={styles.root__item}>
                    <Link className={styles.root__link} href="/">Ссылка</Link>
                </li>
                <li className={styles.root__item}>
                    <Link className={styles.root__link} href="/">Ссылка</Link>
                </li>
                <li className={styles.root__item}>
                    <Link className={styles.root__link} href="/">Ссылка</Link>
                </li>
                <li className={styles.root__item}>
                    <Link className={styles.root__link} href="/">Ссылка</Link>
                </li>
            </menu>
            <Button>Кнопка</Button>
        </nav>
    )
}