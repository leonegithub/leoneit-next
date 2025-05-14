import { getDictionary } from "../dictionaries";
import RegisterFormClient from "./RegisterFormClient";

export default async function RegisterPage({ params }: { params: { lang: "it" | "en" } }) {
  const dict = await getDictionary(params.lang);
  return <RegisterFormClient dict={dict} lang={params.lang} />;
}