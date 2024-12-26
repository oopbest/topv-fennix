import React, { useEffect, useState } from "react";
import MainMenu from "./menu";

interface Props {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: Props) => {
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  useEffect(() => {
    const header = document.getElementById("header");
    if (header) {
      const handleResize = () => {
        const height = header.getBoundingClientRect().height;
        setHeaderHeight(height);
      };

      // Run on mount
      handleResize();

      // Add event listener for window resize
      window.addEventListener("resize", handleResize);

      // Cleanup on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <section
      id="mobile-menu"
      style={{ top: `${headerHeight}px` }}
      className={`${
        isOpen ? "flex" : "hidden"
      } flex-col bg-theme-color fixed w-full text-white left-0 h-full origin-top animate-open-menu`}
    >
      <nav
        className="flex flex-col text-3xl items-center gap-10 text-white px-5 py-10"
        aria-label="mobile"
      >
        <MainMenu />
      </nav>
    </section>
  );
};

export default MobileMenu;
