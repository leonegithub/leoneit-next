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
import Purchased from "@/components/purchased-components/Purchased";

const PersonalArea = () => {
  const router = useRouter();
  const params = useParams();
  const lang =
    typeof params.lang === "string"
      ? params.lang
      : Array.isArray(params.lang)
      ? params.lang[0]
      : "it";
  const { userId, setUserId, userData, setUserData } = useAuth();
  const tabs = ["shop", "purchased", "orders", "downloads", "profile"];
  const searchParams = useSearchParams();

  // Imposta la tab iniziale in base al parametro della query oppure usa "Orders" come default
  const initialTab = searchParams.get("tab") || "shop";
  const [activeTab, setActiveTab] = useState(initialTab);
  
  useEffect(() => {
    if (!userId) {
      router.push(`/${lang}/login`);
    }
  }, [userId, router, lang]);

  // Aggiorna activeTab se il parametro della query cambia
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
                case "profile":
                  return <UserData data={userData} />;
                case "orders":
                  return (
                    <CartProvider products={[]}>
                      <Cart searchParams={searchParams} />
                    </CartProvider>
                  );
                case "shop":
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
                  case "purchased":
                    return (
                      <Purchased IDUser={userId} />
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
