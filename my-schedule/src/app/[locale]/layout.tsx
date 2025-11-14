import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";

// 정적 import - 다국어
import koMessages from '../../../locales/ko.json';
import enMessages from '../../../locales/en.json';
import jpMessages from '../../../locales/jp.json';

interface RootLayoutProps{
  children:ReactNode;
  params: Promise<{ locale: 'ko' | 'en' | 'jp' }>; // 다국어 설정
}

const messagesMap = {
  ko: koMessages,
  en: enMessages,
  jp: jpMessages
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;
  const messages = messagesMap[locale] || koMessages;

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}> {/* 다국어 설정 */}
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
