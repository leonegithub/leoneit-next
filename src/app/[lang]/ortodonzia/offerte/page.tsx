import Image from "next/image";
import Link from "next/link";
import tadPa from './TadPa.png';
import ricambio from './Ricambio.png';
import './style.css';

function OrtodonziaOfferte() {
    const offers = [
        {
            id: "tad-pa-integrale",
            title: "TAD PA Integrale",
            subtitle: "Validità 19-05 / 31-07 2025<br />In collaborazione con i depositi dentali autorizzati",
            image: tadPa,
            link: "https://leone.it/servizi/download/Offerta_Ortodonzia_primavera_2025.pdf",
            linkText: "Maggiori informazioni"
        },
        {
            id: "offerta-intensiv",
            title: "Offerta Intensiv",
            subtitle: "Valida fino al 31 Luglio 2025<br />In collaborazione con i depositi dentali autorizzati",
            image: ricambio,
            link: "https://leone.it/servizi/download/Offerta_Intensiv_31-05-25.pdf",
            linkText: "Maggiori informazioni"
        }
    ];

    return (
        <div className="ortodonzia-offerte">
            <div className="container">
                <h1 className="blue py-5 text-4xl font-bold">Offerte Ortodonzia</h1>
                
                <div className="section">
                    <div className="list gap-5 my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
                        {offers.map((offer, index) => (
                            <div
                                className="download-magazines flex flex-col"
                                id={offer.id}
                                key={index}
                            >
                                <Link
                                    className="download-link"
                                    href={offer.link}
                                    target="_blank"
                                >
                                    <Image
                                        src={offer.image}
                                        alt={offer.title}
                                        width={400}
                                        height={400}
                                    />
                                </Link>
                                <Link href={offer.link} target="_blank">
                                    <h5 className="text-lg p-2">{offer.title}</h5>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrtodonziaOfferte;