import Image from "next/image";
import Link from "next/link";

const StoresPage = () => {
  return (
    <section className="flex mx-auto bg-theme-container">
      <div className="container mx-auto py-4">
        <Image
          width={1240}
          height={600}
          src="/images/store-banner.png"
          alt="Store"
          className="w-full"
        />
        <div className="flex flex-col gap-6 py-8 text-center">
          <h1 className="text-theme-color text-2xl font-bold">ออนไลน์</h1>
          <p>พันธมิตรการขายออนไลน์</p>
          <div className="flex gap-3 justify-center px-4">
            <Link href="#" className="border w-1/2 sm:w-1/6">
              <Image
                width={297}
                height={155}
                src="/images/shop-topvalue.svg"
                className="w-full"
                alt=""
              />
            </Link>
            <Link href="#" className="border w-1/2 md:w-1/6">
              <Image
                width={297}
                height={155}
                src="/images/shop-shopee.svg"
                className="w-full"
                alt=""
              />
            </Link>
            <Link href="#" className="border w-1/2 md:w-1/6">
              <Image
                width={297}
                height={155}
                src="/images/shop-lazada.svg"
                className="w-full"
                alt=""
              />
            </Link>
            <Link href="#" className="border w-1/2 md:w-1/6">
              <Image
                width={297}
                height={155}
                src="/images/shop-jd.svg"
                className="w-full"
                alt=""
              />
            </Link>
          </div>
          <h1 className="text-theme-color text-2xl font-bold">หน้าร้าน</h1>
          <p>ค้นหา Retail Store ใกล้คุณ</p>
          <div className="relative w-full h-0 pb-[90.25%] sm:pb-[50.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full border-0"
              src="https://www.google.com/maps/d/embed?mid=1G0Oxg9UKDRkxEI5YOp6FaZRcgDBz4QlF&amp;hl=en"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoresPage;
