import { getDictionary } from "../dictionaries";
import RegisterFormClient from "./RegisterFormClient";

export default async function RegisterPage({ params }: { params: Promise<{ lang: "it" | "en" }> }) {
  const {lang} = await params;
  const dict = await getDictionary(lang);
  return <RegisterFormClient dict={dict} lang={lang} />;
}