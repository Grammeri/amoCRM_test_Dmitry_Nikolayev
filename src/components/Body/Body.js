import React from 'react';
import styles from './Body.module.scss';
import Button from "../Button/Button";
import withWelbex from '../../assets/with-WELBEX.svg';
import freeConsultation from '../../assets/together-with-free-consultation.svg';
import redBall from '../../assets/big-red-ball.svg';
import blueBall from '../../assets/purple-ball.svg';
import smallRedBall from '../../assets/big-red-ball.svg';
import hyphon from '../../assets/hyphon.svg';

const Body = () => {
    return (
        <div className={styles.Body}>
            <div className={styles.Body__leftColumn}>
                <h2 className={styles.Body__earnMore}>Зарабатывайте<br/>больше</h2>
                <img src={withWelbex} className={styles.Body__withWelbex} alt={"with Welbex"}/>
                <h5 className={styles.Body__develop}>Развиваем и контролируем<br/>продажи за вас</h5>
                <img className={styles.Body__blueBall} src={blueBall} alt={"blue ball"}/>
            </div>
            <div className={styles.Body__rightColumn}>
                <div className={styles.Body__oneRowColumn}>
                    <h5 className={styles.Body__crm}>использования CRM</h5>
                    <img src={freeConsultation} className={styles.Body__freeConsultation} alt={"free consultation"}/>
                </div>
                <div className={styles.Body__skypeAuditHiddenInDesktop}>
                    <img src={hyphon} className={styles.Body__hyphon} alt={"hyphon"}/>
                    <h5 className={styles.Body__skypeAudit}>SKYPE АУДИТ</h5>
                    <img src={hyphon} className={styles.Body__hyphon} alt={"hyphon"}/>
                    <h5 className={styles.Body__skypeAudit}>30 ВИДЖЕТОВ</h5>
                    <img src={hyphon} className={styles.Body__hyphon} alt={"hyphon"}/>
                    <h5 className={styles.Body__skypeAudit}>DASHBOARD</h5>
                    <img src={hyphon} className={styles.Body__hyphon} alt={"hyphon"}/>
                    <h5 className={styles.Body__skypeAudit}>МЕСЯЦ AMOCRM</h5>
                    <img src={redBall} className={styles.Body__redBallMobile} alt={"red ball"}/>
                </div>
                <div className={styles.Body__twoRowsColumn}>
                    <img className={styles.Body__smallRedBall} src={smallRedBall} alt={"small red ball"}/>
                    <div className={styles.Body__vidgets}>
                        <h4 className={styles.Body__vidgetsTitle}>ВИДЖЕТЫ</h4>
                        <h5 className={styles.Body__thirty}>30   готовых<br/> решений</h5>
                    </div>
                    <div className={styles.Body__dashboard}>
                        <h4 className={styles.Body__dashboardTitle}>DASHBOARD</h4>
                        <h5 className={styles.Body__indicators}>с показателями<br/>
                            вашего бизнеса</h5>
                    </div>
                    <div className={styles.Body__skypeAudit}>
                        <h4 className={styles.Body__skypeAuditTitle}>SKYPE АУДИТ</h4>
                        <h5 className={styles.Body__salesDep}>отдела продаж<br/> и CRM системы</h5>
                    </div>
                    <div className={styles.Body__thirtyFiveDays}>
                        <h4 className={styles.Body_thiryFive}>35 ДНЕЙ</h4>

                    </div>
                </div>
                <div className={styles.Body__button}>
                    <Button/>
                </div>

            </div>


        </div>
    );
};

export default Body;
