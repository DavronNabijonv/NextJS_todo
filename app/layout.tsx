// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nextProvider } from "react-i18next";
import I18nProviderWrapper from "@/component/I18nProvider";
// import { notFound } from "next/navigation";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "what's up bro?",
  description: "that technology is fucking crazy",
};

// ✅ SHU FUNKSIYANI QO‘SH:
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "uz" }, { locale: "de" }]; // kerakli tillar
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale} className="bg-[#0d0d0d]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProviderWrapper>{children}</I18nProviderWrapper>
      </body>
    </html>
  );
}
