"use client";

import React, { useState, useEffect } from "react";
import Spinner from "@/components/spinner";
import Link from "next/link";

type Position = {
  id: number;
  titolo: string;
};

export default function chiStiamoCercando() {
  const apiUrl =
    "https://php.leone.it/api/GetPosizioni.php?lingua=IT&stato=aperto";
  const [, setError] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization:
              "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
          },
        });
        const positions = await response.json();
        setPositions(positions.ReturnedObject);
        console.log(positions);
      } catch (error) {
        setError(error instanceof Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="pt-2 pb-4 font-bold blue">Posizioni aperte</h1>
      {loading ? (
        <Spinner />
      ) : positions.length === 0 ? (
        <p>Nessuna posizione aperta al momento.</p>
      ) : (
        <div className="flex flex-wrap">
          {positions.map((item: Position) => (
            <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-2" key={item.id}>
              <Link
                href={`/it/azienda/lavora-con-noi/chi-stiamo-cercando/${item.id}`}
              >
                <ul className="list-disc list-inside">
                  <li>{item.titolo}</li>
                </ul>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
