import styles from './Main.module.css'; // STYLES
import Logo from './UI/Logo'; // COMPONENTS
import SideBar from './SideBar';

const Main = () => {
    const data = [
        {
            id: 1,
            title: "Liebe AEC-Fans, Unterstützer und Freunde des Adendorfer Eishockeys!",
            content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        },
        {
            id: 2,
            title: "Ein weiterer Titel",
            content: "Hier ist ein weiterer Inhalt für das zweite Element."
        },
        {
            id: 3,
            title: "Neuigkeiten aus der AEC-Welt",
            content: "Die neuesten Entwicklungen im Adendorfer Eishockey werden hier besprochen. Bleiben Sie dran für weitere Informationen!"
        },
        {
            id: 4,
            title: "Spieler des Monats",
            content: "Wir feiern unseren Spieler des Monats! Er hat großartige Leistungen gezeigt und unser Team unterstützt."
        },
        {
            id: 5,
            title: "Nächste Spiele",
            content: "Verpassen Sie nicht unsere nächsten Spiele! Hier sind die Termine und Gegner, gegen die wir antreten werden."
        },
        {
            id: 6,
            title: "Fanartikel erhältlich",
            content: "Besuchen Sie unseren Shop für exklusive Fanartikel! Zeigen Sie Ihre Unterstützung für das Team mit Stil."
        },
        {
            id: 7,
            title: "Saisonabschlussfeier",
            content: "Feiern Sie mit uns den Abschluss der Saison! Es wird ein großes Event mit vielen Aktivitäten geben."
        }
    ];

    return (
        <div className={styles.container}>
            <div className={`w-4/5 ${styles.boxShadow}`}>
                {data.map(item => (
                    <div key={item.id} className='flex border-b border-zinc-300 my-2'>
                        <div className='p-2'>
                            <Logo />
                            <button className={styles.button}> weiterlesen...</button>
                        </div>
                        <div className='mx-2 p-2'>
                            <h1>{item.title}</h1>
                            <p className={styles.inlineBlock}>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='bg-zinc-300 w-1/5 p-2'>
                <SideBar />
            </div>
        </div>
    );
};

export default Main;