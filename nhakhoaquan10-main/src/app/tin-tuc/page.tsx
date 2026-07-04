// src/app/tin-tuc/page.tsx
import { supabase } from "@/lib/supabase"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ContactWidgets from "@/components/contact-widgets"
import Link from "next/link"

export const revalidate = 0

type Post = {
  id: string
  slug: string
  title: string
  summary: string | null
  content: string
  is_featured: boolean
  created_at: string
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  const day = String(d.getDate()).padStart(2, "0")
  const month = String(d.getMonth() + 1).padStart(2, "0")
  return `${day}/${month}/${d.getFullYear()}`
}

export default async function TinTucPage() {
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false })

  const allPosts = (posts as Post[]) || []
  const featuredPosts = allPosts.filter((p) => p.is_featured).slice(0, 5)

  return (
    <>
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#3F5219] mb-10">
          Tin tức &amp; Kiến thức nha khoa
        </h1>

        <div className="grid md:grid-cols-3 gap-x-10 gap-y-10">
          {/* Cột trái - danh sách bài viết */}
          <div className="md:col-span-2 space-y-8">
            {allPosts.length === 0 && (
              <p className="text-[#5C6E6B]">Chưa có bài viết nào.</p>
            )}

            {allPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-[#E1EDC9] rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-2 text-xs text-[#8A9A87]">
                  <span>{formatDate(post.created_at)}</span>
                  {post.is_featured && (
                    <span className="bg-[#FF6B4A] text-white font-semibold px-2.5 py-1 rounded-full">
                      Nổi bật
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-bold text-[#3F5219] mb-2">
                  {post.title}
                </h2>
                {post.summary && (
                  <p className="text-sm text-[#5C6E6B] mb-4">{post.summary}</p>
                )}
                <Link
                  href={`/tin-tuc/${post.slug}`}
                  className="inline-block text-sm font-semibold text-[#5C7A24] hover:underline"
                >
                  Đọc tiếp →
                </Link>
              </article>
            ))}
          </div>

          {/* Cột phải - Widget tin nổi bật */}
          <aside className="md:sticky md:top-24 h-fit">
            <div className="bg-[#F6F9EF] rounded-2xl p-6">
              <h3 className="font-bold text-[#3F5219] mb-4">⭐ Tin nổi bật</h3>
              {featuredPosts.length === 0 && (
                <p className="text-sm text-[#5C6E6B]">Chưa có tin nổi bật.</p>
              )}
              <ul className="space-y-3">
                {featuredPosts.map((post) => (
                  <li key={post.id}>
                    <Link
                      href={`/tin-tuc/${post.slug}`}
                      className="text-sm font-medium text-[#3A4F4C] hover:text-[#5C7A24] leading-snug block"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <SiteFooter />
      <ContactWidgets />
    </>
  )
}