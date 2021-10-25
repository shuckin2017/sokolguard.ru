import React from 'react'
import { LayoutAside } from '../../shared/LayoutAside/LayoutAside'
import { Statistics } from './components/Statistics/Statistics'
import { AboutInfo } from './components/AboutInfo/AboutInfo'
import { Advantages } from './components/Advantages/Advantages'
import style from './About.module.scss'

interface Props {}

export const About = (props: Props) => {
    return (
        <LayoutAside titlePage="О компании" isMapShow={true} isHeaderBr={true}>
            <Statistics />
            <AboutInfo/>
            <Advantages />
        </LayoutAside>
    )
}
