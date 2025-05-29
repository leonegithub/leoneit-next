import { getDictionary } from "../../dictionaries";
import NewslistClient from "./NewslistClient";

export default async function NewslistPage({ params }: { params: Promise<{ lang: "it" | "en" }>}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <NewslistClient lang={lang} dict={dict} />;
}