import { getDictionary } from "../../dictionaries";
import PublicationsClient from "./PublicationsClient";

export default async function PublicationsPage({ params }: { params: { lang: "it" | "en" } }) {
  const { lang } = await params;
  const dict = await getDictionary(lang); 
  return <PublicationsClient lang={lang} dict={dict} />;
}