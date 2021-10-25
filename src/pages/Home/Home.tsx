import React from 'react'
import style from './Home.module.scss'
import { Hero } from './components/Hero/Hero'
import { News } from './components/News/News'
import { Question } from './components/Question/Question'
import { Request } from './components/Request/Request'
import { Partners } from './components/Partners/Partners'
import { Services } from './components/Services/Services'
import { CallAction } from './components/CallAction/CallAction'
import { LayoutMain } from '../../shared/LayoutMain/LayoutMain'

interface Props {}

export const Home = (props: Props) => {
    return (
        <LayoutMain isMapShow={false}>
            <Hero />
            <News />
            <Services />
            <Request />
            <Question />
            <Partners />
            <CallAction />
        </LayoutMain>
    )
}
