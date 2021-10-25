import React from 'react'
import style from './Statistics.module.scss'

import { SvgIcons } from '../../../../assets/icons/global/SvgIcons'

interface Props {}

export const Statistics = (props: Props) => {
    return (
        <section className={style.statistics}>
            <div className={style.statistics__wrapper}>
                <div className={style.statistics__content}>
                    <div className={style.statistics__item}>
                        <div className={style.statistics__icon}>
                            <SvgIcons id="shop" />
                        </div>
                        <div className={style.statistics__titleItem}>60%</div>
                        <span className={style.statistics__subTitleItem}>Clients on the recommendation of friends</span>
                    </div>
                    <div className={style.statistics__item}>
                        <div className={style.statistics__icon}>
                            <SvgIcons id="shop" />
                        </div>
                        <div className={style.statistics__titleItem}>2400+</div>
                        <span className={style.statistics__subTitleItem}>Apartments renovated</span>
                    </div>
                    <div className={style.statistics__item}>
                        <div className={style.statistics__icon}>
                            <SvgIcons id="shop" />
                        </div>
                        <div className={style.statistics__titleItem}>670</div>
                        <span className={style.statistics__subTitleItem}>Qualified specialists</span>
                    </div>
                    <div className={style.statistics__item}>
                        <div className={style.statistics__icon}>
                            <SvgIcons id="shop" />
                        </div>
                        <div className={style.statistics__titleItem}>150000+ m2</div>
                        <span className={style.statistics__subTitleItem}>Finishing work was carried out</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
