import Image from "next/image";

const HomeBestSeller = () => {
  return (
    <>
      {/* Best Seller */}
      <section className="best-seller">
        {/* <h1 className="text-theme-color text-3xl text-center py-5">
          Best Seller
        </h1> */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row text-xl">
          <div className="flex flex-col gap-4 lg:w-2/5">
            <Image
              width={582}
              height={700}
              src="/images/fennix-rec-1.jpg"
              alt=""
              className="rounded-2xl md:mt-48"
            />
            <h2>
              Fennix Ergonomic L-Shaped Desk โต๊ะทำงาน โต๊ะเพื่อสุขภาพ
              โต๊ะปรับระดับอัตโนมัติด้วยระบบไฟฟ้า รูปตัว L - รับประกันศูนย์ไทย 3
              ปี
            </h2>
            <p className="font-bold text-theme-color">&#x0E3F; 10,990.-</p>
          </div>
          <div className="flex flex-col gap-4 lg:w-2/5">
            <Image
              width={582}
              height={700}
              src="/images/fennix-rec-2.jpg"
              alt=""
              className="rounded-2xl"
            />
            <h2>
              Fennix Ergonomic L-Shaped Desk โต๊ะทำงาน โต๊ะเพื่อสุขภาพ
              โต๊ะปรับระดับอัตโนมัติด้วยระบบไฟฟ้า รูปตัว L - รับประกันศูนย์ไทย 3
              ปี
            </h2>
            <p className="font-bold text-theme-color">&#x0E3F; 499.-</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBestSeller;
