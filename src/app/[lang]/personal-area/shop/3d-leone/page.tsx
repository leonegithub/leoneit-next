"use client"

import LoginForm from "@/components/loginForm";
import ShopContent from "./ShopContent";
import { getCookie } from "@/utils/cookies";
import { use, useEffect, useState } from "react";

interface PageProps {
    params: Promise<{
        lang: 'it' | 'en' | 'es'
    }>
}

function SoftwareLeoneShop({ params }: PageProps) {
     const [hasUserId, setHasUserId] = useState<string | null>(null);
     const { lang } = use(params);

     useEffect(() => {
         const userId = getCookie("idUser");
         setHasUserId(userId);
        }, []); 
        
    const storedUserId = hasUserId;
    if (!storedUserId) return <LoginForm lang={lang} />
    return <ShopContent lang={lang} idUser={storedUserId} />
}

export default SoftwareLeoneShop;