import { GraduationCap, School } from "lucide-react";
import { Timeline, type TimelineItem} from "../components/Timeline";

function Education() {

  const education: TimelineItem[] = [
      { 
        id: "vocational-certificate", 
        badge: "Studying",
        period: "ปริญญาตรี",
        title: "วิศวกรรมคอมพิวเตอร์และปัญญาประดิษฐ์", 
        subtitle : "สถาบันการจัดการปัญญาภิวัฒน์",
        icon: GraduationCap 
    },
    { 
        id: "bachelor-degree", 
        badge: "Graduated",
        period: "ปวช. 3",
        title: "สาขาเทคโนโลยีสารสนเทศ",
        subtitle : "วิทยาลัยเทคนิคยโสธร",
        icon: School
    },
  ];

  return (
    <>
    <div className="">
        <h2 className="text-2xl text-slate-900 font-bold">
            Education
        </h2>
        <div className="w-20 h-1 bg-orange-600 rounded-full mb-4"></div>

        <Timeline items={education} />
    </div>
    </>
  )
}

export default Education
