// import Image from "next/image";
import React from "react";
import { decode } from "he";
import { ProductDetail } from "@/interfaces/dto/product-detail.dto";

type Props = {
  details: ProductDetail;
};

const ProductDetails = ({ details }: Props) => {
  const encodedHtml = String(details.description);
  const decodedHtml = decode(encodedHtml);
  return (
    <div className="py-10">
      <h1 className="font-bold text-xl">รายละเอียด</h1>
      <div className="flex flex-col gap-4">
        <div dangerouslySetInnerHTML={{ __html: decodedHtml }} />

        {/* Feature */}
        {/* <div>
          <h3 className="font-bold">คุณสมบัติ</h3>
          <ul className="list-disc list-inside">
            <li>
              เชื่อมต่อผ่านแอปพลิเคชัน Switchflex มีไมค์สื่อสาร และ
              ฟังก์ชันบันทึกเสียง
            </li>
            <li>
              มีกล้องบันทึกภาพดูการเคลื่อนไหวของสัตว์เลี้ยงได้ตลอดเวลา
              ถังความจุใส่อาหารสัตว์ได้ถึง 5 ลิตร
            </li>
            <li>
              ปุ่มล็อกถังอาหารด้านข้างแบบพิเศษ สามารถแยกถังอาหารออกได้
              ฝาปิดซิลิโคนกันความชื้น แหล่งจ่ายไฟแบบคู่
              ฐานด้านล่างตัดไฟอัตโนมัติ ป้องกันการเกิดเหตุขัดข้อง
            </li>
          </ul>
        </div> */}

        {/* Warranty */}
        {/* <div>
          <h3 className="font-bold">รับประกันสินค้า</h3>
          <ul className="list-disc list-inside">
            <li>ชื่อสินค้า : Alectric Smart Pet Feeder 5L รุ่น : Smart PF1</li>
            <li>
              กำลังไฟฟ้า : 2W แรงดันไฟฟ้า : AC 110-240V กระแสไฟฟ้าออก : DC
            </li>
            <li>
              5V แหล่งจ่ายไฟ : อะแดปเตอร์ DC5V/1A ความจุ : 5L น้ำหนักสุทธิ :
            </li>
            <li>2.3kg น้ำหรักรวม : 2.64kg ขนาดสินค้า : 285x175x305mm</li>
            <li>ขนาดบรรจุภัณฑ์ : 315x195x33mm ความยาวสายชาร์จ : 1.5m</li>
          </ul>
        </div> */}
      </div>
      {/* <div className="flex flex-col justify-center py-10 gap-4">
        <h3 className="font-bold">รูปภาพสินค้า</h3>
        <div className="flex flex-col items-center gap-4">
          <Image
            width={800}
            height={800}
            src="/images/cms-detail-01.jpg"
            alt=""
            className="max-w-full"
          />
          <Image
            width={800}
            height={800}
            src="/images/cms-detail-02.jpg"
            alt=""
            className="max-w-full"
          />
          <Image
            width={800}
            height={800}
            src="/images/cms-detail-03.jpg"
            alt=""
            className="max-w-full"
          />
          <Image
            width={800}
            height={800}
            src="/images/cms-detail-04.jpg"
            alt=""
            className="max-w-full"
          />
        </div>
      </div> */}
    </div>
  );
};

export default ProductDetails;
