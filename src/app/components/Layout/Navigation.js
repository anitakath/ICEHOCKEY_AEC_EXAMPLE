"use client";
import Link from 'next/link';
import { useState } from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [infoOpen, setInfoOpen] = useState(false);
  const [heidschnuckenOpen, setHeidschnuckenOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);
  const [ergebnisseOpen, setErgebnisseOpen] = useState(false);
  const [fanzoneOpen, setFanzoneOpen] = useState(false);
  const [historieOpen, setHistorieOpen] = useState(false);

  return (
    <div className={`${styles.navigation} flex items-center`}>
      <Link href="/" className="mx-2 cursor-pointer">Home</Link>

      <div 
        className="relative p-2 cursor-pointer mx-2" 
        onMouseEnter={() => setInfoOpen(true)} 
        onMouseLeave={() => setInfoOpen(false)}
      >
        Info
        {infoOpen && (
          <div className={styles.subNavigation}>
            <Link href="/impressum" className={styles.subLink}>Impressum</Link>
            <Link href="/anfahrt" className={styles.subLink}>Anfahrt</Link>
            <Link href="/tickets" className={styles.subLink}>Tickets</Link>
            <Link href="/spielstaette" className={styles.subLink}>Spielstätte</Link>
          </div>
        )}
      </div>

      <div 
        className="relative p-2 cursor-pointer mx-2" 
        onMouseEnter={() => setHeidschnuckenOpen(true)} 
        onMouseLeave={() => setHeidschnuckenOpen(false)}
      >
        die Heidschnucken
        {heidschnuckenOpen && (
          <div className={styles.subNavigation}>
            <Link href="/scorer" className={styles.subLink}>Scorer</Link>
            <Link href="/spielplan" className={styles.subLink}>Spielplan</Link>
            <Link href="/kader" className={styles.subLink}>Kader</Link>
            <Link href="/hinter-der-bande" className={styles.subLink}>Hinter der Bande</Link>
          </div>
        )}
      </div>

      <div 
        className="relative p-2 cursor-pointer mx-2" 
        onMouseEnter={() => setNewsOpen(true)} 
        onMouseLeave={() => setNewsOpen(false)}
      >
        News
        {newsOpen && (
          <div className={styles.subNavigation}>
            <Link href="/aktuelles" className={styles.subLink}>Aktuelles</Link>
            <Link href="/archiv" className={styles.subLink}>Archiv</Link>
            <Link href="/suche" className={styles.subLink}>Suche</Link>
            <Link href="/news-facebook" className={styles.subLink}>News auf Facebook</Link>
          </div>
        )}
      </div>

      <div 
        className="relative p-2 cursor-pointer mx-2" 
        onMouseEnter={() => setErgebnisseOpen(true)} 
        onMouseLeave={() => setErgebnisseOpen(false)}
      >
        Ergebnisse
        {ergebnisseOpen && (
          <div className={styles.subNavigation}>
            <Link href="/regionalliga-nord" className={styles.subLink}>Regionalliga Nord</Link>
            <Link href="/2024_2025" className={styles.subLink}>2024/2025</Link>
          </div>
        )}
      </div>

      {/* Fanzone */}
      <div 
        className="relative p-2 cursor-pointer mx-2"
        onMouseEnter={() => setFanzoneOpen(true)}
        onMouseLeave={() => setFanzoneOpen(false)}
      >
        Fanzone
        {fanzoneOpen && (
          <div className={styles.subNavigation}>
            <Link href="/liveticker" className={styles.subLink}>Liveticker</Link>
            <Link href="/fanbeauftragter" className={styles.subLink}>Fanbeauftragter</Link>
            <Link href="/multimedia" className={styles.subLink}>Multimedia</Link>  
          </div>  
         )}  
       </div>  

       {/* Historie */}
       <div 
         className="relative p-2 cursor-pointer mx-2"
         onMouseEnter={() => setHistorieOpen(true)}
         onMouseLeave={() => setHistorieOpen(false)}
       >
         Historie
         {historieOpen && (
           <div className={styles.subNavigation}>
             <Link href="/geschichte-aec" className={styles.subLink}>Geschichte des AEC</Link>  
             <Link href="/statistiken"  className={styles.subLink} >Statistiken</Link>  
             {/* Hier kannst du die anderen Links hinzufügen */}
             {/* ... */}
           </div>  
         )}  
       </div>  

       {/* Ticketshop */}
       {/* Hier kannst du den Ticketshop-Punkt hinzufügen */}  
     </div>  
   );  
};  

export default Navigation;  