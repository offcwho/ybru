import styles from "./button.module.scss"
import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode
    // any props that come into the component
}

export default function Button({children} : Props){
    return(
        <button className={styles.root}>{children}</button>
    )
}