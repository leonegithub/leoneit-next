import WhistleblowingClient from "./WhistleblowingClient";

export default async function Whistleblowing({ params }: { params: { lang: "it" | "en" } }) {
  return <WhistleblowingClient lang={params.lang} />;
}