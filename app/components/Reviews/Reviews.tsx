'use client'

import styles from "./reviews.module.scss"
import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';

export default function Reviews(){
    return(
        <div className={styles.root}>
            <div className={styles.root__container}>
                <h2 className={styles.root__title}>Отзывы</h2>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                 >
                    <SwiperSlide className={styles.root__slide}>
                        <h3 className={styles.root__name}>Антон. А</h3>
                        <p className={styles.root__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eius sunt tempora ut necessitatibus nemo temporibus corrupti ducimus corporis quis.</p>
                    </SwiperSlide>
                    <SwiperSlide className={styles.root__slide}>
                        <h3 className={styles.root__name}>Антон. А</h3>
                        <p className={styles.root__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eius sunt tempora ut necessitatibus nemo temporibus corrupti ducimus corporis quis.</p>
                    </SwiperSlide>
                    <SwiperSlide className={styles.root__slide}>
                        <h3 className={styles.root__name}>Антон. А</h3>
                        <p className={styles.root__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eius sunt tempora ut necessitatibus nemo temporibus corrupti ducimus corporis quis.</p>
                    </SwiperSlide>
                    <SwiperSlide className={styles.root__slide}>
                        <h3 className={styles.root__name}>Антон. А</h3>
                        <p className={styles.root__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eius sunt tempora ut necessitatibus nemo temporibus corrupti ducimus corporis quis.</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}