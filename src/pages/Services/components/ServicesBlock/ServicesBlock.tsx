import React from 'react'
import style from './ServicesBlock.module.scss'
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'
import img1 from '../../../../assets/images/services/services-img-1.jpeg'

interface Props {}

export const ServicesBlock = (props: Props) => {
    const [showDialog, setShowDialog] = React.useState(false)
    const open = () => setShowDialog(true)
    const close = () => setShowDialog(false)
    return (
        <section className={style.servicesBlock}>
            <div className={style.servicesBlock__wrapper}>
                <div className={style.servicesBlock__content}>
                    <div className={style.servicesBlock__itemLeft}>
                        <div className={style.servicesBlock__itemImages}>
                            <img src={img1} alt="" />
                        </div>
                        <div className={style.servicesBlock__itemBody}>
                            <div className={style.servicesBlock__itemTitle}>
                                Охрана бизнес центров
                            </div>
                            <div className={style.servicesBlock__itemDesc}>
                                Sapien, feugiat faucibus orci arcu, vulputate.
                                Tristique varius consectetur vulputate arcu,
                                scelerisque nisi, nibh. Enim semper id sodales
                                ultricies sed ut ut augue. Mattis habitant
                                venenatis, gravida posuere massa ac interdum.
                                Eget aliquam dignissim ut vestibulum.{' '}
                            </div>
                            <button
                                className={style.servicesBlock__itemBtn}
                                onClick={open}
                            >
                                Подробнее
                            </button>
                        </div>
                    </div>

                    <div className={style.servicesBlock__itemRight}>
                        <div className={style.servicesBlock__itemImages}>
                            <img src={img1} alt="" />
                        </div>
                        <div className={style.servicesBlock__itemBody}>
                            <div className={style.servicesBlock__itemTitle}>
                                Охрана бизнес центров
                            </div>
                            <div className={style.servicesBlock__itemDesc}>
                                Sapien, feugiat faucibus orci arcu, vulputate.
                                Tristique varius consectetur vulputate arcu,
                                scelerisque nisi, nibh. Enim semper id sodales
                                ultricies sed ut ut augue. Mattis habitant
                                venenatis, gravida posuere massa ac interdum.
                                Eget aliquam dignissim ut vestibulum.{' '}
                            </div>
                            <button className={style.servicesBlock__itemBtn}>
                                Подробнее
                            </button>
                        </div>
                    </div>

                    <div className={style.servicesBlock__itemLeft}>
                        <div className={style.servicesBlock__itemImages}>
                            <img src={img1} alt="" />
                        </div>
                        <div className={style.servicesBlock__itemBody}>
                            <div className={style.servicesBlock__itemTitle}>
                                Охрана бизнес центров
                            </div>
                            <div className={style.servicesBlock__itemDesc}>
                                Sapien, feugiat faucibus orci arcu, vulputate.
                                Tristique varius consectetur vulputate arcu,
                                scelerisque nisi, nibh. Enim semper id sodales
                                ultricies sed ut ut augue. Mattis habitant
                                venenatis, gravida posuere massa ac interdum.
                                Eget aliquam dignissim ut vestibulum.{' '}
                            </div>
                            <button className={style.servicesBlock__itemBtn}>
                                Подробнее
                            </button>
                        </div>
                    </div>

                    <div className={style.servicesBlock__itemRight}>
                        <div className={style.servicesBlock__itemImages}>
                            <img src={img1} alt="" />
                        </div>
                        <div className={style.servicesBlock__itemBody}>
                            <div className={style.servicesBlock__itemTitle}>
                                Охрана бизнес центров
                            </div>
                            <div className={style.servicesBlock__itemDesc}>
                                Sapien, feugiat faucibus orci arcu, vulputate.
                                Tristique varius consectetur vulputate arcu,
                                scelerisque nisi, nibh. Enim semper id sodales
                                ultricies sed ut ut augue. Mattis habitant
                                venenatis, gravida posuere massa ac interdum.
                                Eget aliquam dignissim ut vestibulum.
                            </div>
                            <button className={style.servicesBlock__itemBtn}>
                                Подробнее
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <DialogOverlay isOpen={showDialog} onDismiss={close}>
                <DialogContent
                    style={{
                        border: '1px solid #E5E8ED',
                        borderRadius: '4px',
                        boxShadow:
                            '0px 60px 80px -20px rgba(30, 33, 44, 0.16), 0px 26px 24px -10px rgba(30, 33, 44, 0.1), 0px 12px 10px -6px rgba(30, 33, 44, 0.08), 0px 4px 4px -4px rgba(30, 33, 44, 0.05);',
                    }}
                >
                    <div>
                        <div>Subscribe to our newsletter</div>
                    </div>
                </DialogContent>
            </DialogOverlay>
        </section>
    )
}
