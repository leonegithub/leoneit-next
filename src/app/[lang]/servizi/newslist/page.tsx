"use server"

import { getDictionary } from "../../dictionaries";
import NewslistClient from "./NewslistClient";

export default async function NewslistPage({ params }: { params: { lang: "it" | "en" } }) {
  const { lang } = params;
  const dict = await getDictionary(lang);

  return <NewslistClient lang={lang} dict={dict} />;
}