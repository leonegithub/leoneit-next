"use client";

import { useEffect, useState } from "react";
import "../style.css";


interface WorldwideDictionary {
  distributors: {
    ortodonzia: {
      selection: string;
      tipology: string;
      section: string;
      filters: string;
      find_something: string;
      distributors: string;
      results_found: string;
      not_found: string
    };
  };
}

interface WorldwideClientProps {
  dict: WorldwideDictionary;
  lang: string;
}

interface ReturnedObjectProps {
  id: number
  continente: string;
  paese: string;
  nome: string;
  indirizzo: string;
  email: string;
  website: string
}

export default function WorldwideClient({ dict }: WorldwideClientProps) {
  const [data, setData] = useState<ReturnedObjectProps[]>([]);
  const [continent, setContinent] = useState<string>("");

  const fetchOptions = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
    },
  };


    useEffect(() => {
      fetch(
        `https://php.leone.it/api/GetDistributori.php?continente=${continent}`,
        fetchOptions
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.ExitCode === 0) {
            setData(data.ReturnedObject);
          } else {
            setData([]);
          }
        })
    }, [continent]);


 

  return (
   <div className="container">
  <h1 className="blue font-bold pt-3">{dict.distributors.ortodonzia.distributors}</h1>
  <div className="rete-vendita-implantologia flex">
 
    <div className="regioni w-1/2">
      <form>
        <label htmlFor="continentSelect" className="block mb-3 font-bold blue">
          <h3 className="pt-3 pt-3 pb-2">
          {dict.distributors.ortodonzia.tipology}
          </h3>
        </label>
        <select
          id="continentSelect"
          className="bg-gray-50 my-3 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
          value={continent}
          onChange={(e) => setContinent(e.target.value)}
        >
          <option value="" disabled>{dict.distributors.ortodonzia.selection}</option>
          <option value="europa">Europe</option>
          <option value="asia">Asia</option>
          <option value="oceania">Oceania</option>
          <option value="america">America</option>
        </select>
      </form>
     {data.map((distributore, index) => (
  <div className="my-3" key={index}>
    <strong>{distributore.nome}</strong>
    {distributore.indirizzo && <> - {distributore.indirizzo}</>}
    <br />
    <i className="fa-solid blue fa-phone-volume"></i> {distributore.email}
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
    <hr className="my-3" />
  </div>
))}
    </div>
  </div>
</div>
  );
}