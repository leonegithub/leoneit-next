"use client";

import { FormEvent, useState } from "react";
import LoadingButton from "@/components/LoadingButton";
import SelectPaesi from "@/components/SelectPaesi";
import parse from 'html-react-parser'

interface NewslistDictionary {
  servizi: {
    newslist: {
      title: string;
      personal_data: string;
      receive: string;
      name: string;
      surname: string;
      address: string;
      zip_code: string;
      language: string
      city: string;
      country: string;
      phone: string;
      email: string;
      occupation: string;
      personal_data_processing: string;
      personal_data_text: string;
      read_full_information: string;
      i_consent: string;
      i_do_not_consent: string;
      subscribe_label: string;
      subscribe_text: string;
      send: string;
      products: object;
    };
  };
}

interface NewslistClientProps {
  lang: string;
  dict: NewslistDictionary;
}

interface ResponseData {
  ExitCode: number;
  ReturnedObject: string;
  ReturnedError: string[];
}

function NewslistClient({ lang, dict }: NewslistClientProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<ResponseData | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData(event.currentTarget);

      formData.append("progetto", "leone");

      const response = await fetch("https://php.leone.it/api/SendLead.php", {
        method: "POST",
        body: formData,
        headers: {
          Authorization:
            "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
        },
      });

      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`)
      }

      if (!response.ok) {
        throw new Error("Errore nell'inviare i dati");
      }
      console.log(data);
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container  justify-center">
      <h1 className="blue font-bold py-5">{dict.servizi.newslist.title}</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
        <h3 className="block mb-3 blue font-bold text-gray-900 dark:text-white">
            {dict.servizi.newslist.receive}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
           {Object.entries(dict.servizi.newslist.products).map(([key, label]) => (
            <div key={key}>
                <input type="checkbox" id={key} name={key} className="mr-2" />
                <label htmlFor={key}>{label}</label>
            </div>
           ))}
        </div>
        </div>
            <h3 className="block py-4 blue font-bold text-gray-900 dark:text-white">
            {dict.servizi.newslist.personal_data}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
     <div className="mb-3">
      <label htmlFor="nome" className="block mb-2 font-medium text-gray-900 dark:text-white">
        {dict.servizi.newslist.name}
      </label>
      <input
        type="text"
        id="nome"
        name="nome"
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  <div className="mb-3">
      <label htmlFor="cognome" className="block mb-2 font-medium text-gray-900 dark:text-white">
        {dict.servizi.newslist.surname}
      </label>
      <input
        type="text"
        id="cognome"
        name="cognome"
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
<div className="mb-3">
      <label htmlFor="email" className="block mb-2 font-medium text-gray-900 dark:text-white">
        {dict.servizi.newslist.email}
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
 <div className="mb-3">
      <label htmlFor="telefono" className="block mb-2 font-medium text-gray-900 dark:text-white">
        {dict.servizi.newslist.phone}
      </label>
      <input
        type="number"
        id="telefono"
        name="telefono"
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
<div className="mb-3">
  <label htmlFor="lingua" className="block mb-2 font-medium text-gray-900 dark:text-white">
    {dict.servizi.newslist.language || "Lingua"}
  </label>
  <select
    id="lingua"
    name="lingua"
    required
    defaultValue={lang.toUpperCase()}
    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option value="IT">Italiano</option>
    <option value="EN">English</option>
    <option value="ES">Español</option>
  </select>
</div>
<div className="mb-3">
  <label htmlFor="paese" className="block mb-2 font-medium text-gray-900 dark:text-white">
    {dict.servizi.newslist.country}
  </label>
  <SelectPaesi defaultValue="IT" name="paese" required/>
</div>


        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="font-bold blue block mb-2 text-gray-900 dark:text-white">
              {dict.servizi.newslist.personal_data_processing}
            </label>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {dict.servizi.newslist.personal_data_text}{" "}
              <a href="#" className="text-blue-600 dark:text-blue-400">
                {dict.servizi.newslist.read_full_information}
              </a>
            </p>
            <div className="mb-2">
              <input
                required={true}
                type="radio"
                id="flg_privacy_1"
                name="flg_privacy"
                value="1"
                className="mr-2"
              />
              <label
                htmlFor="flg_privacy_1"
                className="text-gray-900 dark:text-white"
              >
                {dict.servizi.newslist.i_consent}
              </label>
            </div>
            <div className="mb-2">
              <input
                required={true}
                type="radio"
                id="flg_privacy_0"
                name="flg_privacy"
                value="0"
                className="mr-2"
              />
              <label
                htmlFor="flg_privacy_0"
                className="text-gray-900 dark:text-white"
              >
               {dict.servizi.newslist.i_do_not_consent}
              </label>
            </div>
          </div>

          <div>
            <label className="font-bold blue block mb-2 text-gray-900 dark:text-white">
              {dict.servizi.newslist.subscribe_label}
            </label>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {dict.servizi.newslist.subscribe_text}
            </p>
            <div className="mb-2">
              <input
                required={true}
                type="radio"
                id="flg_comunicazioni_commerciali_1"
                name="flg_comunicazioni_commerciali"
                value="1"
                className="mr-2"
              />
              <label
                htmlFor="flg_comunicazioni_commerciali_1"
                className="text-gray-900 dark:text-white"
              >
                  {dict.servizi.newslist.i_consent}
              </label>
            </div>
            <div className="mb-2">
              <input
                required
                type="radio"
                id="flg_comunicazioni_commerciali_0"
                name="flg_comunicazioni_commerciali"
                value="0"
                className="mr-2"
              />
              <label
                htmlFor="flg_comunicazioni_commerciali_0"
                className="text-gray-900 dark:text-white"
              >
                {dict.servizi.newslist.i_do_not_consent}
              </label>
            </div>
          </div>
        </div>

        {isLoading ? (
          <LoadingButton />
        ) : (
          <button
            disabled={isLoading}
            type="submit"
            className="text-white my-5 bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {dict.servizi.newslist.send}
          </button>
        )}
      </form>
      
      {data && data.ExitCode === 0 && (
        <div id="response-message" style={{ color: "green" }}>
          {data.ReturnedObject}
        </div>
      )}
      {data && data.ExitCode === 1 && (
        <div id="response-message" style={{ color: "red" }}>
          {parse(data.ReturnedError.join("<br> "))}
        </div>
      )}
    </div>
  );
}

export default NewslistClient;