import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "サービス | VR空間制作・イベント運営・アバター作成",
  description: "M-DAOが提供するVR空間制作、メタバースイベント運営、アバター作成サービスの詳細をご紹介します。",
  keywords: ["VR空間", "メタバース", "イベント運営", "アバター作成", "カピバラ温泉"],
};

// 型定義
type ServiceFeatureCardProps = {
  title: string;
  children: React.ReactNode;
  bgColor?: string;
};

type FeatureItemProps = {
  title: string;
  description: string;
};

type ServiceSectionProps = {
  id: string;
  title: string;
  description: string | string[];
  image: string;
  imageAlt: string;
  children: React.ReactNode;
  imageFirst?: boolean;
};

type ChecklistItemProps = {
  text: string;
};

// 共通のサービスカードコンポーネント
const ServiceFeatureCard = ({ title, children, bgColor = 'bg-gray-50' }: ServiceFeatureCardProps) => (
  <div className={`mb-6 rounded-xl ${bgColor} p-6 shadow-sm`}>
    <h4 className="mb-3 text-xl font-semibold text-green-700">{title}</h4>
    <div className="grid gap-4 md:grid-cols-2">
      {children}
    </div>
  </div>
);

// 共通のサービスフィーチャーアイテムコンポーネント
const FeatureItem = ({ title, description }: FeatureItemProps) => (
  <div>
    <h5 className="mb-2 font-medium text-gray-900">{title}</h5>
    <p className="text-gray-700">
      {description}
    </p>
  </div>
);

// 2x2グリッドレイアウトのサービスセクションコンポーネント
type ServiceGridSectionProps = {
  id: string;
  title: string;
  description: string | string[];
  image: string;
  imageAlt: string;
  technicalInfo: React.ReactNode;
  features: React.ReactNode;
  cases?: React.ReactNode;
};

const ServiceGridSection = ({ id, title, description, image, imageAlt, technicalInfo, features, cases }: ServiceGridSectionProps) => (
  <section id={id} className="mb-16 scroll-mt-20">
    
    {/* 2x2グリッドレイアウト */}
    <div className="grid gap-8 md:grid-cols-2">
      {/* 左上: タu30a4u30c8u30ebu3068サービス説明 */}
      <div className="order-2 flex flex-col justify-center md:order-1">
        <h2 className="mb-6 text-3xl font-bold">{title}</h2>
        {typeof description === 'string' ? (
          <p className="mb-4 text-lg text-gray-700">
            {description}
          </p>
        ) : (
          description.map((para: string, idx: number) => (
            <p key={idx} className="mb-4 text-lg text-gray-700">
              {para}
            </p>
          ))
        )}
      </div>
      
      {/* 右上: サービスイメージ */}
      <div className="relative order-1 aspect-video overflow-hidden rounded-xl shadow-xl md:order-2">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
      
      {/* 左下: 技術情報 */}
      <div className="order-3">
        {technicalInfo}
      </div>
      
      {/* 右下: 主な特徴とお問い合わせボタン */}
      <div className="order-4">
        {features}
        
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
    
    {/* 事例セクション */}
    {cases && (
      <div className="mt-16">
        <h3 className="mb-6 text-2xl font-bold">制作事例</h3>
        {cases}
      </div>
    )}
  </section>
);

// 制作事例カードコンポーネント
type CaseCardProps = {
  image: string;
  title: string;
  description: string;
  alt: string;
};

const CaseCard = ({ image, title, description, alt }: CaseCardProps) => (
  <div className="overflow-hidden rounded-xl bg-white shadow-lg">
    <div className="aspect-video overflow-hidden">
      <Image
        src={image}
        alt={alt}
        width={600}
        height={340}
        className="h-full w-full object-cover transition-transform hover:scale-105"
      />
    </div>
    <div className="p-6">
      <h4 className="mb-2 text-xl font-semibold">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

// チェックリストアイテムコンポーネント
const ChecklistItem = ({ text }: ChecklistItemProps) => (
  <li className="flex items-start">
    <svg className="mr-2 h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    <span>{text}</span>
  </li>
);

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
      <ServiceGridSection
        id="vr-space"
        title="VR空間制作"
        description={[
          "オリジナルのVR空間をデザイン・制作し、企業ブランドに合わせた没入感のある体験を提供します。展示会、バーチャルオフィス、商品展示など、目的に応じた空間設計が可能です。",
          "メタバース空間構築に必要な3Dデザイン技術やプログラミング、音響技術など多岐にわたる技術を組み合わせ、当社は様々な技術を習得したメンバーによるチームでDAOの形態を実現しています。"
        ]}
        image="/images/vr-space-service.jpg"
        imageAlt="VR空間制作サービス"
        technicalInfo={
          <ServiceFeatureCard title="技術情報">
            <div>
              <h5 className="mb-2 font-medium text-gray-900">使用ソフトウェア</h5>
              <ul className="space-y-1 text-gray-700">
                <li>• Blender - 3Dモデリング・テクスチャ作成</li>
                <li>• Unity - ゲームエンジンと空間構築</li>
              </ul>
            </div>
            <div>
              <h5 className="mb-2 font-medium text-gray-900">対応プラットフォーム</h5>
              <ul className="space-y-1 text-gray-700">
                <li>• cluster</li>
                <li>• vket cloud</li>
                <li>• VRChat</li>
                <li>• Rium</li>
                <li>• XANA</li>
              </ul>
            </div>
          </ServiceFeatureCard>
        }
        features={
          <div>
            <h3 className="mb-3 text-xl font-semibold">主な特徴</h3>
            <ul className="mb-6 space-y-2 text-lg text-gray-700">
              <ChecklistItem text="ブランドに合わせたカスタムデザイン" />
              <ChecklistItem text="複数プラットフォーム対応（VRChat、cluster等）" />
              <ChecklistItem text="インタラクティブ要素の実装" />
              <ChecklistItem text="最適化されたパフォーマンス" />
            </ul>
          </div>
        }
        cases={
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <CaseCard
              image="/images/vr-case-1.jpg"
              title="カピバラ温泉VR"
              description="人気のカピバラ温泉をモチーフにしたリラックス空間。自然音や温泉エフェクトで没入感を高めた癒し系VR空間。"
              alt="カピバラ温泉VR"
            />
            <CaseCard
              image="/images/vr-case-2.jpg"
              title="企業バーチャルオフィス"
              description="リモートワーク時代に対応した仮想オフィス空間。会議室やコラボレーションスペースを完備。"
              alt="企業バーチャルオフィス"
            />
            <CaseCard
              image="/images/vr-case-3.jpg"
              title="バーチャル展示会"
              description="製品展示とインタラクティブなデモが可能な展示会空間。来場者データの収集・分析機能も実装。"
              alt="バーチャル展示会"
            />
          </div>
        }
      />
      

      
      {/* イベント運営 */}
      <ServiceGridSection
        id="event-management"
        title="イベント運営"
        description={[
          "メタバース空間でのイベントやセミナーの企画・運営をサポート。リアルとバーチャルを組み合わせたハイブリッドイベントや、完全バーチャルでのイベント開催が可能です。企業説明会、製品発表会、社内研修など、様々な用途に対応します。"
        ]}
        image="/images/event-service.jpg"
        imageAlt="メタバースイベント運営サービス"
        technicalInfo={
          <div>
            <ServiceFeatureCard title="企画・提案サービス" bgColor="bg-gray-50">
              <FeatureItem
                title="AIを活用したコンセプトデザイン"
                description="AI技術を活用してクライアントの要望に基づいた空間デザインの提案を迅速に行います。初期コンセプトの段階から複数のデザイン案を生成し、リアルタイムで調整を加えます。"
              />
              <FeatureItem
                title="空間容量の軽量化技術"
                description="高品質なビジュアルを維持しながら、空間容量の軽量化を実現するための最適化テクニックを駆使し、スムーズな体験を提供します。"
              />
            </ServiceFeatureCard>
          </div>
        }
        features={
          <div>
            <ServiceFeatureCard title="メタバースイベントサポート" bgColor="bg-green-50">
              <FeatureItem
                title="音楽ライブ配信サポート"
                description="メタバース内の音楽ライブイベントに必要な配信機器の選定、設定、ライブ中の技術サポートまで、イベント運営者を全面的にサポートします。"
              />
              <FeatureItem
                title="トラブル対応・運営サポート"
                description="イベント開催中のリアルタイムでの技術サポートとシステムトラブル発生時の迅速な対応で、安定したイベント運営を支援します。"
              />
            </ServiceFeatureCard>
            
            <h3 className="mb-3 mt-6 text-xl font-semibold">主な特徴</h3>
            <ul className="mb-6 space-y-2 text-lg text-gray-700">
              <ChecklistItem text="企画から実施までのトータルサポート" />
              <ChecklistItem text="参加者データの収集・分析" />
              <ChecklistItem text="インタラクティブなコンテンツ設計" />
              <ChecklistItem text="リアルイベントとの連携" />
            </ul>
          </div>
        }
        cases={
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <CaseCard
              image="/images/event-case-1.jpg"
              title="バーチャル音楽フェス"
              description="複数のアーティストが出演するオンライン音楽フェスティバル。リアルタイムでの親交機能を実装。"
              alt="バーチャル音楽フェス"
            />
            <CaseCard
              image="/images/event-case-2.jpg"
              title="企業向けバーチャル展示会"
              description="大規模オンライン展示会の企画・運営・技術サポート。参加者行動分析ツールを提供。"
              alt="企業向けバーチャル展示会"
            />
            <CaseCard
              image="/images/event-case-3.jpg"
              title="バーチャル大学キャンパス見学会"
              description="全国各地の学生が参加できるバーチャルキャンパス見学会。インタラクティブな説明システムを実装。"
              alt="バーチャル大学キャンパス見学会"
            />
          </div>
        }
      />
      
      {/* アバター作成 */}
      <ServiceGridSection
        id="avatar"
        title="アバター作成"
        description={[
          "企業ブランドに合わせたオリジナルアバターのデザイン・制作を行います。社員用アバター、マスコットキャラクター、イベント用特別アバターなど、メタバース空間でのアイデンティティを確立するお手伝いをします。",
          "メタバース形成の根幹となる3Dデザイン。特に、アバターは、この3D空間上の自分を表現する重要な要素です。外出時の身だしなみ同様、メタバース空間でのアバターは個人や企業のアイデンティティに関わる重要な要素です。"
        ]}
        image="/images/avatar-service.jpg"
        imageAlt="アバター制作サービス"
        technicalInfo={
          <ServiceFeatureCard title="アバター制作の特色">
            <FeatureItem
              title="専門技術と経験"
              description="オリジナルアバター制作には、専門的な3Dデザイン技術だけでなく、デザインセンスやメタバース空間仕様を考慮した調整ノウハウが必要です。"
            />
            <FeatureItem
              title="オーダーメイド対応"
              description="当社は自社デザイナーと多くの3Dデザイナーネットワークを通じて、企業様はもちろん、個人利用向けのオーダーメイドアバター制作に対応しています。"
            />
          </ServiceFeatureCard>
        }
        features={
          <div>
            <h3 className="mb-3 mt-3 text-xl font-semibold">主な特徴</h3>
            <ul className="mb-6 space-y-2 text-lg text-gray-700">
              <ChecklistItem text="ブランドイメージに合わせたデザイン" />
              <ChecklistItem text="高品質な3Dモデリング" />
              <ChecklistItem text="表情やジェスチャーの実装" />
              <ChecklistItem text="複数プラットフォーム対応" />
            </ul>
          </div>
        }
        cases={
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <CaseCard
              image="/images/avatar-case-1.jpg"
              title="企業マスコットアバター"
              description="企業のマスコットキャラクターをVR空間で活用できる3Dアバター化。表情やモーションを詳細に実装。"
              alt="企業マスコットアバター"
            />
            <CaseCard
              image="/images/avatar-case-2.jpg"
              title="社員用ビジネスアバター"
              description="バーチャルオフィスやバーチャル展示会などで使用する社員用ビジネスアバターの制作。ブランドカラーに合わせたデザイン。"
              alt="社員用ビジネスアバター"
            />
            <CaseCard
              image="/images/avatar-case-3.jpg"
              title="オリジナルキャラクターアバター"
              description="クライアントのオリジナルキャラクターのアバター化。ファングッズとしても利用可能な複数バージョンを実装。"
              alt="オリジナルキャラクターアバター"
            />
          </div>
        }
      />

      {/* コンタクトセクション */}
      <section className="mt-24 rounded-2xl bg-green-50 p-8 md:p-12">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold">メタバースで新しい体験を始めませんか？</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
            あなたのビジョンをメタバースで実現しましょう。詳細についてはお気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-green-600 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-green-700"
          >
            無料相談を予約する
          </Link>
        </div>
      </section>
    </div>
  );
}
