import { getDictionary } from "@/app/[lang]/dictionaries";
import productLabels from "./Product-label-symbols-1.png";
import Image from "next/image";

async function QualityInfo({params}: {params: Promise<{lang: 'it' | 'en'}>}) {

    const {lang} = await params;
    const dict = getDictionary(lang);

    return (
    <div className="container">
        <h1 className="blue py-3 font-bold">{(await dict).qualita["info-prodotti"].title}</h1>
        <p>
            {(await dict).qualita["info-prodotti"].text}
      </p>
        <Image className="py-4" src={productLabels} alt="product-labels"></Image>
        <p className="italic">
        {(await dict).qualita["info-prodotti"].under_image}
      </p>
    </div>
  );
}

export default QualityInfo;