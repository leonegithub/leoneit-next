import ShopCardPA from "@/components/ShopCardPA";
import tadPa from './TadPa.png'

function OrtodonziaOfferte(){
    return (
        <div className="container mt-2">
            <div className="flex py-5 justify-between">
            <ShopCardPA
            text="TAD PA Integrale"
            link="https://leone.it/servizi/download/Offerta_Ortodonzia_primavera_2025.pdf"
            linkText="Maggiori informazioni"
            image={tadPa}
            descText="Validità 19-05 / 31-07 2025"
            />
            </div>
        </div>
    );
}

export default OrtodonziaOfferte;