// import BannerSlider from "@/components/banner-slider";
import HomeBestSeller from "@/components/homepage/home-bestseller";
import HomeFollowUs from "@/components/homepage/home-followus";
import HomeStandard from "@/components/homepage/home-standard";
import YouTubeEmbed from "@/components/youtube-embed";
import Image from "next/image";

export default function Home() {
  const video_id = "XICJqhY1m_A?si=T2bWYbVvkHNLrWvO";
  return (
    <>
      <div className="mx-auto">
        <YouTubeEmbed videoId={video_id} />
      </div>
      <section className="mx-auto container p-4">
        {/* <h1 className="text-3xl uppercase pt-6 text-theme-secondary pb-6">
          Switchflex Brands
        </h1> */}
        {/* <BannerSlider /> */}
        <HomeBestSeller />

        {/* Product Fennix BG */}
        <div className="flex flex-col sm:flex-row items-center mt-10 rounded-3xl bg-product-pattern bg-right bg-no-repeat bg-black text-white">
          <div className="flex-col lg:basis-1/2 py-40 px-10">
            <h3 className="text-2xl py-4">
              Fennix Monitor Arm แขนจับจอเหมาะสำหรับจอ 17-35 นิ้ว รุ่น ARMOR
              รับน้ำหนักได้ 11Kg.- รับประกัน 2 ปี
            </h3>
            <p>
              Fennix Monitor Arm แขนจับจอเหมาะสำหรับจอ 17-35 นิ้ว รุ่น ARMOR
              รับน้ำหนักได้ 11Kg.- รับประกัน 2 ปี
            </p>
            <button className="flex items-center px-6 py-3 mt-3 bg-white rounded relative group transition">
              <span className="mr-2 text-theme-color">ดูเพิ่มเติม</span>
              <span className="transform transition-transform duration-300 ease-in-out translate-x-0 group-hover:translate-x-1">
                <Image
                  src="/images/btn-arrow-color.svg"
                  alt="Arrow"
                  width={20}
                  height={20}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Product Fennix */}
        <div className="flex flex-col sm:flex-row items-center mt-10">
          <div className="flex-1 flex-col text-center p-10">
            <h3 className="text-xl py-5 font-bold">
              Fennix Mouse Pad ที่รองคีย์บอร์ด วัสดุสักหลาด (Felt )คุณภาพสูง
              ผิวสัมผัสนุ่มพรีเมี่ยม
            </h3>
            <p>
              Fennix Mouse Pad MP07-10 ที่รองคีย์บอร์ด วัสดุสักหลาด (Felt
              )คุณภาพสูง ผิวสัมผัสนุ่มพรีเมี่ยม แผ่นรองเมาส์ขนาด Big size
              ช่วยเปลี่ยนโต๊ะทำงานของคุณให้ ดูดี มินิมอล พรีเมี่ยม หรูหรา
              มากขึ้นไปอีกระดับ
            </p>
            <div className="inline-block">
              <button className="flex px-6 py-3 mt-3 bg-theme-color text-white rounded group transition">
                <span className="mr-2">ดูเพิ่มเติม</span>
                <span className="transform transition-transform duration-300 ease-in-out translate-x-0 group-hover:translate-x-1">
                  <Image
                    src="/images/btn-arrow-white.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                  />
                </span>
              </button>
            </div>
          </div>
          <div className="flex-1 lg:flex-none">
            <Image
              width={582}
              height={582}
              src="/images/product-fennix.png"
              alt="SCE เตาแม่เหล็กไฟฟ้า รุ่น IH1 - รับประกัน 1 ปี"
              className="max-w-full"
            />
          </div>
        </div>
      </section>
      <HomeStandard />
      <HomeFollowUs />
    </>
  );
}
