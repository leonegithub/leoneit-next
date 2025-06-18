import ShopCardPA from "@/components/ShopCardPA";
import startUpYoung from './startupyoung.png';
import startUp from './startup.png'

const title = <span>Start-Up Young</span>
const titleTwo = <span>Start-Up</span>
const undertitle = <span>Valida per clinici <strong>under 39</strong></span>
const undertitleTwo = <span style={{fontSize: 16}}>La chirurgia <strong>professionalmente assistita</strong></span>

function OrtodonziaOfferte(){
    return (
        <div className="container mt-2">
            <div className="flex py-5">
                <div className="me-4">
            <ShopCardPA
            text={title}
            link="https://leone.it/servizi/download/2025/Offerta-START-UP-young-06-2025.pdf"
            linkText="Maggiori informazioni"
            image={startUpYoung}
            descText={undertitle}
            />
                </div>
             <ShopCardPA
            text={titleTwo}
            link="https://leone.it/servizi/download/2025/Offerta-START-UP-06-2025.pdf"
            linkText="Maggiori informazioni"
            image={startUp}
            descText={undertitleTwo}
            />
            </div>
        </div>
    );
}

export default OrtodonziaOfferte;