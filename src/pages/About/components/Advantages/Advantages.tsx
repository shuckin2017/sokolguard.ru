import React from 'react'
import style from './Advantages.module.scss'
interface Props {}

export const Advantages = (props: Props) => {
    return (
        <section className={style.advantages}>
            <div className={style.advantages__wrapper}>
                <div className={style.advantages__titleBlock}>
                    <div className={style.advantages__title}>Как мы работаем</div>
                </div>
            </div>
        </section>
    )
}
