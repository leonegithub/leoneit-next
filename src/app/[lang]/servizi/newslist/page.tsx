"use server"

import { getDictionary } from "../../dictionaries";
import NewslistClient from "./NewslistClient";

export default async function NewslistPage({ params }: { params: { lang: "it" | "en" } }) {
  const { lang } = params;
  let dict = await getDictionary(lang);

  // No conversion: keep prodotti as object to match expected type
  // If you need to use an array, update the types in NewslistClient and related files accordingly.

  return <NewslistClient lang={lang} dict={dict} />;
}