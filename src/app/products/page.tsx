import ProductsItem from "@/components/products/product-item";
import { fetchAccessToken } from "@/utils/api";
import { cookies } from "next/headers";

const PRODUCTS_API_URL = process.env.NEXT_PUBLIC_API_PRODUCTS_URL;

export default async function ProductsPage() {
  const token = cookies().get("ACCESS_TOKEN")?.value;
  let products = [];
  let error = null;

  if (token) {
    try {
      const res = await fetchAccessToken(`${PRODUCTS_API_URL}?page=1`, token); // Fetch first page
      products = res || [];
    } catch (err) {
      console.log(err);
      error = "Error fetching products";
    }
  }

  return (
    <div>
      <section className="flex mx-auto bg-theme-container">
        <div className="container mx-auto p-4">
          {error ? (
            <>{error}</>
          ) : (
            <ProductsItem initialProducts={products} token={token} />
          )}
        </div>
      </section>
    </div>
  );
}
