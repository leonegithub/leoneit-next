import { getDictionary } from "../../dictionaries";
import ContattiClient from "./ContattiClient";

export default async function ContattiPage({ params }: { params: Promise<{ lang: "it" | "en" }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <ContattiClient lang={ lang } dict={dict}/>;
}