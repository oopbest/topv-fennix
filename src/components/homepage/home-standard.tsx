import Image from "next/image";

const HomeStandard = () => {
  // custom logic
  return (
    <>
      <div className="bg-gray-100 px-4">
        <div className="our-standards mx-auto container pt-10 pb-20">
          <h1 className="text-theme-color font-bold text-3xl text-center pb-10">
            มาตรฐานของเรา
          </h1>
          <div className="flex flex-col text-center sm:flex-row gap-5">
            <div className="flex-1 bg-white p-10 rounded-3xl">
              <Image
                width={45}
                height={45}
                src="/images/dummy-standard-icon-1.png"
                alt=""
                className="max-w-full mx-auto"
              />
              <h3 className="font-bold py-3">Call Center</h3>
              <p className="text-slate-500">
                โทร 1277 หรือช่องทาง offical ของร้านค้า มีบริการดูแลหลังการขาย
                แนะนำและให้คำปรึกษาอย่างรวดเร็วที่สุด
              </p>
            </div>
            <div className="flex-1 bg-white p-10 rounded-3xl">
              <Image
                width={45}
                height={45}
                src="/images/dummy-standard-icon-2.png"
                alt=""
                className="max-w-full mx-auto"
              />
              <h3 className="font-bold py-3">Service Center</h3>
              <p className="text-slate-500">
                รับประกันสินค้าสูงสุด 3 ปี เปลี่ยนคืนสินค้าได้ภายใน 7 วัน
              </p>
            </div>
            <div className="flex-1 bg-white p-10 rounded-3xl">
              <Image
                width={45}
                height={45}
                src="/images/dummy-standard-icon-3.png"
                alt=""
                className="max-w-full mx-auto"
              />
              <h3 className="font-bold py-3">Quality Control</h3>
              <p className="text-slate-500">
                สินค้าได้รับมาตรฐานมอก. ควบคุมและตรวจสอบคุณภาพสินค้าก่อนจัดส่ง
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeStandard;
