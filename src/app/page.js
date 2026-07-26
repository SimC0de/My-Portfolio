import Image from "next/image";
import CertContainer from "./components/certificate/CertContainer";
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
            <li className="flex flex-col items-center text-center justify-between"><Laptop /> IT Graduate</li>
            <li>|<br />|</li>
            <li className="flex flex-col items-center text-center justify-between"><Layers /> Full-Stack Web Developer</li>
            <li>|<br />|</li>
            <li className="flex flex-col items-center text-center justify-between"><Video /> Video Editor</li>
          </ul>
          <p className="text-[18px] text-justify">Hi, I&apos;m Simone Roy, a fresh Information Technology graduate with sufficient knowledge of web development and programming and hands-on experience with video editing. Dedicated to continuous learning and professional growth.</p>
        </div>
        <CertContainer />
      </div>
    </div>
  );
}
