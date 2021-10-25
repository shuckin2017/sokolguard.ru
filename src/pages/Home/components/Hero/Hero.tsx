import React from 'react'
import style from './Hero.module.scss'
import image from '../../../../assets/images/bg-images.jpg'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface Props {}

export const Hero = (props: Props) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    }
    return (
        <section className={style.hero}>
            <div className={style.hero__wrapper}>
                <div className={style.hero__imagesBlock}>
                    <div className={style.hero__contentBody}>
                        <div className={style.hero__headTitle}>
                            Частная охранная организация
                        </div>
                        <div className={style.hero__headSubTitle}>
                            Компания “ЧОО Сокол-СВ” основана в 2008 году. С
                            первого дня работы мы не просто оказывали охранные
                            услуги клиентам, но и тщательно исслеудем технологии
                            и принципы обеспечения безопасности
                        </div>
                        <button className={style.hero__actionBtn}>
                            Подробнее о компании
                        </button>
                    </div>
                    <div className={style.hero__bg}>
                        <img
                            className={style.hero__images}
                            src={image}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
