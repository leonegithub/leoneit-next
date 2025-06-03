import Header from "./Header.server";
import Footer from "./Footer";
import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AuthProvider } from "@/context/AuthContext";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Script from "next/script";
/* import Chatbot from "../components/Chatbot"; */

export const metadata: Metadata = {
  title: "Leone it",
};

export async function generateStaticParams() {
  return [{ lang: "it" }, { lang: "en" }];
}

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: "it" | "en" }>;
  }>
) {
  const params = await props.params;

  const {
    children
  } = props;

  // Risolvi params per poterli passare ai componenti server
  const resolvedParams = await params;

  return (
    <html lang={resolvedParams.lang}>
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
        <link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css" rel="stylesheet" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUa1jO0H1M2Kmhki/hmG57x4ANH6cKOJ6DkzBrr8kkpcFH/5FVn5Vw5i/Un"
          crossOrigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/qxk4lzc.css"
        ></link>
      </head>
      <body>
        <Analytics />
        <AuthProvider>
          <SpeedInsights />
          {/* Passa i params risolti al componente server Header */}
          <Header params={resolvedParams} />
          {/* <Chatbot /> */}
          <main>{children}</main>
          <Footer params={resolvedParams} />
        </AuthProvider>
        <Script
         src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"
          strategy="afterInteractive"
          />
      </body>
    </html>
  );
}
