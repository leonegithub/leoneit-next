"use client";

import Button from "@/components/button";
import LoadingButton from "@/components/LoadingButton";
import { ToastContainer, toast } from "react-toastify";
import React, { useState, FormEvent } from "react";
import "./style.css";
import Image from "next/image";
import ContattiImg from './Contatti.png'

const offices = [
  "Vendite Italia",
  "Vendite Estero",
  "ISO Istituto Studi Odontoiatrici",
  "Ufficio Tecnico",
  "Servizi Marketing",
  "Ufficio Personale"
];

interface ContattiDictionary {
    contatti: {
        title: string;
        nome: string;
        cognome: string;
        email: string;
        messaggio: string;
        bottone: string;
    }
}

function ContattiClient({ dict }: {  lang: string, dict: ContattiDictionary }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData(event.currentTarget);
      formData.append("reparto", "servizi-marketing");

      const response = await fetch(
        "https://php.leone.it/api/SendContatto.php",
        {
          headers: {
            Authorization:
              "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
          },
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.ExitCode === 0) {
        toast.success(data.ReturnedObject);
      } else if (data.exitCode === 1) {
        toast.error(data.ReturnedError.join("<br/>"));
      }
      setError(error);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
        <div className="img-container">
          <Image src={ContattiImg} alt="contatti" />
        </div>
      <div className="contatti container mx:auto">
        <h1 className="pt-5 blue">{dict.contatti.title}</h1>
        <div className="row py-4 ">
          <div className="col-sm-6 col-12">
            <h2 className="blue sigla font-bold w-400 pb-4">Leone S.p.A. </h2>
          </div>
          <div className="col-sm-6 col-12">
            <div className="upper">
              <ul>
                <li>
                  Via P. a Quaracchi
                </li>
                <li>
                  50019 Sesto Fiorentino – Firenze
                </li>
                <li>Telefono: +39.055.30441</li>
                <a href="mailto:info@leone.it">
                  <li className="underline">info@leone.it</li>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit}>
          {/* Nome e Cognome sulla stessa riga */}
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="form-control"
                  placeholder="Name"
                  required
                />
                <label htmlFor="nome" className="form-label">
                  {dict.contatti.nome}
                </label>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="cognome"
                  name="cognome"
                  className="form-control"
                  placeholder="Surname"
                  required
                />
                <label htmlFor="cognome" className="form-label">
                 {dict.contatti.cognome}
                </label>
              </div>
            </div>
          </div>

          {/* Email su due righe */}
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="email"
                  required
                />
                <label htmlFor="email" className="form-label">
                  {dict.contatti.email}
                </label>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <select className="form-select mb-3 py-3" aria-label="Default select example">
                <option defaultValue="Generale">Generale</option>
                {offices.map((office, index) => 
                  <option key={index} value={office}>{office}</option>
                )}
              </select>
            </div>
          </div>

          {/* Messaggio su una riga intera */}
          <div className="row">
            <div className="col-12">
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  placeholder="Write a message"
                  name="messaggio"
                  id="messaggio"
                  required
                ></textarea>
                <label htmlFor="messaggio">{dict.contatti.messaggio}</label>
              </div>
              {isLoading ? (
                <LoadingButton />
              ) : (
                <Button type="submit" testo={dict.contatti.bottone} />
              )}
            </div>
          </div>
          <ToastContainer />
        </form>
        <div className="map-container"></div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.62175010102!2d11.180708977016673!3d43.8014612710955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a576d3b55e60f%3A0x25ef5fd66986b58!2sLeone%20Ortodonzia%20e%20Implantologia!5e0!3m2!1sit!2sit!4v1740407695738!5m2!1sit!2sit"
        width={"100%"}
        height={600}
        style={{ border: 0, marginTop: 100 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </>
  );
};

export default ContattiClient;