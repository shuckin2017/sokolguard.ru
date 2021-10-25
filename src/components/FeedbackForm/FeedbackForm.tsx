import React from 'react'
import style from './FeedbackForm.module.scss'
import { YandexMap } from '../../components/YandexMap/YandexMap'

interface Props {}

export const FeedbackForm = (props: Props) => {
    return (
        <div className={style.footer__callback}>
            <div className={style.footer__callbackWrapper}>
                <div className={style.footer__callbackContent}>
                    <form action="#" className={style.footer__callbackForm}>
                        <label className={style.footer__callbackLabel}>
                            <span>Имя:</span>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Ваше имя"
                                className={style.footer__callbackInput}
                            />
                        </label>
                        <label className={style.footer__callbackLabel}>
                            <span> Телефон:</span>
                            <input
                                type="text"
                                name="phone"
                                required
                                placeholder="Ваш телефон"
                                pattern="[+]7\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
                                className={style.footer__callbackInput}
                            />
                        </label>
                        <label className={style.footer__callbackLabel}>
                            <span> Email:</span>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Ваш email"
                                className={style.footer__callbackInput}
                            />
                        </label>
                        <label className={style.footer__callbackLabel}>
                            <span>Сообщение:</span>
                            <textarea
                                name="message"
                                required
                                placeholder="Ваше сообщение"
                                className={style.footer__callbackInput}
                            ></textarea>
                        </label>
                        <button className={style.footer__callbackBtnAction}>
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
            <YandexMap />
        </div>
    )
}
