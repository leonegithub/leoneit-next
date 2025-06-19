"use client"

import { useEffect, useState } from "react";
import Spinner from "../spinner";

export interface PurchasedObject {
  ID: number;
  IDItem: number;
  DataPrimoAcquisto: string | null;
  DataCreazione: string;
  DataUltimoRinnovo: string;
  DataScadenza: string;
  DataUltimoPagamento: string | null;
  FlgLibera: boolean;
  FlgAttiva: boolean;
  IDUser: number;
  FlgRinnovo: boolean;
  FlgFingerPrint: boolean;
  FingerPrint: string;
  Descrizione: string;
  NTicketResidui: number;
  IDGruppo: 1;
  IDItemPadre: number;
  FlgTicket: boolean;
  FlgAcquistabileOra: boolean;
  FlgRinnovabileOra: boolean;
  StatoRinnovo: string;
  FlgFingerPrintRemovible: boolean;
}

const IDGruppo = 1;

function Purchased({ IDUser }: { IDUser: string | null }) {
    const [result, setResult] = useState<PurchasedObject[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    if (!IDUser) {
        setError("IDUser non valido");
        setLoading(false);
        return;
    }
    fetch(`https://php.leone.it/api/ws_leone/GetUserLicence.php?IDUser=167&IDGruppo=${IDGruppo}`, {
        headers: {
            Authorization: "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc"
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("DATA:", data);
        setResult((data.ReturnedObject as PurchasedObject[]).filter((item) => item.FlgAttiva === true));
        setLoading(false);
    })
    .catch((error) => {
        setError(error.message);
        setLoading(false);
    })
}, [IDUser])
    
    if (loading) return <div className="py-4"><Spinner /></div>;
    if (error) return <div>Errore: {error}</div>;
    
return (
    <>
        <h1 className="blue py-4">{IDGruppo === 1 ? "3D Leone Designer" : null}</h1>
        <div className="relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">ID</th>
                        <th scope="col" className="px-6 py-3">Descrizione</th>
                        <th scope="col" className="px-6 py-3">Data Acquisto</th>
                        <th scope="col" className="px-6 py-3">Data Scadenza</th>
                        <th scope="col" className="px-6 py-3">fingerprint</th>
                        <th scope="col" className="px-6 py-3">Stato</th>
                    </tr>
                </thead>
                <tbody>
                    {result?.map((item) => (
                        <tr key={item.ID} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.ID}
                            </th>
                            <td className="px-6 py-4">{item.Descrizione}</td>
                            <td className="px-6 py-4">{item.DataCreazione}</td>
                            <td className="px-6 py-4">{item.DataScadenza}</td>
                            <td className="px-6 py-4">{item.FingerPrint}</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className={`h-2.5 w-2.5 rounded-full ${item.StatoRinnovo === "ATTIVA" ? "bg-green-500" : "bg-red-500"} me-2`}></div>
                                    {item.StatoRinnovo === "ATTIVA" ? "Attivo" : "Scaduto"}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);
}

export default Purchased;