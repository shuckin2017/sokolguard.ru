import React from 'react'
import { SvgIcons } from '../../../../assets/icons/global/SvgIcons'
import style from './ContactBlock.module.scss'

interface Props {}

export const ContactBlock = (props: Props) => {
    return (
        <section className={style.contactBlock}>
            <div className={style.contactBlock__wrapper}>
                <div className={style.contactBlock__content}>
                    <div className={style.contactBlock__item}>
                        <div className={style.contactBlock__itemIcon}>
                            <SvgIcons id="phone" />
                        </div>
                        <div className={style.contactBlock__itemTitle}>
                            Телефон
                        </div>
                        <div className={style.contactBlock__itemContent}>
                            <a href="tel:++7 (925) 157-08-99">
                                +7 (925) 157-08-99
                            </a>
                            <a href="tel:++7 (925) 157-08-99">
                                +7 (925) 157-08-99
                            </a>
                        </div>
                    </div>
                    <div className={style.contactBlock__item}>
                        <div className={style.contactBlock__itemIcon}>
                            <SvgIcons id="mail" />
                        </div>
                        <div className={style.contactBlock__itemTitle}>
                            Электронная почта
                        </div>
                        <div className={style.contactBlock__itemContent}>
                            <a href="mailto:info@sokolguard.ru">
                                info@sokolguard.ru
                            </a>
                            <a href="mailto:info@sokolguard.ru">
                                job@sokolguard.ru
                            </a>
                        </div>
                    </div>
                    <div className={style.contactBlock__item}>
                        <div className={style.contactBlock__itemIcon}>
                            <SvgIcons id="map" />
                        </div>
                        <div className={style.contactBlock__itemTitle}>
                            Адрес
                        </div>
                        <div className={style.contactBlock__itemContent}>
                            <a href="/">
                                МО, г. Щелково <br /> ул. Краснознаменская, 15
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
