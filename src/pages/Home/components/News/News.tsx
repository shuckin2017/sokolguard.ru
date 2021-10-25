import React from 'react';
import style from './News.module.scss';
import image from '../../../../assets/images/news-1.jpg';
import icon from '../../../../assets/images/news-2.svg';

interface Props {}

export const News = (props: Props) => {
  return (
    <section className={style.news}>
      <div className={style.wrapper}>
        <div className={style.newsTop}>
          <div className={style.newsCardLarge}>
            <div className={style.newsTagBg}>Новости</div>
            <div className={style.newsLargeTitle}>
              Со 2 мая 2021 года вступает в силу новый приказ Фонда социального
              страхования Российской Федерации
            </div>
            <span className={style.newsData}>28 апреля 2021</span>
            <div className={style.newsLargeImg}>
              <img src={image} alt="" />
            </div>
          </div>

          <div className={style.newsCardMedium}>
            <div className={style.newsTag}>COVID - 19</div>
            <div className={style.newsMediumImg}>
              <img src={icon} alt="" />
            </div>
            <div className={style.newsMediumTitle}>
              Единый колл-центр ФСС РФ по короновирусу
            </div>
            <div className={style.newsButtom}>
              <button>Подробнее</button>
              <div className={style.newsPagination}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div className={style.newsBottom}>
          <div className={style.newsCardSmall}>
            <a className={style.newsSmallTitle} href="/">
              Подача заявления на прохождение медико-социальной экспертизы
              доступна на портале Госуслуг
            </a>
            <span className={style.newsDataSmall}>27 апреля 2021</span>
          </div>
          <div className={style.newsCardSmall}>
            <a className={style.newsSmallTitle} href="/">
              Мишустин утвердил систему электронных сертификатов для людей с
              инвалидностью
            </a>
            <span className={style.newsDataSmall}>26 апреля 2021</span>
          </div>
          <div className={style.newsCardSmall}>
            <a className={style.newsSmallTitle} href="/">
              Госдума приняла закон о прямых выплатах больничных из Фонда
             
            </a>
            <span className={style.newsDataSmall}>23 апреля 2021</span>
          </div>
        </div>
      </div>
    </section>
  );
};
