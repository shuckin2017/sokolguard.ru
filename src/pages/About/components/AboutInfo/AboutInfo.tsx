import React from 'react'
import style from './AboutInfo.module.scss'
import { SvgIcons } from '../../../../assets/icons/global/SvgIcons'
import img from '../../../../assets/images/about/about-img.jpg'

interface Props {}

export const AboutInfo = (props: Props) => {
    return (
        <section className={style.aboutInfo}>
            <div className={style.aboutInfo__wrapper}>
                <div className={style.aboutInfo__content}>
                    <div className={style.aboutInfo__images}>
                        <img src={img} alt="" />
                    </div>
                    <div className={style.aboutInfo__body}>
                        <div className={style.aboutInfo__title}>
                            The Leading Real Estate Rental Marketplace.
                        </div>
                        <span className={style.aboutInfo__subTitle}>
                            Over 39,000 people work for us in more than 70
                            countries all over the This breadth of global
                            coverage, combined with specialist services
                        </span>
                        <div className={style.aboutInfo__servicesBlock}>
                            <div className={style.aboutInfo__servicesItem}>
                                <div className={style.aboutInfo__servicesIcon}>
                                    <SvgIcons id="office" />
                                </div>
                                <span
                                    className={style.aboutInfo__servicesTitle}
                                >
                                    Охрана бизнес центов
                                </span>
                            </div>
                            <div className={style.aboutInfo__servicesItem}>
                                <div className={style.aboutInfo__servicesIcon}>
                                    <SvgIcons id="shop" />
                                </div>
                                <span
                                    className={style.aboutInfo__servicesTitle}
                                >
                                   Охрана магазинов и ТЦ
                                </span>
                            </div>
                            <div className={style.aboutInfo__servicesItem}>
                                <div className={style.aboutInfo__servicesIcon}>
                                    <SvgIcons id="construction" />
                                </div>
                                <span
                                    className={style.aboutInfo__servicesTitle}
                                >
                                    Охрана строительный обьектов
                                </span>
                            </div>
                            <div className={style.aboutInfo__servicesItem}>
                                <div className={style.aboutInfo__servicesIcon}>
                                    <SvgIcons id="village" />
                                </div>
                                <span
                                    className={style.aboutInfo__servicesTitle}
                                >
                                    Охрана коттеджных поселков
                                </span>
                            </div>
                        </div>
                        <a className={style.aboutInfo__btn} href="/services">
                            Все услуги
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
