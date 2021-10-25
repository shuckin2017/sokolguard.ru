import React from 'react'
import style from './CallAction.module.scss'

interface Props {}

export const CallAction = (props: Props) => {
    return (
        <section className={style.callaction}>
            <div className={style.callaction__wrapper}>
                <div className={style.callaction__block}>
                    <div className={style.callaction__content}>
                        <div className={style.callaction__title}>
                            Ищеете охрану для вашего имущества?
                        </div>
                        <div className={style.callaction__subTitle}>
                            Мы поможем вам подобрать лучший вариант.
                        </div>
                    </div>
                    <div className={style.callaction__btn}>Оставить заявку</div>
                </div>
            </div>
        </section>
    )
}
