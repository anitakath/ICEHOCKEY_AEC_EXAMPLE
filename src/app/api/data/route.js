//src/app/api/data/route.js

export async function GET(req) {
    const newsData = [
        { id: 1, title: "Liebe AEC-Fans, Unterstützer und Freunde des Adendorfer Eishockeys!", content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." },
        { id: 2, title: "Ein weiterer Titel", content: "Hier ist ein weiterer Inhalt für das zweite Element." },
        { id: 3, title: "Neuigkeiten aus der AEC-Welt", content: "Die neuesten Entwicklungen im Adendorfer Eishockey werden hier besprochen. Bleiben Sie dran für weitere Informationen!" },
        { id: 4, title: "Spieler des Monats", content: "Wir feiern unseren Spieler des Monats! Er hat großartige Leistungen gezeigt und unser Team unterstützt." },
        { id: 5, title: "Nächste Spiele", content: "Verpassen Sie nicht unsere nächsten Spiele! Hier sind die Termine und Gegner, gegen die wir antreten werden." },
        { id: 6, title: "Fanartikel erhältlich", content: "Besuchen Sie unseren Shop für exklusive Fanartikel! Zeigen Sie Ihre Unterstützung für das Team mit Stil." },
        { id: 7, title: "Saisonabschlussfeier", content: "Feiern Sie mit uns den Abschluss der Saison! Es wird ein großes Event mit vielen Aktivitäten geben." }
    ];

    return new Response(JSON.stringify(newsData), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}