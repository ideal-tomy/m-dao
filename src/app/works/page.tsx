import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "実績 | M-DAO",
  description: "M-DAOのVR空間制作・イベント運営・アバター作成の実績をご紹介します。",
  keywords: ["実績", "VR空間", "メタバース", "イベント運営", "アバター作成", "M-DAO"],
};

// 実績データ
const worksData = [
  {
    id: "aopanda-land",
    title: "あおぱんだランド制作",
    category: "vr-space",
    categoryName: "VR空間制作",
    thumbnail: "/images/works-1.jpg",
    description: "vketcloudで制作した「あおぱんだランド」は、公式ワールドを除くプラットフォーム内での累計来場者数1位を達成。あおぱんだ公認クリエイターとして認定されました。",
    client: "一般公開",
    date: "2023年",
  },
  {
    id: "tanabata-live",
    title: "あおぱんだ七夕ライブ開催",
    category: "event",
    categoryName: "イベント運営",
    thumbnail: "/images/works-2.jpg",
    description: "2023年7月16日に開催した七夕ライブでは、三木道山氏を迎え、600名もの参加者が集まる大規模イベントとなりました。Riumプラットフォームを使用。",
    client: "あおぱんだプロジェクト",
    date: "2023年7月16日",
  },
  {
    id: "hanami-live",
    title: "お花見ライブイベント",
    category: "event",
    categoryName: "イベント運営",
    thumbnail: "/images/works-3.jpg",
    description: "2023年4月8日に開催したお花見ライブイベントには417名が参加。桜の季節を楽しむための特別なバーチャル空間を制作し、cluster上で展開しました。",
    client: "あおぱんだプロジェクト",
    date: "2023年4月8日",
  },
  {
    id: "halloween-event",
    title: "あおぱんだハロウィンイベント",
    category: "event",
    categoryName: "イベント運営",
    thumbnail: "/images/works-4.jpg",
    description: "2023年10月29日に開催したハロウィンイベントでは、特別な装飾と仮装コンテストを実施。302名の参加者が集まり、clusterプラットフォーム上で盛大に開催されました。",
    client: "あおぱんだプロジェクト",
    date: "2023年10月29日",
  },
  {
    id: "nemu-event",
    title: "バーチャル美少女ねむ氏登壇イベント",
    category: "event",
    categoryName: "イベント運営",
    thumbnail: "/images/works-5.jpg",
    description: "2023年9月9日にバーチャル美少女ねむ氏を特別ゲストに迎えた限定イベントを開催。参加者50名限定の特別な交流の場を提供しました。clusterプラットフォーム使用。",
    client: "一般社団法人あそび庁",
    date: "2023年9月9日",
  },
  {
    id: "christmas-event",
    title: "あおぱんだクリスマスイベント",
    category: "event",
    categoryName: "イベント運営",
    thumbnail: "/images/works-6.jpg",
    description: "2023年12月23日にvketcloud上で開催したクリスマスイベントには140名が参加。季節感あふれる特別な装飾とプログラムで参加者に喜ばれました。",
    client: "あおぱんだプロジェクト",
    date: "2023年12月23日",
  },
  {
    id: "valentine-event",
    title: "あおぱんだバレンタインイベント",
    category: "event",
    categoryName: "イベント運営",
    thumbnail: "/images/works-2.jpg",
    description: "2023年2月12日にcluster上で開催したバレンタインイベントには220名が参加。特別企画とバーチャルチョコレート作りワークショップが好評でした。",
    client: "あおぱんだプロジェクト",
    date: "2023年2月12日",
  },
  {
    id: "christmas-live-2022",
    title: "あおぱんだクリスマスライブ2022",
    category: "event",
    categoryName: "イベント運営",
    thumbnail: "/images/works-1.jpg",
    description: "2022年12月25日に開催した初のクリスマスライブイベントには135名が参加。cluster上での音楽パフォーマンスと交流の場を提供しました。",
    client: "あおぱんだプロジェクト",
    date: "2022年12月25日",
  },
  {
    id: "ninja-dao-projects",
    title: "NinjaDAO空間制作プロジェクト",
    category: "vr-space",
    categoryName: "VR空間制作",
    thumbnail: "/images/works-3.jpg",
    description: "2022年4月にNinjaDAO cluster事業部にて共同作業による空間制作案件を3件実施。これをきっかけに一般社団法人あそび庁様から個別に制作依頼を受けることになりました。",
    client: "NinjaDAO",
    date: "2022年4月",
  }
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

      {/* 実績概要 */}
      <div className="mb-16 rounded-xl bg-green-50 p-8">
        <h2 className="mb-6 text-2xl font-bold text-center">実績ハイライト</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-3 text-xl font-semibold text-green-700">空間制作実績</h3>
            <p className="text-gray-700">2024年4月現在、メタバース空間の制作実績は合計24件に達しています。</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-3 text-xl font-semibold text-green-700">イベント開催実績</h3>
            <p className="text-gray-700">これまでにメタバースイベントの企画・運営を合計20件実施し、多数の参加者を集めています。</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-3 text-xl font-semibold text-green-700">特別認定</h3>
            <p className="text-gray-700">vketcloudで制作した「あおぱんだランド」はプラットフォーム内で1位を獲得し、あおぱんだ公認クリエイターとして認定されています。</p>
          </div>
        </div>
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
