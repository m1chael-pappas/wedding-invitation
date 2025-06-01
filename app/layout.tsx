import './globals.css';

import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
  Koulen,
  Nanum_Myeongjo,
  Yeon_Sung,
} from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const koulen = Koulen({
  variable: "--font-koulen",
  subsets: ["latin"],
  weight: "400",
});

const nanumMyeongjo = Nanum_Myeongjo({
  variable: "--font-nanum-myeongjo",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const yeonSung = Yeon_Sung({
  variable: "--font-yeon-sung",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "A wedding invitation for a special day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${koulen.variable} ${nanumMyeongjo.variable} ${yeonSung.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
