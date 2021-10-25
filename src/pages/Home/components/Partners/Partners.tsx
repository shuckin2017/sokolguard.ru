import React from 'react'
import style from './Partners.module.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import partner from '../../../../assets/images/partners/Rectangle.png'
import partner1 from '../../../../assets/images/partners/Rectangle-1.png'
import partner2 from '../../../../assets/images/partners/Rectangle-2.png'
import partner3 from '../../../../assets/images/partners/Rectangle-3.png'
import partner4 from '../../../../assets/images/partners/Rectangle-4.png'

interface Props {}


export const Partners = (props: Props) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    return (
        <div className={style.partners}>
            <div className={style.wrapper}>
                <div>
                    <Slider {...settings}>
                        <div className={style.partner__item}>
                            <img src={partner} alt="" />
                        </div>
                        <div className={style.partner__item}>
                            <img src={partner1} alt="" />
                        </div>
                        <div className={style.partner__item}>
                            <img src={partner2} alt="" />
                        </div>
                        <div className={style.partner__item}>
                            <img src={partner3} alt="" />
                        </div>
                        <div className={style.partner__item}>
                            <img src={partner4} alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
