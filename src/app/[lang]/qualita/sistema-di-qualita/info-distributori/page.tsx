"use server";

import { getDictionary } from "@/app/[lang]/dictionaries"

async function InfoDistributori({params}: {params: Promise<{ lang: "it" | "en"} >}) {
    const {lang} = await params;
    const dict = await getDictionary(lang);

    return (
        <div className="container jumbo">
            <h1 className="blue font-bold pb-3">{dict.qualita.info_distributori.title}</h1>
            <h4 className="pb-2 red">{dict.qualita.info_distributori.subtitle}</h4>
            <p>{dict.qualita.info_distributori.text}</p>
        </div>
    )
}

export default InfoDistributori;