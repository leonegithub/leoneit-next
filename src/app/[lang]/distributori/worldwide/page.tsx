import { redirect } from "next/navigation";
import { getDictionary } from "../../dictionaries";
import WorldwideClient from "./WorldwideClient";

export default async function WorldwidePage({ params }: { params: { lang: "it" | "en" } }) {
  const { lang } = params;
  const dict = await getDictionary(lang);

  if (lang === "it") {
    redirect(`/${lang}/distributori/ortodonzia`);
  }

  return <WorldwideClient dict={dict} lang={lang} />;
}