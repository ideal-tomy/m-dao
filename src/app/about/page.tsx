import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "M-DAOについて | VR空間制作・イベント運営・アバター作成",
  description: "M-DAOの理念とチーム紹介。メタバース空間での新しい体験を創造するVR専門チームです。",
  keywords: ["M-DAO", "メタバース", "VR", "チーム紹介", "理念"],
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      {/* ページヘッダー */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">M-DAOについて</h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-600">
          メタバース空間での新しい体験を創造するVR専門チーム
        </p>
      </div>

      {/* ミッションとビジョン */}
      <section className="mb-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold">ミッション</h2>
            <p className="mb-4 text-lg text-gray-700">
              私たちM-DAOは、「日本のメタバース文化を世界に広げる」というミッションを持っています。
            </p>
            <p className="mb-4 text-lg text-gray-700">
              このミッションは、単に技術的な成果を追求するだけでなく、日本独自の文化、芸術、そしてコミュニティの価値をグローバルなステージで展開し、世界中の人々と共有することを目指しています。
            </p>
            <p className="mb-4 text-lg text-gray-700">
              メタバースが提供する無限の可能性を活用し、新たな文化的交流の架け橋となること。それが私たちの目標です。
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/images/about-philosophy.jpg"
              alt="M-DAOのミッション"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ビジョンセクション */}
      <section className="mb-20 bg-green-50 p-8 rounded-xl">
        <h2 className="mb-6 text-3xl font-bold text-center">ビジョン</h2>
        <div className="max-w-3xl mx-auto">
          <p className="mb-4 text-lg text-gray-700">
            私たちのビジョンは、「ユーザー主導の経済活動が可能な独自メタバース空間の創出」にあります。
          </p>
          <p className="mb-4 text-lg text-gray-700">
            ユーザーが自らのアイデアやクリエイティビティを自由に表現し、それをもとにした経済活動を展開できる、そんな環境提供をしていきたいと考えています。
          </p>
          <p className="text-lg text-gray-700">
            M-DAOが開発・提供を目指すメタバース空間は、単なる娟楽の場を超え、新たな価値創造のプラットフォームとなることを目指しています。
          </p>
        </div>
      </section>

      {/* 私たちの役割セクション */}
      <section className="mb-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl md:order-last">
            <Image
              src="/images/about-philosophy.jpg"
              alt="M-DAOの役割"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-bold">私たちの役割</h2>
            <p className="mb-4 text-lg text-gray-700">
              M-DAOは、このビジョンを実現するために、メタバース空間の設計・開発から、企業やクリエイターへの技術支援、イベントの企画・運営まで、幅広い活動を行っています。
            </p>
            <p className="mb-4 text-lg text-gray-700">
              特に、日本の豊かな文化資源を活用したメタバースコンテンツの開発には力を入れていき、世界中の人々が日本文化の魅力を新しい形で体験できるようなプロジェクトを多数手掛けていきます。
            </p>
            <p className="text-lg text-gray-700">
              カピバラ温泉をはじめとする親しみやすいVR空間の制作を通じて、テクノロジーと人間らしさが共存する未来を目指しています。
            </p>
          </div>
        </div>
      </section>

      {/* チーム紹介セクション */}
      <section className="mb-20">
        <h2 className="mb-10 text-center text-3xl font-bold">チーム紹介</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* チームメンバー1 */}
          <div className="overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-1">
            <div className="mb-4 aspect-square overflow-hidden rounded-full">
              <Image
                src="/images/team-member-1.jpg"
                alt="チームメンバー1"
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold">山田 太郎</h3>
            <p className="mb-3 text-green-600">CEO / VRアーキテクト</p>
            <p className="text-gray-600">
              10年以上のVR開発経験を持ち、大手企業のメタバースプロジェクトを多数手がける。
              カピバラ温泉VR空間のコンセプト考案者。
            </p>
          </div>

          {/* チームメンバー2 */}
          <div className="overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-1">
            <div className="mb-4 aspect-square overflow-hidden rounded-full">
              <Image
                src="/images/team-member-2.jpg"
                alt="チームメンバー2"
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold">佐藤 花子</h3>
            <p className="mb-3 text-green-600">クリエイティブディレクター</p>
            <p className="text-gray-600">
              アート&デザイン分野での豊富な経験を活かし、没入感のあるVR空間デザインを担当。
              ユーザー体験を最重視したデザインアプローチが特徴。
            </p>
          </div>

          {/* チームメンバー3 */}
          <div className="overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-1">
            <div className="mb-4 aspect-square overflow-hidden rounded-full">
              <Image
                src="/images/team-member-3.jpg"
                alt="チームメンバー3"
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold">鈴木 一郎</h3>
            <p className="mb-3 text-green-600">テクニカルリード / 3Dモデラー</p>
            <p className="text-gray-600">
              ゲーム業界出身のテクニカルアーティスト。高品質なアバターモデリングと
              パフォーマンス最適化の専門家。リアルタイムレンダリング技術に精通。
            </p>
          </div>
        </div>
      </section>

      {/* 会社情報セクション */}
      <section className="rounded-2xl bg-green-50 p-8">
        <h2 className="mb-6 text-2xl font-bold">会社情報</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <dl className="space-y-4">
              <div>
                <dt className="font-medium text-gray-500">会社名</dt>
                <dd className="text-lg">株式会社M-DAO</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500">設立</dt>
                <dd className="text-lg">2020年4月</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500">所在地</dt>
                <dd className="text-lg">東京都渋谷区メタバース通り1-1-1</dd>
              </div>
            </dl>
          </div>
          <div>
            <dl className="space-y-4">
              <div>
                <dt className="font-medium text-gray-500">事業内容</dt>
                <dd className="text-lg">VR空間制作、メタバースイベント運営、アバター制作</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500">従業員数</dt>
                <dd className="text-lg">25名（2025年5月現在）</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500">お問い合わせ</dt>
                <dd className="text-lg">
                  <Link href="/contact" className="text-green-600 hover:underline">
                    お問い合わせフォーム
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
