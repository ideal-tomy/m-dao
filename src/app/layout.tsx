import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"], 
  weight: ["400", "500", "700"], 
  variable: "--font-noto-sans-jp"
});

export const metadata: Metadata = {
  title: "M-DAO | VR空間制作・イベント運営・アバター作成",
  description: "M-DAOはVR空間制作、イベント運営、アバター作成を通じて、企業・団体のメタバース活用をサポートします。",
  keywords: ["M-DAO", "VR", "メタバース", "イベント", "アバター", "カピバラ温泉"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className={`${notoSansJP.className} min-h-screen flex flex-col w-full`}>
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
