import React from 'react'
import { HeaderOne } from '../HeaderOne/HeaderOne'
import { Footer } from '../Footer/Footer'
import style from './LayoutMain.module.scss'

interface Props {
    children: object
    isMapShow: boolean
}

export const LayoutMain = ({ children, isMapShow }: Props) => {
    return (
        <div className={style.wrapperPage}>
            <HeaderOne isHeaderBr />
            <div className={style.contentPage}>{children}</div>
            <Footer isMapShow={isMapShow}/>
        </div>
    )
}
