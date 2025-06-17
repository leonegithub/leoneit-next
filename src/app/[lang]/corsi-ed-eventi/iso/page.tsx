"use client";

import { Carousel } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import fortini from './fortini 02.jpg';
import tipa from './DSCF2650.jpg'
import sala from './sala 16mar06.jpg'
import labo from './laboratorio.jpg'
import isoLogo from './Cropped_Image.png'

import "./style.css";
import ChiSiamoClient from "../../azienda/chi-siamo/ChiSiamoClient";

function CarouselFadeExample() {
  return (
   <Carousel fade data-bs-theme="dark">
        <Carousel.Item>
          <Link
            href="https://leafexpander.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative">
              {/* desktop */}
              <Image src={sala} alt="mad" className="w-full hidden lg:block" />
              {/* tablet */}
             {/*  <Image
                src={LeafTablet}
                alt="software"
                className="w-full hidden md:block lg:hidden"
              /> */}
              {/* mobile */}
             {/*  <Image
                src={LeafMobile}
                alt="software-mobile"
                className="w-full block md:hidden"
              /> */}

            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link target="_blank" href="products/sleep-apnea">
            <div className="relative">
              {/* desktop */}
              <Image src={fortini} alt="mad" className="w-full hidden lg:block" />
              {/* tablet */}
             {/*  <Image
                src={MadTablet}
                alt="software"
                className="w-full hidden md:block lg:hidden"
              /> */}
              {/* mobile */}
             {/*  <Image
                src={MadMobile}
                alt="software-mobile"
                className="w-full block md:hidden"
              /> */}
              {/* <div className="mad-slide absolute left-10 lg:left-28 top-[25%] md:top-1/2  transform -translate-y-1/2">
                <h3 className="mad-slide text-xl md:text-4xl lg:text-4xl">
                  <strong>Sleep Apnea</strong>
                </h3>
                <h2 className="font-bold text-5xl md:text-6xl lg:text-9xl">
                  M.A.D.
                </h2>
                <h3 className="text-xl md:text-5xl lg:text-6xl">
                  Anti snoring devices
                </h3>
              </div> */}
            </div>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link
            href="https://www.3dleone.it/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative">
              {/* desktop */}
              <Image
                src={labo}
                alt="software"
                className="w-full hidden lg:block"
              />
              {/* tablet */}
             {/*  <Image
                src={SoftwareTablet}
                alt="software"
                className="w-full hidden md:block lg:hidden"
              /> */}
              {/* mobile */}
              {/* <Image
                src={SoftwareMobile}
                alt="software-mobile"
                className="w-full block md:hidden"
              /> */}
             {/*  <div className="absolute flex justify-center lg:justify-normal w-full lg:left-28 top-1/2 transform -translate-y-1/2 text-white">
                <h2 className="font-bold xl:pb-8 text-4xl md:text-4xl lg:text-4xl">
                  Software
                  <br />
                  <span className="font-bold text-4xl md:text-6xl lg:text-8xl">
                    3DLeone Designer
                  </span>
                </h2>
              </div> */}
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link
            href="https://www.3dleone.it/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative">
              {/* desktop */}
              <Image
                src={tipa}
                alt="software"
                className="w-full hidden lg:block"
              />
              {/* tablet */}
             {/*  <Image
                src={SoftwareTablet}
                alt="software"
                className="w-full hidden md:block lg:hidden"
              /> */}
              {/* mobile */}
              {/* <Image
                src={SoftwareMobile}
                alt="software-mobile"
                className="w-full block md:hidden"
              /> */}
             {/*  <div className="absolute flex justify-center lg:justify-normal w-full lg:left-28 top-1/2 transform -translate-y-1/2 text-white">
                <h2 className="font-bold xl:pb-8 text-4xl md:text-4xl lg:text-4xl">
                  Software
                  <br />
                  <span className="font-bold text-4xl md:text-6xl lg:text-8xl">
                    3DLeone Designer
                  </span>
                </h2>
              </div> */}
            </div>
          </Link>
        </Carousel.Item>
      </Carousel>
  );
}

export default function Iso() {
  return (
    <div className="iso-info">
      <div className="img-container carosello">
        <CarouselFadeExample />
      </div>
      <div className="container">
        <div className="sezione-uno">
          <h1 className="blue font-bold mb-2">ISO - Istituto Studi Odontoiatrici</h1>
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
          <h1 className="blue font-bold mt-4 mb-2">Struttura all&apos;avanguardia</h1>
          <p className="mb-5">
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
              <h4 className="blue font-bold">Contatti</h4>
              <ul>
                <li>
                  Telefono: <a className="underline" href="tel:+39055304458">055.304458</a>
                </li>
                <li>
                  Email: <a className="underline" href="mailto:">iso@leone.it</a>
                </li>
                <li>WhatsApp: 3453815578</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 right">
            <Image className="iso-logo" src={isoLogo} alt="pesce" />
          </div>
          <div className="gallery mt-4">

          <ChiSiamoClient/>
          </div>
        </div>
      </div>
    </div>
  );
}
