// app/kader/page.js

import styles from '../pagestyles/Kader.module.css';
import Image from 'next/image';
const spieler = {
    torwarte: [
        {
            id: 1,
            name: "Torwart 1",
            geburtsdatum: "1990-01-01",
            geburtsort: "Stadt A",
            nationalität: "Land A",
            letzterClub: "Club A",
            spieleAEC: 50,
            tore: 5,
            vorlagen: 2,
        },
        {
            id: 2,
            name: "Torwart 2",
            geburtsdatum: "1992-02-02",
            geburtsort: "Stadt B",
            nationalität: "Land B",
            letzterClub: "Club B",
            spieleAEC: 30,
            tore: 3,
            vorlagen: 1,
        },
    ],
    verteidiger: [
        {
            id: 3,
            name: "Verteidiger 1",
            geburtsdatum: "1988-03-03",
            geburtsort: "Stadt C",
            nationalität: "Land C",
            letzterClub: "Club C",
            spieleAEC: 100,
            tore: 10,
            vorlagen: 5,
        },
        {
            id: 4,
            name: "Verteidiger 2",
            geburtsdatum: "1990-04-04",
            geburtsort: "Stadt D",
            nationalität: "Land D",
            letzterClub: "Club D",
            spieleAEC: 80,
            tore: 8,
            vorlagen: 4,
        },
        {
          id :5, 
          name :"Verteidiger3", 
          geburtsdatum :"1991 -05 -05", 
          geburtsort :"Stadt E", 
          nationalität :"Land E", 
          letzterClub :"Club E", 
          spieleAEC :70, 
          tore :6, 
          vorlagen :3
      },
      {
          id :6, 
          name :"Verteidiger4", 
          geburtsdatum :"1993 -06 -06", 
          geburtsort :"Stadt F", 
          nationalität :"Land F", 
          letzterClub :"Club F", 
          spieleAEC :60, 
          tore :7, 
          vorlagen :2
      },
      {
         id :7, 
         name:"Verteidiger5", 
         geburtsdatum:"1994 -07 -07", 
         geburtsort:"Stadt G", 
         nationalität:"Land G", 
         letzterClub:"Club G", 
         spieleAEC :50, 
         tore :4, 
         vorlagen :1
     },
     {
        id :8,  
        name :"Verteidiger6" ,  
        geburtsdatum :"1995 -08 -08" ,  
        geburtsort :"Stadt H" ,  
        nationalität :"Land H" ,  
        letzterClub :"Club H" ,   
        spieleAEC :40 ,   
        tore :3 ,   
        vorlagen :0
     }
    ],
    angreifer: [
        {
           id :9,  
           name :"Angreifer1" ,  
           geburtsdatum :"1989 -09 -09" ,  
           geburtsort :"Stadt I" ,  
           nationalität :"Land I" ,  
           letzterClub :"Club I" ,  
           spieleAEC :120 ,  
           tore :20 ,  
           vorlagen :10
       },
       {
           id :10,  
           name :"Angreifer2" ,  
           geburtsdatum :"1990 -10 -10" ,  
           geburtsort :"Stadt J" ,  
           nationalität :"Land J" ,  
           letzterClub :"Club J" ,  
           spieleAEC :110 ,   
           tore :18 ,   
           vorlagen :9
       },
       {
             id :11,    
             name :"Angreifer3" ,    
             geburtsdatum :"1991 -11 -11" ,    
             geburtsort :"Stadt K" ,    
             nationalität :"Land K" ,    
             letzterClub :"Club K" ,    
             spieleAEC :100,    
             tore :15,    
             vorlagen :8
       },
       {
              id :12,    
              name:" Angreifer4" ,    
              geburtsdatum:"1992 -12 -12" ,    
              geburtsort:" Stadt L" ,    
              nationalität:" Land L" ,    
              letzterClub:" Club L" ,
              spieleAEC :90 ,
              tore :12 ,
              vorlagen :7
       },
       {
               id :13 ,
               name:" Angreifer5" ,
               geburtsdatum:"1993 -01 -13" ,
               geburtsort:" Stadt M" ,
               nationalität:" Land M" ,
               letzterClub:" Club M" ,
               spieleAEC :-1 ,
               tore :-1 ,
               vorlagen :-1
       }
   ],
   maskottchen:[
       {
           id :15 ,
           name:"Maskottchen Maximus" ,
           geburtsdatum:"2000-03-15" ,
           geburtsort:"Stadt O" ,
           nationalität:"Land O" ,
           letzterClub:"Maskottchen Club O" ,
           spieleAEC:-1 ,
           tore:-1 ,
           vorlagen:-1
       }
   ]
};

export default function Kader() {
    return (
        <div className="border-2 w-4/5 p-2 bg-zinc-300 ">
            <h1>Kader</h1>
             {/* Torwarte */}
             <h2 className='text-4xl mt-10'> GOALIES </h2>
             <div className={styles.subContainer}>
            <div className={styles.grid}>
                {spieler.torwarte.map((torwart) => (
                    <div key={torwart.id} className={styles.gridItem}>
                        <div className={styles.imageContainer}>
                           
                            <Image src="/Spieler/pexels-tony-schnagl-6468948.jpg" width={200} height={200} alt={`${torwart.name}`} />
                        </div>
                        <h3>Name: {torwart.name}</h3>
                        <p>Geburtstag: {torwart.geburtsdatum}</p>
                        <p>Geburtsort: {torwart.geburtsort}</p>
                        <p>Nationalität: {torwart.nationalität}</p>
                        <p>Letzter Club: {torwart.letzterClub}</p>
                        <p>Spiele für AEC: {torwart.spieleAEC}</p>
                        <p>Tore: {torwart.tore}</p>
                        <p>Vorlagen: {torwart.vorlagen}</p>
                    </div>
                ))}
            </div>
        </div>
             {/* Verteidiger */}
             <h2  className='text-4xl mt-10'> VERTEIDIGUNG </h2>
             <div className={styles.subContainer}>
            <div className={styles.grid}>
                {spieler.verteidiger.map((verteidiger) => (
                    <div key={verteidiger.id} className={styles.gridItem}>
                        <div className={styles.imageContainer}>
                           
                            <Image src="/Spieler/pexels-tony-schnagl-6468948.jpg" width={200} height={200} alt={`${verteidiger.name}`} />
                        </div>
                        <h3>Name: {verteidiger.name}</h3>
                        <p>Geburtstag: {verteidiger.geburtsdatum}</p>
                        <p>Geburtsort: {verteidiger.geburtsort}</p>
                        <p>Nationalität: {verteidiger.nationalität}</p>
                        <p>Letzter Club: {verteidiger.letzterClub}</p>
                        <p>Spiele für AEC: {verteidiger.spieleAEC}</p>
                        <p>Tore: {verteidiger.tore}</p>
                        <p>Vorlagen: {verteidiger.vorlagen}</p>
                    </div>
                ))}
            </div>
        </div>

             {/* Angreifer */}
             <h2  className='text-4xl mt-10'> ANGRIFF </h2>
             <div className={styles.subContainer}>
            <div className={styles.grid}>
                {spieler.angreifer.map((angreifer) => (
                    <div key={angreifer.id} className={styles.gridItem}>
                        <div className={styles.imageContainer}>             
                            <Image src="/Spieler/pexels-tony-schnagl-6468948.jpg" width={200} height={200} alt={`${angreifer.name}`} />
                        </div>
                        <h3>Name: {angreifer.name}</h3>
                        <p>Geburtstag: {angreifer.geburtsdatum}</p>
                        <p>Geburtsort: {angreifer.geburtsort}</p>
                        <p>Nationalität: {angreifer.nationalität}</p>
                        <p>Letzter Club: {angreifer.letzterClub}</p>
                        <p>Spiele für AEC: {angreifer.spieleAEC}</p>
                        <p>Tore: {angreifer.tore}</p>
                        <p>Vorlagen: {angreifer.vorlagen}</p>
                    </div>
                ))}
            </div>
        </div>

           {/* Maskottchen */}
            {spieler.maskottchen.length > 0 && (
                <>
                    <h2  className='text-4xl'>Maskottchen</h2>
                    {spieler.maskottchen.map((maskottchen) => (
                        <div key={maskottchen.id} className="border p-4 bg-white rounded shadow">
                            {/* Hier kannst du das Bild des Maskottchens einfügen */}
                            <div className={styles.imageContainer}>
                                {/* Beispielbild-Pfad anpassen */}
                                {/*<img src={`path/to/image/${maskottchen.id}.jpg`} alt={`${maskottchen.name}`} />*/}
                                <p>Image</p> {/* Platzhalter für das Bild */}
                            </div>
                            <h3>{maskottchen.name}</h3>
                            <p>Geburtstag: {maskottchen.geburtsdatum}</p>
                            <p>Geburtsort: {maskottchen.geburtsort}</p>
                            <p>Nationalität: {maskottchen.nationalität}</p>
                            <p>Letzter Club: {maskottchen.letzterClub}</p>
                            {/* Spiele und Tore sind hier nicht relevant und können weggelassen werden */}
                            {/* Optional kannst du auch andere Informationen hinzufügen */}
                        </div>
                    ))}
                </>
            )}
            

         </div>

     );
}