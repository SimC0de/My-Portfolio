import Image from "next/image";
import { Laptop, CodeXml, Video, Layers } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <header className="p-15 border-b-2 border-b-gray-500">
      </header>
      <div className="flex flex-col py-10 px-50 gap-5">
        <div className="flex flex-col items-center gap-3 p-10">
          <Image alt="profile_picture" src="/profile_picture.png" width="200" height="200" className="rounded-[50%]" />
          <h1 className="text-4xl font-bold">Simone Roy G. Abello</h1>
          <ul className="flex text-[20px] text-gray-500 gap-5">
            <li className="flex flex-col items-center text-center"><Laptop /> IT Graduate</li>
            <li>|<br />|</li>
            <li className="flex flex-col items-center text-center"><Layers /> Full-Stack Web Developer</li>
            <li>|<br />|</li>
            <li className="flex flex-col items-center text-center"><Video /> Video Editor</li>
          </ul>
          <p className="text-[18px] text-justify">Hi, I&apos;m Simone Roy, a fresh Information Technology graduate with sufficient knowledge of web development and programming and hands-on experience with video editing. Dedicated to continuous learning and professional growth.</p>
        </div>
        <div className="flex flex-col gap-5 border border-[#222222] rounded-xl bg-[#111111] py-5 px-10">
          <h1 className="text-3xl font-bold">Certificates</h1>
          <div className="flex gap-5">
            <Image alt="CodeCademy Javascript Certificate" src="/certificates/cc_learn_js_cert.png" width="350" height="276" />
            <Image alt="CodeCademy Javascript Certificate" src="/certificates/cc_learn_py_cert.png" width="350" height="276" />
            <Image alt="CodeCademy Javascript Certificate" src="/certificates/cc_learn_sql_cert.png" width="350" height="276" />
            <Image alt="CodeCademy Javascript Certificate" src="/certificates/cc_learn_php_cert.png" width="350" height="276" />
          </div>
        </div>
      </div>
    </div>
  );
}
