import Link from "next/link";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      {/* Widgets - Bootstrap Brain Component */}
      <section className="py-4 py-md-5 py-xl-6 py-xxl-8">
        <div className="container ">
          <div className="row gy-3">
            <div className="col-6 col-md-4">
              <div className="link-wrapper">
                <h4 className="mb-3 fw-bold">Services</h4>
                <ul className="m-0 list-unstyled">
                  <li className="mb-1">
                    <Link href={"/services/downloads"}>Downloads</Link>
                  </li>
                  <li className="mb-1">
                    <Link href={`/services/newlist`}>Newlist</Link>
                  </li>
                  {/*  <li className="mb-1">
                    <Link href={`/services/customer-support`}>
                      Customer support
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="link-wrapper">
                <h4 className="mb-3 fw-bold">Scientific publications</h4>
                <ul className="m-0 list-unstyled">
                  <Link className="mb-1" href={`/products/publications`}>
                    Orthodontics
                  </Link>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="link-wrapper">
                <h4 className="mb-3 fw-bold">Quality</h4>
                <ul className="m-0 list-unstyled">
                  <li className="mb-1">
                    <Link href={`/quality/safety-sheets`}>Safety sheets</Link>
                  </li>
                  <li className="mb-1">
                    <Link href={`/quality/quality-system`}>Quality system</Link>
                  </li>
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
                <strong>LeoneAmerica Dental Products, Inc</strong>
                <br />
                1400 Graves Ave. Unit A | Oxnard, CA 93030
                <br />
                info@leoneamerica.com
                <br />
                <em>
                  Sole distributor of Leone SpA orthodontic products in the USA,
                  Canada, and Puerto Rico
                </em>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="social-media-wrapper text-4xl">
                <ul className="m-0 list-unstyled d-flex justify-content-sm-end gap-3 gap-xl-4">
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
