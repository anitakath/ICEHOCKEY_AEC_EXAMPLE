"use client";
import Link from 'next/link';
import { useState, useEffect} from 'react';
import styles from './Navigation.module.css';
import LoginButton from '../UI/LoginButton';
import Image from 'next/image';

const Navigation = () => {
  const [heidschnuckenOpen, setHeidschnuckenOpen] = useState(false);
  const [ticketOpen, setTicketOpen] = useState(false)
  const [clubOpen, setClubOpen] = useState(false)
  const [newsOpen, setNewsOpen] = useState(false);
  const [fanzoneOpen, setFanzoneOpen] = useState(false);
  const [historieOpen, setHistorieOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);


  const handleScroll = () => {
    const offset = window.scrollY; 
    if (offset > 240) {
        setIsSticky(true); 
    } else {
        setIsSticky(false); 
    }
  };

  useEffect(() => {
      window.addEventListener("scroll", handleScroll); 
      return () => {
          window.removeEventListener("scroll", handleScroll); 
      };
  }, []);

  return (
    <div className={`${styles.navigation} ${isSticky ? styles.sticky : ''} flex  items-center`}>

    <div className={styles.navigationDiv}>
    <div 
        className={`${isSticky ? styles.stickyNavLinks : 'mx-8'} relative p-2 cursor-pointer `}
        onMouseEnter={() => setNewsOpen(true)} 
        onMouseLeave={() => setNewsOpen(false)}
      >
        NEWS
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
        className={`${isSticky ? styles.stickyNavLinks : 'mx-8'} relative p-2 cursor-pointer `}
        onMouseEnter={() => setHeidschnuckenOpen(true)} 
        onMouseLeave={() => setHeidschnuckenOpen(false)}
      >
        DIE HEIDSCHNUCKEN
        {heidschnuckenOpen && (
          <div className={styles.subNavigation}>
            <Link href="/kader" className={styles.subLink}> Kader 2024/2025 </Link>
            <Link href="/spielplan" className={styles.subLink}> Spielplan + Ergebnisse  2024/2025 </Link>
            <Link href="/scorer" className={styles.subLink}> Top-Scorer </Link>
            <Link href="/hinter-der-bande" className={styles.subLink}> Hinter der Bande </Link>
          </div>
        )}
      </div>
      <div 
        className={`${isSticky ? styles.stickyNavLinks : 'mx-8 '} relative p-2 cursor-pointer `}
        onMouseEnter={() => setTicketOpen(true)} 
        onMouseLeave={() => setTicketOpen(false)}
      >
        TICKETS
        {ticketOpen && (
          <div className={styles.subNavigation}>
            <Link href="/scorer" className={styles.subLink}>Ticket-Shop</Link>
            <Link href="/spielplan" className={styles.subLink}>Dauerkarten</Link>
            <Link href="/kader" className={styles.subLink}> Spielplan</Link>
          </div>
        )}
      </div>

    </div>
      
    
    

      <div className={styles.logoDiv}> 

        <Image src="/images/Adendorfer_EC.svg.png" alt="Logo vom Adendorfer Eishockeyclub" width={100} height={100} className={`${isSticky ? styles.logoSticky : styles.logo}`}/>
         
      </div>


      <div className={styles.navigationDiv}>
        <div 
          className={`${isSticky ? styles.stickyNavLinks : 'mx-8'} relative p-2 cursor-pointer `}
          onMouseEnter={() => setClubOpen(true)} 
          onMouseLeave={() => setClubOpen(false)}
        >
          CLUB
          {clubOpen && (
            <div className={styles.subNavigation}>
              <Link href="/impressum" className={styles.subLink}>Organisation</Link>
              <Link href="/impressum" className={styles.subLink}>Sponsoren </Link>
              <Link href="/impressum" className={styles.subLink}> Werte </Link>
              <Link href="/impressum" className={styles.subLink}> Historie </Link>
              <Link href="/anfahrt" className={styles.subLink}>Nachwuchs</Link>
              <Link href="/tickets" className={styles.subLink}>Stadion + Anfahrt</Link>
            </div>
          )}
        </div>

         {/* Fanzone */}
        <div 
          className={`${isSticky ? styles.stickyNavLinks : 'mx-8'} relative p-2 cursor-pointer `}
          onMouseEnter={() => setFanzoneOpen(true)}
          onMouseLeave={() => setFanzoneOpen(false)}
        >
          FANZONE
          {fanzoneOpen && (
            <div className={styles.subNavigation}>
              <Link href="/liveticker" className={styles.subLink}>Fanclubs</Link>
              <Link href="/fanbeauftragter" className={styles.subLink}>Fanshop</Link>
              <Link href="/multimedia" className={styles.subLink}>Multimedia</Link> 
              <Link href="/multimedia" className={styles.subLink}>Stadt Lüneburg</Link>
              <Link href="/impressum" className={styles.subLink}> Fanbeauftrater </Link>   
            </div>  
          )}  
        </div> 

        {/* Kontakt */}
        <div 
          className={`${isSticky ? styles.stickyNavLinks : 'mx-8'} relative p-2 cursor-pointer `}
         onMouseEnter={() => setHistorieOpen(true)}
         onMouseLeave={() => setHistorieOpen(false)}
        >
         KONTAKT 
         {historieOpen && (
           <div className={styles.subNavigation}> 
             <Link href="/statistiken"  className={styles.subLink}>Impresum + Anfahrt</Link> 
             <Link href="/geschichte-aec" className={styles.subLink}>Sponsoring</Link>  
             <Link href="/geschichte-aec" className={styles.subLink}> Hospitality</Link> 
             <Link href="/geschichte-aec" className={styles.subLink}>Jobportal + Volunteering</Link> 
             {/* Hier kannst du die anderen Links hinzufügen */}
             {/* ... */}
           </div>  
         )}  
        </div>   


      


      </div>



     </div>  
   );  
};  

export default Navigation;  