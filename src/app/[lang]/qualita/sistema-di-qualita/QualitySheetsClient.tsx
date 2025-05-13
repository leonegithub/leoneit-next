"use client";

import { useState } from "react";
import SearchBar from "@/components/cart-components/Searchbar";
import Link from "next/link";
import parse from "html-react-parser";
import "./style.css";

interface SafetySheet {
  codiceScheda: string;
  codiceRev: string;
  data: string;
  nomeScheda: string;
  url: string;
}

export default function QualitySheetsClient({
  initialData,
  filterLabel,
  noElFounds
}: {
  initialData: SafetySheet[];
  lang: string;
  filterLabel: string;
  noElFounds: string
}) {
  const [filteredValue, setFilteredValue] = useState("");
  const [result] = useState<SafetySheet[]>(initialData);

  // funzione per filtrare
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredValue(e.target.value);
  };

  // ordina per nome scheda
  const sortedResult = result.sort((a, b) => {
    const nameA = a.codiceScheda.toUpperCase();
    const nameB = b.codiceScheda.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  // filtro effettivo dei risultati
  const isIncluded = (element: SafetySheet) => {
    return (
      element.codiceRev.toLowerCase().includes(filteredValue.toLowerCase()) ||
      element.data.toLowerCase().includes(filteredValue.toLowerCase()) ||
      element.nomeScheda.toLowerCase().includes(filteredValue.toLowerCase())
    );
  };

  const filteredResults = sortedResult.filter(isIncluded);

  return (
    <div className="flex h-100">
      <aside className="w-64 p-4">
        <h1 className="text-4xl mb-4">{filterLabel}</h1>
        <SearchBar value={filteredValue} onChange={handleChange}  />
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
            <h1>{noElFounds}</h1>
          )}
        </ul>
      </div>
    </div>
  );
}