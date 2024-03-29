import React from 'react';
import useResponsive from '../../hooks/useResponsive';
import styles from './Header.module.scss';
import Navigation from "../Navigation/Navigation";
import velbexIcon from '../../assets/velbex-icon.svg';
import velbex from '../../assets/velbex.svg';
import telegramIcon from '../../assets/telegram.svg';
import viberIcon from '../../assets/viber.svg';
import whatsappIcon from '../../assets/whatsapp.svg';
import purpleBall from '../../assets/purple-ball.svg';
import bigRedBall from '../../assets/big-red-ball.svg';

const Header = () => {
    const { isMobile } = useResponsive();

    return (
        <div className={styles.Header}>
            <div className={styles.Header__container}>
                {isMobile ? (
                    <Navigation />
                ) : (
                    <>
                        <div className={styles.Header__iconsAndMotto}>
                            <div className={styles.Header__icons}>
                                <img className={styles.Header__bigRedBall} src={bigRedBall} alt="big red ball" />
                                <img className={styles.Header__velbexIcon} src={velbexIcon} alt="velbex icon" />
                                <img src={velbex} alt="velbex" />
                            </div>
                            <div className={styles.Header__motto}>
                                <p>крупный интегратор CRM <br/> в Росcии и ещё 8 странах</p>
                            </div>
                        </div>
                        <Navigation />
                        <div className={styles.Header__details}>
                            <img className={styles.Header__purpleBall} src={purpleBall} alt="purple ball" />
                            <span className={styles.Header__phone}>+7 555 555 55-55</span>
                            <img className={styles.telegram} src={telegramIcon} alt="telegram icon" />
                            <img className={styles.viber} src={viberIcon} alt="viber icon" />
                            <img className={styles.whatsapp} src={whatsappIcon} alt="whatsapp icon" />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
