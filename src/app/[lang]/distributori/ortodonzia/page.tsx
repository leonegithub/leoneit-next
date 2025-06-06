"use server";


import { redirect } from "next/navigation";

async function Implantologia({params}: {params: Promise<{lang: "it" | "en"}>}) {
    const { lang } = await params;


  if (lang !== "it") {
    redirect(`/${lang}/distributori/worldwide`);
  }

  return (
    <div className="container jumbo">
      <h1 className="ads">Pagina in italiano</h1>
    </div>
  );
}

export default Implantologia;