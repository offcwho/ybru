"use client"

import { useState } from "react"
import Accordion from "./accordion/Accordion"
import styles from "./faq.module.scss"

export default function FAQ(){
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleAccordion = (index: number) => {
        if (openIndex === index) {
            setOpenIndex(null)
        } else {
            setOpenIndex(index)
        }
    }
    return(
        <div className={styles.root}>
            <div className={styles.root__container}>
                <h2 className={styles.root__title}>FAQ</h2>
                <div className={styles.root__accordionWrapper}>
                    <Accordion
                        title='Lorem ipsum dolor'
                        isOpen={openIndex === 0}
                        onToggle={() => toggleAccordion(0)}
                    >
                        <p className={styles.root__description}>
                            Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Voluptates?
                        </p>
                    </Accordion>
                    <Accordion
                        title='Lorem ipsum dolor'
                        isOpen={openIndex === 1}
                        onToggle={() => toggleAccordion(1)}
                    >
                        <p className={styles.root__description}>
                            Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Voluptates?
                        </p>
                    </Accordion>
                    <Accordion
                        title='Lorem ipsum dolor'
                        isOpen={openIndex === 2}
                        onToggle={() => toggleAccordion(2)}
                    >
                        <p className={styles.root__description}>
                            Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Voluptates?
                        </p>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}