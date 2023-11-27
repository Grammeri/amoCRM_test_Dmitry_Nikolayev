// React компонент Footer
import React from 'react';
import styles from './Footer.module.scss';
import telegramIcon from "../../assets/telegram.svg";
import viberIcon from "../../assets/viber.svg";
import whatsappIcon from "../../assets/whatsapp.svg";

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.Footer__about}>
                <h4>О компании</h4>
                <p>Партнёрская программа</p>
                <p>Вакансии</p>
            </div>
            <div className={styles.Footer__menu}>
                <h4>Меню</h4>
                <p>Расчет<span className={styles.Footer__mobileBreak}> </span>стоимости</p>
                <p>Услуги</p>
                <p>Виджеты</p>
                <p>Интеграции</p>
                <p>Наши клиенты</p>
            </div>
            <div className={styles.Footer__noTitle}>
                <p className={styles.Footer__cases}>Кейсы</p>
                <p className={styles.Footer__thankYouLetters}>Благодарственные письма</p>
                <p className={styles.Footer__clientGratitudeMobile}>Благодарность клиентов</p>
                <p className={styles.Footer__certificates}>Сертификаты</p>
                <p className={styles.Footer__youtubeBlog}>Блог на Youtube</p>
                <p className={styles.Footer__qA}>Вопрос / Ответ</p>
            </div>
            <div className={styles.Footer__contacts}>
                <h4>Контакты</h4>
                <h5>+7 555 555-55-55</h5>
                <img className={styles.Footer__telegram} src={telegramIcon} alt="telegram icon"/>
                <img className={styles.Footer__viber} src={viberIcon} alt="viber icon"/>
                <img className={styles.Footer__whatsapp} src={whatsappIcon} alt="whatsapp icon"/>
                <h6>Москва, Путевой проезд 3с1, к 902</h6>
            </div>
            <div className={styles.Footer__mobileBottomLines}>
               <span className={styles.Footer__allRightsReserved}>
                       ©WELBEX 2022. Все права защищены.
               </span>
                <div>
                    <span className={styles.Footer__confidencePolicy}>
                        Политика конфиденциальности
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
