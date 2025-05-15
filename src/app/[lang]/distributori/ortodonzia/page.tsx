"use server";

import { redirect } from "next/navigation";
import { getDictionary } from "../../dictionaries";

async function Ortodonzia({ params }: { params: Promise<{ lang: "it" | "en" }>}) {
    const { lang } = await params;
    const dict = getDictionary(lang);

  if (lang !== "it") {
    redirect(`/${lang}/distributori/worldwide`);
  }

  return (
    <div className="container jumbo">
      <h1 className="ads">Pagina in italiano</h1>
    </div>
  );
}

export default Ortodonzia;