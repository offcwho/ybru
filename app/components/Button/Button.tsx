import styles from "./button.module.scss"

export default function Button({children}){
    return(
        <button className={styles.root}>{children}</button>
    )
}