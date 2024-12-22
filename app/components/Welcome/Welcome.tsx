import styles  from "./welcome.module.scss";

export default function Welcome(){
    return(
        <div className={styles.root}>
            <div className={styles.root__container}>
                <div className={styles.root__left}>
                    <h1 className={styles.root__title}>YBRU</h1>    
                    <p className={styles.root__description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quam possimus laborum commodi minus sit debitis quis laboriosam, animi quisquam.</p>
                </div>  
                <div className={styles.root__right}></div>                
            </div>
        </div>
    )
}