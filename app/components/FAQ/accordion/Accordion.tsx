'use client'
import React, { useState, useRef, useEffect } from 'react'
import styles from '../faq.module.scss'

type AccordionProperties = {
    title: string
    children: React.ReactElement
    isOpen: boolean
    onToggle: () => void
}

export default function Accordion({
    title,
    children,
    isOpen,
    onToggle
}: AccordionProperties) {
    const [height, setHeight] = useState(0)
    const contentRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? contentRef.current.scrollHeight : 0)
        }
    }, [isOpen])

    return (
        <button className={styles.root__accordion} onClick={onToggle}>
            <div className={styles.root__name}>
                <h3 className={styles.root__accordionTitle}>{title}</h3>
            </div>
            <div
                style={{
                    height: height,
                    overflow: 'hidden',
                    transition: 'height 0.3s ease'
                }}
            >
                <div ref={contentRef}>{children}</div>
            </div>
        </button>
    )
}
