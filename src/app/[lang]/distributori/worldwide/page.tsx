import { redirect } from "next/navigation";
import { getDictionary } from "../../dictionaries";
import WorldwideClient from "./WorldwideClient";

export default async function WorldwidePage({ params }: { params: Promise<{ lang: "it" | "en"}>}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  if (lang === "it") {
    redirect(`/${lang}/distributori/ortodonzia`);
  }

  return <WorldwideClient dict={dict} lang={lang} />;
}