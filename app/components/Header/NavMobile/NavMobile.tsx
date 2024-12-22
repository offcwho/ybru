import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./navmobile.module.scss"
import Link from "next/link";
import Button from "../../Button/Button";

export default function NavMobile(){
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => setOpen(false));

    return(
        <div ref={ref} className={styles.root}>
            <Hamburger toggled={isOpen} size={20} toggle={setOpen}/>
            <AnimatePresence>
                {isOpen && (
                <motion.nav 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={styles.root__navigation}
                >
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
                </motion.nav>
                )}
            </AnimatePresence>
        </div>
    )
}