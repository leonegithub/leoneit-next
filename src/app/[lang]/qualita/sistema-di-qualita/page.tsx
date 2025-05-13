import { getDictionary } from "../../dictionaries";
import QualitySheetsClient from "@/components/QualitySheets";
import './style.css'

interface PageProps {
  params: { lang: "it" | "en" };
}

export default async function QualitySheetsPage({ params }: PageProps) {
  const lang = params.lang;
  const dict = await getDictionary(lang);

  // Fetch dati da API (puoi usare fetch qui!)
  const res = await fetch(
    `https://php.leone.it/api/GetSchedeSicurezza.php?lingua=${lang.toUpperCase()}`,
    {
      headers: {
        Authorization:
          "Bearer fraQ-Wk3P_HA27zd_g5JZ_4bH0-Vj1GqCgtx-e6K24_X5Lu-FYpm0p8-bNrc_nce",
      },
      cache: "no-store", // se vuoi sempre dati freschi
    }
  );
  const data = await res.json();

  return (
    <QualitySheetsClient
      dict={dict}
      lang={lang}
      initialSheets={data.ReturnedObject}
    />
  );
}