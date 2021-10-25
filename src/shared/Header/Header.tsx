import React from 'react';
import { SvgIcons } from '../../assets/icons/global/SvgIcons';
import style from './Header.module.scss';

interface Props {}

export const Header = (props: Props) => {
  return (
    <header className={style.header}>
      <div className={style.wrapperTop}>
        <div className={style.headerTop}>
          <div className={style.logo}>
            <SvgIcons id="logo" />
          </div>
          <div className={style.email}>
            <a href="mailto:info@sokolguard.ru">
              <SvgIcons id="mail" />
              info@sokolguard.ru
            </a>
          </div>
          <div className={style.phone}>
            <a href="tel:+79251570899">
              <SvgIcons id="phone" />
              +7 (925) 157-08-99
            </a>
          </div>
          <div className={style.schedule}>
            <SvgIcons id="time" />
            Пн - Пт 9:00 - 18:00
          </div>
          <div className={style.headerBtn}>
            <button className={style.btn}>Заказать звонок</button>
          </div>
        </div>
      </div>
      <div className={style.wrapperBottom}>
        <div className={style.headerBottom}></div>
      </div>
    </header>
  );
};
