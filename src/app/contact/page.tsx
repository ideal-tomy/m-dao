import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "お問い合わせ | M-DAO",
  description: "M-DAOへのお問い合わせはこちらから。VR空間制作、イベント運営、アバター作成に関するご相談を承ります。",
  keywords: ["お問い合わせ", "M-DAO", "VR空間", "メタバース", "イベント運営", "アバター作成"],
};

export default function ContactPage() {
  return (
    <div className="container py-12">
      {/* ページヘッダー */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">お問い合わせ</h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-600">
          M-DAOへのお問い合わせはこちらのフォームからお願いします
        </p>
      </div>

      {/* お問い合わせフォーム */}
      <div className="mx-auto max-w-3xl">
        <form className="space-y-6 rounded-xl bg-white p-8 shadow-lg">
          <div className="grid gap-6 md:grid-cols-2">
            {/* 会社名 */}
            <div>
              <label htmlFor="company" className="mb-2 block font-medium text-gray-700">
                会社名
              </label>
              <input
                type="text"
                id="company"
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                placeholder="株式会社M-DAO"
              />
            </div>

            {/* 担当者名 */}
            <div>
              <label htmlFor="name" className="mb-2 block font-medium text-gray-700">
                担当者名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                placeholder="山田 太郎"
                required
              />
            </div>
          </div>

          {/* メールアドレス */}
          <div>
            <label htmlFor="email" className="mb-2 block font-medium text-gray-700">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
              placeholder="example@m-dao.jp"
              required
            />
          </div>

          {/* 電話番号 */}
          <div>
            <label htmlFor="phone" className="mb-2 block font-medium text-gray-700">
              電話番号
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
              placeholder="03-1234-5678"
            />
          </div>

          {/* お問い合わせ内容 */}
          <div>
            <label htmlFor="inquiry-type" className="mb-2 block font-medium text-gray-700">
              お問い合わせ内容 <span className="text-red-500">*</span>
            </label>
            <select
              id="inquiry-type"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
              required
            >
              <option value="">選択してください</option>
              <option value="vr-space">VR空間制作について</option>
              <option value="event">イベント運営について</option>
              <option value="avatar">アバター作成について</option>
              <option value="other">その他</option>
            </select>
          </div>

          {/* お問い合わせ詳細 */}
          <div>
            <label htmlFor="message" className="mb-2 block font-medium text-gray-700">
              お問い合わせ詳細 <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
              placeholder="お問い合わせ内容の詳細をご記入ください"
              required
            ></textarea>
          </div>

          {/* プライバシーポリシー */}
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="privacy"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="privacy" className="font-medium text-gray-700">
                <Link href="#" className="text-green-600 hover:underline">
                  プライバシーポリシー
                </Link>
                に同意します <span className="text-red-500">*</span>
              </label>
            </div>
          </div>

          {/* 送信ボタン */}
          <div className="text-center">
            <button
              type="submit"
              className="rounded-full bg-green-600 px-8 py-3 font-medium text-white transition-colors hover:bg-green-700"
            >
              送信する
            </button>
          </div>
        </form>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="mb-6 text-center text-2xl font-bold">よくあるご質問</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 bg-white">
              <button className="flex w-full items-center justify-between p-4 text-left font-medium">
                <span>VR空間の制作にはどのくらいの期間がかかりますか？</span>
                <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="border-t border-gray-200 p-4 text-gray-600">
                規模や複雑さによって異なりますが、一般的な企業向けVR空間の場合、企画から納品まで約2〜3ヶ月程度お時間をいただいております。
                急ぎの案件についてはご相談ください。
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white">
              <button className="flex w-full items-center justify-between p-4 text-left font-medium">
                <span>メタバースイベントの参加に特別な機器は必要ですか？</span>
                <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="border-t border-gray-200 p-4 text-gray-600">
                基本的にはパソコンとインターネット環境があれば参加可能です。
                VRヘッドセットをお持ちの場合はより没入感のある体験ができますが、必須ではありません。
                スマートフォンからの参加も一部のプラットフォームでは可能です。
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white">
              <button className="flex w-full items-center justify-between p-4 text-left font-medium">
                <span>アバター作成の納品形式は何ですか？</span>
                <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="border-t border-gray-200 p-4 text-gray-600">
                VRChat、cluster、VRoid等、ご希望のプラットフォームに合わせた形式で納品いたします。
                3Dモデルデータ（.fbx, .vrm等）やテクスチャファイルも含まれます。
                使用目的や環境に応じて最適な形式をご提案いたします。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
