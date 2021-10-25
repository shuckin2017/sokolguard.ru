import React from 'react'
import style from './Request.module.scss'

interface Props {}

export const Request = (props: Props) => {
    return (
        <section className={style.request}>
            <div className={style.request__wrapper}>
                <div className={style.request__content}>
                    <div className={style.request__title}>
                        У вас остались вопросы? Мы постараемся на них ответить.
                    </div>
                    <form action="#" className={style.request__form}>
                        <label className={style.request__label}>
                            <span>Имя:</span>
                            <input
                                type="text"
                                name="name"
                                placeholder="Ваше имя"
                                className={style.request__input}
                            />
                        </label>
                        <label className={style.request__label}>
                            <span> Телефон:</span>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Ваш телефон"
                                className={style.request__input}
                            />
                        </label>
                        <label className={style.request__label}>
                            <span>Сообщение:</span>
                            <input
                                type="text"
                                name="text"
                                placeholder="Ваше сообщение"
                                className={style.request__input}
                            />
                        </label>
                        <button className={style.request__btnAction}>Отправить</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
