import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "what's up bro?",
  description: "that technalogy is fucking crazy",
};

export default function RootLayout({
  children,
  params:{locale},
}: Readonly<{
children: React.ReactNode;
params:{locale:string}
}>) {

  const messages = useMessages();

  return (
    <html lang="en" className="bg-[#0d0d0d]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
