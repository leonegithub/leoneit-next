import { redirect } from "next/navigation";
import Implantologia from "./ImplantologiaClient";

export default async function OrtodonziaPage({ params }: { params: { lang: "it" | "en" } }) {
  const { lang } = params;

  if (lang !== "it") {
    redirect(`/${lang}/distributori/worldwide`);
  }

  // Qui puoi eventualmente fetchare dati da API/server se necessario

  return <Implantologia />;
}