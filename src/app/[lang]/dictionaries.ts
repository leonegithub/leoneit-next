const dictionaries = {
  it: () =>
    import("../../dictionaries/it.json").then((module) => module.default),
  en: () =>
    import("../../dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: "it" | "en") => {
  const loader = dictionaries[locale];
  if (!loader) {
    throw new Error(`Locale non supportato: ${locale}`)
  }
  return loader();
}

