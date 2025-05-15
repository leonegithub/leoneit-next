"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

 interface DownloadsDictionary {
  servizi: {
    downloads: {
      no_records_found: string;
      loading: string;
      catalogues: string;
      depliants: string;
    };
  };
}

// Interfaccia per i dati delle riviste
interface Journal {
  id: string;
  url: string;
  thumb: string;
  nome: string;
  posizione: number;
  id_tipologia: string;
}

interface DownloadsClientProps {
  lang: string;
  dict: DownloadsDictionary;
}


function DownloadsClient({lang, dict}: DownloadsClientProps) {

  const [result, setResult] = useState<Journal[]>([]);
  const [isLoading, setLoading] = useState(true);

  const url =
    `https://php.leone.it/api/GetDownload.php?lingua=${lang.toUpperCase()}`;
  const fetchOptions = {
    headers: {
      Authorization:
        "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
    },
  };

  useEffect(() => {
    fetch(url, fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        setResult(data.ReturnedObject);
        console.log("i dati sono" + data + "e la chiamata fatta è " + url);
        setLoading(false);
      });
  }, []);

  if (!result)
    return (
      <div className="container mx:auto">
        <h1>{dict.servizi.downloads.no_records_found}</h1>
      </div>
    );

  result.sort((a, b) => a.posizione - b.posizione);

  const filteringSection = (_id_tipologia: string) => {
    return result.filter((element) => element.id_tipologia === _id_tipologia);
  };

  const displayingSection = (sectionName: Journal[]) => {
    return sectionName.map((element, index) => (
      <div
        className="download-magazines flex flex-col"
        id={element.id}
        key={index}
      >
        <Link
          className="download-link"
          href={`https://php.leone.it${element.url}`}
          target="_blank"
        >
          <Image
            src={`https://php.leone.it${element.thumb}`}
            alt={element.nome}
            width={400}
            height={400}
          />
        </Link>
        <Link href={`https://php.leone.it${element.url}`} target="_blank">
          <h5 className="text-lg p-2">{element.nome}</h5>
        </Link>
      </div>
    ));
  };

  const depliantSection = filteringSection("depliant");
  /* const bollettinoSection = filteringSection("bollettino"); */
  const catalogoSection = filteringSection("catalogo");

  return (
    <div className="downloads">
      <div className="container">
        <h1 className="blue py-5 text-5xl font-bold">Downloads</h1>
        {isLoading ? (
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">{dict.servizi.downloads.loading}</span>
          </div>
        ) : (
          <>
            <div className="section">
              <h1 className=" blue my-4">{dict.servizi.downloads.catalogues}</h1>
              <div className="list gap-5 my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
                {displayingSection(catalogoSection)}
              </div>
            </div>
            {depliantSection.length > 0 ? 
            <div className="section my-4">
              <h1 className="blue my-4 mt-5">{dict.servizi.downloads.depliants}</h1>
              <div className="list gap-5 my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
                {displayingSection(depliantSection)}
              </div>
            </div> : null
            }
            {/* <div className="section">
              <h1 className=" blue mb-4 mt-5">Depliants</h1>
              <div className="list gap-5 my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
                {displayingSection(depliantSection)}
              </div>
            </div>
            <div className="section">
              <h1 className=" blue my-4 mt-5">Bulletins</h1>
              <div className="list gap-5 my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
                {displayingSection(bollettinoSection)}
              </div>
            </div> */}
          </>
        )}
      </div>
    </div>
  );
};

export default DownloadsClient;