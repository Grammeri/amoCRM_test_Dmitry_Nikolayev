import React from 'react';
import styles from './Navigation.module.scss';
import useResponsive from "../../hooks/useResponsive";

const Navigation = () => {
    const { isMobile } = useResponsive();

    return (
        <div className={styles.Navigation}>
            <a href="/services">Услуги</a>
            <a href="/widgets">Виджеты</a>
            <a href="/integrations">Интеграции</a>
            <a href="/cases">Кейсы</a>
            {!isMobile && <a href="/certificates">Сертификаты</a>}
        </div>
    );
};

export default Navigation;
