"use client";

import { useState, useEffect, ChangeEvent } from "react";
import Link from "next/link";
import { Card, Col, Row } from "react-bootstrap";
import "./style.css";

type Relatore = {
  id: string | number;
  appellativo: string;
  nome: string;
  cognome: string;
  // aggiungi altri campi se presenti nella risposta API
};

export default function Relatori() {
  const [data, setData] = useState<Relatore[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sezione, setSezione] = useState<string | null>(null);

  const resetFilter = () => {
    setSezione(null);
    setSelectedValue("");
  };

  const fetchOptions = {
    headers: {
      Authorization:
        "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
    },
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    setSezione(event.target.value);
  };

  const titleColor =
    sezione === "implantologia"
      ? "var(--colore-secondario)"
      : "var(--colore-primario)";

  const baseUrl = "https://php.leone.it/api/GetRelatori.php";

  useEffect(() => {
    const url = selectedValue ? `${baseUrl}?sezione=${selectedValue}` : baseUrl;

    fetch(url, fetchOptions)
      .then((response) => response.json())
      .then((data) => {
        setData(data.ReturnedObject as Relatore[]);
        setIsLoading(false);
        console.log(data.ReturnedObject);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, [selectedValue]);

  if (isLoading) {
    return (
      <div className="container jumbo">
        <div
          className="spinner-grow"
          style={{
            width: "6rem",
            height: "6rem",
            color: "var(--colore-primario)",
          }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container relatori">
        <div className="row">
          {/* Sidebar */}
          <div
            className="col-md-2 p-3 border-end "
            style={{ position: "fixed", top: "100px", bottom: "0", left: "0" }}
          >
            <div className="border-bottom pb-3">
              <h4>Seleziona Sezione</h4>
            </div>
            <select
              value={sezione ?? ""}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Seleziona una voce</option>
              <option value="ortodonzia">Ortodonzia</option>
              <option value="implantologia">Implantologia</option>
            </select>
            <button className="btn btn-link" onClick={resetFilter}>
              Resetta Filtri
            </button>
          </div>

          {/* Contenuto principale */}
          <div className="col-md-10 offset-md-1 p-3">
            <h1 className="ads" style={{ color: titleColor }}>
              Relatori {sezione}
            </h1>
            {data.length > 0 ? (
              <Row xs={1} md={2} lg={6} className="g-4">
                {data.map((relatore) => (
                  <Col key={relatore.id}>
                    <Link href={`relatori/${relatore.id}`}>
                      <Card>
                        <Card.Img
                          variant="top"
                          src="https://fastly.picsum.photos/id/581/200/200.jpg?hmac=l2PTQyeWhW42zIrR020S5LHZ2yrX63cSOgZqpeWM0BA"
                        />
                        <Card.Body>
                          <Card.Title>
                            <Link href={`relatori/${relatore.id}`}>
                              {relatore.appellativo} {relatore.nome}{" "}
                              {relatore.cognome}
                            </Link>
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            ) : (
              <h4>Nessun relatore trovato.</h4>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
