"use server"

import Link from "next/link";
import { getDictionary } from "../../dictionaries";
import "./style.css";
import IstruzioniImplantologia from "./Istruzioni-Implantologia.jpg";
import IstruzioniOrtodonzia from "./Istruzioni-Ortodonzia.jpg";
import Image from "next/image";

async function Istruzioni({params}: {params: Promise<{lang: "it" | "en"}>}) {
    const {lang} = await params;
    const dict = getDictionary(lang);


  const info = lang === "it" ? (await dict).qualita.istruzioni.info : null;
  const url = "https://leone.it/servizi/qualita";

  const istruzioni = [
    {
      section: "Ortodonzia",
      img: IstruzioniImplantologia,
      links: [
        {
          title: "Leocryl",
          url: "https://leone.it/servizi/qualita/leocryl.pdf",
        },
        {
          title: "Istruzioni per attivare l’espansore rapido del palato",
          url: "https://leone.it/servizi/qualita/Scheda-Attivazione-Espansore-Rapido.pdf",
        },
        {
          title: "Istruzioni per la sterilizzazione di strumenti",
          url: "https://leone.it/servizi/qualita/Istruzioni_per_la_sterilizzazione_di_strumenti-rev1.pdf",
        },
      ],
    },
    {
      section: "Implantologia",
      img: IstruzioniOrtodonzia,
      links: [
        {
          title: "Sistema implantare Leone",
          url: "https://leone.it/servizi/qualita/ISTR049D_12-18.pdf",
        },
        {
          title: "Monoimpianti Leone per Overdenture O - Ring",
          url: "https://leone.it/servizi/qualita/ISTR049C_08-15.pdf",
        },
        {
          title: "Cricchetto dinamometro protesico 20 Ncm",
          url: "https://leone.it/servizi/qualita/ISTR%20081_03-23.pdf",
        },
        {
          title: `Linee guida per la pulizia, la disinfezione e la sterilizzazione degli strumenti riutilizzabili XCN Leone`,
          url: "https://leone.it/servizi/download/Implantologia-pulizia-disinfezione-sterilizzazione.pdf",
        },
        {
          title: "Procedura di rimozione di monconi Leone",
          url: "https://leone.it/servizi/download/ISTR074_08-15.pdf",
        },
        {
          title: "Mini impianti ortodontici autoforanti Leone",
          url: url + "/ISTR063_01-24.pdf"
        },
        {
          title: "BMX Mini Expander",
          url: url + "/ISTR082_01-24.pdf"
        },
        {
          title: "Espansore / Disgiuntore per TADs",
          url: url + "/ISTR085_01-24.pdf"
        }, 
        {
          title: "TADs Temporary Anchorage Device",
          url: url + "/ISTR086_01-24.pdf"
        },
        {
          title: "Strumenti chirurgici riutilizzabili per uso dentale",
          url: url + "/ISTR092_12-23.pdf"
        }
      ],
    },
  ];

  return (
    <div className="jumbo">
      <div className="container">
        <h1 className="blue font-bold pb-3">{(await dict).qualita.istruzioni.title}</h1>
        <h2 className="blue">{(await dict).qualita.istruzioni.subtitle}</h2>
        <p className="py-3">{(await dict).qualita.istruzioni.text}</p>
        <Link
        target="_blank"
        className="underline"
          style={{ fontSize: 20 }}
          href={
            "https://leone.it/servizi/qualita/Info%20catalogo%20e%20sito%20web.pdf"
          }
        >
          {info}
        </Link>
      </div>

      <div className="istruzioni">
        <div className="container container-istruzioni">
          {istruzioni.map((istruzione, index) => (
            <div
              key={istruzione.section}
              className={`row istruzioni-sezione ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="col-md-6 left">
                <div className="elenco">
                  <h1 className="blue pb-2">{istruzione.section}</h1>
                  <ul>
                    {istruzione.links.map((link) => (
                      <li key={link.url}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-6 right">
                <Image
                  src={istruzione.img}
                  alt={istruzione.section}
                  width={undefined}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Istruzioni;