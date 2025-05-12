import Image from "next/image";
import { getDictionary } from "../../dictionaries";
import Link from "next/link";
import globalIdentity from "./global_identity.jpg";
import ninety from "./video_90_anni.jpg";

export default async function anniLeone({
  params,
}: {
  params: Promise<{ lang: "it" | "en" }>;
}) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);

  return (
    <div className="container">
      <h1 className="blue font-bold py-4">{dict["90anni"].title}</h1>
      <p>{dict["90anni"].intro1}</p>
      <p>{dict["90anni"].intro2}</p>
      <div className="row pt-5">
        <div className="col-lg-6 col-12 mb-4 d-flex">
          <div className="video-item">
            <Image
              src={globalIdentity}
              alt={"global-identity"}
              className="img-fluid"
            />
            <p className=" mt-2 text-center">
              <Link href={"90-anni-leone/new-global-identity"}>
                {dict["90anni"].new_global_identity}
              </Link>
            </p>
          </div>
        </div>

        <div className="col-lg-6 col-12 mb-4 d-flex">
          <div className="video-item">
            <Image src={ninety} alt={"ninety"} className="img-fluid" />
            <p className=" mt-2 text-center">
              <Link href={"90-anni-leone/storia"}>
                {dict["90anni"].history}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
