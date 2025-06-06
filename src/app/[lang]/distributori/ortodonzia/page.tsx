"use client"

import '../style.css'

function Ortodonzia() {

const ReteVenditeOrtodonzia = [
  {
    ruolo: "Ufficio vendite Italia",
    telefono: "+39.055.3044600",
    fax: "+39.055.374808",
    email: "italia@leone.it"
  },
  {
    ruolo: "Coordinatore Vendite Italia - Area Nord Est",
    nome: "Sig. Paolo Lucchiari",
    cellulare: "348.7013377",
    fax: "049.8862876",
    email: "p.lucchiari@leone.it"
  },
  {
    ruolo: "Coordinatore Vendite Italia - Area Centro",
    nome: "Sig. Paolo Giusti",
    cellulare: "335.6532922",
    telefono: "071.948935",
    fax: "071.948935",
    email: "p.giusti@leone.it"
  },
  {
    ruolo: "Area Developer Piemonte-Liguria-Valle d’Aosta",
    nome: "Sig. Massimo Ranieri",
    cellulare: "347.6715418",
    email: "m.ranieri@leone.it"
  },
  {
    ruolo: "Area Developer Lombardia",
    nome: "Sig. Renzo Erinni",
    cellulare: "335.7024606",
    email: "r.erinni@leone.it"
  },
  {
    ruolo: "Area Developer Emilia Romagna",
    nome: "Sig. Paolo Biagi",
    cellulare: "335.5871092",
    email: "p.biagi@leone.it"
  },
  {
    ruolo: "Area Developer Toscana",
    nome: "Sig. Maurizio Ricci",
    cellulare: "335.6816137",
    email: "m.ricci@leone.it"
  },
  {
    ruolo: "Area Developer Lazio",
    nome: "Dott. Stefano Della Bianca",
    cellulare: "347.0159891",
    email: "s.dellabianca@leone.it"
  },
  {
    ruolo: "Area Developer Puglia-Basilicata-Calabria",
    nome: "Sig. Ferruccio Camassa",
    cellulare: "339.6495540",
    email: "f.camassa@leone.it"
  },
  {
    ruolo: "Area Developer Campania",
    nome: "Sig. Ciro Felaco De Liso",
    cellulare: "331.6470205",
    email: "c.felaco@leone.it"
  },
  {
    ruolo: "Area Developer Sicilia",
    nome: "Sig.ra Giuliana Giordano",
    cellulare: "320.2323911",
    email: "g.giordano@leone.it"
  }
];
 


return (
    <div className="container">
      <h1 className="blue font-bold py-3">Rete di distribuzione Italia Ortodonzia</h1>
      <p>Tutti i Depositi Dentali italiani sono in grado di fornire entro 48 ore l’intera gamma dei nostri prodotti di Ortodonzia e Materiali Rigenerativi.
<br /> Per i prodotti di Implantologia consultare la mappa dei distributori. 
Il reparto Vendite Leone è sempre a disposizione per soddisfare qualsiasi vostra ulteriore domanda, assistenza e urgenza.
        </p>
      <div className="rete-vendita-implantologia py-4 flex">
        <ul className="text-lg w-full">
        <h4 className="blue pb-3 font-bold">Rete vendita Ortodonzia</h4>
          {ReteVenditeOrtodonzia.map((venditore, index) => (
            <li className="py-1" key={index}>
              <strong>{venditore.ruolo}</strong>
              {venditore.nome && <> - {venditore.nome}</>}
              <br />
              {venditore.telefono && (
                <>
                  <span><i className="fa-solid blue fa-phone-volume"></i>: {venditore.telefono}</span>
                  <br />
                </>
              )}
              {venditore.cellulare && (
                <>
                  <span><i className="fa-solid blue fa-phone-volume"></i>: {venditore.cellulare}</span>
                  <br />
                </>
              )}
            
              {venditore.email && (
                <>
                  <span>
                    <i className="fa-solid blue fa-envelope"></i>: <a className="underline" href={`mailto:${venditore.email}`}>{venditore.email}</a>
                  </span>
                </>
              )}
            </li>
          ))}
        </ul>
      
      </div>
    </div>
  );
}

export default Ortodonzia;