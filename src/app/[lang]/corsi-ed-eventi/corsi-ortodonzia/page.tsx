"use client";

import { useState, useEffect } from "react";
import CourseCard, { Corso } from "@/components/CourseCard";
import "./style.css";
import Spinner from "@/components/spinner";

export default function CorsiOrtodonzia() {
  const [data, setData] = useState<Corso[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://php.leone.it/api/GetElencoCorsi.php?sezione=ortodonzia", {
      headers: {
        Authorization: "Bearer LbbYPIuVNtiJEOiZe5KhaPW1kMk0iTiG11RI6ATg5JM",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.ReturnedObject);
        setIsLoading(false);
        console.log(data.ReturnedObject);
      });
    return () => {};
  }, []);

  if (isLoading)
    return (
      <div className="ortodonzia-corsi">
        <div className="jumbotron"></div>
        <div className="container">
          <div className="elenco-corsi row">
            <Spinner />
          </div>
        </div>
      </div>
    );

  if (!data)
    return (
      <div className="ortodonzia-corsi">
        <div className="jumbotron"></div>
        <div className="container">
          <div className="elenco-corsi row">
            <h4>Nessun corso di ortodonzia trovato.</h4>
          </div>
        </div>
      </div>
    );

  return (
    <div className="ortodonzia-corsi">
      <div className="jumbotron"></div>
      <div className="container loaded">
        <div className="elenco-corsi row g-4">
          {data.map((corso) => (
            <div className="col-md-6 col-12" key={corso.id}>
              <CourseCard corso={corso} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
