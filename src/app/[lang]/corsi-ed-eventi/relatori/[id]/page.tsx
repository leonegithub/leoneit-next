"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Relatore {
  id: string | number;
  appellativo: string;
  nome: string;
  cognome: string;
  curriculum?: string;
  thumb?: string;
  email?: string;
  // aggiungi altri campi se servono
}

export default function RelatoreDetail({}: {
  params: Promise<{ lang: "en" | "it" }>;
}) {
  const { id } = useParams();
  const [relatore, setRelatore] = useState<Relatore | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchOptions = {
    headers: {
      Authorization:
        "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
    },
  };

  useEffect(() => {
    if (id) {
      fetch(`https://php.leone.it/api/GetRelatori.php?id=${id}`, fetchOptions)
        .then((response) => response.json())
        .then((data) => {
          setRelatore(data.ReturnedObject[0]);
          setIsLoading(false);
          console.log(data.ReturnedObject[0].id);
        })
        .catch((error) => {
          console.error("Error fetching relatore details:", error);
          setIsLoading(false);
        });
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="container jumbo">
        <div
          className="spinner-grow"
          style={{
            width: "5rem",
            height: "5rem",
            color: "var(--colore-primario)",
          }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (!relatore) {
    return (
      <div className="container jumbo">
        <h3>Dettagli del relatore non trovati.</h3>
      </div>
    );
  }

  return (
    <div className="container jumbo">
      <h1 className="ads">
        {relatore.appellativo}&nbsp;
        {relatore.nome}&nbsp;
        {relatore.cognome}
      </h1>
      <p>{relatore.curriculum}</p>
      <img src={relatore.thumb} alt="" />
      <p>{relatore.email}</p>
    </div>
  );
}
