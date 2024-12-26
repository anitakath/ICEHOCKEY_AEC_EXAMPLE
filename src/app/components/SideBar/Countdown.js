import styles from './Countdown.module.css';

const Countdown = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Noch</h2>
            <p className={styles.days}>
                <em>X Tage</em>
            </p>
            <p className={styles.details}>
                <em>Y Stunden, Minuten, Sekunden</em>
            </p>
        </div>
    );
};

export default Countdown;