import ProductImages from "@/components/products/product-images";
// import {
//   ProductDetail,
//   ProductKeyExchange,
// } from "@/interfaces/dto/product-detail.dto";
import { formatThaiBaht } from "@/utils/format-currency.util";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProductDetails from "@/components/products/product-details";
import { fetchProductDetail, fetchProductKeyExchange } from "@/utils/api";

type Props = {
  params: { pkey: string };
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { pkey } = params;
  const { id: productId } = await fetchProductKeyExchange(pkey);
  const dataProductDetail = await fetchProductDetail(productId);
  return {
    title: `${dataProductDetail.name}`,
  };
};

const ProductDetailPage = async ({ params }: Props) => {
  const { pkey } = params;
  const { id: productId } = await fetchProductKeyExchange(pkey);
  const dataProductDetail = await fetchProductDetail(productId);

  return (
    <>
      <section className="flex mx-auto bg-theme-container py-4">
        <div className="container mx-auto bg-white p-4">
          {/* Product Info */}
          <div className="flex flex-col gap-4 lg:flex-row">
            {/* Product Images */}
            <div className="flex-shrink-0">
              <ProductImages dataProducts={dataProductDetail} />
            </div>
            {/* Product Short description */}
            <div className="flex flex-col gap-4">
              <h1 className="text-theme-color text-2xl font-bold">
                {dataProductDetail.name}
              </h1>
              <p>SKU : {dataProductDetail.sku}</p>
              <div className="border-t border-b bg-theme-container">
                <h1 className="text-4xl py-10 text-center">
                  {formatThaiBaht(dataProductDetail.price)}
                </h1>
              </div>
              <h3 className="font-bold">ตัวแทนจำหน่าย</h3>
              <div className="flex gap-3 justify-center">
                <Link
                  href="#"
                  className="bg-white lg:w-1/5 border-theme-color border"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/images/shop-topvalue.svg"
                    alt=""
                    className="w-full"
                  />
                </Link>
                <Link
                  href="#"
                  className="bg-white lg:w-1/5 border-theme-color border"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/images/shop-shopee.svg"
                    alt=""
                    className="w-full"
                  />
                </Link>
                <Link
                  href="#"
                  className="bg-white lg:w-1/5 border-theme-color border"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/images/shop-lazada.svg"
                    alt=""
                    className="w-full"
                  />
                </Link>
                <Link
                  href="#"
                  className="bg-white lg:w-1/5 border-theme-color border"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/images/shop-jd.svg"
                    alt=""
                    className="w-full"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Details */}
          <ProductDetails details={dataProductDetail} />
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;
