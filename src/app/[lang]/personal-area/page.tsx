"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import UserData from "@/components/personalData";
import Cart from "@/components/Cart";
import { CartProvider } from "@/components/cart-components/CartContext";
import dynamic from "next/dynamic";
import ShopCardPA from "@/components/ShopCardPA";
import DDDAR from "./3DAR.png";
import LeafAR from "./LeafAR2.png";
import SympAR from "./SympAR3.png";
import Purchased from "@/components/personalarea-components/Purchased";
import EssenzaPurchased from "@/components/personalarea-components/EssenzaPurchased";
import Shop3DLeone from "@/components/personalarea-components/Shop3DLeone";
import ShopEssenza from "@/components/personalarea-components/ShopEssenza";

const PersonalArea = () => {
  const router = useRouter();
  const params = useParams();
  const lang: 'it' | 'en' | 'es' =
    typeof params.lang === "string" && ["it", "en", "es"].includes(params.lang)
      ? params.lang as 'it' | 'en' | 'es'
      : Array.isArray(params.lang) && ["it", "en", "es"].includes(params.lang[0])
      ? params.lang[0] as 'it' | 'en' | 'es'
      : "it";
  const { userId, setUserId, userData, setUserData } = useAuth();
  const tabs = ["Dashboard", "Purchased", "Downloads", "Profile", "Shop", "Prodotti d'ortodonzia"];
  const searchParams = useSearchParams();

  const initialTab = searchParams.get("tab") || "Dashboard";
  const [activeTab, setActiveTab] = useState(initialTab);
  
  useEffect(() => {
    if (!userId) {
      router.push(`/${lang}/login`);
    }
  }, [userId, router, lang]);

  useEffect(() => {
    const urlTab = searchParams.get("tab");
    if (urlTab && urlTab !== activeTab) {
      setActiveTab(urlTab);
    }
  }, [searchParams]);

  const handleLogout = () => {
    setUserId(null);
    setUserData(null);
    document.cookie = "idUser=; path=/; max-age=0";
    localStorage.removeItem("userId");
    router.push(`/${lang}/login`);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        className=" personal flex flex-col mx-auto p-4"
        style={{ minHeight: "700px" }}
      >
        <div className="font-medium flex justify-between items-center text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap list-unstyled -mb-px">
            {tabs.map((tab) => (
              <li key={tab} className="me-2">
                <a
                  onClick={() => setActiveTab(tab)}
                  className={`inline-block p-4 border-b-2 rounded-t-lg cursor-pointer ${
                    activeTab === tab
                      ? "blue border-blue-600 dark:text-blue-500 dark:border-blue-500"
                      : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  }`}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={handleLogout}
            type="button"
            className=" my-4 py-2 px-4 bg-blue-700 text-white font-medium rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Logout
          </button>
        </div>
        {userData ? (
          <>
            {(() => {
              switch (activeTab) {
                case "Profile":
                  return <UserData data={userData} />;
                case "Prodotti d'ortodonzia":
                  return (
                    <CartProvider products={[]}>
                      <Cart searchParams={searchParams} />
                    </CartProvider>
                  );
                case "Dashboard":
                  return (
                    <div className="container mt-2">
                      <div className="flex py-5 justify-between">
                        <ShopCardPA
                          text="Orthodontic products"
                          link="products/orthodontics/all"
                          linkText="All products"
                          image={LeafAR}
                          descText="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                        />
                        <ShopCardPA
                          text="International Symposium"
                          link="https://symposium.leone.it"
                          linkText="Buy your ticket"
                          image={SympAR}
                          descText="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                        />
                        <ShopCardPA
                          text="3D Leone"
                          link="https://3dleone.it"
                          linkText="Your licence"
                          image={DDDAR}
                          descText="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                        />
                      </div>
                    </div>
                  );
                  case "Purchased":
                    return (
                      <>
                      <Purchased IDUser={userId} />
                      <EssenzaPurchased IDUser={userId} />
                      </>
                    )
                    case "Shop":
                      return (
                        <>
                        <Shop3DLeone lang={lang} />
                        <ShopEssenza lang={lang} />
                        </>
                      )
                default:
                  return null;
              }
            })()}
          </>
        ) : (
          <p className="p-4 text-center">Loading...</p>
        )}
      </div>
    </Suspense>
  );
};

export default dynamic(() => Promise.resolve(PersonalArea), { ssr: false });
