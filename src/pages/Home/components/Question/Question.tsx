import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import style from './Question.module.scss';

interface Props {}

export const Question = (props: Props) => {
  return (
    <section className={style.question}>
      <div className={style.wrapper}>
        <div className={style.headeBlock}>
          <div className={style.titleBlock}>Вопрос-ответ</div>
        </div>
        <div className={style.content}>
          <div className={style.information}>
            <span>
              В&nbsp;этом разделе публикуем ответы на&nbsp;популярные вопросы.
              Не&nbsp;нашли ответов? Свяжитесь с&nbsp;нами по&nbsp;почте или
              телефону для консультации. Расскажем детали и&nbsp;подготовим
              индивидуальные условия сотрудничества.
            </span>
            <button className={style.actionBtn}>Остались вопросы?</button>
          </div>
          <div className={style.accorfion}>
            <Accordion>
              <AccordionItem className={style.accItem}>
                <AccordionItemHeading className={style.accHeade}>
                  <AccordionItemButton>
                  Как часто нужно проходить повышение квалификации?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading className={style.accHeade}>
                  <AccordionItemButton>
                  Как часто нужно проходить повышение квалификации?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  Если поломка нашего оборудования приведет к порче вашего имущества, то мы возместим ущерб в полном объеме. Но вам не стоит волноваться – за 11 лет мы нам еще ни разу не приходилось пользоваться этим правилом.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading className={style.accHeade}>
                  <AccordionItemButton>
                  Как часто нужно проходить повышение квалификации?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                    ut nostrud velit in irure cillum tempor laboris sed
                    adipisicing eu esse duis nulla non.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
