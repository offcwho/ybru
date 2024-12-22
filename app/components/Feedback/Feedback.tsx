import Button from "../Button/Button"
import styles from "./feedback.module.scss"

export default function Feedback(){
    return(
        <div className={styles.root}>
            <div className={styles.root__container}>
                <h2 className={styles.root__title}>Свяжитесь с нами</h2>
                <form className={styles.root__form}>
                    <input type="text" className={styles.root__input} placeholder="E-mail"/>
                    <input type="text" className={styles.root__input} placeholder="Сообщение"/>
                    <Button>Отправить</Button>
                </form>
            </div>
        </div>
    )
}