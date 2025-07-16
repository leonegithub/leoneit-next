import { getDictionary } from "@/app/[lang]/dictionaries";

const getLocalizedHref = (lang: string, path: string) => `/${lang}${path}`;

export const getOptions1 = async ({
  params,
}: {
  params: Promise<{ lang: "it" | "en" | "es" }>;
}) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return [
    {
      label: dict.header.company.about_us,
      href: getLocalizedHref(lang, "/azienda/chi-siamo"),
    },
    {
      label: dict.header.company["90_years"],
      href: getLocalizedHref(lang, "/azienda/90-anni-leone"),
    },
    ...(lang === "it"
      ? [
          {
            label: dict.header.company.careers,
            href: getLocalizedHref(lang, "/azienda/lavora-con-noi"),
          },
        ]
      : []),
       ...(lang === "it"
      ? [
          {
            label: dict.header.company.whistleblowing,
            href: getLocalizedHref(lang, "/azienda/whistleblowing"),
          },
        ]
      : []),
    {
      label: dict.header.company.contacts,
      href: getLocalizedHref(lang, "/azienda/contatti"),
    },
  ];
};

export const getOptions4 = async ({
  params,
}: {
  params: Promise<{ lang: "it" | "en" | "es"}>;
}) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return [
    {
      label: dict.header.courses_events.iso,
      href: getLocalizedHref(lang, "/corsi-ed-eventi/iso"),
    },
    {
      label: dict.header.courses_events.orthodontics_courses,
      href: getLocalizedHref(lang, "/corsi-ed-eventi/corsi-ortodonzia"),
    },
    {
      label: dict.header.courses_events.implantology_courses,
      href: getLocalizedHref(lang, "/corsi-ed-eventi/corsi-implantologia"),
    },
    {
      label: dict.header.courses_events.events,
      href: getLocalizedHref(lang, "/corsi-ed-eventi/eventi"),
    },
    {
      label: dict.header.courses_events.speakers,
      href: getLocalizedHref(lang, "/corsi-ed-eventi/relatori"),
    },
    {
      label: dict.header.courses_events.live_days,
      href: getLocalizedHref(lang, "/corsi-ed-eventi/giornate-live")
    }
  ];
};

export const getOptions2 = async ({
  params,
}: {
  params: Promise<{ lang: "it" | "en" | "es"}>;
}) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return [
    {
      label: dict.header.orthodontics.products,
      href: getLocalizedHref(lang, "/ortodonzia/prodotti"),
    },
    {
      label: dict.header.orthodontics.digital_orthodontics,
      href: getLocalizedHref(lang, "/ortodonzia/ortodonzia-digitale"),
    },
    {
      label: dict.header.orthodontics.news,
      href: getLocalizedHref(lang, "/ortodonzia/novita"),
    },
    {
      label: dict.header.orthodontics.offers,
      href: getLocalizedHref(lang, "/ortodonzia/offerte"),
    },
    {
      label: dict.header.orthodontics.essenza,
      href: getLocalizedHref(lang, "/ortodonzia/filosofia-essenza"),
    },
    {
      label: dict.header.orthodontics.senza_russare,
      href: getLocalizedHref(lang, "/ortodonzia/senza-russare"),
    },
    {
      label: dict.header.orthodontics.videos,
      href: getLocalizedHref(lang, "/ortodonzia/video-e-procedure"),
    },
    {
      label: dict.header.orthodontics.bulletin,
      href: getLocalizedHref(lang, "/ortodonzia/bolletino"),
    },
    {
      label: dict.header.orthodontics.publications,
      href: getLocalizedHref(lang, "/ortodonzia/pubblicazioni-ortodonzia"),
    },
  ];
};

export const getOptions3 = async ({
  params,
}: {
  params: Promise<{ lang: "it" | "en" | "es"}>;
}) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return [
    {
      label: dict.header.implantology.system,
      href: getLocalizedHref(lang, "/implantologia/sistema-implantare"),
    },
    {
      label: dict.header.implantology.products,
      href: getLocalizedHref(lang, "/implantologia/prodotti"),
    },
    {
      label: dict.header.implantology.news,
      href: getLocalizedHref(lang, "/implantologia/novita"),
    },
    {
      label: dict.header.implantology.offers,
      href: getLocalizedHref(lang, "/implantologia/offerte"),
    },
    {
      label: dict.header.implantology.software,
      href: getLocalizedHref(lang, "/implantologia/librerie-software"),
    },
    {
      label: dict.header.implantology.xcn,
      href: getLocalizedHref(lang, "/implantologia/xcn-news"),
    },
    {
      label: dict.header.implantology.team,
      href: getLocalizedHref(lang, "/implantologia/xcn-team"),
    },
    {
      label: dict.header.implantology.videos,
      href: getLocalizedHref(lang, "/implantologia/video"),
    },
    {
      label: dict.header.implantology.publications,
      href: getLocalizedHref(lang, "/implantologia/pubblicazioni-ortodonzia"),
    },
  ];
};
