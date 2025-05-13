import { getDictionary } from "../../dictionaries";
import QualitySheetsClient from "./QualitySheetsClient";

interface SafetySheet {
  id: string;
  codiceScheda: string;
  codiceRev: string;
  data: string;
  nomeScheda: string;
  url: string;
  lingua: string;
  prodotti: string[];
}

export default async function QualitySheets({ params }: { params: { lang: 'it' | 'en' } }) {
  const { lang } = params;
  const dict = await getDictionary(lang);

  const res = await fetch(
    `https://php.leone.it/api/GetSchedeSicurezza.php?lingua=${lang.toUpperCase()}`,
    {
      headers: {
        Authorization:
          "Bearer fraQ-Wk3P_HA27zd_g5JZ_4bH0-Vj1GqCgtx-e6K24_X5Lu-FYpm0p8-bNrc_nce",
      },
      cache: "no-store"
    }
  );
  const data = await res.json();

  return (
    <QualitySheetsClient initialData={data.ReturnedObject as SafetySheet[]} lang={lang} filterLabel={dict.qualita.filter_results} noElFounds={dict.qualita.no_elements_found}/>
  );
}