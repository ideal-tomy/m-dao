import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "u30d6u30edu30b0 | M-DAO",
  description: "M-DAOu306eu30d6u30edu30b0u3067u306fu3001VRu7a7au9593u5236u4f5cu30fbu30a4u30d9u30f3u30c8u904bu55b6u30fbu30a2u30d0u30bfu30fcu4f5cu6210u306bu95a2u3059u308bu6700u65b0u60c5u5831u3084u30c8u30ecu30f3u30c9u3092u3054u7d39u4ecbu3057u307eu3059u3002",
  keywords: ["u30d6u30edu30b0", "VRu7a7au9593", "u30e1u30bfu30d0u30fcu30b9", "u30a4u30d9u30f3u30c8u904bu55b6", "u30a2u30d0u30bfu30fcu4f5cu6210", "M-DAO"],
};

// u672cu6765u306fmicroCMSu304bu3089u53d6u5f97u3059u308bu30c7u30fcu30bf
const blogData = [
  {
    id: "blog1",
    title: "u30e1u30bfu30d0u30fcu30b9u30a4u30d9u30f3u30c8u306eu52b9u679cu7684u306au904bu55b6u65b9u6cd5",
    category: "event",
    categoryName: "u30a4u30d9u30f3u30c8u904bu55b6",
    thumbnail: "/images/blog-1.jpg",
    summary: "u30e1u30bfu30d0u30fcu30b9u7a7au9593u3067u306eu30a4u30d9u30f3u30c8u904bu55b6u306bu95a2u3059u308bu52b9u679cu7684u306au65b9u6cd5u3092u3054u7d39u4ecbu3057u307eu3059u3002u53c2u52a0u8005u306eu30a8u30f3u30b2u30fcu30b8u30e1u30f3u30c8u3092u9ad8u3081u308bu30c6u30afu30cbu30c3u30afu3084u6210u529fu4e8bu4f8bu304bu3089u5b66u3076u30ddu30a4u30f3u30c8u3092u89e3u8aacu3002",
    date: "2025u5e744u670815u65e5",
    author: "u5c71u7530 u592au90ce",
  },
  {
    id: "blog2",
    title: "VRu7a7au9593u30c7u30b6u30a4u30f3u306eu6700u65b0u30c8u30ecu30f3u30c9",
    category: "vr-space",
    categoryName: "VRu7a7au9593u5236u4f5c",
    thumbnail: "/images/blog-2.jpg",
    summary: "2025u5e74u306bu6ce8u76eeu3055u308cu308bVRu7a7au9593u30c7u30b6u30a4u30f3u306eu6700u65b0u30c8u30ecu30f3u30c9u3092u89e3u8aacu3002u30a4u30f3u30bfu30e9u30afu30c6u30a3u30d6u8981u7d20u3084u6ca1u5165u611fu3092u9ad8u3081u308bu30c7u30b6u30a4u30f3u30c6u30afu30cbu30c3u30afu306bu3064u3044u3066u8003u5bdfu3057u307eu3059u3002",
    date: "2025u5e744u67085u65e5",
    author: "u4f50u85e4 u82b1u5b50",
  },
  {
    id: "blog3",
    title: "u30a2u30d0u30bfu30fcu306bu9038u8131u611fu3092u6301u305fu305bu308bu8868u60c5u5b9fu88c5u306eu30ddu30a4u30f3u30c8",
    category: "avatar",
    categoryName: "u30a2u30d0u30bfu30fcu4f5cu6210",
    thumbnail: "/images/blog-3.jpg",
    summary: "u30a2u30d0u30bfu30fcu306bu81eau7136u306au8868u60c5u3068u52d5u304du3092u5b9fu88c5u3059u308bu30c6u30afu30cbu30c3u30afu3092u7d39u4ecbu3002u30eau30a2u30ebu306au8868u60c5u306eu4f5cu308au65b9u3084u3001u81eau7136u306au52d5u304du3092u5b9fu73feu3059u308bu305fu3081u306eu30e2u30c7u30eau30f3u30b0u624bu6cd5u306bu3064u3044u3066u89e3u8aacu3057u307eu3059u3002",
    date: "2025u5e743u670825u65e5",
    author: "u9234u6728 u4e00u90ce",
  },
  {
    id: "blog4",
    title: "u4f01u696du304cu30e1u30bfu30d0u30fcu30b9u3092u6d3bu7528u3059u3079u304d5u3064u306eu7406u7531",
    category: "business",
    categoryName: "u30d3u30b8u30cdu30b9",
    thumbnail: "/images/blog-4.jpg",
    summary: "u4f01u696du304cu30d3u30b8u30cdu30b9u3067u30e1u30bfu30d0u30fcu30b9u3092u6d3bu7528u3059u3079u304du7406u7531u3068u5177u4f53u7684u306au30e1u30eau30c3u30c8u3092u89e3u8aacu3002u793eu5185u30b3u30dfu30e5u30cbu30b1u30fcu30b7u30e7u30f3u306eu5f37u5316u3084u30deu30fcu30b1u30c6u30a3u30f3u30b0u6226u7565u3078u306eu5fdcu7528u4e8bu4f8bu3092u7d39u4ecbu3057u307eu3059u3002",
    date: "2025u5e743u670815u65e5",
    author: "u5c71u7530 u592au90ce",
  },
  {
    id: "blog5",
    title: "VRu7a7au9593u3067u306eu5fc5u8981u306au30a2u30afu30bbu30b7u30d3u30eau30c6u30a3u8003u616e",
    category: "vr-space",
    categoryName: "VRu7a7au9593u5236u4f5c",
    thumbnail: "/images/blog-5.jpg",
    summary: "VRu7a7au9593u8a2du8a08u306bu304au3044u3066u8003u616eu3059u3079u304du30a2u30afu30bbu30b7u30d3u30eau30c6u30a3u306eu30ddu30a4u30f3u30c8u3092u89e3u8aacu3002u3088u308au591au304fu306eu30e6u30fcu30b6u30fcu304cu5229u7528u3057u3084u3059u3044u30e1u30bfu30d0u30fcu30b9u74b0u5883u3092u69cbu7bc9u3059u308bu305fu3081u306eu30c6u30afu30cbu30c3u30afu3092u7d39u4ecbu3057u307eu3059u3002",
    date: "2025u5e743u67085u65e5",
    author: "u4f50u85e4 u82b1u5b50",
  },
  {
    id: "blog6",
    title: "u30d0u30fcu30c1u30e3u30ebu30a2u30d0u30bfu30fcu3092u4f7fu3063u305fu30c1u30fcu30e0u30d3u30ebu30c7u30a3u30f3u30b0u306eu52b9u679c",
    category: "avatar",
    categoryName: "u30a2u30d0u30bfu30fcu4f5cu6210",
    thumbnail: "/images/blog-6.jpg",
    summary: "u30eau30e2u30fcu30c8u30efu30fcu30afu74b0u5883u3067u306eu30c1u30fcu30e0u30d3u30ebu30c7u30a3u30f3u30b0u306bu30d0u30fcu30c1u30e3u30ebu30a2u30d0u30bfu30fcu3092u6d3bu7528u3059u308bu30e1u30eau30c3u30c8u3068u5177u4f53u7684u306au6d3bu7528u4e8bu4f8bu3092u7d39u4ecbu3002u793eu5185u30b3u30dfu30e5u30cbu30b1u30fcu30b7u30e7u30f3u306eu6d3bu6027u5316u4e8bu4f8bu304bu3089u5b66u3076u30ddu30a4u30f3u30c8u3092u89e3u8aacu3057u307eu3059u3002",
    date: "2025u5e742u670825u65e5",
    author: "u9234u6728 u4e00u90ce",
  },
];

export default function BlogPage() {
  return (
    <div className="container py-12">
      {/* u30dau30fcu30b8u30d8u30c3u30c0u30fc */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">u30d6u30edu30b0</h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-600">
          VRu7a7au9593u5236u4f5cu30fbu30a4u30d9u30f3u30c8u904bu55b6u30fbu30a2u30d0u30bfu30fcu4f5cu6210u306bu95a2u3059u308bu6700u65b0u60c5u5831u3084u30c8u30ecu30f3u30c9u3092u304au5c4au3051u3057u307eu3059
        </p>
      </div>

      {/* u30abu30c6u30b4u30eau30fcu30d5u30a3u30ebu30bfu30fc */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        <button className="rounded-full bg-green-600 px-5 py-2 font-medium text-white transition-colors hover:bg-green-700">
          u3059u3079u3066
        </button>
        <button className="rounded-full border border-gray-300 bg-white px-5 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50">
          VRu7a7au9593u5236u4f5c
        </button>
        <button className="rounded-full border border-gray-300 bg-white px-5 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50">
          u30a4u30d9u30f3u30c8u904bu55b6
        </button>
        <button className="rounded-full border border-gray-300 bg-white px-5 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50">
          u30a2u30d0u30bfu30fcu4f5cu6210
        </button>
        <button className="rounded-full border border-gray-300 bg-white px-5 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50">
          u30d3u30b8u30cdu30b9
        </button>
      </div>

      {/* u30d6u30edu30b0u8a18u4e8bu4e00u89a7 */}
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
                <span>u8457u8005: {blog.author}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* u30dau30fcu30b8u30cdu30fcu30b7u30e7u30f3 */}
      <div className="mt-12 flex justify-center">
        <nav className="flex space-x-2" aria-label="Pagination">
          <a
            href="#"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            u524du306eu30dau30fcu30b8
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
            u6b21u306eu30dau30fcu30b8
          </a>
        </nav>
      </div>
    </div>
  );
}
