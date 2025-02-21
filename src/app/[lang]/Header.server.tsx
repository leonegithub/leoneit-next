import HeaderComponent from "./Header";
import { getDictionary } from "./dictionaries";
import {
  getOptions1,
  getOptions2,
  getOptions3,
  getOptions4,
} from "@/components/headerOptions";

export default async function Header({
  params,
}: {
  params: { lang: "it" | "en" };
}) {
  const lang = params.lang;
  const dict = await getDictionary(lang);
  const options1 = await getOptions1({ params: Promise.resolve({ lang }) });
  const options2 = await getOptions2({ params: Promise.resolve({ lang }) });
  const options3 = await getOptions3({ params: Promise.resolve({ lang }) });
  const options4 = await getOptions4({ params: Promise.resolve({ lang }) });

  return (
    <HeaderComponent
      lang={lang}
      options1={options1}
      options2={options2}
      options3={options3}
      options4={options4}
      dropdownCompanyLabel={dict.header.company.label}
      dropdownOrthodonticsLabel={dict.header.orthodontics.label}
      dropdownImplantologyLabel={dict.header.implantology.label}
      dropdownCoursesLabel={dict.header.courses_events.label}
    />
  );
}
