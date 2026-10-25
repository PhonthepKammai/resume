import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react"
import { LuGithub, LuLinkedin } from "react-icons/lu";

function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "phonthepkammai@gmail.com";
  const mailtoLink = `mailto:${email}}`;
  const githubUrl = "https://github.com/PhonthepKammai";
  const linkedinUrl = "https://www.linkedin.com/in/phonthep-kammai-154a25446/";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // คืนสถานะไอคอนกลับเป็นปกติหลัง 2 วินาที
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
    <div className="">
        <h2 className="text-2xl text-slate-900 font-bold">
            Contact
        </h2>
        <div className="w-20 h-1 bg-orange-600 rounded-full mb-4"></div>

        <h3 className="text-orange-600 text-2xl">Let's connect.</h3>
        <p className="mb-4">สนใจร่วมงาน แลกเปลี่ยนไอเดีย หรือพูดคุยเกี่ยวกับ Software Development, Data และ AI สามารถติดต่อผมได้ผ่านช่องทางด้านล่าง</p>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="flex flex-col">
            <a href={mailtoLink} className="bg-orange-500 text-white py-3 px-6 rounded-xl inline-flex items-center justify-center gap-2 font-semibold">
              <Mail  size={18} />
              Get in touch via Email
              <ArrowUpRight  size={18}  />
            </a>

            <h3 className="text-sm mt-4">EMAIL ADDRESS</h3>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="mt-1 flex items-center justify-between p-2.5 rounded-lg border border-slate-200 hover:border-orange-300 hover:bg-orange-50/50 transition-all text-slate-800 group cursor-pointer text-left"
              title="Click to copy email"
            >
              <span className="text-sm font-semibold">{email}</span>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 group-hover:text-orange-600">
                {copied ? (
                  <>
                    <Check size={16} className="text-emerald-600" />
                  </>
                ) : (
                  <Copy size={16} />
                )}
              </div>
            </button>
          </div>
          
          <hr className="my-4 border-slate-200 sm:hidden" />  

          <div className="flex flex-col gap-4">
            <h3 className="text-sm">FIND ME ONLINE</h3>
            <div className="flex gap-2">
              <a href={githubUrl} className="border border-gray-300 p-2 rounded-lg">
                <LuGithub />
              </a>
              <a href={linkedinUrl} className="border border-gray-300 p-2 rounded-lg">
                <LuLinkedin />
              </a>
            </div>
            <p className="text-sm">GitHub — Projects & Code  ·  LinkedIn — Professional Profile</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default Contact
