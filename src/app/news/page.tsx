import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "お知らせ | M-DAO",
  description: "M-DAOの最新のお知らせやイベント情報、プレスリリースをご覧いただけます。",
  keywords: ["お知らせ", "ニュース", "プレスリリース", "イベント", "M-DAO"],
};

// 本来はmicroCMSから取得するデータ
const newsData = [
  {
    id: "news1",
    title: "カピバラ温泉をテーマにしたVR空間がメタバース賞を受賞",
    category: "award",
    categoryName: "受賞",
    thumbnail: "/images/news-1.jpg",
    summary: "当社が制作したカピバラ温泉をテーマにしたVR空間が、国際メタバースアワード2025で「最も癒される空間デザイン賞」を受賞しました。",
    date: "2025年4月15日",
  },
  {
    id: "news2",
    title: "メタバースイベント支援サービスの新プランを発表",
    category: "service",
    categoryName: "サービス",
    thumbnail: "/images/news-2.jpg",
    summary: "企業向けのメタバースイベント支援サービスに新プラン「企業研修パッケージ」を追加しました。リモートワーク環境下での効果的な社員研修を実現します。",
    date: "2025年4月1日",
  },
  {
    id: "news3",
    title: "大手テクノロジー企業と戦略的パートナーシップを締結",
    category: "partnership",
    categoryName: "パートナーシップ",
    thumbnail: "/images/news-3.jpg",
    summary: "メタバース技術の発展と普及を加速するため、大手テクノロジー企業と戦略的パートナーシップを締結しました。両社の技術を組み合わせ、より高品質なメタバース体験を提供します。",
    date: "2025年3月15日",
  },
  {
    id: "news4",
    title: "年次メタバースカンファレンス「M-CON 2025」開催のお知らせ",
    category: "event",
    categoryName: "イベント",
    thumbnail: "/images/news-4.jpg",
    summary: "最新のメタバース技術とトレンドを共有する年次カンファレンス「M-CON 2025」を5月15日にハイブリッド形式で開催します。業界の専門家によるパネルディスカッションやワークショップを予定しています。",
    date: "2025年3月1日",
  },
  {
    id: "news5",
    title: "新オフィスへの移転のお知らせ",
    category: "company",
    categoryName: "企業情報",
    thumbnail: "/images/news-5.jpg",
    summary: "事業拡大に伴い、2025年2月より新オフィスに移転いたしました。新しいオフィスでは最新のVR開発環境を整備し、さらなる技術革新を目指します。",
    date: "2025年2月15日",
  },
  {
    id: "news6",
    title: "採用情報更新のお知らせ",
    category: "recruit",
    categoryName: "採用",
    thumbnail: "/images/news-6.jpg",
    summary: "事業拡大に伴い、VR開発エンジニアとメタバースイベントプランナーの採用を強化しています。詳細は採用ページをご覧ください。",
    date: "2025年2月1日",
  },
];

export default function NewsPage() {
  return (
    <div className="container py-12">
      {/* ページヘッダー */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">お知らせ</h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-600">
          M-DAOからの最新のお知らせやイベント情報をご覧いただけます
        </p>
      </div>

      {/* カテゴリーフィルター */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        <button className="rounded-full bg-green-600 px-5 py-2 font-medium text-white transition-colors hover:bg-green-700">
          すべて
        </button>
        <button className="rounded-full border border-gray-300 bg-white px-5 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50">
          イベント
        </button>
        <button className="rounded-full border border-gray-300 bg-white px-5 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50">
          サービス
        </button>
        <button className="rounded-full border border-gray-300 bg-white px-5 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50">
          企業情報
        </button>
        <button className="rounded-full border border-gray-300 bg-white px-5 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50">
          パートナーシップ
        </button>
      </div>

      {/* ニュース一覧 */}
      <div className="space-y-6">
        {newsData.map((news) => (
          <Link 
            key={news.id}
            href={`/news/${news.id}`}
            className="group block overflow-hidden rounded-xl bg-white shadow-lg transition-transform hover:-translate-y-1"
          >
            <div className="grid gap-6 p-6 md:grid-cols-5">
              <div className="relative aspect-video overflow-hidden rounded-lg md:col-span-2">
                <Image
                  src={news.thumbnail}
                  alt={news.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="md:col-span-3">
                <div className="mb-2 flex items-center justify-between">
                  <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                    {news.categoryName}
                  </div>
                  <span className="text-sm text-gray-500">{news.date}</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold group-hover:text-green-600">{news.title}</h3>
                <p className="text-gray-600">{news.summary}</p>
                <div className="mt-4 text-right">
                  <span className="inline-flex items-center text-sm font-medium text-green-600 group-hover:text-green-700">
                    詳細を見る
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ページネーション */}
      <div className="mt-12 flex justify-center">
        <nav className="flex space-x-2" aria-label="Pagination">
          <a
            href="#"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            前のページ
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-md border border-transparent bg-green-600 px-3 py-2 text-sm font-medium text-white"
          >
            1
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            2
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            次のページ
          </a>
        </nav>
      </div>
    </div>
  );
}
