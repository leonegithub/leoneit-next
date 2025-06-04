"use client";
import Button from "@/components/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LavoraConNoiClient({ lang }: { lang: "it" | "en" }) {
  const router = useRouter();

  useEffect(() => {
    if (lang !== "it") {
      router.push("/");
    }
  }, [lang, router]);

  if (lang !== "it") return null;

  return (
    <div className="container pt-4">
      <h1 className="blue font-bold pb-2">Lavora con noi</h1>
      <div className="description">
        <p>
          Se siete alla ricerca di un&rsquo;opportunit&agrave; professionale
          ricca di sfide stimolanti e prospettive di crescita, allora non
          cercate oltre!{" "}
        </p>
        <p>
          {" "}
          Leone S.P.A. si caratterizza per la sua storia ed esperienza, da
          sempre orientata all&rsquo;innovazione, la qualit&agrave; e la
          professionalit&agrave;, cosa che ci rende un&rsquo;eccellenza nel
          nostro settore.
          <br />
        </p>
        <p>
          {" "}
          In Leone S.P.A. avrai l&rsquo;opportunit&agrave; di vivere un ambiente
          di lavoro:
        </p>
        <ul className="list-disc list-inside">
          <li>Dinamico e collaborativo</li>
          <li>Valorizzazione dei talenti</li>
          <li>Ambiente inclusivo</li>
          <li>Orientato alla qualit&agrave; e sicurezza</li>
        </ul>
        <p>
          Se siete giovani pieni di entusiasmo o professionisti esperti alla
          ricerca di una nuova sfida, cerchiamo persone motivate e appassionate
          che desiderano fare la differenza.
        </p>
        <p>
          Invia la tua candidatura per la posizione di interesse oppure
          candidatati spontaneamente; tutte le candidature ricevute saranno
          valutate.{" "}
        </p>
        <p className="py-3">
          <strong>Unisciti alla nostra squadra!</strong>
        </p>
      </div>
      <div>
        <Link href={`lavora-con-noi/chi-stiamo-cercando`}>
          <Button testo="Chi stiamo cercando"></Button>
        </Link>
        <Link href={`lavora-con-noi/invia-candidatura`}>
          <Button testo="Invia la tua candidatura"></Button>
        </Link>
      </div>
    </div>
  );
}