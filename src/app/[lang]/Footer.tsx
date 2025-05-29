import Link from "next/link";
import { getDictionary } from "./dictionaries";
import "./footer.css";

export default async function Footer({
  params,
}: {
  params: { lang: "it" | "en" };
}) {
  const { lang } = params;
  const dict = await getDictionary(lang);
  return (
    <footer>
      {/* Widgets - Bootstrap Brain Component */}
      <section className="py-4 py-md-5 py-xl-6 py-xxl-8">
        <div className="container">
          <div className="row gy-3">
            <div className="col-6 col-md-3">
              <div className="link-wrapper">
                <h4 className="mb-3 fw-bold">{dict.footer.services}</h4>
                <ul className="m-0 list-unstyled">
                  <li className="mb-1">
                    <Link href={`/${lang}/servizi/downloads`}>
                      {dict.footer.downloads}
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href={`/${lang}/servizi/newslist`}>
                    {dict.footer.newslist}
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href={`/${lang}/servizi/assistenza-clienti`}>
                      {dict.footer.customer_support}
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href={`/${lang}/login`}>
                    {dict.footer.restricted_area}
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href={`/${lang}/azienda/whistleblowing`}>
                      Whistleblowing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="link-wrapper">
                <h4 className="mb-3 fw-bold">
                  {dict.footer.scientific_publications}
                </h4>
                <ul className="m-0 list-unstyled">
                  <li className="mb-1">
                    <a href="#!">{dict.footer.orthodontics}</a>
                  </li>
                  <li className="mb-1">
                    <a href="#!">{dict.footer.implantology}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="link-wrapper">
                <h4 className="mb-3 fw-bold">{dict.footer.quality}</h4>
                <ul className="m-0 list-unstyled">
                  <li className="mb-1">
                    <Link href={`/${lang}/qualita/sistema-di-qualita`}>
                      {dict.footer.quality_system}
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href={`/${lang}/qualita/schede-di-sicurezza`}>
                      {dict.footer.safety_sheets}
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href={`/${lang}/qualita/istruzioni`}>
                      {dict.footer.instructions}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="link-wrapper">
                <h4 className="mb-3 fw-bold">{dict.footer.distributors}</h4>
                <ul className="m-0 list-unstyled">
                  {lang === "it" ? (
                    <>
                      <li className="mb-1">
                        <Link href={`/${lang}/distributori/ortodonzia`}>
                          Ortodonzia
                        </Link>
                      </li>
                      <li className="mb-1">
                        <Link href={`/${lang}/distributori/implantologia`}>
                          Implantologia
                        </Link>
                      </li>
                    </>
                  ) : (
                    <li className="mb-1">
                      <Link href={`/${lang}/distributori/worldwide`}>
                        Worldwide
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Social Media - Bootstrap Brain Component */}
      <div className="pb-4">
        <div className="container">
          <div className="row align-items-sm-center gy-3">
            <div className="col-12 col-sm-6">
              <div className="link-wrapper" style={{ color: "white" }}>
                <strong>Leone S.p.A.</strong>
                <br />
                Via P. a Quaracchi, 50 - 50019 Sesto Fiorentino, Firenze
                <br />
                P. IVA 01686960483 Uff. Reg. Imprese Firenze n. 01686960483
                <br />
                <em>Cap. soc. Euro 1.200.000,00 int. vers.</em>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="social-media-wrapper">
                <ul className="m-0 socials-list list-unstyled d-flex justify-content-sm-end gap-3 gap-xl-4">
                  <li>
                    <Link
                      className="pe-3 link-opacity-75-hover "
                      href={`https://www.instagram.com/leone__america/`}
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="px-3 link-opacity-75-hover "
                      href={`https://www.facebook.com/LeoneAmericaDentalProducts/`}
                      target="_blank"
                    >
                      <i className="fa-brands fa-square-facebook"></i>
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="ps-3 link-opacity-75-hover "
                      href={`https://www.linkedin.com/company/leone-america`}
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
