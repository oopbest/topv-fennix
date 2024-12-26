import {
  ABOUT_US_ROUTE_PATH,
  PRODUCTS_ROUTE_PATH,
  STORES_ROUTE_PATH,
  WARRANTY_ROUTE_PATH,
} from "@/const/route-paths.const";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainMenu = () => {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/"
        className={`${
          pathname === "/" && "underline pointer-events-none"
        }  hover:underline underline-offset-4
        }`}
      >
        หน้าแรก
      </Link>

      <Link
        href={PRODUCTS_ROUTE_PATH}
        className={`${
          pathname === PRODUCTS_ROUTE_PATH && "underline pointer-events-none"
        } hover:underline underline-offset-4`}
      >
        สินค้า
      </Link>
      <Link
        href={WARRANTY_ROUTE_PATH}
        className={`${
          pathname === WARRANTY_ROUTE_PATH && "underline pointer-events-none"
        } hover:underline underline-offset-4`}
      >
        การรับประกัน
      </Link>
      <Link
        href={STORES_ROUTE_PATH}
        className={`${
          pathname === STORES_ROUTE_PATH && "underline pointer-events-none"
        } hover:underline underline-offset-4`}
      >
        สั่งซื้อสินค้า
      </Link>
      <Link
        href={ABOUT_US_ROUTE_PATH}
        className={`${
          pathname === ABOUT_US_ROUTE_PATH && "underline pointer-events-none"
        } hover:underline underline-offset-4`}
      >
        เกี่ยวกับเรา
      </Link>
      <span className="lg:text-black">ติดต่อเรา 1277</span>
    </>
  );
};

export default MainMenu;
