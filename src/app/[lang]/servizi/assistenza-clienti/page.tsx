import "./style.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import leonedsl65 from "./Leone90_DSL-65.jpg";
import Image from "next/image";
import { getDictionary } from "../../dictionaries";

async function AssistenzaClienti({ params }: { params: Promise<{ lang: "it" | "en" }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <div className="assistenza-clienti">
        <div className="img-container">
          <Image src={leonedsl65} alt="leone-dsl"></Image>
        </div>
        <div className="container jumbo">
          <div className="info">
            <div className="section">
              <h2 className="blue font-bold pb-2">{dict.servizi.assistenza_clienti.expertise_title}</h2>
              <p>
              {dict.servizi.assistenza_clienti.expertise_text}
              </p>
            </div>
            <div className="section">
              <h2 className="blue font-bold pb-2">{dict.servizi.assistenza_clienti.timeliness_title}</h2>
              <p>
                {dict.servizi.assistenza_clienti.timeliness_text}
              </p>
            </div>
          </div>
          <Form>
            <Row className="g-2">
              <Col md>
                <FloatingLabel label="Nome">
                  <Form.Control
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder={dict.servizi.assistenza_clienti.form.name}
                    required
                  />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel label="Cognome">
                  <Form.Control
                    type="text"
                    id="cognome"
                    name="cognome"
                    placeholder={dict.servizi.assistenza_clienti.form.surname}
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="g-2">
              <Col md>
                <FloatingLabel label="Indirizzo email">
                  <Form.Control
                    name="email"
                    id="email"
                    type="email"
                    placeholder={dict.servizi.assistenza_clienti.form.email}
                    required
                  />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel label="Numero di telefono">
                  <Form.Control
                    name="telefono"
                    id="telefono"
                    type="number"
                    placeholder={dict.servizi.assistenza_clienti.form.phone}
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                {dict.servizi.assistenza_clienti.form.upload_file}
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                accept="jpg, jpeg, csx, xls"
              />
            </div>
            <button
              type="button"
              className="text-white bg-blue px-4 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg p-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              {dict.servizi.assistenza_clienti.form.send}
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default AssistenzaClienti;