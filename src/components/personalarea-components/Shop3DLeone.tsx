"use client"

import { useEffect, useState } from "react";
import ShopContent from "@/components/personalarea-components/ShopContent";
import { getCookie } from "@/utils/cookies";

interface Shop3DLeoneProps {
  lang: 'it' | 'en' | 'es';
}

export default function Shop3DLeone({ lang }: Shop3DLeoneProps) {
  const [userId, setUserId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    const storedUserId = getCookie("idUser");
    setUserId(storedUserId);
  }, []);

  const chevron = isOpen ? (
    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
    </svg>
  ) : (
    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
    </svg>
  );

  if (!userId) return null;

  return (
    <>
      <h1 
        onClick={() => setIsOpen(!isOpen)} 
        className="blue bg-grey px-3 py-2 rounded my-4 flex items-center cursor-pointer"
      >
        3D Leone <span className="ms-3">{chevron}</span>
      </h1>
      <div style={{ display: isOpen ? 'block' : 'none' }}>
        <ShopContent lang={lang} idUser={userId} idGruppo="1" />
      </div>
    </>
  );
}