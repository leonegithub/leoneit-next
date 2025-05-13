"use client";
import { useState } from "react";
import SearchBar from "@/components/cart-components/Searchbar";
import Link from "next/link";
import parse from "html-react-parser";

interface QualitySheet {
  codiceScheda: string;
  codiceRev: string;
  data: string;
  nomeScheda: string;
  url: string;
}

interface QualitySheetsClientProps {
  dict: any; // Se hai un tipo per il dizionario, mettilo qui!
  lang: string;
  initialSheets: QualitySheet[];
}

export default function QualitySheetsClient({ dict, lang, initialSheets }: QualitySheetsClientProps) {
  const [filteredValue, setFilteredValue] = useState("");

  // ordina e filtra
  const sortedResult = initialSheets.sort((a, b) =>
    a.codiceScheda.localeCompare(b.codiceScheda)
  );
  const filteredResults = sortedResult.filter((element) =>
    element.nomeScheda.toLowerCase().includes(filteredValue.toLowerCase())
  );

  return (
    <div className="flex h-100">
      <aside className="w-64 p-4">
        <h1 className="text-4xl mb-4">{dict.qualita.filter_results}</h1>
        <SearchBar value={filteredValue} onChange={e => setFilteredValue(e.target.value)} />
      </aside>
      <div className="safety-sheets container mx:auto">
        <ul>
          {filteredResults.length > 0 ? (
            filteredResults.map((element, index) => (
              <li className="list list-disc blue" key={index}>
                <Link href={element.url} target="_blank">
                  <span className="font-bold">{element.codiceRev}</span> &nbsp;
                  <span>{element.data}</span> &nbsp;
                  {parse(element.nomeScheda)}
                </Link>
              </li>
            ))
          ) : (
            <h1>{dict.qualita.no_elements_found}</h1>
          )}
        </ul>
      </div>
    </div>
  );
}