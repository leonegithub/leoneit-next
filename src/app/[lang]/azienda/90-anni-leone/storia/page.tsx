import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";
import foto1 from "./storia-images/foto_storia.jpg";
import foto2 from "./storia-images/foto_storia2.jpg";
import foto3 from "./storia-images/foto_storia3.jpg";
import foto4 from "./storia-images/foto_storia4.jpg";
import foto5 from "./storia-images/foto_storia5.jpg";

export default async function Storia({
  params,
}: {
  params: Promise<{ lang: "it" | "en" }>;
}) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);

  return (
    <div className="container">
      <h1 className="blue font-bold pt-3">
        {dict["90anni"].storia["main-title"]}
      </h1>
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          src="https://player.vimeo.com/video/986272799?badge=0&autopause=0&player_id=0&app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          style={{
            position: "absolute",
            marginTop: "50px",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title="Leone S.p.A. Video storico 90anni"
        />
      </div>

      {/* anni 30 - 40 */}

      <div className="section-storia" style={{ paddingTop: 80 }}>
        <div>
          <h1 className="ads blue font-bold pb-2">
            {dict["90anni"].storia.title1}
          </h1>
          <p className="text pb-4">{dict["90anni"].storia.text1}</p>
          <div>
            <Image src={foto1} alt="immagine-1"></Image>
          </div>
        </div>
      </div>

      {/* anni 50-60 */}

      <div className="section-storia">
        <div>
          <h1 className="blue font-bold pt-4 pb-2">
            {dict["90anni"].storia.title2}
          </h1>
          <p className="text">{dict["90anni"].storia.text2}</p>
          <p className="italic pb-4">{dict["90anni"].storia.italic1}</p>
          <div>
            <Image src={foto2} alt="immagine-1"></Image>
          </div>
        </div>
      </div>

      {/* alluvione 1966 */}

      <div className="section-storia">
        <div>
          <h1 className="blue font-bold pt-4 pb-2">
            {dict["90anni"].storia.title3}
          </h1>
          <div className="italic">{dict["90anni"].storia.italic2}</div>
          <div className="text pb-4">{dict["90anni"].storia.text3}</div>
          <div>
            <Image src={foto3} alt="immagine-2"></Image>
          </div>
        </div>
      </div>

      {/* la nuova era */}

      <div className="section-storia">
        <div>
          <h1 className="blue font-bold pt-4 pb-2">
            {dict["90anni"].storia.title4}
          </h1>
          <p className="text pb-4">{dict["90anni"].storia.text4}</p>
          <div className="images">
            <Image src={foto4} alt="immagine-3"></Image>
          </div>
        </div>
      </div>

      {/* il nuovo millennio */}

      <div className="section-storia">
        <div>
          <h1 className="blue font-bold pt-4 pb-2">
            {dict["90anni"].storia.title5}
          </h1>
          <p className="text pb-4">{dict["90anni"].storia.text5}</p>
          <div>
            <Image src={foto5} alt="immagine-4"></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
