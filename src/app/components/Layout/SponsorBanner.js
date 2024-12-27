import { useEffect, useState } from 'react';
import styles from './Navigation.module.css'; // Importiere deine CSS-Datei

const sponsors = [
    { id: 1, name: "Sponsor A", logoUrl: "/images/sponsorA.png", backgroundColor: "rgba(0,139,139,0.5)" }, // darkcyan
    { id: 2, name: "Sponsor B", logoUrl: "/images/sponsorB.png", backgroundColor: "rgba(70,130,180,0.5)" }, // steelblue
    { id: 3, name: "Sponsor C", logoUrl: "/images/sponsorC.png", backgroundColor: "rgba(95,158,160,0.5)" }, // cadetblue
    { id: 4, name: "Sponsor D", logoUrl: "/images/sponsorD.png", backgroundColor: "rgba(72,61,139,0.5)" }, // darkslateblue
    { id: 5, name: "Sponsor E", logoUrl: "/images/sponsorE.png", backgroundColor: "rgba(0,0,139,0.5)" }, // darkblue
];


const SponsorBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length);
        }, 3000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className={styles.sponsorBannerDiv}>
            <div
                className={styles.sponsorSlides}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {sponsors.map((sponsor) => (
                    <div key={sponsor.id} className={styles.sponsorSlide}>
                        <h1 style={{ backgroundColor: sponsor.backgroundColor, color: 'white', textAlign: 'center', height: "8vh", paddingTop: "5px" }}>
                            {sponsor.name}
                        </h1>
                        
                        {/*<img src={sponsor.logoUrl} alt={sponsor.name} style={{ width: '100%', height: 'auto' }} />*/}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SponsorBanner;