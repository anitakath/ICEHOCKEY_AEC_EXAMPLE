import React from 'react';
import styles from './LoginButton.module.css'; // Importiere dein CSS-Modul

const LoginButton = () => {
    return (
        <div className={styles.buttonContainer}>
            <button className={styles.loginButton}>Login</button>
        </div>
    );
};

export default LoginButton;