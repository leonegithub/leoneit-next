import WhistleblowingClient from "./WhistleblowingClient";

export default async function Whistleblowing({ params }: { params: Promise<{ lang: "it" | "en" }> }) {

  const { lang } = await params;
  return <WhistleblowingClient lang={lang} />;
}