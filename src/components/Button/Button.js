import React from 'react';
import styles from './Button.module.scss';

const Button = () => {
    const handleClick = () => {
        alert('Запишитесь на консультацию по телефону +7 777 777 777');
    };

    return (
        <div className={styles.Button}>
            <button onClick={handleClick}>Получить консультацию</button>
        </div>
    );
};

export default Button;
