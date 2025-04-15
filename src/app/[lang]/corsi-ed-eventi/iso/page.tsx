"use client";

import { Carousel } from "react-bootstrap";
import Image from "next/image";
import iso_logo from "./Cropped_Image.png";
import felix from "./felix-lam-J7fxkhtOqt0-unsplash.jpg";
import house from "./lorem-picsum-1280x720.webp";
import aula from "./Aula.jpg";
import "./style.css";

function CarouselFadeExample() {
  return (
    <Carousel className="carosello" fade>
      <Carousel.Item>
        <Image src={felix} alt="felix" />
        <Carousel.Caption>
          {/*   <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={house} alt="house" />
        <Carousel.Caption>
          {/*  <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default function Iso() {
  return (
    <div className="iso-info">
      <div className="img-container">
        <Image src={aula} alt="iso-logo" />
      </div>
      <div className="container">
        <div className="sezione-uno">
          <h2 className="ads">ISO - Istituto Studi Odontoiatrici</h2>
          <p>
            L’Istituto Studi Odontoiatrici, divisione scientifica e centro
            formazione della società Leone, opera su tutto il territorio
            nazionale con lo scopo di promuovere e divulgare l’ortodonzia e
            l’implantologia a livelli sempre più elevati. La sede di Firenze,
            nata nel 1982, è strutturata su due piani con una superficie
            complessiva di 1.000 mq. ed in quasi 40 anni di attività ha ospitato
            circa 50.000 corsisti. L’ISO offre un programma completo di corsi
            residenziali e online, per il medico-chirurgo, l’odontoiatra, lo
            specialista in odontostomatologia ed ortognatodonzia. Sono inoltre
            organizzati corsi dedicati agli odontotecnici e all’insegnamento
            della merceologia ortodontica e implantologica per gli operatori
            commerciali italiani ed esteri.
          </p>
        </div>
        <div className="sezione-due">
          <h2 className="ads">Struttura all&apos;avanguardia</h2>
          <p>
            Il primo piano, oltre ad accogliere i locali riservati ai servizi di
            ricevimento e di segreteria, è completamente dedicato alle aule
            d’insegnamento: - studio dentistico attrezzato con 3 riuniti per
            dimostrazioni live di interventi ortodontici e implantologici su
            pazienti - annessa una sala da 40 posti per i medici che partecipano
            visivamente agli interventi - telecamere endorali ed extraorali
            collegate in rete rendono tutti gli interventi visibili in tempo
            reale nelle varie aule - laboratorio odontotecnico completamente
            attrezzato per 18 posti - aula polivalente per 80 corsisti dotata
            recentemente anche di ambiente Active Classroom, ovvero un sistema
            integrato di lavagna interattiva multimediale Active Board e
            risponditori Active Expressions utili alla partecipazione attiva
            durante il corso Al secondo piano: - Aula Magna “Marco Pozzi” che
            accoglie 250 congressisti. La sala è dotata di tutti i dispositivi
            multimediali. Gli strumenti didattici di cui l’Istituto Studi
            Odontoiatrici è dotato fanno sì che le lezioni, svolte da relatori
            di indiscussa esperienza, offrano ai partecipanti la possibilità di
            apprezzarne appieno la validità, traendone il massimo profitto.
          </p>
        </div>
        <div className="iso-contatti row d-flex">
          <div className="col-12 col-md-6 left">
            <div>
              <h4 className="ads">Contatti</h4>
              <ul>
                <li>
                  Telefono: <a href="tel:+39055304458">055.304458</a>
                </li>
                <li>
                  Email: <a href="mailto:">iso@leone.it</a>
                </li>
                <li>WhatsApp: 3453815578</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 right">
            <Image className="iso-logo" src={iso_logo} alt="pesce" />
          </div>
        </div>
        <CarouselFadeExample />
      </div>
    </div>
  );
}
