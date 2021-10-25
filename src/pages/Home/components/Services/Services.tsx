import React from 'react'
import { SvgIcons } from '../../../../assets/icons/global/SvgIcons'
import style from './Services.module.scss'

import img1 from '../../../../assets/images/services/services-img-1.jpeg'
import img2 from '../../../../assets/images/services/services-img-2.jpeg'
import img3 from '../../../../assets/images/services/services-img-3.jpeg'
import img4 from '../../../../assets/images/services/services-img-4.webp'

interface Props {}

export const Services = (props: Props) => {
    return (
        <section className={style.services}>
            <div className={style.services__wrapper}>
                <div className={style.services__headBlock}>
                    <div className={style.services__title}>Наши услуги</div>
                    <a className={style.services__btnHead} href="/services">
                        Все услуги
                    </a>
                </div>
                <div className={style.services__content}>
                    <div className={style.services__item}>
                        <div className={style.services__itemWrapper}>
                            <div className={style.services__itemIcon}>
                                <SvgIcons id="office" />
                            </div>
                            <span className={style.services__itemTitle}>
                                Охрана бизнес центов
                            </span>
                            <a href="/services"  className={style.services__itemBtn}>Подробнее</a>
                        </div>
                        <img
                            className={style.services__itemBg}
                            src={img1}
                            alt=""
                        />
                    </div>
                    <div className={style.services__item}>
                        <div className={style.services__itemWrapper}>
                            <div className={style.services__itemIcon}>
                                <SvgIcons id="shop" />
                            </div>
                            <span className={style.services__itemTitle}>
                                Охрана магазинов и ТЦ
                            </span>
                            <button className={style.services__itemBtn}>Подробнее</button>
                        </div>
                        <img
                            className={style.services__itemBg}
                            src={img2}
                            alt=""
                        />
                    </div>
                    <div className={style.services__item}>
                        <div className={style.services__itemWrapper}>
                            <div className={style.services__itemIcon}>
                                <SvgIcons id="construction" />
                            </div>
                            <span className={style.services__itemTitle}>
                                Охрана строительный обьектов
                            </span>
                            <button className={style.services__itemBtn}>Подробнее</button>
                        </div>
                        <img
                            className={style.services__itemBg}
                            src={img3}
                            alt=""
                        />
                    </div>
                    <div className={style.services__item}>
                        <div className={style.services__itemWrapper}>
                            <div className={style.services__itemIcon}>
                                <SvgIcons id="village" />
                            </div>
                            <span className={style.services__itemTitle}>
                                Охрана коттеджных поселков
                            </span>
                            <button className={style.services__itemBtn}>Подробнее</button>
                        </div>
                        <img
                            className={style.services__itemBg}
                            src={img4}
                            alt=""
                        />
                    </div>
                </div>
                <div className={style.services__bottomBlock}>
                    <span className={style.services__bottomTitle}>Узнайте больше о наших услугах</span>
                    <a href="/services" className={style.services__bottomBtn}>Все услуги</a>
                </div>
            </div>
        </section>
    )
}
