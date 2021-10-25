import React from 'react';
import style from './LayoutHeaderPage.module.scss';

interface Props {
  children: object;
}

export const LayoutHeaderPage = ({ children }: Props) => {
  return (
    <div className={style.wrapper}>
      <aside className={style.sidebar}>
        <ul className={style.menuList}>
          <li className={style.menuLink}>
            <a href="/about">О компании</a>
          </li>
          <li className={style.menuLink}>
            <a href="/">Вакансии</a>
          </li>
          <li className={style.menuLink}>
            <a href="/">Сертификаты</a>
          </li>
          <li className={style.menuLink}>
            <a href="/">Отзывы</a>
          </li>
        </ul>
      </aside>
      <main className={style.main}>{children}</main>
    </div>
  );
};
