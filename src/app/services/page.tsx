import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "u30b5u30fcu30d3u30b9 | VRu7a7au9593u5236u4f5cu30fbu30a4u30d9u30f3u30c8u904bu55b6u30fbu30a2u30d0u30bfu30fcu4f5cu6210",
  description: "M-DAOu304cu63d0u4f9bu3059u308bVRu7a7au9593u5236u4f5cu3001u30e1u30bfu30d0u30fcu30b9u30a4u30d9u30f3u30c8u904bu55b6u3001u30a2u30d0u30bfu30fcu4f5cu6210u30b5u30fcu30d3u30b9u306eu8a73u7d30u3092u3054u7d39u4ecbu3057u307eu3059u3002",
  keywords: ["VRu7a7au9593", "u30e1u30bfu30d0u30fcu30b9", "u30a4u30d9u30f3u30c8u904bu55b6", "u30a2u30d0u30bfu30fcu4f5cu6210", "u30abu30d4u30d0u30e9u6e29u6cc9"],
};

export default function ServicesPage() {
  return (
    <div className="container py-12">
      {/* u30dau30fcu30b8u30d8u30c3u30c0u30fc */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">u30b5u30fcu30d3u30b9</h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-600">
          u4f01u696du30fbu56e3u4f53u306eu30e1u30bfu30d0u30fcu30b9u6d3bu7528u3092u652fu63f4u3059u308b3u3064u306eu30b5u30fcu30d3u30b9
        </p>
      </div>

      {/* VRu7a7au9593u5236u4f5c */}
      <section id="vr-space" className="mb-24 scroll-mt-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <h2 className="mb-6 text-3xl font-bold">VRu7a7au9593u5236u4f5c</h2>
            <p className="mb-4 text-lg text-gray-700">
              u30aau30eau30b8u30cau30ebu306eVRu7a7au9593u3092u30c7u30b6u30a4u30f3u30fbu5236u4f5cu3057u3001u4f01u696du30d6u30e9u30f3u30c9u306bu5408u308fu305bu305fu6ca1u5165u611fu306eu3042u308bu4f53u9a13u3092u63d0u4f9bu3057u307eu3059u3002
              u5c55u793au4f1au3001u30d0u30fcu30c1u30e3u30ebu30aau30d5u30a3u30b9u3001u5546u54c1u5c55u793au306au3069u3001u76eeu7684u306bu5fdcu3058u305fu7a7au9593u8a2du8a08u304cu53efu80fdu3067u3059u3002
            </p>
            
            <h3 className="mb-3 mt-6 text-xl font-semibold">u4e3bu306au7279u5fb4</h3>
            <ul className="mb-6 space-y-2 text-lg text-gray-700">
              <li className="flex items-start">
                <svg className="mr-2 h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>u30d6u30e9u30f3u30c9u306bu5408u308fu305bu305fu30abu30b9u30bfu30e0u30c7u30b6u30a4u30f3</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>u8907u6570u30d7u30e9u30c3u30c8u30d5u30a9u30fcu30e0u5bfeu5fdcuff08VRChatu3001clusteru7b49uff09</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>u30a4u30f3u30bfu30e9u30afu30c6u30a3u30d6u8981u7d20u306eu5b9fu88c5</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>u6700u9069u5316u3055u308cu305fu30d1u30d5u30a9u30fcu30deu30f3u30b9</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <Link
                href="/contact"
                className="rounded-full bg-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-green-700"
              >
                u304au554fu3044u5408u308fu305b
              </Link>
            </div>
          </div>
          
          <div className="relative order-1 aspect-video overflow-hidden rounded-xl shadow-xl md:order-2">
            <Image
              src="/images/vr-space-service.jpg"
              alt="VRu7a7au9593u5236u4f5cu30b5u30fcu30d3u30b9"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* u4e8bu4f8b */}
        <div className="mt-16">
          <h3 className="mb-6 text-2xl font-bold">u5236u4f5cu4e8bu4f8b</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* u4e8bu4f8b1 */}
            <div className="overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/images/vr-case-1.jpg"
                  alt="u30abu30d4u30d0u30e9u6e29u6cc9VR"
                  width={600}
                  height={340}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h4 className="mb-2 text-xl font-semibold">u30abu30d4u30d0u30e9u6e29u6cc9VR</h4>
                <p className="text-gray-600">
                  u4ebau6c17u306eu30abu30d4u30d0u30e9u6e29u6cc9u3092u30e2u30c1u30fcu30d5u306bu3057u305fu30eau30e9u30c3u30afu30b9u7a7au9593u3002
                  u81eau7136u97f3u3084u6e29u6cc9u30a8u30d5u30a7u30afu30c8u3067u6ca1u5165u611fu3092u9ad8u3081u305fu7652u3057u7cfbVRu7a7au9593u3002
                </p>
              </div>
            </div>
            
            {/* u4e8bu4f8b2 */}
            <div className="overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/images/vr-case-2.jpg"
                  alt="u4f01u696du30d0u30fcu30c1u30e3u30ebu30aau30d5u30a3u30b9"
                  width={600}
                  height={340}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h4 className="mb-2 text-xl font-semibold">u4f01u696du30d0u30fcu30c1u30e3u30ebu30aau30d5u30a3u30b9</h4>
                <p className="text-gray-600">
                  u30eau30e2u30fcu30c8u30efu30fcu30afu6642u4ee3u306bu5bfeu5fdcu3057u305fu4eeeu60f3u30aau30d5u30a3u30b9u7a7au9593u3002
                  u4f1au8b70u5ba4u3084u30b3u30e9u30dcu30ecu30fcu30b7u30e7u30f3u30b9u30dau30fcu30b9u3092u5b8cu5099u3002
                </p>
              </div>
            </div>
            
            {/* u4e8bu4f8b3 */}
            <div className="overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/images/vr-case-3.jpg"
                  alt="u30d0u30fcu30c1u30e3u30ebu5c55u793au4f1a"
                  width={600}
                  height={340}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h4 className="mb-2 text-xl font-semibold">u30d0u30fcu30c1u30e3u30ebu5c55u793au4f1a</h4>
                <p className="text-gray-600">
                  u88fdu54c1u5c55u793au3068u30a4u30f3u30bfu30e9u30afu30c6u30a3u30d6u306au30c7u30e2u304cu53efu80fdu306au5c55u793au4f1au7a7au9593u3002
                  u6765u5834u8005u30c7u30fcu30bfu306eu53ceu96c6u30fbu5206u6790u6a5fu80fdu3082u5b9fu88c5u3002
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
