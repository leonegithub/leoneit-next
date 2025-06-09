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
    <div className="container mx-auto px-4">
      <h1 className="blue font-bold py-6">Relatori</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="md:w-1/4 w-full bg-white rounded-xl">
          <form>
            <label htmlFor="sezione" className="block mb-4 font-semibold text-blue-900 text-lg">
              Seleziona sezione
            </label>
            <select
              id="sezione"
              value={selectedValue}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 mb-4 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Tutte le sezioni</option>
              <option value="ortodonzia">Ortodonzia</option>
              <option value="implantologia">Implantologia</option>
            </select>
            <button
              type="button"
              className="underline text-blue-700 hover:text-blue-900 transition"
              onClick={resetFilter}
            >
              Resetta filtri
            </button>
          </form>
        </aside>
        {/* Lista relatori */}
        <section className="md:w-3/4 w-full">
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500" />
            </div>
          ) : data.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.map((relatore) => (
                <div key={relatore.id} className="bg-white rounded-xl transition-shadow p-6 flex flex-col items-center text-center h-full">
                    <Link
                      key={relatore.id}
                      href={`relatori/${relatore.id}`}
                      className="group flex flex-column items-center cursor-pointer"
                    >
                  <Image
                      src="https://fastly.picsum.photos/id/581/200/200.jpg?hmac=l2PTQyeWhW42zIrR020S5LHZ2yrX63cSOgZqpeWM0BA"
                      alt={`${relatore.nome} ${relatore.cognome}`}
                      width={250}
                      height={250}
                      className="rounded-full object-cover mb-4 border-4 border-blue-100 group-hover:border-blue-400 transition
                      "
                    />
                    <div className="font-semibold text-blue-900 text-lg mb-1 group-hover:text-blue-700 transition">
                      {relatore.appellativo} {relatore.nome} {relatore.cognome}
                    </div>
                </Link>
                  </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-10">
              <h4>Nessun relatore trovato.</h4>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}