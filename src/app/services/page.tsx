import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "サービス | VR空間制作・イベント運営・アバター作成",
  description: "M-DAOが提供するVR空間制作、メタバースイベント運営、アバター作成サービスの詳細をご紹介します。",
  keywords: ["VR空間", "メタバース", "イベント運営", "アバター作成", "カピバラ温泉"],
};

export default function ServicesPage() {
  return (
    <div className="container py-12">
      {/* ページヘッダー */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">サービス</h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-600">
          企業・団体のメタバース活用を支援する3つのサービス
        </p>
      </div>

      {/* VR空間制作 */}
      <section id="vr-space" className="mb-24 scroll-mt-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <h2 className="mb-6 text-3xl font-bold">VR空間制作</h2>
            <p className="mb-4 text-lg text-gray-700">
              オリジナルのVR空間をデザイン・制作し、企業ブランドに合わせた没入感のある体験を提供します。
              展示会、バーチャルオフィス、商品展示など、目的に応じた空間設計が可能です。
            </p>
            
            <h3 className="mb-3 mt-6 text-xl font-semibold">主な特徴</h3>
            <ul className="mb-6 space-y-2 text-lg text-gray-700">
              <li className="flex items-start">
                <svg className="mr-2 h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>ブランドに合わせたカスタムデザイン</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>複数プラットフォーム対応（VRChat、cluster等）</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>インタラクティブ要素の実装</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>最適化されたパフォーマンス</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <Link
                href="/contact"
                className="rounded-full bg-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-green-700"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
          
          <div className="relative order-1 aspect-video overflow-hidden rounded-xl shadow-xl md:order-2">
            <Image
              src="/images/vr-space-service.jpg"
              alt="VR空間制作サービス"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* 事例 */}
        <div className="mt-16">
          <h3 className="mb-6 text-2xl font-bold">制作事例</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* 事例1 */}
            <div className="overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/images/vr-case-1.jpg"
                  alt="カピバラ温泉VR"
                  width={600}
                  height={340}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h4 className="mb-2 text-xl font-semibold">カピバラ温泉VR</h4>
                <p className="text-gray-600">
                  人気のカピバラ温泉をモチーフにしたリラックス空間。
                  自然音や温泉エフェクトで没入感を高めた癒し系VR空間。
                </p>
              </div>
            </div>
            
            {/* 事例2 */}
            <div className="overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/images/vr-case-2.jpg"
                  alt="企業バーチャルオフィス"
                  width={600}
                  height={340}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h4 className="mb-2 text-xl font-semibold">企業バーチャルオフィス</h4>
                <p className="text-gray-600">
                  リモートワーク時代に対応した仮想オフィス空間。
                  会議室やコラボレーションスペースを完備。
                </p>
              </div>
            </div>
            
            {/* 事例3 */}
            <div className="overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/images/vr-case-3.jpg"
                  alt="バーチャル展示会"
                  width={600}
                  height={340}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h4 className="mb-2 text-xl font-semibold">バーチャル展示会</h4>
                <p className="text-gray-600">
                  製品展示とインタラクティブなデモが可能な展示会空間。
                  来場者データの収集・分析機能も実装。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* イベント運営 */}
      <section id="event" className="mb-24 scroll-mt-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/images/event-service.jpg"
              alt="メタバースイベント運営サービス"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h2 className="mb-6 text-3xl font-bold">イベント運営</h2>
            <p className="mb-4 text-lg text-gray-700">
              メタバース空間でのイベントやセミナーの企画・運営をサポート。
              リアルとバーチャルを組み合わせたハイブリッドイベントや、完全バーチャルでのイベント開催が可能です。
              企業説明会、製品発表会、社内研修など、様々な用途に対応します。
            </p>
            
            <h3 className="mb-3 mt-6 text-xl font-semibold">主な特徴</h3>
            <ul className="mb-6 space-y-2 text-lg text-gray-700">
              <li className="flex items-start">
                <svg className="mr-2 h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>企画から実施までのトータルサポート</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>参加者データの収集・分析</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>インタラクティブなコンテンツ設計</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>リアルイベントとの連携</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <Link
                href="/contact"
                className="rounded-full bg-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-green-700"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* アバター作成 */}
      <section id="avatar" className="mb-24 scroll-mt-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <h2 className="mb-6 text-3xl font-bold">アバター作成</h2>
            <p className="mb-4 text-lg text-gray-700">
              企業ブランドに合わせたオリジナルアバターのデザイン・制作を行います。
              社員用アバター、マスコットキャラクター、イベント用特別アバターなど、
              メタバース空間でのアイデンティティを確立するお手伝いをします。
            </p>
            
            <h3 className="mb-3 mt-6 text-xl font-semibold">主な特徴</h3>
            <ul className="mb-6 space-y-2 text-lg text-gray-700">
              <li className="flex items-start">
                <svg className="mr-2 h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>ブランドイメージに合わせたデザイン</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>高品質な3Dモデリング</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>表情やジェスチャーの実装</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>複数プラットフォーム対応</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <Link
                href="/contact"
                className="rounded-full bg-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-green-700"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
          
          <div className="relative order-1 aspect-video overflow-hidden rounded-xl shadow-xl md:order-2">
            <Image
              src="/images/avatar-service.jpg"
              alt="アバター作成サービス"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* お問い合わせセクション */}
      <section className="rounded-2xl bg-green-50 p-8 text-center">
        <h2 className="mb-6 text-3xl font-bold">お気軽にご相談ください</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
          企業・団体のニーズに合わせたメタバースソリューションをご提案します。
          まずはお問い合わせフォームよりご連絡ください。
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-full bg-green-600 px-8 py-4 font-medium text-white transition-colors hover:bg-green-700"
        >
          お問い合わせはこちら
        </Link>
      </section>
    </div>
  );
}
