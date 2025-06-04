import LavoraConNoiClient from "./LavoraConNoiClient";

export default function LavoraConNoiPage({ params }: { params: { lang: "it" | "en" } }) {
  return <LavoraConNoiClient lang={params.lang} />;
}