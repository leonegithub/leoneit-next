"use client";

import { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";

type Relatore = {
  id: string | number;
  appellativo: string;
  nome: string;
  cognome: string;
  // altri campi se servono
};

export default function Relatori() {
  const [data, setData] = useState<Relatore[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchOptions = {
    headers: {
      Authorization:
        "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
    },
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    setIsLoading(true);
  };

  const resetFilter = () => {
    setSelectedValue("");
    setIsLoading(true);
  };

  const baseUrl = "https://php.leone.it/api/GetRelatori.php";

  useEffect(() => {
    const url = selectedValue ? `${baseUrl}?sezione=${selectedValue}` : baseUrl;
    fetch(url, fetchOptions)
      .then((response) => response.json())
      .then((data) => {
        setData(data.ReturnedObject as Relatore[]);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [selectedValue]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Relatori</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-1/4 w-full">
          <div className="bg-white rounded-lg border p-6">
            <label htmlFor="sezione" className="block mb-4 font-semibold text-blue-900 text-lg">
              Filtra per sezione
            </label>
            <select
              id="sezione"
              value={selectedValue}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-3 mb-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            >
              <option value="">Tutte le sezioni</option>
              <option value="ortodonzia">Ortodonzia</option>
              <option value="implantologia">Implantologia</option>
            </select>
            <button
              type="button"
              className="text-sm text-blue-700 hover:text-blue-900 underline transition-colors"
              onClick={resetFilter}
            >
              Resetta filtri
            </button>
          </div>
        </aside>

        {/* Lista relatori */}
        <section className="lg:w-3/4 w-full">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-2 border-blue-200 border-t-blue-600" />
            </div>
          ) : data.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.map((relatore) => (
                <Link
                  key={relatore.id}
                  href={`relatori/${relatore.id}`}
                  className="group block"
                >
                  <div className="bg-white rounded-lg  border p-6 text-center h-full">
                    <Image
                      src="https://fastly.picsum.photos/id/581/200/200.jpg?hmac=l2PTQyeWhW42zIrR020S5LHZ2yrX63cSOgZqpeWM0BA"
                      alt={`${relatore.nome} ${relatore.cognome}`}
                      width={120}
                      height={120}
                      className="rounded-full object-cover mx-auto mb-4 border-2 border-gray-100 group-hover:border-blue-300 transition-colors"
                    />
                    <h3 className="font-semibold text-blue-900 text-lg group-hover:text-blue-700 transition-colors">
                      {relatore.appellativo} {relatore.nome} {relatore.cognome}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center bg-white rounded-lg  border p-12">
              <h4 className="text-gray-600 text-lg">Nessun relatore trovato</h4>
              <p className="text-gray-500 text-sm mt-2">Prova a modificare i filtri di ricerca</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}