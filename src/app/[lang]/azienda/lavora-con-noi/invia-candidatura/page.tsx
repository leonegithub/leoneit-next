"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Button from "@/components/button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import parse from "html-react-parser";
import { useParams } from "next/navigation";
import LoadingButton from "@/components/LoadingButton";

const InviaCandidatura: React.FC = () => {
  const initialValues = {
    nome: "",
    cognome: "",
    nazionalita: "",
    data_nascita: "",
    codice_fiscale: "",
    categoria_protetta: 1,
    citta: "",
    indirizzo: "",
    provincia: "",
    cap: "",
    telefono: "",
    email: "",
    istr_secondaria: "",
    istr_secondaria_data: "",
    istr_superiore: "",
    istr_superiore_data: "",
    lingua_inglese: "",
    lingua_spagnolo: "",
    lingua_francese: "",
    lingua_tedesco: "",
    lingua_altra: "",
    info_certificazioni: "",
    info_gestionale: "",
    occ_attuale: "",
    occ_azienda: "",
    occ_qualifica: "",
    occ_contratto: "",
    occ_descrizione: "",
    asp_salario: "",
    acconsento: false,
    curriculum: null,
  };

  interface formValues {
    nome: string;
    cognome: string;
    nazionalita: string;
    data_nascita: string;
    codice_fiscale: string;
    categoria_protetta: number;
    citta: string;
    indirizzo: string;
    provincia: string;
    cap: string;
    telefono: string;
    email: string;
    istr_secondaria: string;
    istr_secondaria_data: string;
    istr_superiore: string;
    istr_superiore_data: string;
    lingua_inglese: string;
    lingua_spagnolo: string;
    lingua_francese: string;
    lingua_tedesco: string;
    lingua_altra: string;
    info_certificazioni: string;
    info_gestionale: string;
    occ_attuale: string;
    occ_azienda: string;
    occ_qualifica: string;
    occ_contratto: string;
    occ_descrizione: string;
    asp_salario: string;
    acconsento: boolean;
    curriculum: File | null;
  }

  const params = useParams();
  const id = params.id as string;

  const [formStatus] = useState<{
    global?: string;
    success?: string;
  } | null>(null);

  const options1 = {
    liceo: [
      { value: "diploma-liceo-classico", label: "Diploma di Liceo Classico" },
      {
        value: "diploma-liceo-scientifico",
        label: "Diploma di Liceo Scientifico",
      },
      {
        value: "diploma-liceo-scientifico-scienze-applicate",
        label: "Diploma di Liceo Scientifico - Opzione Scienze Applicate",
      },
      {
        value: "diploma-liceo-linguistico",
        label: "Diploma di Liceo Linguistico",
      },
      {
        value: "diploma-liceo-scienze-umane",
        label: "Diploma di Liceo delle Scienze Umane",
      },
      {
        value: "diploma-liceo-scienze-umane-economico-sociale",
        label: "Diploma di Liceo delle Scienze Umane opzione Economico-Sociale",
      },
      {
        value: "diploma-liceo-artistico-arti-figurative",
        label: "Diploma di Liceo Artistico - Arti Figurative",
      },
      {
        value: "diploma-liceo-artistico-architettura-ambiente",
        label: "Diploma di Liceo Artistico - Architettura e Ambiente",
      },
      {
        value: "diploma-liceo-artistico-audiovisivo-multimediale",
        label: "Diploma di Liceo Artistico - Audiovisivo e Multimediale",
      },
      {
        value: "diploma-liceo-artistico-design",
        label: "Diploma di Liceo Artistico - Design",
      },
      {
        value: "diploma-liceo-artistico-grafica",
        label: "Diploma di Liceo Artistico - Grafica",
      },
      {
        value: "diploma-liceo-artistico-scenografia",
        label: "Diploma di Liceo Artistico - Scenografia",
      },
      { value: "diploma-liceo-musicale", label: "Diploma di Liceo Musicale" },
      { value: "diploma-liceo-coreutico", label: "Diploma di Liceo Coreutico" },
    ],
    "istituto Tecnico": [
      {
        value:
          "diploma-istituto-tecnico-economico-amministrazione-finanza-marketing",
        label: "Amministrazione, Finanza e Marketing",
      },
      { value: "diploma-istituto-tecnico-economico-turismo", label: "Turismo" },
      {
        value:
          "diploma-istituto-tecnico-tecnologico-meccanica-meccatronica-energia",
        label: "Meccanica, Meccatronica ed Energia",
      },
      {
        value: "diploma-istituto-tecnico-tecnologico-trasporti-logistica",
        label: "Trasporti e Logistica",
      },
      {
        value:
          "diploma-istituto-tecnico-tecnologico-elettronica-elettrotecnica",
        label: "Elettronica ed Elettrotecnica",
      },
      {
        value:
          "diploma-istituto-tecnico-tecnologico-informatica-telecomunicazioni",
        label: "Informatica e Telecomunicazioni",
      },
      {
        value: "diploma-istituto-tecnico-tecnologico-grafica-comunicazione",
        label: "Grafica e Comunicazione",
      },
      {
        value:
          "diploma-istituto-tecnico-tecnologico-chimica-materiali-biotecnologie",
        label: "Chimica, Materiali e Biotecnologie",
      },
      {
        value: "diploma-istituto-tecnico-tecnologico-sistema-moda",
        label: "Sistema Moda",
      },
      {
        value:
          "diploma-istituto-tecnico-tecnologico-agraria-agroalimentare-agroindustria",
        label: "Agraria, Agroalimentare e Agroindustria",
      },
      {
        value:
          "diploma-istituto-tecnico-tecnologico-costruzioni-ambiente-territorio",
        label: "Costruzioni, Ambiente e Territorio",
      },
    ],
    "istituto Professionale": [
      {
        value:
          "diploma-istituto-professionale-servizi-agricoltura-sviluppo-rurale",
        label: "Servizi per l'Agricoltura e lo Sviluppo Rurale",
      },
      {
        value: "diploma-istituto-professionale-servizi-socio-sanitari",
        label: "Servizi Socio-Sanitari",
      },
      {
        value:
          "diploma-istituto-professionale-servizi-enogastronomia-ospitalita-alberghiera",
        label: "Servizi per l'Enogastronomia e l'Ospitalità Alberghiera",
      },
      {
        value: "diploma-istituto-professionale-servizi-commerciali",
        label: "Servizi Commerciali",
      },
      {
        value:
          "diploma-istituto-professionale-industria-artigianato-produzioni-industriali-artigianali",
        label: "Produzioni Industriali e Artigianali",
      },
      {
        value:
          "diploma-istituto-professionale-industria-artigianato-manutenzione-assistenza-tecnica",
        label: "Manutenzione e Assistenza Tecnica",
      },
    ],
  };

  const options2 = [
    { value: "laurea-triennale", label: "Diploma di Laurea Triennale" },
    { value: "laurea-magistrale", label: "Diploma di Laurea Magistrale" },
    {
      value: "diploma-di-specializzazione",
      label: "Diploma di Specializzazione",
    },
    {
      value: "master-i-livello",
      label: "Diploma di Master Universitario di I livello",
    },
    {
      value: "master-ii-livello",
      label: "Diploma di Master Universitario di II livello",
    },
    { value: "dottorato-di-ricerca", label: "Dottorato di Ricerca" },
  ];

  const options3 = [
    { value: "scolastico", label: "Scolastico" },
    { value: "buono", label: "Buono" },
    { value: "fluente", label: "Fluente" },
    { value: "madrelingua", label: "Madrelingua" },
  ];

  const options4 = [
    { value: "specialista", label: "Specialista" },
    { value: "utilizzatore", label: "Utilizzatore" },
    { value: "nessuno", label: "Nessuno" },
  ];

  const options5 = [
    { value: "occupato", label: "Occupato" },
    { value: "disoccupato", label: "Disoccupato" },
    { value: "studente", label: "Studente" },
  ];

  /* useEffect(() => {
    if (!isMounted) {
      const storedValues = localStorage.getItem("formData");
      if (storedValues) {
        setDefaultValues(JSON.parse(storedValues));
      }
      setIsMounted(true);
    }
  }, [isMounted]); */

  useEffect(() => {
    if (formStatus?.global) {
      toast.error(parse(formStatus.global));
    }
    if (formStatus?.success) {
      toast.success(
        "Grazie per aver inviato la tua candidatura! Riceverai un feedback al più presto."
      );
    }
  }, [formStatus]);

  const onSubmit = async (
    values: formValues,
    {
      setSubmitting,
      setStatus,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      setStatus: (status: { global?: string; success?: string }) => void;
    }
  ) => {
    const formData = new FormData();

    for (const [key, value] of Object.entries(values)) {
      if (value !== null && value !== undefined) {
        if (key === "acconsento") {
          formData.append(key, value ? "1" : "0");
        } else {
          formData.append(key, value as string | Blob);
        }
        console.log(`${key}: ${value}`);
      }
    }

    if (id) {
      formData.append("id_posizione_aperta", id);
      console.log(id);
    }

    // salva i valori nel local storage
    /* localStorage.setItem("formData", JSON.stringify(values)); */

    try {
      const response = await fetch(
        "https://php.leone.it/api/SendCandidature.php",
        {
          headers: {
            Authorization:
              "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
          },
          body: formData,
          method: "POST",
        }
      );

      const result = await response.json();
      if (result.ExitCode === 0) {
        setStatus({ global: "", success: result.ReturnedObject });
        console.log(result);
      } else {
        setStatus({ global: result.ReturnedError.join("<br/>") });
        console.log(result.ReturnedError);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({ global: "Submission failed. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container jumbo">
      <h1 className=" py-3 blue font-bold">Invia la tua candidatura</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <div className="dati-anagrafici">
              <h4 className="mb-3">Dati anagrafici</h4>
              <h6 className="mb-3" style={{ color: "gainsboro" }}>
                * Campi obbligatori
              </h6>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="nome" className="form-label">
                    Nome
                  </label>
                  <Field
                    type="text"
                    name="nome"
                    className="form-control"
                    required
                  />
                  <ErrorMessage
                    name="nome"
                    component="div"
                    className="text-danger mt-1"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="cognome" className="form-label">
                    Cognome
                  </label>
                  <Field
                    type="text"
                    name="cognome"
                    className="form-control"
                    required
                  />
                  <ErrorMessage
                    name="cognome"
                    component="div"
                    className="text-danger mt-1"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="nazionalita" className="form-label">
                    Nazionalità
                  </label>
                  <Field
                    type="text"
                    name="nazionalita"
                    className="form-control"
                    required
                  />
                  <ErrorMessage
                    name="nazionalita"
                    component="div"
                    className="text-danger mt-1"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="data_nascita" className="form-label">
                    Data di Nascita
                  </label>
                  <Field
                    type="date"
                    name="data_nascita"
                    className="form-control"
                    required
                  />
                  <ErrorMessage
                    name="data_nascita"
                    component="div"
                    className="text-danger mt-1"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="codice_fiscale" className="form-label">
                    Codice Fiscale
                  </label>
                  <Field
                    type="text"
                    name="codice_fiscale"
                    className="form-control"
                    required
                  />
                  <ErrorMessage
                    name="codice_fiscale"
                    component="div"
                    className="text-danger mt-1"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="categoria_protetta" className="form-label">
                    Categoria Protetta
                  </label>
                  <Field
                    as="select"
                    name="categoria_protetta"
                    className="form-control"
                    required
                  >
                    <option value={0}>No</option>
                    <option value={1}>Sì</option>
                  </Field>
                  <ErrorMessage
                    name="categoria_protetta"
                    component="div"
                    className="text-danger mt-1"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="citta" className="form-label">
                    Città
                  </label>
                  <Field
                    type="text"
                    name="citta"
                    className="form-control"
                    required
                  />
                  <ErrorMessage
                    name="citta"
                    component="div"
                    className="text-danger mt-1"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="indirizzo" className="form-label">
                    Indirizzo
                  </label>
                  <Field
                    type="text"
                    name="indirizzo"
                    className="form-control"
                    required
                  />
                  <ErrorMessage
                    name="indirizzo"
                    component="div"
                    className="text-danger mt-1"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="provincia" className="form-label">
                    Provincia
                  </label>
                  <Field
                    type="text"
                    name="provincia"
                    className="form-control"
                    required
                  />
                  <ErrorMessage
                    name="provincia"
                    component="div"
                    className="text-danger mt-1"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="cap" className="form-label">
                    CAP
                  </label>
                  <Field
                    type="text"
                    name="cap"
                    className="form-control"
                    required
                  />
                  <ErrorMessage
                    name="cap"
                    component="div"
                    className="text-danger mt-1"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="telefono" className="form-label">
                    Telefono
                  </label>
                  <Field
                    type="text"
                    name="telefono"
                    className="form-control"
                    required
                  />
                  <ErrorMessage
                    name="telefono"
                    component="div"
                    className="text-danger mt-1"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="form-control"
                    required
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger mt-1"
                  />
                </div>
              </div>
            </div>

            <div className="formazione mb-4">
              <h4 className="my-4">Formazione</h4>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="istr_secondaria" className="form-label">
                    Istruzione secondaria
                  </label>
                  <Field
                    as="select"
                    name="istr_secondaria"
                    className="form-select"
                    required
                  >
                    <option value="">Seleziona...</option>
                    {Object.keys(options1).map((group, index) => (
                      <optgroup
                        key={index}
                        label={group.charAt(0).toUpperCase() + group.slice(1)}
                      >
                        {options1[group as keyof typeof options1].map(
                          (option, idx) => (
                            <option key={idx} value={option.value}>
                              {option.label}
                            </option>
                          )
                        )}
                      </optgroup>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="istr_secondaria"
                    component="div"
                    className="text-danger mt-1"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="istr_secondaria_data" className="form-label">
                    Data di conseguimento titolo secondario
                  </label>
                  <Field
                    type="date"
                    name="istr_secondaria_data"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="istr_secondaria_data"
                    component="div"
                    className="text-danger mt-1"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="istr_superiore" className="form-label">
                    Istruzione superiore
                  </label>
                  <Field
                    as="select"
                    name="istr_superiore"
                    className="form-select"
                  >
                    <option value="">Seleziona...</option>
                    {options2.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Field>
                </div>

                <div className="col-md-6">
                  <label htmlFor="istr_superiore_data" className="form-label">
                    Data di conseguimento titolo superiore
                  </label>
                  <Field
                    type="date"
                    name="istr_superiore_data"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="istr_superiore_data"
                    component="div"
                    className="text-danger mt-1"
                  />
                </div>
              </div>
            </div>
            <div className="lingue">
              <h4 className="my-4">Competenze linguistiche</h4>

              <div className="row mb-3">
                {/*  inglese */}
                <div className="col-md-6">
                  <label htmlFor="lingua_inglese" className="form-label">
                    Inglese
                  </label>
                  <Field
                    as="select"
                    name="lingua_inglese"
                    className="form-select"
                  >
                    <option value="">Seleziona...</option>
                    {options3.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Field>
                </div>

                {/* spagnolo */}
                <div className="col-md-6">
                  <label htmlFor="lingua_spagnolo" className="form-label">
                    Spagnolo
                  </label>
                  <Field
                    as="select"
                    name="lingua_spagnolo"
                    className="form-select"
                  >
                    <option value="">Seleziona...</option>
                    {options3.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Field>
                </div>
              </div>

              <div className="row mb-3">
                {/*  francese */}
                <div className="col-md-6">
                  <label htmlFor="lingua_francese" className="form-label">
                    Francese
                  </label>
                  <Field
                    as="select"
                    name="lingua_francese"
                    className="form-select"
                  >
                    <option value="">Seleziona...</option>
                    {options3.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Field>
                </div>

                {/* tedesco */}
                <div className="col-md-6">
                  <label htmlFor="lingua_tedesco" className="form-label">
                    Tedesco
                  </label>
                  <Field
                    as="select"
                    name="lingua_tedesco"
                    className="form-select"
                  >
                    <option value="">Seleziona...</option>
                    {options3.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Field>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="lingua_altra" className="form-label">
                    Altra lingua
                  </label>
                  <Field
                    type="text"
                    name="lingua_altra"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="lingua_altra"
                    component="div"
                    className="text-danger mt-1"
                  />
                </div>
              </div>
            </div>

            <div className="informatica">
              <h4 className="my-4">Competenze informatiche</h4>

              <div className="row mb-3">
                <div className="col-12">
                  <label htmlFor="info_certificazioni" className="form-label">
                    Certificazioni conoscenze informatiche
                  </label>
                  <Field
                    component="textarea"
                    type="text"
                    rows="3"
                    name="info_certificazioni"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="info_certificazioni"
                    component="div"
                    className="text-danger mt-1"
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="info_gestionale" className="form-label">
                    Software gestione aziendale
                  </label>
                  <Field
                    as="select"
                    name="info_gestionale"
                    className="form-select"
                  >
                    <option value="">Seleziona...</option>
                    {options4.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Field>
                </div>
              </div>
            </div>

            <div className="occupazione">
              <h4 className="my-4">Occupazione attuale</h4>
              <div className="row mb-3">
                <div className="col-12">
                  <label htmlFor="occ_attuale" className="form-label">
                    Occupazione attuale
                  </label>
                  <Field
                    as="select"
                    name="occ_attuale"
                    className="form-select"
                    required
                  >
                    <option value="">Seleziona...</option>
                    {options5.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Field>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="occ_azienda" className="form-label">
                    Azienda
                  </label>
                  <Field
                    type="text"
                    name="occ_azienda"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="occ_azienda"
                    component="div"
                    className="text-danger mt-1"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="occ_qualifica" className="form-label">
                    Qualifica
                  </label>
                  <Field
                    type="text"
                    name="occ_qualifica"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="occ_qualifica"
                    component="div"
                    className="text-danger mt-1"
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="occ_contratto" className="form-label">
                    Contratto
                  </label>
                  <Field
                    type="text"
                    name="occ_contratto"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="occ_contratto"
                    component="div"
                    className="text-danger mt-1"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="occ_descrizione" className="form-label">
                    Descrizione attività
                  </label>
                  <Field
                    type="text"
                    name="occ_descrizione"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="occ_descrizione"
                    component="div"
                    className="text-danger mt-1"
                  />
                </div>
              </div>
            </div>

            <div className="aspettative">
              <h4 className="my-4">Aspettative</h4>
              <div className="row mb-3">
                <div className="col-12">
                  <label htmlFor="asp_salario" className="form-label">
                    Aspettativa salariale annuale lorda
                  </label>
                  <Field
                    component="textarea"
                    type="text"
                    rows="3"
                    name="asp_salario"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="asp_salario"
                    component="div"
                    className="text-danger mt-1"
                  />
                </div>
              </div>
            </div>

            <div className="curriculum">
              <div className="row mb-3">
                <div className="col-12">
                  <label htmlFor="curriculum" className="form-label">
                    Curriculum
                  </label>
                  <input
                    type="file"
                    name="curriculum"
                    className="form-control"
                    onChange={(event) => {
                      if (
                        event.currentTarget.files &&
                        event.currentTarget.files.length > 0
                      ) {
                        setFieldValue(
                          "curriculum",
                          event.currentTarget.files[0]
                        );
                      } else {
                        setFieldValue("curriculum", null);
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="checkbow">
              <div className="row mb-4">
                <div className="col-md-6">
                  <div className="form-check mt-4">
                    <Field
                      type="checkbox"
                      name="acconsento"
                      className="form-check-input"
                      id="acconsento"
                    />
                    <label className="form-check-label" htmlFor="acconsento">
                      <strong>
                        Acconsento al trattamento dei dati personali
                      </strong>
                    </label>
                    <div>
                      Ai sensi dell&apos;art.13 del Regolamento UE 2016/679 La
                      informiamo che i suoi dati sono trattati nel rispetto
                      della normativa per la tutela dei dati personali, per
                      finalità contrattuali ed amministrative. Tali dati sono
                      trattati con l&apos;osservanza di ogni misura cautelativa
                      sulla sicurezza e riservatezza. Leggi l&apos;informativa
                      completa
                    </div>
                    <ErrorMessage
                      name="acconsento"
                      component="div"
                      className="text-danger mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              {isSubmitting ? <LoadingButton /> : <Button testo="Invia" />}
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default InviaCandidatura;
