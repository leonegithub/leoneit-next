"use client"

import { useState } from "react";
import '../style.css'

function Implantologia() {

    const [selectedRegion, setSelectedRegion] = useState<null | string>(null)

    function handleRegion(event: React.ChangeEvent<HTMLSelectElement>): void {
        setSelectedRegion(event.target.value);
    }

  const ReteVenditeImplantologia = [
  {
    ruolo: "Ufficio vendite Italia",
    telefono: "+39.055.3044600",
    fax: "+39.055.374808",
    email: "italia@leone.it"
  },
  {
    ruolo: "Coordinatore Vendite Italia - Area Nord Est",
    nome: "Sig. Paolo Lucchiari",
    cellulare: "348.701.33.77",
    fax: "049.886.28.76",
    email: "p.lucchiari@leone.it"
  },
  {
    ruolo: "Coordinatore Vendite Italia - Area Centro",
    nome: "Sig. Paolo Giusti",
    cellulare: "335.653.29.22",
    telefono: "071.94.89.35",
    fax: "071.94.89.35",
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
    cellulare: "335/7024606",
    email: "r.erinni@leone.it"
  },
  {
    ruolo: "Area Developer Emilia Romagna",
    nome: "Sig. Paolo Biagi",
    cellulare: "335.587.10.92",
    email: "p.biagi@leone.it"
  },
  {
    ruolo: "Area Developer Toscana",
    nome: "Sig. Maurizio Ricci",
    cellulare: "335.68.16.137",
    email: "m.ricci@leone.it"
  },
  {
    ruolo: "Area Developer Lazio",
    nome: "Dott. Stefano Della Bianca",
    cellulare: "347.0159891",
    email: "s.dellabianca@leone.it"
  },
  {
    ruolo: "Area Developer Campania",
    nome: "Sig. Ciro Felaco De Liso",
    cellulare: "331.6470205",
    email: "c.felaco@leone.it"
  },
  {
    ruolo: "Area Developer Puglia-Basilicata-Calabria",
    nome: "Sig. Ferruccio Camassa",
    cellulare: "339.6495540",
    email: "f.camassa@leone.it"
  },
  {
    ruolo: "Area Developer Sicilia",
    nome: "Sig.ra Giuliana Giordano",
    cellulare: "320.2323911",
    email: "g.giordano@leone.it"
  }
];

const DistributoriImplantologia = [
  {
    nome: "NEW DENTAL IMPLANT SURGERY",
    telefono: "338.8057559 - 0871.938668",
    fax: "0871.930577",
    regione: "abruzzo"
  },
  {
    nome: "UMBRA s.p.a. (sede Perugia)",
    telefono: "085.4451688",
    fax: "085.4454460",
    email: "filiale.pe@umbra.it",
    website: "www.umbra.it",
    regione: "abruzzo"
  },
  {
    nome: "UMBRA s.p.a. (sede Perugia)",
    telefono: "075.506901",
    fax: "075.5019861",
    email: "infoline@umbra.it",
    website: "www.umbra.it",
    regione: "basilicata"
  },
  {
    nome: "UMBRA s.p.a. (sede Perugia)",
    telefono: "075.506901",
    fax: "075.5019861",
    email: "infoline@umbra.it",
    website: "www.umbra.it",
    regione: "calabria"
  },
  {
    nome: "ASTIDENTAL: Lamezia Terme",
    indirizzo: "Via Scotellaro Rocco s.n.c. 88046 Lamezia Terme (CZ)",
    telefono: "800.642777",
    website: "www.bquadro.it",
    regione: "calabria"
  },
  {
    nome: "BARCA MEDICAL s.r.l.",
    telefono: "089.253600",
    fax: "089.231728",
    email: "info@barcamedical.it",
    regione: "campania"
  },
  {
    nome: "MARANTO s.r.l.s.",
    indirizzo: "Via Calandriello - Pal. B. 1, 82100 Benevento",
    telefono: "0824.357037",
    cellulare: "333.9595360/333.2486215",
    email: "maranto.srls@gmail.com",
    regione: "campania"
  },
  {
    nome: "DENTAL FUTURA GROUP s.r.l.",
    telefono: "081.7574864 - 081.7573866 - 081.5400487",
    fax: "081.7576713",
    email: "info@dentalfutura.com",
    website: "www.dentalfutura.com",
    regione: "campania"
  },
  {
    nome: "UMBRA s.p.a. (sede Perugia)",
    telefono: "075.506901",
    fax: "075.5019861",
    email: "infoline@umbra.it",
    website: "www.umbra.it",
    regione: "campania"
  },
  {
    nome: "ASTIDENTAL: NAPOLI",
    indirizzo: "Torre Vesuvio, via Boscofangone, zona Asi S.N.C. 80035 Nola (NA)",
    telefono: "081.18187896",
    email: "napoli@astidental.com",
    website: "www.bquadro.it",
    regione: "campania"
  },
  // ...continua dopo Campania...

  // EMILIA ROMAGNA
  {
    nome: "ALPHA s.n.c.",
    telefono: "0532.741611",
    fax: "0532.741440",
    email: "alphadentale@alphadentale.com",
    website: "www.alphadentale.com",
    regione: "emilia romagna"
  },
  {
    nome: "EURODENTAL s.n.c.",
    telefono: "059.218000",
    fax: "059.223395",
    email: "info@eurodental.it",
    regione: "emilia romagna"
  },
  {
    nome: "UMBRA s.p.a.",
    telefono: "051.535770",
    fax: "051.532520",
    email: "filiale.bo@umbra.it",
    website: "www.umbra.it",
    regione: "emilia romagna"
  },
  {
    nome: "ASTIDENTAL: Bologna",
    indirizzo: "Via G. Parini, 13 - 40069 Zola Predosa (BO)",
    telefono: "051.758904",
    email: "bologna@astidental.com",
    website: "www.bquadro.it",
    regione: "emilia romagna"
  },
  {
    nome: "ASTIDENTAL: Piacenza",
    indirizzo: "Via Cornegliana, 71 - 29100 Piacenza (PC)",
    telefono: "0523.593241",
    email: "piacenza@astidental.com",
    website: "www.bquadro.it",
    regione: "emilia romagna"
  },
  {
    nome: "Grossi Dental Trade s.r.l.",
    indirizzo: "Via Vittorio Emanuele Orlando, 30/A 43126 Parma",
    telefono: "0521.942233",
    cellulare: "338.7182684",
    email: "info@grossidentaltrade.it",
    regione: "emilia romagna"
  },

  // FRIULI VENEZIA GIULIA
  {
    nome: "ALMACOLLE 2000 s.r.l.",
    telefono: "0432.44076",
    fax: "0432.547082",
    email: "info@almacolle2000.it",
    website: "www.vsdentalgroup.it",
    regione: "friuli venezia giulia"
  },
  {
    nome: "GRANCARA ORTODONZIA E IMPLANTOLOGIA",
    telefono: "0444.357228",
    fax: "0444.357228",
    email: "infograncara@gmail.com",
    regione: "friuli venezia giulia"
  },
  {
    nome: "UMBRA s.p.a. (sede Perugia)",
    telefono: "075.506901",
    fax: "075.5019861",
    email: "infoline@umbra.it",
    website: "www.umbra.it",
    regione: "friuli venezia giulia"
  },
  {
    nome: "ASTIDENTAL: Pordenone",
    indirizzo: "Via Interporto Centro Ingrosso, 45 Settore A2 n. 22/23 - 70125 Bari",
    telefono: "0434.513211",
    email: "info@athenadental.eu",
    website: "www.bquadro.it",
    regione: "friuli venezia giulia"
  },

  // LAZIO
  {
    nome: "BLU DENTAL GROUP S.R.L.",
    telefono: "06.53271791",
    fax: "06.53271791",
    email: "info@bludentalgroup.it",
    regione: "lazio"
  },
  {
    nome: "BURZACCHI s.r.l.",
    telefono: "06.4441534",
    fax: "06.4959327",
    email: "info@burzacchi.it",
    regione: "lazio"
  },
  {
    nome: "CAPUTO SALVATORE",
    telefono: "06.76963558",
    cellulare: "388.0779922",
    email: "caputo1943@gmail.com",
    regione: "lazio"
  },
  {
    nome: "2R DENTAL S.R.L.",
    telefono: "06.88385819",
    email: "2rdentalsrl@gmail.com",
    regione: "lazio"
  },
  {
    nome: "ROMADENT 2 C",
    telefono: "06.5576993",
    fax: "06.5561644",
    email: "info@romadent2c.it",
    website: "www.romadent2c.it",
    regione: "lazio"
  },
  {
    nome: "TERRITO s.r.l.",
    telefono: "06.21807620",
    fax: "06.2596163",
    email: "info@territo.it",
    website: "www.territo.it",
    regione: "lazio"
  },
  {
    nome: "UMBRA s.p.a.",
    telefono: "06.8277464",
    fax: "06.86802291",
    email: "filiale.rm@umbra.it",
    website: "www.umbra.it",
    regione: "lazio"
  },
  {
    nome: "ASTIDENTAL: Roma",
    indirizzo: "Via Corigliano Calabro, 55 - 00178 Roma",
    telefono: "06.44202189",
    email: "roma@astidental.com",
    website: "www.bquadro.it",
    regione: "lazio"
  },
  {
    nome: "ORISMED srls",
    telefono: "0761.1791347",
    email: "info@orismed.it",
    regione: "lazio"
  },
  {
    nome: "VISADENT s.r.l.",
    indirizzo: "Via Pantanaccio, 118 04100 Latina",
    telefono: "0773.241741",
    cellulare: "393.9846136",
    email: "visadentsrl@alice.it",
    regione: "lazio"
  },

  // LIGURIA
  {
    nome: "UMBRA s.p.a.",
    telefono: "010.542170",
    fax: "010.5962127",
    email: "filiale.ge@umbra.it",
    website: "www.umbra.it",
    regione: "liguria"
  },
  {
    nome: "ASTIDENTAL: Genova",
    indirizzo: "Via Donghi, 68 LM Rosso - 16132 Genova",
    telefono: "010.511549",
    email: "genova@astidental.com",
    website: "www.bquadro.it",
    regione: "liguria"
  },

  // LOMBARDIA
  {
    nome: "UMBRA s.p.a.",
    telefono: "02.8436410",
    fax: "02.89540950",
    email: "filiale.mi@umbra.it",
    website: "www.umbra.it",
    regione: "lombardia"
  },
  {
    nome: "ALBERTI FORNITURE DENTALI S.R.L.",
    telefono: "030.3532856",
    email: "clienti@albertifordent.it",
    website: "www.albertifordent.it",
    regione: "lombardia"
  },
  {
    nome: "SMILE S.R.L.",
    telefono: "0331.641616",
    fax: "0331.642623",
    email: "info@smilefornituredentali.it",
    website: "www.smilefornituredentali.it",
    regione: "lombardia"
  },
  {
    nome: "ASTIDENTAL: Brescia",
    indirizzo: "Via San Zeno, 145 25124 Brescia (BS)",
    telefono: "030.3534498",
    email: "brescia@astidental.com",
    website: "www.bquadro.it",
    regione: "lombardia"
  },
  {
    nome: "ASTIDENTAL: Como",
    indirizzo: "Via Mariano Tentorio, 8 22100 Como",
    telefono: "031.507971",
    email: "como@astidental.com",
    website: "www.bquadro.it",
    regione: "lombardia"
  },
  {
    nome: "ASTIDENTAL: Pavia",
    indirizzo: "Via Marconi, 1 27100 Pavia",
    telefono: "0382.571826",
    email: "pavia@astidental.com",
    website: "www.bquadro.it",
    regione: "lombardia"
  },
  {
    nome: "S.M. DENTAL s.r.l.",
    indirizzo: "Via Guffanti, 28 22070 Bulgarograsso (CO)",
    telefono: "031.890851",
    cellulare: "320.6999807",
    email: "info@sm-dental.it",
    regione: "lombardia"
  },

  // ...continua dopo Lombardia...

// MARCHE
{
  nome: "DENTALGREEN",
  telefono: "0721.405153",
  fax: "0721.405249",
  numeroVerde: "800 551060",
  email: "dentalgreen@dentalgreen.it",
  website: "www.dentalgreen.it",
  regione: "marche"
},
{
  nome: "ODONTO SERVICE S.R.L.S.",
  telefono: "338.8243111 - 335.6111851",
  email: "info@odontoservicesrls.com",
  regione: "marche"
},
{
  nome: "MEDICAL SERVICE",
  telefono: "0735.588307",
  fax: "0735.579928",
  regione: "marche"
},
{
  nome: "UMBRA s.p.a.",
  telefono: "071.7451653 071.7497116",
  fax: "071.94551",
  email: "filiale.an@umbra.it",
  website: "www.umbra.it",
  regione: "marche"
},

// MOLISE
{
  nome: "UMBRA s.p.a. (sede Perugia)",
  telefono: "075.506901",
  fax: "075.5019861",
  email: "infoline@umbra.it",
  website: "www.umbra.it",
  regione: "molise"
},

// PIEMONTE
{
  nome: "UMBRA s.p.a.",
  telefono: "011.3249209",
  fax: "011.3276835",
  email: "filiale.to@lumbra.it",
  website: "www.umbra.it",
  regione: "piemonte"
},
{
  nome: "ASTIDENTAL: Asti",
  indirizzo: "Via Del Lavoro, 9 - 14100 Asti (AT)",
  telefono: "0141.492311",
  email: "bquadro@astidental.com",
  website: "www.bquadro.it",
  regione: "piemonte"
},
{
  nome: "ASTIDENTAL: Torino",
  indirizzo: "Via San Rocchetto, 18 - 10143 Torino (TO)",
  telefono: "011.4379345",
  email: "torino@astidental.com",
  website: "www.bquadro.it",
  regione: "piemonte"
},
{
  nome: "ASTIDENTAL: Cuneo",
  indirizzo: "Via Momigliano, 7 - 12100 Cuneo",
  telefono: "0171.344054",
  email: "cuneo@astidental.com",
  website: "www.bquadro.it",
  regione: "piemonte"
},
{
  nome: "ASTIDENTAL: Novara",
  indirizzo: "Via Damina, 4c - 28100 Novara",
  telefono: "0321.624097",
  email: "novara@astidental.com",
  website: "www.bquadro.it",
  regione: "piemonte"
},

// PUGLIA
{
  nome: "ESADENTAL s.r.l.",
  telefono: "0832.318687",
  fax: "0832.318696",
  email: "info@esadental.it",
  website: "www.esadental.it",
  regione: "puglia"
},
{
  nome: "UMBRA s.p.a. (sede Perugia)",
  telefono: "075.506901",
  fax: "075.5019861",
  email: "infoline@umbra.it",
  website: "www.umbra.it",
  regione: "puglia"
},
{
  nome: "ASTIDENTAL: Bari",
  indirizzo: "Prolungamento via O. Tupputi, 26 - 70125 Bari",
  telefono: "080.5482683",
  email: "bari@astidental.com",
  website: "www.bquadro.it",
  regione: "puglia"
},

// SARDEGNA
{
  nome: "UMBRA s.p.a.",
  telefono: "079.3764050",
  fax: "079.3764058",
  email: "filiale.ss@umbra.it",
  website: "www.umbra.it",
  regione: "sardegna"
},
{
  nome: "ASTIDENTAL: Sassari",
  indirizzo: "Via Carlo Felice, 45D - 07100 Sassari (SS)",
  telefono: "079.272108",
  email: "sassari@astidental.com",
  website: "www.bquadro.it",
  regione: "sardegna"
},

// SICILIA
{
  nome: "L.O.R.T. SERVICE s.r.l.",
  telefono: "095.505335",
  fax: "095.505335",
  email: "lortservice@tin.it",
  regione: "sicilia"
},
{
  nome: "UMBRA s.p.a. (sede Perugia)",
  telefono: "075.506901",
  fax: "075.5019861",
  email: "infoline@umbra.it",
  website: "www.umbra.it",
  regione: "sicilia"
},
{
  nome: "ASTIDENTAL: Catania",
  indirizzo: "Via Leucatia, 9 - 95125 Catania (CT)",
  telefono: "095.221369",
  email: "catania@astidental.com",
  website: "www.bquadro.it",
  regione: "sicilia"
},

// TOSCANA
{
  nome: "UMBRA s.p.a.",
  telefono: "0574.570966",
  fax: "0574.570966",
  email: "infoline@umbra.it",
  website: "www.umbra.it",
  regione: "toscana"
},
{
  nome: "ASTIDENTAL: Lucca",
  indirizzo: "Fraz. San Concordio Via Savonarola, 384/A - 55100 Lucca",
  telefono: "0583.316935",
  email: "lucca@astidental.com",
  website: "www.bquadro.it",
  regione: "toscana"
},

// TRENTINO ALTO ADIGE
{
  nome: "UMBRA s.p.a.",
  telefono: "0471.977214",
  fax: "0471.981273",
  email: "filiale.bz@umbra.it",
  website: "www.umbra.it",
  regione: "trentino alto adige"
},

// UMBRIA
{
  nome: "UMBRA s.p.a.",
  telefono: "075.506901",
  fax: "075.5019861",
  email: "infoline@umbra.it",
  website: "www.umbra.it",
  regione: "umbria"
},
{
  nome: "MEDICAL UMBRIA",
  telefono: "075.5054356",
  fax: "075.5156200",
  regione: "umbria"
},

// VALLE D'AOSTA
{
  nome: "UMBRA s.p.a. (sede Perugia)",
  telefono: "075.506901",
  fax: "075.5019861",
  email: "infoline@umbra.it",
  website: "www.umbra.it",
  regione: "valle d'aosta"
},

// VENETO
{
  nome: "GRANCARA ORTODONZIA E IMPLANTOLOGIA",
  telefono: "0444.357228",
  fax: "0444.357228",
  email: "infograncara@gmail.com",
  regione: "veneto"
},
{
  nome: "OXY DENTAL s.r.l.",
  telefono: "0422.841241",
  fax: "0422.842310",
  email: "info@oxydental.it",
  website: "www.vsdentalgroup.it",
  regione: "veneto"
},
{
  nome: "UMBRA s.p.a.",
  telefono: "041.5030788",
  fax: "041.5038224",
  email: "filiale.ve@umbra.it",
  website: "www.umbra.it",
  regione: "veneto"
},
{
  nome: "V.S. DENTAL s.r.l.",
  telefono: "045.564999",
  fax: "045.568709",
  email: "info@vsdental.it",
  website: "www.vsdentalgroup.it",
  regione: "veneto"
},
{
  nome: "D.F. DENTAL FORNITURE DI PAVAN MAURIZIO",
  telefono: "0457.502091",
  website: "http://fornituredentalipavan.it",
  email: "pavan.maurizio@yahoo.it",
  regione: "veneto"
},
{
  nome: "ASTIDENTAL: Verona",
  indirizzo: "Via Friuli, 5 - 37060 Lugagnano di Sona (VR)",
  telefono: "800.642777",
  website: "www.bquadro.it",
  regione: "veneto"
}
];

const regions: string[] = [];

DistributoriImplantologia.map((distributore) => {

regions.push(distributore.regione);
  
});

const uniqueRegions = new Set(regions);

return (
    <div className="container">
      <h1 className="blue font-bold py-3">Rete di distribuzione Italia Implantologia</h1>
      <p>Tutti i Depositi Dentali italiani sono in grado di fornire entro 48 ore l’intera gamma dei nostri prodotti di Ortodonzia e Materiali Rigenerativi.
        Per i prodotti di Implantologia consultare la mappa dei distributori. <br />
        Il reparto Vendite Leone è sempre a disposizione per soddisfare qualsiasi vostra ulteriore domanda, assistenza e urgenza.
        </p>
      <div className="rete-vendita-implantologia py-4 flex">
        <ul className="text-lg w-1/2">
        <h4 className="blue pb-3 font-bold">Rete vendita Implantologia</h4>
          {ReteVenditeImplantologia.map((venditore, index) => (
            <li className="py-1" key={index}>
              <strong>{venditore.ruolo}</strong>
              {venditore.nome && <> - {venditore.nome}</>}
              <br />
              {venditore.telefono && (
                <>
                  <span><i className="fa-solid blue fa-phone-volume"></i> {venditore.telefono}</span>
                  <br />
                </>
              )}
              {venditore.cellulare && (
                <>
                  <span><i className="fa-solid blue fa-phone-volume"></i> {venditore.cellulare}</span>
                  <br />
                </>
              )}
            
              {venditore.email && (
                <>
                  <span>
                    <i className="fa-solid blue fa-envelope"></i> <a className="underline" href={`mailto:${venditore.email}`}>{venditore.email}</a>
                  </span>
                </>
              )}
            </li>
          ))}
        </ul>
        <div className="regioni w-1/2">
        <form className="max-w-sm pb-3">
          <label htmlFor="countries" className="block mb-3 font-bold blue text-gray-900 dark:text-white">
            <h3>Distributori prodotti implantologia</h3>
          </label>
          <select defaultValue={'DEFAULT'} onChange={handleRegion} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value={'DEFAULT'} disabled>Scegli una regione</option>
           {Array.from(uniqueRegions).map((regione) => (
             <option key={regione} value={regione}>
               {regione.charAt(0).toUpperCase() + regione.slice(1)}
             </option>
           ))}
          </select>
        </form>
       {DistributoriImplantologia
            .filter((distributore) => distributore.regione === selectedRegion)
            .map((distributore, idx) => (
                <div key={idx}>
                <strong>{distributore.nome}</strong>
                {distributore.indirizzo && <> - {distributore.indirizzo}</>}
                <br />
                <i className="fa-solid blue fa-phone-volume"></i> {distributore.telefono}
                {distributore.cellulare && <> <br /> <i className="fa-solid blue fa-phone"></i> {distributore.cellulare}</>}
              
                {distributore.email && (
                    <>
                    <br />
                    <i className="fa-solid blue fa-envelope"></i> <a className="underline" href={`mailto:${distributore.email}`}>{distributore.email}</a>
                    </>
                )}
                {distributore.website && (
                    <>
                    <br />
                    <i className="blue fa-solid fa-globe"></i> <a className="underline" href={`https://${distributore.website}`} target="_blank" rel="noopener noreferrer">{distributore.website}</a>
                    </>
                )}
                <hr className="my-2" />
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Implantologia;