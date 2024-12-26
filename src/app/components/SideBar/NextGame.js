import Image from "next/image";
import styles from './NextGame.module.css';

const NextGame = () => {
    return (
        <div className={styles.container}>
            <Image 
                src="/images/pexels-freestockpro-3159812.jpg" 
                width={400} 
                height={200} 
                className={styles.image} 
            />
        </div>
    );
};

export default NextGame;