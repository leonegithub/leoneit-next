import { getDictionary } from "../../dictionaries";
import Link from "next/link";
import Image from "next/image";
import leoneStabilimento90 from "./Leone90_stabilimento-19.jpg";
import "./style.css";

async function Qualita({params}: {params: Promise<{ lang: 'it' | 'en' }>}) {
    const {lang} = await params;
    const dict = getDictionary(lang);

      const links = [
    {
      text: (await dict).qualita.sistema_di_qualita.link3_title,
      url: (await dict).qualita.sistema_di_qualita.link3_url,
    },
    {
      text: (await dict).qualita.sistema_di_qualita.link4_title,
      url: (await dict).qualita.sistema_di_qualita.link4_url,
    },
    {
      text: (await dict).qualita.sistema_di_qualita.link5_title,
      url: (await dict).qualita.sistema_di_qualita.link5_url,
    },
    {
      text: (await dict).qualita.sistema_di_qualita.link6_title,
      url: (await dict).qualita.sistema_di_qualita.link6_url,
    },
  ];
    
    return (
    <>
    <div className="sistema-di-qualita">
        <div className="img-container">
            <Image src={leoneStabilimento90} alt="leone-stabilimento"></Image>
            </div>
            <div className="container jumbo">
                <h1 className="blue font-bold py-4">{(await dict).qualita.sistema_di_qualita.title}</h1>
                <h2 className="blue pb-3">{(await dict).qualita.sistema_di_qualita.subtitle}</h2>
                <p>{(await dict).qualita.sistema_di_qualita.text}</p>
                <ul className="list-disc py-3 list-inside underline">
                    {links.map((link, index) => (
                        <li key={index} >
                            <Link target="_blank" href={link.url}>{link.text}</Link>
                            </li>
                        ))}
                        </ul>
                        </div>
                        </div>
                        </>
                        );
                    }

export default Qualita;