import { Headset, Store } from "lucide-react";
import { Timeline, type TimelineItem} from "../components/Timeline";

function Experience() {

  const experience: TimelineItem[] = [
    { 
      id: "2nd-job", 
      period: "มิ.ย. 2026 – ปัจจุบัน",
      title: "Customer Support",
      subtitle : "Nextssolutions",
      description: [
          "ตอบแชทลูกค้าและรับเรื่องร้องเรียนผ่าน LINE Official",
          "ค้นหาและตรวจสอบรหัสตู้จากข้อมูลสถานที่และรายละเอียดที่ลูกค้าแจ้ง",
          "ตรวจสอบยอดขายและเปรียบเทียบข้อมูลธุรกรรม (Transaction Logs) ร่วมกับข้อร้องเรียน",
          "วิเคราะห์และหาสาเหตุในกรณีข้อมูลไม่ตรงกันหรือมีรายละเอียดไม่เพียงพอ"
      ],
      icon: Headset
    },
    { 
      id: "1st-job", 
      period: "มี.ค. 2025 – พ.ค. 2026",
      title: "พนักงานร้านสะดวกซื้อ", 
      subtitle : "7-Eleven",
      description: [
          "ให้บริการลูกค้าและปฏิบัติงานแคชเชียร์",
          "จัดเรียงสินค้า ตรวจสอบสินค้าหมดอายุ และรับสินค้าเข้า",
          "ดูแลการสั่งสินค้า เตรียมเครื่องดื่มตามสูตร และจัดส่งสินค้า"
      ],
      icon: Store
    },
  ];

  return (
    <>
    <div className="">
        <h2 className="text-2xl text-slate-900 font-bold">
            Experience
        </h2>
        <div className="w-20 h-1 bg-orange-600 rounded-full mb-4"></div>

        <Timeline items={experience} />
    </div>
    </>
  )
}

export default Experience
