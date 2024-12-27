"use client";
import Link from 'next/link';
import { useState, useEffect} from 'react';
import styles from './Navigation.module.css';
import Image from 'next/image';
import LoginButton from '../UI/LoginButton';
import SponsorBanner from './SponsorBanner';
import NavigationMobile from './NavigationMobile';


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
    <div className={`${styles.navigation} ${isSticky ? styles.sticky : ''} flex items-center`}>

    <div className={styles.navigationDiv}>
    <div 
        className={`${isSticky ? styles.stickyNavLinks : ''} relative p-2 cursor-pointer `}
        onMouseEnter={() => setNewsOpen(true)} 
        onMouseLeave={() => setNewsOpen(false)}
      >
        <h2 className={styles.navigationTitle}> NEWS </h2>
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
        className={`${isSticky ? styles.stickyNavLinks : ''} relative p-2 cursor-pointer`}
        onMouseEnter={() => setHeidschnuckenOpen(true)} 
        onMouseLeave={() => setHeidschnuckenOpen(false)}
      >
        <h2 className={styles.navigationTitle}> DIE HEIDSCHNUCKEN </h2>
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
        className={`${isSticky ? styles.stickyNavLinks : ' '} relative p-2 cursor-pointer `}
        onMouseEnter={() => setTicketOpen(true)} 
        onMouseLeave={() => setTicketOpen(false)}
      >
        <h2 className={styles.navigationTitle}> TICKETS </h2>
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
        <NavigationMobile/>
      </div>

    


      <div className={styles.navigationDiv}>
        <div 
          className={`${isSticky ? styles.stickyNavLinks : ''} relative p-2 cursor-pointer `}
          onMouseEnter={() => setClubOpen(true)} 
          onMouseLeave={() => setClubOpen(false)}
        >
          <h2 className={styles.navigationTitle}> CLUB </h2>
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
          className={`${isSticky ? styles.stickyNavLinks : ''} relative p-2 cursor-pointer `}
          onMouseEnter={() => setFanzoneOpen(true)}
          onMouseLeave={() => setFanzoneOpen(false)}
        >
          <h2 className={styles.navigationTitle}> FANZONE </h2>
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
          className={`${isSticky ? styles.stickyNavLinks : ''} relative p-2 cursor-pointer `}
         onMouseEnter={() => setHistorieOpen(true)}
         onMouseLeave={() => setHistorieOpen(false)}
        >
         <h2 className={styles.navigationTitle}> KONTAKT </h2> 
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

      {isSticky && (
        <div className={styles.subSubNavigation}>
          <div className={styles.loginDiv}>
            <LoginButton/>
          </div>
          <SponsorBanner/>
        </div>
      )}
     


     </div>  
   );  
};  

export default Navigation;  