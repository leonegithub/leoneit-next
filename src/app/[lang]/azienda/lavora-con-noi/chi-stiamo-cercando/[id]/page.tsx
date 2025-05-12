"use client";

import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Button from "@/components/button";

interface Position {
  id: string;
  titolo: string;
  descrizione: string;
}

interface ApiResponse {
  ReturnedObject: Position[];
}

export default function PositionDetail() {
  const params = useParams();
  const id = params.id as string;
  const router = useRouter();

  const [position, setPosition] = useState<Position | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleApplication = (id: string) => {
    router.push(`/it/azienda/lavora-con-noi/invia-candidatura?id=${id}`);
  };

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://php.leone.it/api/GetPosizioni.php?lingua=IT&stato=aperto",
            {
              headers: {
                Authorization:
                  "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
              },
            }
          );
          const data: ApiResponse = await response.json();
          console.log(data.ReturnedObject);
          if (data && data.ReturnedObject) {
            const position: Position | undefined = data.ReturnedObject.find(
              (item) => item.id.toString() === id
            );
            setPosition(position || null);
          } else {
            console.log("Errore: la struttura dei dati non è corretta");
          }
        } catch (error) {
          console.log("Errore durante la chiamata API: ", error);
          if (error instanceof Error) {
            setError(error.message);
          } else {
            setError("Errore sconosciuto");
          }
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <p className="text-red-500">Errore: {error}</p>
      ) : (
        <div>
          <h1 className="text-2xl font-bold">{position?.titolo}</h1>
          <div className="prose">{parse(position?.descrizione || "")}</div>
          <span onClick={() => position && handleApplication(position.id)}>
            <Button testo="Candidati" />
          </span>
        </div>
      )}
    </div>
  );
}
