import ShopCardPA from "@/components/ShopCardPA";
import ricambio from './Ricambio.png'

const description = <span><strong>Valida fino al 31 Luglio 2025</strong><br />In collaborazione con i depositi dentali autorizzati</span>

function OrtodonziaOfferte(){
    return (
        <div className="container mt-2">
            <div className="flex py-5 justify-between">
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