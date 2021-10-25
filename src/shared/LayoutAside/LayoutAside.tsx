import React from 'react'
import style from './LayoutAside.module.scss'
import bg from '../../assets/images/headerBG/bg-1.png'
import { HeaderOne } from '../HeaderOne/HeaderOne'
import { Footer } from '../Footer/Footer'

interface Props {
    children: object
    titlePage: string
    isMapShow: boolean
    isHeaderBr: boolean
}

export const LayoutAside = ({ children, titlePage, isMapShow, isHeaderBr }: Props) => {
    return (
        <div className={style.layout__wrapperPage}>
            <HeaderOne isHeaderBr={isHeaderBr} />
            <div className={style.layout__header}>
                <div className={style.layout__headerContent}>
                    <div className={style.layout__headerBreadCrumds}>
                        <a href="/">Главная</a> / {titlePage}
                    </div>
                    <div className={style.layout__headerTitle}>{titlePage}</div>
                    <span className={style.layout__headerSubTitle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        At maxime nulla molestiae deserunt odio mollitia minima
                        nostrum vel ea labore.
                    </span>
                </div>
                <img className={style.layout__headerLogo} src={bg} alt="" />
            </div>
            <main className={style.layout__wrapper}>{children}</main>
            <Footer isMapShow={isMapShow}/>
        </div>
    )
}
