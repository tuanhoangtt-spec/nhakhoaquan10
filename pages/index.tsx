// pages/index.tsx
// Trang chủ Nha khoa AVA - tối ưu SEO cho "nha khoa quận 10" và "nha khoa uy tín quận 10"
// Thay thế toàn bộ nội dung file pages/index.tsx hiện tại của bạn bằng file này.
// LƯU Ý: nếu file index.tsx cũ của bạn có phần hiển thị danh sách bài viết (getAllPosts,
// MoreStories...), hãy giữ lại đoạn code đó và chèn vào vị trí có ghi chú
// "BÀI VIẾT MỚI NHẤT" bên dưới, để không mất chức năng liệt kê blog.

import Head from 'next/head'
import SiteHeader from '../components/site-header'
import SiteFooter from '../components/site-footer'
import ContactWidgets from '../components/contact-widgets'

const SITE_URL = 'https://nhakhoaquan10.vercel.app' // đổi lại nếu bạn dùng domain riêng

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Nha khoa AVA',
  image: `${SITE_URL}/assets/logo/ava-logo.jpg`,
  '@id': SITE_URL,
  url: SITE_URL,
  telephone: '+842822066666',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '283/91 Cách Mạng Tháng 8',
    addressLocality: 'Phường Hòa Hưng, Quận 10',
    addressRegion: 'TP.HCM',
    addressCountry: 'VN',
  },
  taxID: '0312093828',
  hasMap: 'https://g.page/nhakhoava',
  sameAs: ['https://www.facebook.com/NhaKhoaAVA/', 'https://g.page/nhakhoava'],
  employee: {
    '@type': 'Physician',
    name: 'Bác sĩ Phạm Việt Hùng',
    medicalSpecialty: 'Dentistry',
    identifier: '008280/HCM-CCHN',
  },
}

export default function Index() {
  return (
    <>
      <Head>
        <title>Nha Khoa AVA - Nha Khoa Uy Tín Quận 10 | Tư Vấn & Chụp Phim Miễn Phí</title>
        <meta
          name="description"
          content="Nha khoa AVA - nha khoa uy tín Quận 10, TP.HCM. Tư vấn và chụp phim miễn phí. Niềng răng, cấy ghép Implant, bọc sứ. Hotline 028 2206 6666."
        />
        <link rel="canonical" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <SiteHeader />

      <main className="text-[#123331]">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 pt-14 pb-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-block bg-[#F1F7E4] text-[#5C7A24] text-xs font-bold tracking-wide px-3 py-1.5 rounded-full mb-5">
              NHA KHOA UY TÍN QUẬN 10 · TP.HCM
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5 text-[#3F5219]">
              Nha khoa AVA – an tâm khám răng ngay tại Quận 10
            </h1>
            <p className="text-lg text-[#3A4F4C] mb-8 max-w-md">
              Đội ngũ bác sĩ chuyên môn rõ ràng, trang thiết bị hiện đại, bảng giá minh bạch.
              Đặc biệt: <span className="font-semibold text-[#5C7A24]">tư vấn và chụp phim hoàn toàn miễn phí</span> cho lần khám đầu tiên.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="tel:02822066666"
                className="bg-[#FF6B4A] hover:bg-[#E85535] text-white font-semibold px-6 py-3.5 rounded-full transition"
              >
                Gọi ngay 028 2206 6666
              </a>
              <a
                href="https://zalo.me/0388888272"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-[#0068FF] text-[#0068FF] font-semibold px-6 py-3.5 rounded-full hover:bg-[#0068FF]/5 transition"
              >
                Nhắn Zalo đặt lịch
              </a>
            </div>
          </div>

          {/* Phiếu hẹn khám - điểm nhấn thị giác */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-white shadow-xl rounded-[20px] w-full max-w-sm p-7 rotate-1">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold tracking-widest text-[#5C7A24]">PHIẾU HẸN KHÁM</span>
                <div className="w-9 h-9 rounded-full bg-[#3F5219] text-white flex items-center justify-center font-extrabold text-sm">A</div>
              </div>
              <p className="text-2xl font-extrabold text-[#3F5219] mb-1">Tư vấn + Chụp phim</p>
              <p className="text-4xl font-extrabold text-[#FF6B4A] mb-6">MIỄN PHÍ</p>
              <div className="border-l-2 border-dashed border-[#D8E8B8] pl-5 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#5C6E6B]">Địa chỉ</span>
                  <span className="font-medium text-right">283/91 CMT8, Q.10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5C6E6B]">Hotline</span>
                  <span className="font-medium">028 2206 6666</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5C6E6B]">Zalo</span>
                  <span className="font-medium">0388 888 272</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="bg-[#3F5219] py-6">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-sm font-medium text-center">
            <div>✓ Cấp phép Sở Y tế</div>
            <div>✓ Bác sĩ chuyên khoa RHM</div>
            <div>✓ Trang thiết bị hiện đại</div>
            <div>✓ Không phát sinh chi phí</div>
          </div>
        </section>

        {/* Bác sĩ phụ trách */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="bg-[#F6F9EF] rounded-3xl p-8 md:p-10 grid md:grid-cols-[auto,1fr] gap-8 items-center">
            <div className="w-28 h-28 rounded-full bg-[#89b135] text-white flex items-center justify-center font-extrabold text-3xl mx-auto md:mx-0">
              PVH
            </div>
            <div>
              <p className="text-[#5C7A24] font-bold text-sm tracking-wide mb-1">BÁC SĨ PHỤ TRÁCH CHUYÊN MÔN</p>
              <h3 className="text-2xl font-extrabold text-[#3F5219] mb-2">Bác sĩ Phạm Việt Hùng</h3>
              <p className="text-[#5C6E6B] mb-3">
                <span className="font-semibold text-[#3F5219]">Hơn 16 năm kinh nghiệm</span> trực tiếp thăm khám và điều trị tại Nha khoa AVA, Quận 10.
              </p>
              <p className="text-sm text-[#5C6E6B]">Số chứng chỉ hành nghề: 008280/HCM-CCHN</p>
            </div>
          </div>
        </section>

        {/* Dịch vụ */}
        <section id="dich-vu" className="max-w-6xl mx-auto px-4 py-20">
          <p className="text-[#6B8C2A] font-bold text-sm tracking-wide mb-2">DỊCH VỤ TẠI NHA KHOA AVA</p>
          <h2 className="text-3xl font-extrabold text-[#3F5219] mb-12 max-w-lg">
            Đầy đủ dịch vụ nha khoa cho cả gia đình, ngay tại Quận 10
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { title: 'Niềng răng - Chỉnh nha', desc: 'Mắc cài kim loại, sứ, mặt trong và niềng trong suốt.' },
              { title: 'Cấy ghép Implant', desc: 'Phục hình răng mất, ăn nhai chắc chắn như răng thật.' },
              { title: 'Bọc răng sứ thẩm mỹ', desc: 'Cải thiện hình dáng, màu sắc răng tự nhiên và bền chắc.' },
              { title: 'Khám & vệ sinh tổng quát', desc: 'Khám định kỳ, cạo vôi răng, phát hiện sớm vấn đề răng miệng.' },
              { title: 'Tẩy trắng răng', desc: 'Nụ cười trắng sáng, tự tin, an toàn cho men răng.' },
              { title: 'Nhổ răng khôn', desc: 'Tiểu phẫu nhẹ nhàng, hạn chế sưng đau, phục hồi nhanh.' },
            ].map((s) => (
              <div key={s.title} className="bg-[#F6F9EF] rounded-2xl p-6 hover:shadow-md transition">
                <div className="w-11 h-11 rounded-full bg-[#E7F2D2] flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5C7A24" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-1.5">{s.title}</h3>
                <p className="text-sm text-[#5C6E6B]">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vì sao chọn AVA */}
        <section id="vi-sao-chon" className="bg-[#F6F9EF] py-20">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-[#6B8C2A] font-bold text-sm tracking-wide mb-2">VÌ SAO CHỌN NHA KHOA AVA</p>
            <h2 className="text-3xl font-extrabold text-[#3F5219] mb-12 max-w-lg">
              Nha khoa uy tín Quận 10 – khám an tâm, giá rõ ràng
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { n: 1, title: 'Giấy phép & bác sĩ chuyên môn rõ ràng', desc: 'Được Sở Y tế cấp phép hoạt động, đội ngũ bác sĩ có chuyên môn theo từng mảng điều trị.' },
                { n: 2, title: 'Trang thiết bị hiện đại, vô trùng đạt chuẩn', desc: 'Máy chụp X-quang tại chỗ, quy trình tiệt trùng dụng cụ theo từng ca điều trị.' },
                { n: 3, title: 'Bảng giá minh bạch, không phát sinh', desc: 'Tư vấn rõ chi phí trước khi điều trị, không ép làm thêm dịch vụ ngoài nhu cầu.' },
                { n: 4, title: 'Vị trí thuận tiện tại Quận 10', desc: '283/91 Cách Mạng Tháng 8, dễ dàng di chuyển và tái khám định kỳ.' },
              ].map((item) => (
                <div key={item.n} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#3F5219] text-white flex items-center justify-center font-bold">
                    {item.n}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-[#5C6E6B] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BÀI VIẾT MỚI NHẤT: nếu bạn muốn giữ danh sách blog, chèn component MoreStories cũ vào đây */}

        {/* Liên hệ */}
        <section id="lien-he" className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-[#6B8C2A] font-bold text-sm tracking-wide mb-2">ĐẶT LỊCH KHÁM</p>
            <h2 className="text-3xl font-extrabold text-[#3F5219] mb-6">Ghé Nha khoa AVA ngay hôm nay</h2>
            <div className="space-y-4 mb-8 text-sm">
              <p>283/91 Cách Mạng Tháng 8, Phường Hòa Hưng, Quận 10, TP.HCM</p>
              <p>Hotline: 028 2206 6666 · 028 2229 7297 · 028 6686 2222</p>
              <p>Zalo: 0388 888 272</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="tel:02822066666" className="bg-[#FF6B4A] hover:bg-[#E85535] text-white font-semibold px-6 py-3 rounded-full transition">
                Gọi ngay
              </a>
              <a href="https://zalo.me/0388888272" target="_blank" rel="noopener noreferrer" className="bg-[#0068FF] hover:bg-[#0055D4] text-white font-semibold px-6 py-3 rounded-full transition">
                Nhắn Zalo
              </a>
              <a href="https://www.facebook.com/NhaKhoaAVA/" target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] hover:bg-[#1461C7] text-white font-semibold px-6 py-3 rounded-full transition">
                Facebook
              </a>
              <a href="https://g.page/nhakhoava" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-[#89b135] text-[#5C7A24] font-semibold px-6 py-3 rounded-full hover:bg-[#F1F7E4] transition">
                Xem trên Google Maps
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#E1EDC9] h-80 md:h-full">
            <iframe
              title="Bản đồ Nha khoa AVA Quận 10"
              className="w-full h-full border-0"
              loading="lazy"
              src="https://www.google.com/maps?q=283%2F91+C%C3%A1ch+M%E1%BA%A1ng+Th%C3%A1ng+8%2C+Ph%C6%B0%E1%BB%9Dng+H%C3%B2a+H%C6%B0ng%2C+Qu%E1%BA%ADn+10%2C+TP.HCM&output=embed"
            />
          </div>
        </section>

        {/* CTA cuối trang */}
        <section className="bg-[#3F5219] py-14">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
              Tư vấn & chụp phim miễn phí — đặt lịch ngay hôm nay
            </h2>
            <p className="text-[#D3E8B0] mb-7">Chỉ 1 cuộc gọi để biết chính xác tình trạng răng miệng của bạn.</p>
            <a href="tel:02822066666" className="inline-block bg-[#FF6B4A] hover:bg-[#E85535] text-white font-semibold px-8 py-4 rounded-full transition">
              Gọi 028 2206 6666
            </a>
          </div>
        </section>

      </main>

      <SiteFooter />
      <ContactWidgets />
    </>
  )
}
