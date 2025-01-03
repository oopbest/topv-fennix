// --- Font awesome Icons --- //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// -- Solid icons
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// -- Brand icons
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLine } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";

const HomeFollowUs = () => {
  return (
    <>
      <div className="contact-us mx-auto container p-4">
        <div className="flex flex-col justify-center items-center py-5 sm:flex-row lg:py-10">
          <h3 className="px-3 text-theme-color text-xl sm:border-r">
            ติดตามเรา
          </h3>
          <Image
            width={100}
            height={29}
            src="/images/logo.png"
            alt="Logo Fennix"
            className="my-6 lg: mx-3 max-w-full w-24"
          />

          {/* Social Media */}
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-white bg-theme-color rounded-full w-12 h-12 flex justify-center items-center hover:bg-opacity-85"
            >
              <FontAwesomeIcon icon={faFacebook} className="fa-2x" />
            </Link>
            <Link
              href="#"
              className="text-white bg-theme-color rounded-full w-12 h-12 flex justify-center items-center hover:bg-opacity-85"
            >
              <FontAwesomeIcon icon={faLine} className="fa-2x" />
            </Link>
            <Link
              href="#"
              className="text-white bg-theme-color rounded-full w-12 h-12 flex justify-center items-center hover:bg-opacity-85"
            >
              <FontAwesomeIcon icon={faYoutube} className="fa-2x" />
            </Link>
            <Link
              href="#"
              className="text-white bg-theme-color rounded-full w-12 h-12 flex justify-center items-center hover:bg-opacity-85"
            >
              <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
            </Link>
            <Link
              href="#"
              className="text-white bg-theme-color rounded-full w-12 h-12 flex justify-center items-center hover:bg-opacity-85"
            >
              <FontAwesomeIcon icon={faXTwitter} className="fa-2x" />
            </Link>
          </div>
        </div>

        {/* Company detail */}
        <div className="flex flex-col pb-10 lg:flex-row">
          <div className="self-center lg:flex-1">
            <Image
              width={670}
              height={440}
              src="/images/switchflex-new-670x440.jpg"
              alt="Switchflex Company"
              className="object-cover"
            />
          </div>
          {/* Company desc */}
          <div className="p-4 text-sm text-slate-500 shadow-md lg:w-1/3">
            <p>เกี่ยวกับ</p>
            <h3 className="text-theme-color font-bold text-2xl pt-2 pb-5">
              บริษัท อเล็กทริค จำกัด
            </h3>
            <div className="pb-5 mb-5 border-b">
              <p>
                ก่อตั้งขึ้นเมื่อปี 2005
                โดยกลุ่มวิศวกรที่มีความเชี่ยวชาญในงานเครื่องจักรโดยเฉพาะ
                และดำเนินธุรกิจนำเข้าและส่งออกเครื่องจักร
                ทั้งขนาดเล็กและขนาดใหญ่สำหรับงานอุตสาหกรรม จนกระทั่งในปี 2019
                คณะผู้ก่อตั้งบริษัท
                ได้เล็งเห็นถึงโอกาสในการนำเครื่องจักรและเทคโนโลยี
                มาพัฒนาต่อยอดเพื่อผลิตเป็นเครื่องใช้ไฟฟ้าในครัวเรือน
              </p>
              <button className="flex items-center px-6 py-3 mt-3 bg-theme-color text-white rounded-2xl relative group transition">
                <span className="mr-2">ดูเพิ่มเติม</span>
                <span className="transform transition-transform duration-300 ease-in-out translate-x-0 group-hover:translate-x-2">
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </button>
            </div>
            <div>
              <p>ไปยังเว็บไซต์</p>
              <div className="flex pt-3">
                <Image
                  width={106}
                  height={21}
                  src="/images/switchflex-logo.svg"
                  alt="Switchflex"
                  className="object-contain"
                />
                <Link
                  href="#"
                  className="border p-3 rounded-full w-3 h-3 flex justify-center items-center text-theme-color border-theme-color relative group transition"
                >
                  <span className="transform transition-transform duration-300 ease-in-out translate-x-0 group-hover:translate-x-1">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFollowUs;
