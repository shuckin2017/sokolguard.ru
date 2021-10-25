import React from 'react'
import { SvgIcons } from '../../assets/icons/global/SvgIcons'
import { FeedbackForm } from '../../components/FeedbackForm/FeedbackForm'

import style from './Footer.module.scss'

interface Props {
    isMapShow: boolean
}

export const Footer = ({ isMapShow }: Props) => {
    return (
        <footer className={style.footer}>
            {isMapShow && <FeedbackForm />}
            <div className={style.wrapper}>
                <div className={style.footerTop}>
                    <div className={style.logo}>
                        <a href="/">
                            <SvgIcons id="logo" />
                        </a>
                        <span className={style.subTitle}>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do{' '}
                        </span>
                    </div>

                    <div className={style.menu}>
                        <div>
                            <div className={style.menuTitle}>О компании</div>
                            <ul>
                                <li className={style.menuLink}>
                                    <a href="/about">Новости</a>
                                </li>
                                <li className={style.menuLink}>
                                    <a href="/">Лицензии</a>
                                </li>
                                <li className={style.menuLink}>
                                    <a href="/">Cертификаты</a>
                                </li>
                                <li className={style.menuLink}>
                                    <a href="/">Награды</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <div className={style.menuTitle}>Клиентам</div>
                            <ul>
                                <li className={style.menuLink}>
                                    <a href="/">Новости</a>
                                </li>
                                <li className={style.menuLink}>
                                    <a href="/">Лицензии</a>
                                </li>
                                <li className={style.menuLink}>
                                    <a href="/">Cертификаты</a>
                                </li>
                                <li className={style.menuLink}>
                                    <a href="/">Награды</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <div className={style.menuTitle}>Услуги</div>
                            <ul>
                                <li className={style.menuLink}>
                                    <a href="/">Новости</a>
                                </li>
                                <li className={style.menuLink}>
                                    <a href="/">Лицензии</a>
                                </li>
                                <li className={style.menuLink}>
                                    <a href="/">Cертификаты</a>
                                </li>
                                <li className={style.menuLink}>
                                    <a href="/">Награды</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.contact}>
                        <div className={style.menuTitle}>Контакты</div>
                        <div className={style.phone}>
                            <SvgIcons id="phone" />
                            <div className={style.phoneInfo}>
                                <a href="tel:+7 (925) 157-08-99">
                                    +7 (925) 157-08-99
                                </a>
                                <span>Заказать звонок</span>
                            </div>
                        </div>
                        <div className={style.email}>
                            <SvgIcons id="mail" />
                            <a href="mailto:info@sokolguard.ru">
                                info@sokolguard.ru
                            </a>
                        </div>
                        <div className={style.address}>
                            <SvgIcons id="map" />
                            <a href="mailto:info@sokolguard.ru">
                                МО, г. Щелково <br />
                                <span>ул. Краснознаменская, 15</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={style.footerBottom}>
                    <div className={style.innerBottom}>
                        <div className={style.reserved}>
                            © 2021 www.sokolguard.ru - All Rights Reserved
                        </div>
                        <div className={style.privace}>
                            <a href="/">Пользовательское соглашение</a>
                        </div>
                        <div className={style.made}>
                            MADE BY <a href="/">SHUCKIN.IO</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
