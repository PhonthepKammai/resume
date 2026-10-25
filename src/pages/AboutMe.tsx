function AboutMe() {
  return (
    <>
        <div className="">
            <h2 className="text-2xl text-slate-900 font-bold">
                About Me
            </h2>
            <div className="w-20 h-1 bg-orange-600 rounded-full mb-4"></div>

            <p className="text-lg text-slate-500 mt-4">
                ผมสนใจการพัฒนาซอฟต์แวร์และ AI เพราะชอบค้นหาวิธีแก้ปัญหาและทำให้การทำงานง่ายขึ้น ผมเรียนรู้ผ่านการลงมือทดลอง สังเกตผลลัพธ์ และปรับปรุงแนวทางของตัวเองอยู่เสมอ พร้อมเปิดรับความรู้จากหลากหลายด้าน เพื่อนำสิ่งที่เรียนรู้ไปต่อยอดและประยุกต์ใช้กับปัญหาในโลกจริง
            </p>
            {/* <button type="button" className="flex gap-2 border-2 border-orange-600 text-orange-600 font-bold py-2 px-4 rounded-xl hover:bg-orange-600 hover:text-white transition duration-300 cursor-pointer">
                Resume
                <ArrowDownToLine />
            </button> */}
        </div>
    </>
  )
}

export default AboutMe
