"use client";

import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Button from "@/components/button";

interface WorldwideDictionary {
  distributors: {
    ortodonzia: {
      selection: string;
      tipology: string;
      section: string;
      filters: string;
      "find-something": string;
      distributors: string;
      "results-found": string;
      "not-found": string;
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
  const [isLoading, setIsLoading] = useState(true);
  const [continent, setContinent] = useState("europa");

  const resetFilter = () => setContinent("europa");

  const fetchOptions = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
    },
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://php.leone.it/api/GetDistributori.php?continente=${continent}`,
      fetchOptions
    )
      .then((res) => res.json())
      .then((data) => {
        data.ExitCode === 0 ? setData(data.ReturnedObject) : setData([]);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [continent]);

  // Funzione di traduzione locale
  const t = (key: string) => {
    // Esempio: t("ortodonzia.selection") => dict.ortodonzia.selection
    return key.split(".").reduce((o, i) => (o ? (o as any)[i] : ""), dict);
  };

  return (
    <div className="container-fluid jumbo">
      <div className="row">
        {/* Sidebar */}
        <div
          className="col-md-2 ps-5  py-3"
          style={{ position: "fixed", top: "100px", bottom: "0", left: "0" }}
        >
          <div className="border-bottom pb-3">
            <h4>{dict.distributors.ortodonzia.selection}</h4>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="continentSelect">
              {dict.distributors.ortodonzia.tipology}
            </label>
            <select
              id="continentSelect"
              className="form-select"
              value={continent}
              onChange={(e) => setContinent(e.target.value)}
            >
              <option value="" disabled>
                Seleziona una voce
              </option>
              <option value="europa">Europa</option>
              <option value="asia">Asia</option>
              <option value="oceania">Oceania</option>
              <option value="america">America</option>
            </select>
          </div>
          <div onClick={resetFilter}>
          <Button testo={dict.distributors.ortodonzia.filters} />
          </div>
         {/*  <Button className="btn btn-primary" onClick={resetFilter}>
            {dict.distributors.ortodonzia.filters}
          </button> */}
        </div>

        {/* Contenuto principale */}
        <div className="col-md-10 offset-md-2 p-3">
          <h1 className="ads">{dict.distributors.ortodonzia.distributors}</h1>

          {isLoading ? (
            <div className="text-center">
              <div
                className="spinner-border"
                style={{ color: "var(--colore-primario)" }}
              ></div>
            </div>
          ) : (
            <div className="row">
              {data.length > 0 ? (
                data.map((item) => (
                  <div className="col-12 col-lg-4 g-3" key={item.id.toString()}>
                    <h4 id="orto-nome">{item.nome}</h4>
                    <h5>{item.indirizzo}</h5>
                    <h6>{item.email}</h6>
                    <h6>{item.website}</h6>
                  </div>
                ))
              ) : (
                <h3>{dict.distributors.ortodonzia["not-found"]}</h3>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}