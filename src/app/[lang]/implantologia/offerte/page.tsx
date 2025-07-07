import Image from "next/image";
import Link from "next/link";
import startUpYoung from './startupyoung.png';
import startUp from './startup.png';
import './style.css';

function ImplantologiaOfferte(){
    const offers = [
        {
            id: "startup-young",
            title: "Start-Up Young",
            subtitle: "Valida per clinici under 39",
            image: startUpYoung,
            link: "https://leone.it/servizi/download/2025/Offerta-START-UP-young-06-2025.pdf",
            linkText: "Maggiori informazioni"
        },
        {
            id: "startup",
            title: "Start-Up",
            subtitle: "La chirurgia professionalmente assistita",
            image: startUp,
            link: "https://leone.it/servizi/download/2025/Offerta-START-UP-06-2025.pdf",
            linkText: "Maggiori informazioni"
        }
    ];

    return (
        <div className="implantologia-offerte">
            <div className="container">
                <h1 className="blue py-5 text-4xl font-bold">Offerte Implantologia</h1>
                
                <div className="section">
                    <div className="list gap-5 my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
                        {offers.map((offer, index) => (
                            <div
                                className="download-magazines cursor-pointer flex flex-col"
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

export default ImplantologiaOfferte;