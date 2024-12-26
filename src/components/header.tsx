import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MainMenu from "./menu/menu";
import MobileMenu from "./menu/menu-mobile";
import { usePathname } from "next/navigation";
import ProductSearch from "./products/product-search";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Collapse the menu whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      id="header"
      className="sticky top-0 z-10 bg-white border-b lg:py-0 shadow-lg"
    >
      <section className="flex px-4 py-2 lg:py-0 mx-auto container items-center justify-between">
        {/* Logo */}
        <div className="lg:order-first lg:basis-1/12 lg:my-3">
          <Link href="/" title="">
            <Image
              width={100}
              height={29}
              src="/images/logo.png"
              alt="Fennix Website Logo"
              priority={false}
              className="lg: w-10/12"
            />
          </Link>
        </div>

        {/* Menu */}
        <div className="order-first lg:flex-1">
          {/* Hamburger icon */}
          <button
            onClick={toggleMenu}
            id="hamburger-button"
            className={`${
              isOpen && "toggle-btn"
            } relative h-6 w-6 cursor-pointer lg:hidden lg:pointer-events-none`}
          >
            <div className="-mt-0.5 h-0.5 w-6 bg-theme-color transition-all duration-500 before:absolute before:h-0.5 before:w-6 before:-translate-x-3 before:-translate-y-2 before:bg-theme-color before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-6 after:-translate-x-3 after:translate-y-2 after:bg-theme-color after:transition-all after:duration-500 after:content-['']"></div>
          </button>
          <div className="hidden text-theme-color lg:flex justify-evenly">
            <MainMenu />
          </div>
        </div>

        {/* Search */}
        <div className="sm:basis-10/12 lg:w-auto lg:basis-1/5">
          <ProductSearch />
        </div>
      </section>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} />
    </header>
  );
};

export default Header;
