"use client";

import React, { useEffect, useState } from "react";
import LoginForm from "@/components/loginForm";
import { useRouter, useParams } from "next/navigation";
import { getCookie } from "@/utils/cookies";

const Login = () => {
  const [hasUserId, setHasUserId] = useState<string | null>();
  const router = useRouter();
  const params = useParams();
  const lang: "it" | "en" =
    typeof params.lang === "string" && (params.lang === "it" || params.lang === "en")
      ? params.lang
      : "it";

  useEffect(() => {
    const storedUserId = getCookie("idUser");
    setHasUserId(storedUserId);
    if (storedUserId) {
      router.push(`/${lang}/personal-area`);
    }
  }, [router, lang]);

  return !hasUserId ? <LoginForm lang={lang} /> : null;
};

export default Login;
