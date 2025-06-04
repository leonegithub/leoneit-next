import LavoraConNoiClient from "./LavoraConNoiClient";

export default async function LavoraConNoiPage({ params }: { params: Promise<{ lang: "it" | "en" }> }) {
  const { lang } = await params;
  return <LavoraConNoiClient lang={lang} />;
}