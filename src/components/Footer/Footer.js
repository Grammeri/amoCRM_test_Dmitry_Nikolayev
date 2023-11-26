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
                <p>Расчёт стоимости</p>
                <p>Услуги</p>
                <p>Виджеты</p>
                <p>Интеграции</p>
                <p>Наши клиенты</p>
            </div>
            <div className={styles.Footer__noTitle}>
                <p>Кейсы</p>
                <p>Благодарственные письма</p>
                <p>Сертификаты</p>
                <p>Блог на Youtube</p>
                <p>Вопрос / Ответ</p>
            </div>
            <div className={styles.Footer__contacts}>
                <h4>Контакты</h4>
                <h5>+7 555 555-55-55</h5>
                <img className={styles.telegram} src={telegramIcon} alt="telegram icon"/>
                <img className={styles.viber} src={viberIcon} alt="viber icon"/>
                <img className={styles.whatsapp} src={whatsappIcon} alt="whatsapp icon"/>
                <h6>Москва, Путевой проезд 3с1, к 902</h6>


            </div>
        </div>
    );
};

export default Footer;
