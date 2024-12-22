import styles from "./position.module.scss"

export default function Position(){
    return(
        <div className={styles.root}>
            <div className={styles.root__container}>
                <h2 className={styles.root__title}>Мы на карте</h2>
                <iframe className={styles.root__frame} src="https://yandex.ru/map-widget/v1/?um=constructor%3A6fabcc837d6c4717c65b2053968cbb1e5b91be481fa283213846ae76d12cd4ef&amp;source=constructor" width="100%" height="400"></iframe>
            </div>
        </div>
    )
}