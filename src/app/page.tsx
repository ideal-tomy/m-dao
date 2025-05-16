import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* ヒーローセクション - カピバラ温泉を強調 */}
      <section className="relative h-[90vh] overflow-hidden bg-gradient-to-b from-green-50 to-green-100">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/capybara-onsen.jpg"
            alt="カピバラ温泉背景"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </motion.div>
        
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-5xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl"
          >
            <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              カピバラとやすらぐメタバース体験
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 max-w-2xl text-xl text-gray-700"
          >
            M-DAOは、VR空間制作・イベント運営・アバター作成を通じて、
            企業・団体のメタバース活用をサポート。癒しのカピバラ温泉で、
            新しいリラクゼーション体験を提供します。
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/services"
              className="rounded-full bg-green-600 px-8 py-3 font-medium text-white transition-all hover:bg-green-700 hover:scale-105"
            >
              サービスを見る
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-green-600 bg-white px-8 py-3 font-medium text-green-600 transition-all hover:bg-green-50 hover:scale-105"
            >
              お問い合わせ
            </Link>
          </motion.div>
          
          <div className="mt-12 relative w-full max-w-4xl">
            <div className="aspect-video overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/images/capybara-onsen.jpg"
                alt="カピバラ温泉VR空間"
                width={1200}
                height={675}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white px-6 py-3 text-lg font-semibold text-green-600 shadow-lg">
              人気のカピバラ温泉VR空間
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* サービス紹介セクション */}
      <section className="py-20">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center text-3xl font-bold md:text-4xl"
          >
            私たちのサービス
          </motion.h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            {/* VR空間制作 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="mb-4 rounded-full bg-green-100 p-3 inline-block"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </motion.div>
              <h3 className="mb-3 text-xl font-semibold">VR空間制作</h3>
              <p className="mb-4 text-gray-600">
                カピバラ温泉を含むオリジナルのVR空間をデザイン・制作。企業ブランドに合わせた空間で、癒しの体験を提供します。
              </p>
              <Link href="/services#vr-space" className="text-green-600 font-medium hover:underline">
                詳しく見る &rarr;
              </Link>
            </motion.div>
            
            {/* イベント運営 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="mb-4 rounded-full bg-green-100 p-3 inline-block"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </motion.div>
              <h3 className="mb-3 text-xl font-semibold">イベント運営</h3>
              <p className="mb-4 text-gray-600">
                メタバース空間でのイベントやセミナーの企画・運営。リアルとバーチャルを組み合わせた新しいイベント体験を提供します。
              </p>
              <Link href="/services#event" className="text-green-600 font-medium hover:underline">
                詳しく見る &rarr;
              </Link>
            </motion.div>
            
            {/* アバター作成 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="mb-4 rounded-full bg-green-100 p-3 inline-block"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </motion.div>
              <h3 className="mb-3 text-xl font-semibold">アバター作成</h3>
              <p className="mb-4 text-gray-600">
                企業ブランドに合わせたオリジナルアバターのデザイン・制作。メタバース空間でのアイデンティティを確立します。
              </p>
              <Link href="/services#avatar" className="text-green-600 font-medium hover:underline">
                詳しく見る &rarr;
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* カピバラ温泉特集セクション */}
      <section className="py-24 bg-gradient-to-b from-white to-green-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">癒しのカピバラ温泉体験</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              リラックスしたカピバラたちと一緒に温泉を楽しむ、世界にただ一つの仮想空間をご体験ください
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="mb-4 rounded-full bg-orange-100 p-3 inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">リアルな温泉体験</h3>
              <p className="text-gray-600">
                本物の温泉の音や温度、香りまで再現したリアルな没入感のある仮想温泉空間です。
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="mb-4 rounded-full bg-orange-100 p-3 inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">かわいいカピバラたち</h3>
              <p className="text-gray-600">
                リアルな動きと表情を持つカピバラが、ゆったりと温泉に浮かぶ姿をお楽しみいただけます。
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="mb-4 rounded-full bg-orange-100 p-3 inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">インタラクティブな体験</h3>
              <p className="text-gray-600">
                カピバラと触れ合ったり、一緒に写真を撮ったりと、ユーザーとカピバラが交流できる機能が充実しています。
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="mb-4 rounded-full bg-orange-100 p-3 inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">美しい季節変化</h3>
              <p className="text-gray-600">
                春の桜、夏の涼風、秋の紅葉、冬の雪景色と、四季の移り変わりを温泉体験と共にお楽しみいただけます。
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <Link
              href="/services#vr-space"
              className="inline-block rounded-full bg-orange-500 px-8 py-4 font-medium text-white transition-all hover:bg-orange-600 hover:scale-105"
            >
              カピバラ温泉について詳しく見る
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* お問い合わせセクション */}
      <section className="bg-green-50 py-20">
        <div className="container text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-3xl font-bold md:text-4xl"
          >
            新しいメタバース体験を始めよう
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mb-8 max-w-2xl text-lg text-gray-600"
          >
            企業・団体のニーズに合わせたメタバースソリューションを提供します。
            まずはお気軽にご相談ください。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="/contact"
              className="inline-block rounded-full bg-green-600 px-8 py-4 font-medium text-white transition-colors hover:bg-green-700"
            >
              お問い合わせはこちら
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

