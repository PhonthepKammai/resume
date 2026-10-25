function Hero() {
  return (
    <>
        <div className="my-24">
            <h2 className="text-2xl text-slate-900 font-bold">
                Hi, I'm
            </h2>
            <div className="w-20 h-1 bg-orange-600 rounded-full mb-4"></div>
            <h1 className="text-6xl font-bold text-orange-600 my-8">
                Phonthep Kammai
            </h1>
            <p className="font-bold text-slate-500 mb-4">
                Computer Engineering & AI Student 
                <a href="https://www.pim.ac.th/" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-bold mx-2">@PIM</a>
            </p>
            <p className="text-lg text-slate-500 mb-8">
                ผมสนใจการพัฒนาซอฟต์แวร์ การจัดการข้อมูล และการประยุกต์ใช้ AI เพื่อแก้ปัญหาในงานจริง ปัจจุบันกำลังพัฒนาทักษะด้าน Web Development และ Software Architecture พร้อมเรียนรู้เทคโนโลยีใหม่ ๆ
            </p>
            {/* <button type="button" className="flex gap-2 border-2 border-orange-600 text-orange-600 font-bold py-2 px-4 rounded-xl hover:bg-orange-600 hover:text-white transition duration-300 cursor-pointer">
                Resume
                <ArrowDownToLine />
            </button> */}
        </div>
    </>
  )
}

export default Hero
