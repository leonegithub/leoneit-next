import ShopCardPA from "@/components/ShopCardPA";
import tadPa from './TadPa.png';
import ricambio from './Ricambio.png'

const description = <span><strong>Valida fino al 31 Luglio 2025</strong><br /><span className="invisible">In collaborazione con i depositi dentali autorizzati</span></span>
const descriptionTwo = (
    <span>
        <strong>Validità 19-05 / 31-07 2025</strong>
        <br />
        <span>In collaborazione con i depositi dentali autorizzati</span>
    </span>
)

function OrtodonziaOfferte() {
    return (
        <div className="container mt-2">
            <div className="flex py-5">
                <div className="me-4">
            <ShopCardPA
            text="TAD PA Integrale"
            link="https://leone.it/servizi/download/Offerta_Ortodonzia_primavera_2025.pdf"
            linkText="Maggiori informazioni"
            image={tadPa}
            descText={descriptionTwo}
            />
                </div>
            <ShopCardPA
            text="Offerta Intensiv"
            link="https://leone.it/servizi/download/Offerta_Intensiv_31-05-25.pdf"
            linkText="Maggiori informazioni"
            image={ricambio}
            descText={description}
            />
            </div>
        </div>
    );
}

export default OrtodonziaOfferte;