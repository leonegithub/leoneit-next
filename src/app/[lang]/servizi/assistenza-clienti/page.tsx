import "./style.css";
import Image from "next/image";
import leonedsl65 from "./Leone90_DSL-65.jpg";
import { getDictionary } from "../../dictionaries";
import { Label, TextInput, Select, FileInput, Button } from "flowbite-react";

async function AssistenzaClienti({ params }: { params: Promise<{ lang: "it" | "en" }> }) {
  
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const offices = [
    "Vendite Italia",
    "Vendite Estero",
    "ISO Istituto Studi Odontoiatrici",
    "Ufficio Tecnico",
    "Servizi Marketing",
  ];

  return (
    <>
      <div className="assistenza-clienti">
        <div className="img-container">
          <Image src={leonedsl65} alt="leone-dsl" />
        </div>
        <div className="container jumbo">
          <div className="info">
            <div className="section">
              <h2 className="blue font-bold pb-2">{dict.servizi.assistenza_clienti.expertise_title}</h2>
              <p>{dict.servizi.assistenza_clienti.expertise_text}</p>
            </div>
            <div className="section">
              <h2 className="blue font-bold pb-2">{dict.servizi.assistenza_clienti.timeliness_title}</h2>
              <p>{dict.servizi.assistenza_clienti.timeliness_text}</p>
            </div>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nome" value="Nome" />
                <TextInput
                  id="nome"
                  name="nome"
                  placeholder={dict.servizi.assistenza_clienti.form.name}
                  required
                />
              </div>
              <div>
                <Label htmlFor="cognome" value="Cognome" />
                <TextInput
                  id="cognome"
                  name="cognome"
                  placeholder={dict.servizi.assistenza_clienti.form.surname}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" value="Email" />
                <TextInput
                  type="email"
                  id="email"
                  name="email"
                  placeholder={dict.servizi.assistenza_clienti.form.email}
                  required
                />
              </div>
              <div>
                <Label htmlFor="telefono" value="Telefono" />
                <TextInput
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder={dict.servizi.assistenza_clienti.form.phone}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="ufficio" value="Ufficio" />
                <Select
                  id="ufficio"
                  name="ufficio"
                  defaultValue="Generale"
                  required
                >
                  <option value="Generale">Generale</option>
                  {offices.map((office, idx) => (
                    <option key={idx} value={office}>{office}</option>
                  ))}
                </Select>
              </div>
              <div>
                <Label htmlFor="formFile" value={dict.servizi.assistenza_clienti.form.upload_file} />
                <FileInput
                  id="formFile"
                  name="file"
                  accept=".jpg,.jpeg,.csx,.xls"
                />
              </div>
            </div>
            <Button
              type="submit"
              color="blue"
              className="px-4"
            >
              {dict.servizi.assistenza_clienti.form.send}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AssistenzaClienti;