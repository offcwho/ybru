import styles from "./about.module.scss"

export default function About(){
    return(
        <div className={styles.root}>
            <div className={styles.root__container}>
                <h2 className={styles.root__title}>О нас</h2>
                <div className={styles.root__card}>
                    <p className={styles.root__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vel, culpa modi et voluptas eum tempora ab debitis sapiente inventore?</p>
                </div>
            </div>
        </div>
    )
}