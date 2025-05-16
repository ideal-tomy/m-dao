"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between py-4">
        {/* ロゴ */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/images/m-dao-logo.svg" 
            alt="M-DAO Logo" 
            width={40} 
            height={40}
            className="h-10 w-10" 
          />
          <span className="text-xl font-bold">M-DAO</span>
        </Link>

        {/* ナビゲーション */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link 
            href="/about" 
            className="text-md font-medium text-gray-700 transition-colors hover:text-green-600"
          >
            M-DAOについて
          </Link>
          <Link 
            href="/services" 
            className="text-md font-medium text-gray-700 transition-colors hover:text-green-600"
          >
            サービス
          </Link>
          <Link 
            href="/works" 
            className="text-md font-medium text-gray-700 transition-colors hover:text-green-600"
          >
            実績
          </Link>
          <Link 
            href="/blog" 
            className="text-md font-medium text-gray-700 transition-colors hover:text-green-600"
          >
            ブログ
          </Link>
          <Link 
            href="/news" 
            className="text-md font-medium text-gray-700 transition-colors hover:text-green-600"
          >
            お知らせ
          </Link>
          <Link 
            href="/contact" 
            className="rounded-full bg-green-600 px-4 py-2 font-medium text-white transition-colors hover:bg-green-700"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* モバイルメニューボタン */}
        <button 
          className="flex items-center md:hidden"
          onClick={toggleMenu}
          aria-label="メニューを開く"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      
      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-16 z-50 bg-white p-4 shadow-lg md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/about" 
              className="text-md font-medium text-gray-700 transition-colors hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              M-DAOについて
            </Link>
            <Link 
              href="/services" 
              className="text-md font-medium text-gray-700 transition-colors hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              サービス
            </Link>
            <Link 
              href="/works" 
              className="text-md font-medium text-gray-700 transition-colors hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              実績
            </Link>
            <Link 
              href="/blog" 
              className="text-md font-medium text-gray-700 transition-colors hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              ブログ
            </Link>
            <Link 
              href="/news" 
              className="text-md font-medium text-gray-700 transition-colors hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              お知らせ
            </Link>
            <Link 
              href="/contact" 
              className="rounded-full bg-green-600 px-4 py-2 font-medium text-white text-center transition-colors hover:bg-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              お問い合わせ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
