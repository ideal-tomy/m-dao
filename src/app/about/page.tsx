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

      {/* 理念セクション */}
      <section className="mb-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold">私たちの理念</h2>
            <p className="mb-4 text-lg text-gray-700">
              M-DAOは「メタバースを通じて、人々の生活と仕事に新しい価値を創造する」という理念のもと設立されました。
            </p>
            <p className="mb-4 text-lg text-gray-700">
              私たちは、VR技術を活用して、物理的な制約を超えた新しいコミュニケーションや体験の場を提供します。
              企業や団体がメタバース空間を活用し、新しいビジネスチャンスを創出するお手伝いをしています。
            </p>
            <p className="text-lg text-gray-700">
              カピバラ温泉をはじめとする親しみやすいVR空間の制作を通じて、
              テクノロジーと人間らしさが共存する未来を目指しています。
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/images/about-philosophy.jpg"
              alt="M-DAOの理念"
              fill
              className="object-cover"
            />
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
