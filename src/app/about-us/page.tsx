import Image from "next/image";
// --- Font awesome Icons --- //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// -- Solid icons
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const AboutusPage = () => {
  return (
    <>
      <section className="flex mx-auto bg-theme-container">
        <div className="container mx-auto p-4">
          <Image
            width={1240}
            height={600}
            src="/images/about-us.png"
            alt="Switchflex"
            className="w-full"
          />
          <div className="border-b flex flex-col gap-5 py-5">
            <h1 className="text-theme-color font-bold text-2xl">
              บริษัท สวิทซเฟลคซ จำกัด
            </h1>
            <p className="">
              ก่อตั้งขึ้นเมื่อปี 2005
              โดยกลุ่มวิศวกรที่มีความเชี่ยวชาญในงานเครื่องจักรโดยเฉพาะ
              ซึ่งได้คร่ำหวอดอยู่ในวงการเครื่องจักรและสายงานอุตสาหกรรมมาเป็นเวลานาน
              และได้มีโอกาสในการดำเนินงานอย่างครอบคลุมและหลากหลาย
              ทั้งในกลุ่มเครื่องจักรขนาดเล็ก ไปตลอดจนถึงเครื่องจักรขนาดใหญ่
              โดยมีทีมงานเป็นกลุ่มวิศวกรที่มากประสบการณ์
              และมีความเชี่ยวชาญในสายงานนี้
              ซึ่งได้เล็งเห็นโอกาสในการทำธุรกิจเพิ่มขึ้น
              เพราะมองเห็นถึงช่องว่างระหว่างสินค้าที่มีคุณภาพดีแต่มีราคาสูง
              และสินค้าราคาถูก แต่คุณภาพตามราคา บริษัท อเล็กทริค จำกัด
              จึงได้เลือกผลิตเครื่องใช้ไฟฟ้าและสร้างแบรนด์สินค้าของตนเอง
              โดยตั้งเป้าหมายให้เป็นสินค้าที่มีคุณภาพ มีการออกแบบที่สวยงาม
              ในราคาที่ผู้คนสามารถจับต้องได้
              และตั้งเป้าไว้ว่าจะเป็นแบรนด์ที่มุ่งเน้นเพื่อผลิตสินค้าที่ดี
              ในราคาที่ใช่ ให้ทุกคนได้มีโอกาสใช้งาน
              และช่วยยกระดับคุณภาพชีวิตของผู้ใช้งานให้สะดวกสบายมากยิ่งขึ้น
              โดยในปัจจุบัน บริษัท อเล็กทริค จำกัด
              ได้ผลิตสินค้าในกลุ่มเครื่องใช้ไฟฟ้าออกมาวางจำหน่าย
              ภายใต้ชื่อแบรนด์ ALTEC และ Alectric โดยมีสินค้าหลากหลาย
              ให้ผู้บริโภคได้เลือกใช้งาน ไม่ว่าจะเป็นเครื่องฟอกอากาศ
              เครื่องดูดฝุ่น เครื่องดูดไรฝุ่น ตู้กดน้ำ เครื่องอบผ้า พัดลมมือถือ
              และอื่น ๆ อีกมากมาย
              ตลอดจนได้ผลิตและจัดจำหน่ายสินค้ากลุ่มกล่องบรรจุอาหาร
              ภายใต้ชื่อแบรนด์ namiko บริษัท อเล็กทริค จำกัด
              มีความมุ่งมั่นและตั้งใจที่จะสร้างสรรค์สินค้าที่มีคุณภาพ
              ในราคาที่เหมาะสม ให้ทุกคนสามารถจับต้องและใช้งานได้
              โดยตัวสินค้ามีการรับประกันสูงสุดถึง 2 ปี และมีการบริการหลังการขาย
              สามารถหาซื้อได้ผ่านช่องทางออนไลน์ที่ www.topvalue.com และร้าน
              topvalue Official Shop ที่ Shopee, Lazada และ JD Central
              และวางจำหน่ายผ่านห้างสรรพสินค้าชั้นนำทั่วประเทศ
            </p>
          </div>
          <div className="flex flex-col gap-3 py-4">
            <h1 className="text-theme-color font-bold text-2xl">
              บริษัท สวิทซเฟลคซ จำกัด
            </h1>
            <h3 className="font-bold text-theme-color">สำนักงานใหญ่</h3>
            <p>
              <FontAwesomeIcon icon={faLocationDot} className="pe-1" /> บริษัท
              สวิทซเฟลคซ จำกัด เลขที่ 30/119 หมู่ 1 ต.โคกขาม อ.เมือง จ.สมุทรสาคร
              74000
            </p>
            <p>
              <FontAwesomeIcon icon={faClock} className="pe-1" />
              1277
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="pe-1" />{" "}
              sales@alectric.asia
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutusPage;
