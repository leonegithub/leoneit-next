"use client"

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import DownloadsLayout from "@/components/DownloadsLayout";
import Spinner from "@/components/spinner";
import '../style.css'

interface Journal {
  id: string;
  url: string;
  thumb: string;
  nome: string;
  posizione: number;
  id_tipologia: string;
  id_sezione: string;
}

export default function Section() {
  const params = useParams();
  const sezione = params.sezione as string;
  const lang = params.lang as string;

  const [result, setResult] = useState<Journal[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://php.leone.it/api/GetDownload.php?lingua=${lang?.toUpperCase() || "IT"}&tipologia=bollettino&sezione=${sezione}`;

  const fetchOptions = {
    headers: {
      Authorization: "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
    },
  };

  useEffect(() => {
    fetch(url, fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        setResult(data.ReturnedObject || []);
        setIsLoading(false);
      });
  }, [url]);

  

  return (
    <DownloadsLayout title={`Bollettini ${sezione}`}>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="list gap-5 my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
          {result.map((bulletin, index) => (
            <div
              className="download-magazines flex flex-col"
              id={bulletin.id}
              key={index}
            >
              <Link
                className="download-link"
                href={`https://php.leone.it${bulletin.url}`}
                target="_blank"
              >
                <Image
                  src={`https://php.leone.it${bulletin.thumb}`}
                  alt={bulletin.nome}
                  width={400}
                  height={400}
                />
              </Link>
              <Link href={`https://php.leone.it${bulletin.url}`} target="_blank">
                <h5 className="text-lg p-2">{bulletin.nome}</h5>
              </Link>
            </div>
          ))}
        </div>
      )}
    </DownloadsLayout>
  );
}