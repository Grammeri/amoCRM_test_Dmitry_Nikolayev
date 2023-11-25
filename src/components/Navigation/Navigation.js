import React from 'react';
import styles from './Navigation.module.scss';

const Navigation = () => {
    return (
        <div className={styles.Navigation}>
            <a href="/services">Услуги</a>
            <a href="/widgets">Виджеты</a>
            <a href="/integrations">Интеграции</a>
            <a href="/cases">Кейсы</a>
            <a href="/certificates">Сертификаты</a>
        </div>
    );
};

export default Navigation;
