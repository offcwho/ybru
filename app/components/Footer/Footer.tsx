import styles from "./footer.module.scss"

export default function Footer(){
    return(
        <footer className={styles.root}>
        <div className={styles.root__container}>
            <span className={styles.root__logo}>YBRU</span>
            <ul className={styles.root__list}>
                <li className={styles.root__item}>
                    <h3 className={styles.root__itemTitle}>Меню</h3>
                    <ul className={styles.root__itemList}>
                        <li className={styles.root__listItem}>
                            <a href="#!" className={styles.root_link}>Продукты</a>
                        </li>
                        <li className={styles.root__listItem}>
                            <a href="#!" className={styles.root_link}>Опции</a>
                        </li>
                        <li className={styles.root__listItem}>
                            <a href="#!" className={styles.root_link}>Тарифы</a>
                        </li>
                    </ul>
                </li>
                <li className={styles.root__item}>
                    <h3 className={styles.root__itemTitle}>Контакты</h3>
                    <ul className={styles.root__itemList}>
                        <li className={styles.root__listItem}>
                            <a href="mailto:menu@ybru.ru" className={styles.root_link}>menu@ybru.ru</a>
                        </li>
                        <li className={styles.root__listItem}>
                            <a href="tel: +74950884202" className={styles.root_link}>+7 (495) 088-42-02</a>
                        </li>
                    </ul>
                </li>
                <li className={styles.root__item}>
                    <h3 className={styles.root__itemTitle}>Будьте в курсе <br /> всех новостей</h3>
                    <ul className={styles.root__itemList}>
                        <li className={styles.root__listItem}>
                            <a href="#!" className={styles.root_link}>Telegram</a>
                        </li>
                        <li className={styles.root__listItem}>
                            <a href="#!" className={styles.root_link}>VK</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className={styles.root__offert}>
                <a href="#!" className={styles.root__link}>Пользовательские оферты</a>
                <span className={styles.root__company}> ООО "НПК "РПР"</span>
            </div>
        </div>
    </footer>
    )
}