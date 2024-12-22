"use client"

import styles from "./services.module.scss"
import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';

export default function Services(){
    return(
        <div className={styles.root}>
            <div className={styles.root__container}>
                <h2 className={styles.root__title}>Услуги</h2>
                 <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className={styles.root__slider}
                 >
                    <SwiperSlide className={styles.root__slide}>
                        <h3 className={styles.root__name}>Услуга №1</h3>
                        <p className={styles.root__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eius sunt tempora ut necessitatibus nemo temporibus corrupti ducimus corporis quis.</p>
                    </SwiperSlide>
                    <SwiperSlide className={styles.root__slide}>
                        <h3 className={styles.root__name}>Услуга №2</h3>
                        <p className={styles.root__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eius sunt tempora ut necessitatibus nemo temporibus corrupti ducimus corporis quis.</p>
                    </SwiperSlide>
                    <SwiperSlide className={styles.root__slide}>
                        <h3 className={styles.root__name}>Услуга №3</h3>
                        <p className={styles.root__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eius sunt tempora ut necessitatibus nemo temporibus corrupti ducimus corporis quis.</p>
                    </SwiperSlide>
                    <SwiperSlide className={styles.root__slide}>
                        <h3 className={styles.root__name}>Услуга №4</h3>
                        <p className={styles.root__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eius sunt tempora ut necessitatibus nemo temporibus corrupti ducimus corporis quis.</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}