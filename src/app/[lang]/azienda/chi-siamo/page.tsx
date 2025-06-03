import { getDictionary } from "../../dictionaries";
import Image from "next/image";
import fotoSito from "./Foto Sito 20246.png";
import ChiSiamoClient from "./ChiSiamoClient";
import "./style.css";

const ChiSiamo = async ({
  params,
}: {
  params: Promise<{ lang: "it" | "en" }>;
}) => {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);

  const descriptions = [
    {
      title: dict.chi_siamo.description_1.title,
      text: dict.chi_siamo.description_1.text,
    },
    {
      title: dict.chi_siamo.description_2.title,
      text: dict.chi_siamo.description_2.text,
    },
    {
      title: dict.chi_siamo.description_3.title,
      text: dict.chi_siamo.description_3.text,
    },
    {
      title: dict.chi_siamo.description_4.title,
      text: dict.chi_siamo.description_4.text,
    },
  ];

  return (
    <div>
      <div className="img-container">
        <Image className="leone-logo" src={fotoSito} alt="leone-grande" />
      </div>

      <div className="chi-siamo container pt-4">
        {descriptions.map((description, index) => (
          <Description
            key={index}
            title={description.title}
            text={description.text}
          />
        ))}
        {/* Passa le immagini come prop */}
        <ChiSiamoClient />
      </div>
    </div>
  );
};

const Description = ({ title, text }: { title: string; text: string }) => {
  const paragraphs = text.split(" || ");

  return (
    <div className="description">
      <h1 className="font-bold blue py-3">{title}</h1>
      {paragraphs.map((paragraph, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}
    </div>
  );
};

export default ChiSiamo;