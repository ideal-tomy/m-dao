import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ブログ | M-DAO",
  description: "M-DAOのブログでは、VR空間制作・イベント運営・アバター作成に関する最新情報やトレンドをご紹介します。",
  keywords: ["ブログ", "VR空間", "メタバース", "イベント運営", "アバター作成", "M-DAO"],
};

// 本来はmicroCMSから取得するデータ
const blogData = [
  {
    id: "blog1",
    title: "メタバースイベントの効果的な運営方法",
    category: "event",
    categoryName: "イベント運営",
    thumbnail: "/images/blog-1.jpg",
    summary: "メタバース空間でのイベント運営に関する効果的な方法をご紹介します。参加者のエンゲージメントを高めるテクニックや成功事例から学ぶポイントを解説。",
    date: "2025年4月15日",
    author: "山田 太郎",
  },
  {
    id: "blog2",
    title: "VR空間デザインの最新トレンド",
    category: "vr-space",
    categoryName: "VR空間制作",
    thumbnail: "/images/blog-2.jpg",
    summary: "2025年に注目されるVR空間デザインの最新トレンドを解説。インタラクティブ要素や没入感を高めるデザインテクニックについて考察します。",
    date: "2025年4月5日",
    author: "佐藤 花子",
  },
  {
    id: "blog3",
    title: "アバターに逸脱感を持たせる表情実装のポイント",
    category: "avatar",
    categoryName: "アバター作成",
    thumbnail: "/images/blog-3.jpg",
    summary: "アバターに自然な表情と動きを実装するテクニックを紹介。リアルな表情の作り方や、自然な動きを実現するためのモデリング手法について解説します。",
    date: "2025年3月25日",
    author: "鈴木 一郎",
  },
  {
    id: "blog4",
    title: "企業がメタバースを活用すべき5つの理由",
    category: "business",
    categoryName: "ビジネス",
    thumbnail: "/images/blog-4.jpg",
    summary: "企業がビジネスでメタバースを活用すべき理由と具体的なメリットを解説。社内コミュニケーションの強化やマーケティング戦略への応用事例を紹介します。",
    date: "2025年3月15日",
    author: "山田 太郎",
  },
  {
    id: "blog5",
    title: "VR空間での必要なアクセシビリティ考慮",
    category: "vr-space",
    categoryName: "VR空間制作",
    thumbnail: "/images/blog-5.jpg",
    summary: "VR空間設計において考慮すべきアクセシビリティのポイントを解説。より多くのユーザーが利用しやすいメタバース環境を構築するためのテクニックを紹介します。",
    date: "2025年3月5日",
    author: "佐藤 花子",
  },
  {
    id: "blog6",
    title: "バーチャルアバターを使ったチームビルディングの効果",
    category: "avatar",
    categoryName: "アバター作成",
    thumbnail: "/images/blog-6.jpg",
    summary: "リモートワーク環境でのチームビルディングにバーチャルアバターを活用するメリットと具体的な活用事例を紹介。社内コミュニケーションの活性化事例から学ぶポイントを解説します。",
    date: "2025年2月25日",
    author: "鈴木 一郎",
  },
];

export default function BlogPage() {
  return (
    <div className="container py-12">
      {/* ページヘッダー */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">ブログ</h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-600">
          VR空間制作・イベント運営・アバター作成に関する最新情報やトレンドをお届けします
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
        <button className="rounded-full border border-gray-300 bg-white px-5 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50">
          ビジネス
        </button>
      </div>

      {/* ブログ記事一覧 */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogData.map((blog) => (
          <Link 
            key={blog.id}
            href={`/blog/${blog.id}`}
            className="group overflow-hidden rounded-xl bg-white shadow-lg transition-transform hover:-translate-y-1"
          >
            <div className="aspect-video overflow-hidden">
              <Image
                src={blog.thumbnail}
                alt={blog.title}
                width={600}
                height={340}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="mb-2 flex items-center justify-between">
                <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                  {blog.categoryName}
                </div>
                <span className="text-sm text-gray-500">{blog.date}</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold group-hover:text-green-600">{blog.title}</h3>
              <p className="mb-4 text-gray-600 line-clamp-3">{blog.summary}</p>
              <div className="text-sm text-gray-500">
                <span>著者: {blog.author}</span>
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
            3
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
