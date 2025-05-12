"use client";

import React, { useEffect, useState } from "react";
import LoginForm from "@/components/loginForm";
import { useRouter, useParams } from "next/navigation";

export function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
}
const Login = () => {
  const [hasUserId, setHasUserId] = useState<string | null>();
  const router = useRouter();
  const params = useParams();
  const lang =
    typeof params.lang === "string"
      ? params.lang
      : Array.isArray(params.lang)
      ? params.lang[0]
      : "it";

  useEffect(() => {
    const storedUserId = getCookie("idUser");
    setHasUserId(storedUserId);
    if (storedUserId) {
      router.push(`/${lang}/personal-area`);
    }
  }, [router, lang]);

  return !hasUserId ? <LoginForm /> : null;
};

export default Login;
