import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "実績 | M-DAO",
  description: "M-DAOのVR空間制作・イベント運営・アバター作成の実績をご紹介します。",
  keywords: ["実績", "VR空間", "メタバース", "イベント運営", "アバター作成", "M-DAO"],
};

// 本来はmicroCMSから取得するデータ
const worksData = [
  {
    id: "work1",
    title: "大手企業向けバーチャルオフィス構築",
    category: "vr-space",
    categoryName: "VR空間制作",
    thumbnail: "/images/works-1.jpg",
    description: "リモートワーク環境を強化するための大規模バーチャルオフィスを構築。会議室、コラボレーションスペース、カジュアルな交流エリアを備えた空間設計。",
    client: "株式会社テクノファイブ",
    date: "2024年3月",
  },
  {
    id: "work2",
    title: "メタバース展示会プラットフォーム開発",
    category: "event",
    categoryName: "イベント運営",
    thumbnail: "/images/works-2.jpg",
    description: "COVID-19対策として物理的な展示会を代替するバーチャル展示会プラットフォームを開発。3Dブース展示、ライブプレゼンテーション、商談機能を実装。",
    client: "イベントテック株式会社",
    date: "2024年1月",
  },
  {
    id: "work3",
    title: "企業マスコットキャラクターのアバター化",
    category: "avatar",
    categoryName: "アバター作成",
    thumbnail: "/images/works-3.jpg",
    description: "人気企業マスコットキャラクターをVR空間で活用可能なアバターとして開発。表情や動きの特徴を忠実に再現し、広報活動やイベントで活用。",
    client: "株式会社クリエイティブワールド",
    date: "2023年12月",
  },
  {
    id: "work4",
    title: "カピバラ温泉VR空間",
    category: "vr-space",
    categoryName: "VR空間制作",
    thumbnail: "/images/works-4.jpg",
    description: "人気の観光地「カピバラ温泉」をモチーフにしたリラクゼーション用VR空間を開発。自然音や温泉エフェクトによる高い没入感を実現。",
    client: "バーチャルリゾート株式会社",
    date: "2023年11月",
  },
  {
    id: "work5",
    title: "バーチャル社員研修プログラム",
    category: "event",
    categoryName: "イベント運営",
    thumbnail: "/images/works-5.jpg",
    description: "全国各地の社員が参加可能なバーチャル研修プログラムを企画・運営。インタラクティブなワークショップ形式で効果的な学習体験を提供。",
    client: "グローバルHR株式会社",
    date: "2023年10月",
  },
  {
    id: "work6",
    title: "社員向けカスタムアバターシステム",
    category: "avatar",
    categoryName: "アバター作成",
    thumbnail: "/images/works-6.jpg",
    description: "企業ブランドを反映しながら個人の特徴も表現できる、社員用カスタムアバター作成システムを開発。バーチャルオフィスでの使用を想定。",
    client: "株式会社テクノファイブ",
    date: "2023年9月",
  },
];

export default function WorksPage() {
  return (
    <div className="container py-12">
      {/* ページヘッダー */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">実績</h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-600">
          私たちのVR空間制作・イベント運営・アバター作成の事例をご紹介します
        </p>
      </div>

      {/* カテゴリーフィルター */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        <button className="rounded-full bg-green-600 px-5 py-2 font-medium text-white transition-colors hover:bg-green-700">
          すべて
        </button>
        <button className="rounded-full border border-gray-300 bg-white px-5 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50">
          VR空間制作
        </button>
        <button className="rounded-full border border-gray-300 bg-white px-5 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50">
          イベント運営
        </button>
        <button className="rounded-full border border-gray-300 bg-white px-5 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50">
          アバター作成
        </button>
      </div>

      {/* 実績一覧 */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {worksData.map((work) => (
          <Link 
            key={work.id}
            href={`/works/${work.id}`}
            className="group overflow-hidden rounded-xl bg-white shadow-lg transition-transform hover:-translate-y-1"
          >
            <div className="aspect-video overflow-hidden">
              <Image
                src={work.thumbnail}
                alt={work.title}
                width={600}
                height={340}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="mb-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                {work.categoryName}
              </div>
              <h3 className="mb-3 text-xl font-semibold group-hover:text-green-600">{work.title}</h3>
              <p className="mb-4 text-gray-600 line-clamp-2">{work.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{work.client}</span>
                <span>{work.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 問い合わせCTA */}
      <div className="mt-16 rounded-2xl bg-green-50 p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">あなたのプロジェクトについてご相談ください</h2>
        <p className="mx-auto mb-6 max-w-2xl text-lg text-gray-600">
          私たちはあなたのビジョンを実現するための最適なVRソリューションを提供します。
          お気軽にご相談ください。
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-full bg-green-600 px-8 py-4 font-medium text-white transition-colors hover:bg-green-700"
        >
          お問い合わせはこちら
        </Link>
      </div>
    </div>
  );
}
