import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SvgIcons } from '../../assets/icons/global/SvgIcons'
import style from './HeaderOne.module.scss'

interface Props {
    isHeaderBr: boolean;
}

export const HeaderOne = ({isHeaderBr}: Props) => {
    const [hiddenMenu, setHiddenMenu] = useState(false)
    const [hiddenPhone, setHiddenPhone] = useState(false)
    return (
        <header className={isHeaderBr ? `${style.header}` : `${style.header__fill}`}>
            <div className={style.header__wrapper}>
                <div className={style.header__logo}>
                    <a href="/">
                        <SvgIcons id="logo" />
                    </a>
                </div>
                <nav className={style.header__menu}>
                    <ul className={style.header__menuList}>
                        <NavLink
                            to="/about"
                            className={style.header__menuLink}
                            activeClassName="header__linkActive"
                        >
                            О компании
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={style.header__menuLink}
                            activeClassName="header__linkActive"
                        >
                            Услуги
                        </NavLink>
                        <NavLink
                            to="/"
                            className={style.header__menuLink}
                            activeClassName="header__linkActive"
                        >
                            Клиентам
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={style.header__menuLink}
                            activeClassName="header__linkActive"
                        >
                            Контакты
                        </NavLink>
                    </ul>
                </nav>

                <div className={style.header__contacts}>
                    <div className={style.header__phone}>
                        <SvgIcons id="phone" />
                        <div className={style.header__contactBlock}>
                            <a
                                href="/"
                                className={style.header__contactSubLink}
                            >
                                Заказать звонок
                            </a>
                            <a
                                className={style.header__contactLink}
                                href="tel:+79251570899"
                            >
                                +7 (925) 157-08-99
                            </a>
                        </div>
                    </div>
                    <div className={style.header__mail}>
                        <SvgIcons id="mail" />
                        <div className={style.header__contactBlock}>
                            <a
                                href="/"
                                className={style.header__contactSubLink}
                            >
                                Напишите нам
                            </a>
                            <a
                                className={style.header__contactLink}
                                href="mailto:info@sokolguard.ru"
                            >
                                info@sokolguard.ru
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.headerMobil}>
                <div className={style.headerMobil__wrapper}>
                    <button
                        className={style.headerMobil__icon}
                        onClick={() => {
                            setHiddenMenu(!hiddenMenu)
                        }}
                    >
                        <SvgIcons id="menu" />
                    </button>
                    <NavLink to="/" className={style.headerMobil__logo}>
                        <SvgIcons id="logo" />
                    </NavLink>
                    <button
                        className={style.headerMobil__icon}
                        onClick={() => {
                            setHiddenPhone(!hiddenPhone)
                        }}
                    >
                        <SvgIcons id="phone" />
                    </button>
                    <button className={style.headerMobil__icon}>
                        <SvgIcons id="search" />
                    </button>
                </div>
            </div>

            <div
                className={
                    hiddenMenu
                        ? `${style.mobileNav__overlay}`
                        : `${style.mobileNav__overlayHidden}`
                }
            >
                <div className={style.mobileNav__wrapper}>
                    <button
                        className={style.mobileNav__close}
                        onClick={() => {
                            setHiddenMenu(!hiddenMenu)
                        }}
                    >
                        <SvgIcons id="close" />
                    </button>
                    <nav className={style.mobileNav__menu}>
                        <ul className={style.mobileNav__menuList}>
                            <NavLink
                                to="/about"
                                className={style.mobileNav__menuLink}
                                activeClassName="header__linkActive"
                            >
                                О компании
                            </NavLink>
                            <NavLink
                                to="/"
                                className={style.mobileNav__menuLink}
                                activeClassName="header__linkActive"
                            >
                                Услуги
                            </NavLink>
                            <NavLink
                                to="/"
                                className={style.mobileNav__menuLink}
                                activeClassName="header__linkActive"
                            >
                                Клиентам
                            </NavLink>
                            <NavLink
                                to="/"
                                className={style.mobileNav__menuLink}
                                activeClassName="header__linkActive"
                            >
                                Контакты
                            </NavLink>
                        </ul>
                    </nav>
                </div>
            </div>

            <div
                className={
                    hiddenPhone
                        ? `${style.mobileSearch__overlay}`
                        : `${style.mobileSearch__overlayHidden}`
                }
            >
                <div className={style.mobileSearch__wrapper}>
                    <button
                        className={style.mobileNav__close}
                        onClick={() => {
                            setHiddenPhone(!hiddenPhone)
                        }}
                    >
                        <SvgIcons id="close" />
                    </button>
                    <div>
                        <span className={style.header__contactSubLink}>
                            Директор
                        </span>
                        <a
                            className={style.header__contactLink}
                            href="tel:+79251570899"
                        >
                            +7 (925) 157-08-99
                        </a>
                    </div>
                    <div>
                        <span className={style.header__contactSubLink}>
                            Директор
                        </span>
                        <a
                            className={style.header__contactLink}
                            href="tel:+79251570899"
                        >
                            +7 (925) 157-08-99
                        </a>
                    </div>
                    <button>Заказать звонок</button>
                </div>
            </div>
        </header>
    )
}
