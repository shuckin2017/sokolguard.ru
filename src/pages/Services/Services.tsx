import React from 'react'
import style from './Services.module.scss'
import { LayoutAside } from '../../shared/LayoutAside/LayoutAside'
import {ServicesBlock} from './components/ServicesBlock/ServicesBlock'

interface Props {}

export const Services = (props: Props) => {
    return (
        <LayoutAside titlePage="Услуги" isMapShow={true} isHeaderBr>
            <ServicesBlock/>
        </LayoutAside>
    )
}
