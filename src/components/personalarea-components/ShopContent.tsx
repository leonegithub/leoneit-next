"use client"

import Spinner from '@/components/spinner';
import { useEffect, useState } from 'react';
import BuyButton from './BuyButton';

interface ShopItem {
  IDItem: number;
  Descrizione: string;
  DurataGiorni: number;
  PrezzoIta: number;
  SimboloValuta: string;
  FlgAcquistabileOra: boolean;
  FlgTrial: boolean;
}

interface ShopContentProps {
  lang: "it" | "en" | "es";
  idUser: string;
  idGruppo: string;
}

export default function ShopContent({ idUser, idGruppo }: ShopContentProps) {
  const [data, setData] = useState<{ ReturnedObject: ShopItem[] } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://php.leone.it/api/ws_leone/GetItemList.php?IDUser=${idUser}&IDGruppo=${idGruppo}`, {
          headers: {
            Authorization: 'Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc'
          }
        });
        const result = await response.json();

        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching shop data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [idUser]);

  if (loading) return <Spinner />

  return (
<>
    <div className="relative overflow-x-auto sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              <span className="flex items-center">
                Descrizione
              </span>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="flex items-center">
                Validità
              </span>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="flex items-center">
                Importo
              </span>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="flex items-center">
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.ReturnedObject
            .filter(item => item.FlgAcquistabileOra && !item.FlgTrial)
            .map((item) => (
              <tr key={item.IDItem} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">{item.Descrizione}</td>
                <td className="px-6 py-4">
                  {item.DurataGiorni > 0 ? `${item.DurataGiorni} giorni` : 'N/A'}
                </td>
                <td className="px-6 py-4">
                  {item.PrezzoIta} {item.SimboloValuta}
                </td>
                <td className="px-6 py-4">
                 <BuyButton idItem={item.IDItem} idUser={idUser}/>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>

</>

  );
}