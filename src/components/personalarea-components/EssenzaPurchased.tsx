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

const IDGruppo = 2;

function EssenzaPurchased({ IDUser }: { IDUser: string | null }) {
    const [result, setResult] = useState<PurchasedObject[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(true);

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
        setResult((data.ReturnedObject as PurchasedObject[]).filter((item) => item.FlgAttiva === true));
        setLoading(false);
    })
    .catch((error) => {
        setError(error.message);
        setLoading(false);
    })
}, [IDUser]);

if (loading) return <div className="py-4"><Spinner /></div>;
if (error) return <div>Errore: {error}</div>;

const chevron = isOpen ? <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
</svg> : <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
</svg>
    
return (
    <>
        <h1 onClick={() => setIsOpen(!isOpen)} className="blue bg-grey rounded my-4 px-3 py-2 flex items-center">Essenza <span className="ms-3 bg-gray">{chevron}</span></h1>
        {isOpen ? (
        <div className="relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">ID</th>
                        <th scope="col" className="px-6 py-3">
                            <span className="flex items-center">
                                descrizione
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                    </svg>
                            </span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="flex items-center">
                                data acquisto
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                    </svg>
                            </span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="flex items-center">
                                data scadenza
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                    </svg>
                            </span>
                        </th>
                       <th scope="col" className="px-6 py-3">
                            <span className="flex items-center">
                                pc associato
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                    </svg>
                            </span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="flex items-center">
                                ticket residui
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                    </svg>
                            </span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="flex items-center">
                                stato
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                    </svg>
                            </span>
                        </th>
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
                            <td className="px-6 py-4">{item.NTicketResidui}</td>
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
        ) : null}
    </>
);
}

export default EssenzaPurchased;