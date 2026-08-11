import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function Profile() {
  return (
    <div className="col-span-3 grid grid-cols-8 gap-5 border border-[#222222] rounded-xl bg-[#111111] p-5">
      <div className="col-span-3 flex flex-col gap-3 items-center border-r-2 border-[#222]">
        <Image
          alt="profile_picture"
          src="/profile_picture.png"
          width="200"
          height="200"
          className="rounded-[50%]"
        />
        <h1 className="text-3xl font-bold">Simone Roy G. Abello</h1>
        <ul className="flex text-xl text-gray-500 gap-4">
          <li className="">IT Graduate</li>
          <li className="">Full-Stack Web Developer</li>
          <li className="">Video Editor</li>
        </ul>
      </div>
      <div className="flex flex-col col-span-3 border-r-2 border-[#222] gap-5">
        <h1 className="section-title ">About me</h1>
        <p className="text-justify pr-5">
          Hi, I&apos;m Simone Roy, a fresh Information Technology graduate with
          sufficient knowledge of web development and programming and hands-on
          experience with video editing. Dedicated to continuous learning and
          professional growth.
        </p>
      </div>
      <div className="flex flex-col gap-5 col-span-2">
        <h1 className="section-title">Contacts</h1>
        <ul className="flex flex-col gap-3">
          <li className="flex gap-5"><Mail />belloabusiness@gmail.com</li>
          <li className="flex gap-5"><Phone />+63 936 245 1314</li>
        </ul>
      </div>
    </div>
  );
}
