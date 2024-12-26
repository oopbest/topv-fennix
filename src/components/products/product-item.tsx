"use client";

import { PRODUCT_PAGE_SIZE } from "@/const/product.const";
import { Product } from "@/interfaces/dto/products.dto";
import { formatThaiBaht } from "@/utils/format-currency.util";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProductsItemProps {
  initialProducts: Product[];
  token: string | undefined;
}

const PRODUCTS_API_URL = process.env.NEXT_PUBLIC_API_PRODUCTS_URL;

export default function ProductsItem({
  initialProducts,
  token,
}: ProductsItemProps) {
  const [products, setProducts] = useState(initialProducts); // Use initial products from SSR
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(
    initialProducts.length === PRODUCT_PAGE_SIZE
  ); // Assume more products if initial batch is full

  const loadMoreProducts = async () => {
    setLoading(true);

    try {
      const res = await fetch(`${PRODUCTS_API_URL}?page=${page + 1}`, {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      });

      const data = await res.json();

      if (data && data.length > 0) {
        setProducts((prev) => [...prev, ...data]); // Append new products
        setPage((prev) => prev + 1); // Increment page
        setHasMore(data.length === PRODUCT_PAGE_SIZE); // Check if there are more products to load
      } else {
        setHasMore(false); // No more products to load
      }
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {products.map((product) => {
          // const productRating = product.rating;
          return (
            <div
              key={product.id}
              className="bg-white flex items-center justify-center rounded-2xl overflow-hidden"
            >
              <div className="flex flex-col text-center gap-3">
                <Link href={`products/${product.url_key}`}>
                  <div className="lg:min-h-[400px] overflow-hidden">
                    {product.image ? (
                      <Image
                        width={800}
                        height={800}
                        src={product.image}
                        alt={product.name}
                        className="max-w-full"
                      />
                    ) : (
                      <Image
                        width={800}
                        height={800}
                        src="/images/product-not-found.jpg"
                        alt="Not found image"
                        className="max-w-full"
                      />
                    )}
                  </div>
                </Link>
                <div className="flex flex-col gap-4">
                  <p className="h-12 px-5 line-clamp-2">{product.name}</p>
                  <p className="font-bold">{formatThaiBaht(product.price)}</p>
                  {/* <ProductRating rating={productRating} /> */}
                  <Link
                    href={`products/${product.url_key}`}
                    className="bg-theme-color px-5 py-3 text-white mx-3"
                  >
                    เรียนรู้เพิ่มเติม
                  </Link>
                  <Link href="#" title="" className="py-4 text-theme-color">
                    <FontAwesomeIcon icon={faLocationDot} className="pe-1" />
                    <span>สถานที่จัดจำหน่าย</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {hasMore && !loading && (
        <div className="mt-4 flex justify-center">
          <button
            className="px-4 py-2 bg-theme-color text-white rounded"
            onClick={loadMoreProducts}
          >
            ดูเพิ่มเติม
          </button>
        </div>
      )}

      {loading && (
        <div className="mt-4 flex justify-center">
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}
