"use client";

import Image from "next/image";
// --- Font awesome Icons --- //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// -- Solid icons
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
// -- Brand icons
import { faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLine } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import {
  FOLLOW_FACEBOOK_ROUTE_PATH,
  FOLLOW_INSTAGRAM_ROUTE_PATH,
  FOLLOW_LINE_ROUTE_PATH,
  FOLLOW_TWITTER_ROUTE_PATH,
  FOLLOW_YOUTUBE_ROUTE_PATH,
  STORE_JD_ROUTE_PATH,
  STORE_LAZADA_ROUTE_PATH,
  STORE_SHOPEE_ROUTE_PATH,
  STORE_TOPVALUE_ROUTE_PATH,
} from "@/const/route-paths.const";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const pathname = usePathname();

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Collapse the menu whenever the route changes
  useEffect(() => {
    setActiveIndex(null);
  }, [pathname]);

  return (
    <footer className="bg-theme-color text-sm lg:text-base text-white px-4 py-6 lg:pt-10">
      <section className="accordion mx-auto container flex flex-col justify-center gap-5 md:flex-row">
        {/* Contact */}
        <div className="accordion-item sm:basis-1/3 lg:basis-1/2">
          <h3
            className="pb-2 border-b md:border-0 md:pb-4 font-bold accordion-header sm:pointer-events-none"
            onClick={() => handleToggle(1)}
          >
            <span>ติดต่อ</span>
            <span className="accordion-icon md:hidden">&#9660;</span>
          </h3>
          <div
            className={`accordion-content max-h-0 opacity-0 md:max-h-none md:opacity-100 leading-9 ${
              activeIndex === 1 ? "open" : ""
            }`}
          >
            <div className="p-4 md:p-0">
              <p>
                <FontAwesomeIcon icon={faLocationDot} className="pe-2" />
                บริษัท อเล็กทริค จำกัด เลขที่ 30/119 หมู่ 1 ต.โคกขาม อ.เมือง
                จ.สมุทรสาคร 74000
              </p>
              <div className="pt-6">
                <p>
                  <FontAwesomeIcon icon={faClock} className="pe-1" /> จันทร์ -
                  เสาร์
                </p>
                <p>9:00 - 17:00,</p>
                <p>ปิดทำการวันอาทิตย์</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dealer */}
        <div className="accordion-item sm:basis-1/2 lg:basis-1/2">
          <h3
            className="pb-2 border-b md:border-0 md:pb-4 font-bold accordion-header sm:pointer-events-none"
            onClick={() => handleToggle(2)}
          >
            <span>ตัวแทนจำหน่าย</span>
            <span className="accordion-icon md:hidden">&#9660;</span>
          </h3>
          <div
            className={`accordion-content max-h-0 opacity-0 md:max-h-none md:opacity-100 leading-9} ${
              activeIndex === 2 ? "open" : ""
            }`}
          >
            <p className="p-4 md:p-0">
              สนใจสั่งซื้อสินค้าเป็นจำนวนมาก หรือสมัครเป็นตัวแทนจำหน่ายได้ที่
              โทร. 1277 E-mail: Service@switchflex.com
            </p>
          </div>
        </div>

        {/* Social media */}
        <div className="accordion-item basis-1/4">
          <h3
            className="pb-2 border-b md:border-0 md:pb-4 font-bold accordion-header sm:pointer-events-none"
            onClick={() => handleToggle(3)}
          >
            <span>ติดตาม</span>
            <span className="accordion-icon md:hidden">&#9660;</span>
          </h3>
          <div
            className={`accordion-content max-h-0 opacity-0 md:max-h-none md:opacity-100 leading-9 ${
              activeIndex === 3 ? "open" : ""
            }`}
          >
            <ul className="p-4 md:p-0">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook Page"
                  href={FOLLOW_FACEBOOK_ROUTE_PATH}
                >
                  <FontAwesomeIcon icon={faFacebook} className="pe-2" />
                  <span>Facebook Page</span>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Line"
                  href={FOLLOW_LINE_ROUTE_PATH}
                >
                  <FontAwesomeIcon icon={faLine} className="pe-1" /> Line
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Youtube"
                  href={FOLLOW_YOUTUBE_ROUTE_PATH}
                >
                  <FontAwesomeIcon icon={faYoutube} className="pe-1" /> Youtube
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  href={FOLLOW_INSTAGRAM_ROUTE_PATH}
                >
                  <FontAwesomeIcon icon={faInstagram} className="pe-3" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                  href={FOLLOW_TWITTER_ROUTE_PATH}
                >
                  <FontAwesomeIcon icon={faXTwitter} className="pe-1" /> Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="accordion-item basis-1/4">
          <h3
            className="pb-2 border-b md:border-0 md:pb-4 font-bold accordion-header sm:pointer-events-none"
            onClick={() => handleToggle(4)}
          >
            <span>สั่งซื้อ</span>
            <span className="accordion-icon md:hidden">&#9660;</span>
          </h3>
          <div
            className={`accordion-content max-h-0 opacity-0 md:max-h-none md:opacity-100 leading-9 ${
              activeIndex === 4 ? "open" : ""
            }`}
          >
            <ul className="p-4 md:p-0">
              <li className="flex">
                <Image
                  src="/images/site-topvalue.svg"
                  alt="Topvalue"
                  className="w-5 ms-2 me-3"
                  width={40}
                  height={40}
                />
                <a
                  href={STORE_TOPVALUE_ROUTE_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Topvalue
                </a>
              </li>
              <li className="flex">
                <Image
                  src="/images/site-shopee.svg"
                  alt="Shopee"
                  className="me-2"
                  width={40}
                  height={40}
                />
                <a
                  href={STORE_SHOPEE_ROUTE_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shopee
                </a>
              </li>
              <li className="flex">
                <Image
                  src="/images/site-lazada.svg"
                  alt="Lazada"
                  className="me-2"
                  width={40}
                  height={40}
                />
                <a
                  href={STORE_LAZADA_ROUTE_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lazada
                </a>
              </li>
              <li className="flex">
                <Image
                  src="/images/site-jd.svg"
                  alt="JD Central"
                  className="me-2"
                  width={40}
                  height={40}
                />
                <a
                  href={STORE_JD_ROUTE_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JD Central
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="container mx-auto text-center py-4 border-0 leading-10 relative md:border-t md:mt-10">
        <Image
          src="/images/logo-white.png"
          alt="Logo"
          className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2"
          width={100}
          height={52}
        />
        <p>&copy; Topvalue 2024</p>
        <Link href="#">เงื่อนไขการใช้งาน</Link>
        <Link href="#">นโยบายส่วนบุคคล</Link>
      </div>
    </footer>
  );
};

export default Footer;
