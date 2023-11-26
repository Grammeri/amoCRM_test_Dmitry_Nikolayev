import React from 'react';
import styles from './Body.module.scss';
import Button from "../Button/Button";
import withWelbex from '../../assets/with-WELBEX.svg';
import freeConsultation from '../../assets/together-with-free-consultation.svg';

const Body = () => {
    return (
        <div className={styles.Body}>
            <div className={styles.Body__leftColumn}>
                <h2 className={styles.Body__earnMore}>Зарабатывайте<br/>больше</h2>
                <img  src={withWelbex} className={styles.Body__withWelbex} alt={"with Welbex"}/>
                <h5 className={styles.Body__develop}>Развиваем и контролируем<br/>продажи за вас</h5>
            </div>
          <div className={styles.Body__rightColumn}>
              <div className={styles.Body__oneRowColumn}>
                  <h5 className={styles.Body__crm}>использования CRM</h5>
                  <img  src={freeConsultation} className={styles.Body__freeConsultation} alt={"free consultation"}/>
              </div>
              <div className={styles.Body__twoRowsColumn}>
                     <div className={styles.Body__vidgets}>
                         <h4 className={styles.Body__vidgetsTitle}>ВИДЖЕТЫ</h4>
                         <h5 className={styles.Body__thirty}>30 готовых<br/> решений</h5>
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
              <Button/>
          </div>



        </div>
    );
};

export default Body;
