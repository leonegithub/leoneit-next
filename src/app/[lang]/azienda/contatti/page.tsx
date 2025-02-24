"use client";

import Button from "@/components/button";
import LoadingButton from "@/components/LoadingButton";
import { ToastContainer, toast } from "react-toastify";
import React, { useState, FormEvent } from "react";

const Contatti = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  /*  const [responseMessage, setResponseMessage] = useState<string>(""); */

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    /* setResponseMessage(""); */

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

      /*  setResponseMessage(
        data.ReturnedObject || data.ReturnedError.join("<br/>")
        ); */
      if (data.ExitCode === 0) {
        console.log(data.ReturnedObject);
        toast.success(data.ReturnedObject);
      } else if (data.exitCode === 1) {
        console.log(data.ReturnedError.join("<br/>"));
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
      <div className="container mx:auto">
        <h1 className="py-4 blue">Contattaci</h1>
        <div className="row py-4 ">
          <div className="col-sm-6 col-12">
            <h2 className="blue font-bold w-400 pb-4">Leone S.p.A. </h2>
          </div>
          <div className="col-sm-6 col-12">
            <div className="upper">
              <ul>
                <li>
                  Via P. a Quaracchi, 50 - 50019 Sesto Fiorentino, Firenze{" "}
                  <br />
                  P. IVA 01686960483 Uff. Reg. Imprese Firenze n. 01686960483
                </li>

                <li> (805) 487-9860</li>
                <a href="mailto:info@leone.it">
                  <li className="underline">info@leone.com</li>
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
                  Nome
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
                  Cognome
                </label>
              </div>
            </div>
          </div>

          {/* Email su una riga intera */}
          <div className="row">
            <div className="col-12">
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
                  E-mail
                </label>
              </div>
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
                <label htmlFor="messaggio">Scrivi un messaggio...</label>
              </div>
              {isLoading ? (
                <LoadingButton />
              ) : (
                <Button type="submit" testo="Invia" />
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

export default Contatti;
