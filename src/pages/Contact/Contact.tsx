import React from 'react'
import { LayoutAside } from '../../shared/LayoutAside/LayoutAside'
import {ContactBlock} from './components/ContactBlock/ContactBlock'
import style from './Contact.module.scss'

interface Props {
    
}

export const Contact = (props: Props) => {
    
    return (
        <LayoutAside titlePage="Контакты" isMapShow={false} isHeaderBr>
            <ContactBlock />
        </LayoutAside>
    )
}
