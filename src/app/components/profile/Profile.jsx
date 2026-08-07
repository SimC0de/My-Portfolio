import Image from "next/image";

export default function Profile() {
  return (
    <div className="col-span-3 grid grid-cols-6 gap-5 border border-[#222222] rounded-xl bg-[#111111] p-5">
      <div className="col-span-2 flex flex-col gap-3 items-center border-r-2 border-[#222]">
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
      <div className="col-span-3 border-r-2 border-[#222] p-5">
        <h1 className="section-title ">About me</h1>
        <p className="text-[18px] text-justify">
          Hi, I&apos;m Simone Roy, a fresh Information Technology graduate with
          sufficient knowledge of web development and programming and hands-on
          experience with video editing. Dedicated to continuous learning and
          professional growth.
        </p>
      </div>
      <div className="col-span-1">
        <h1 className="section-title">Contacts</h1>
      </div>
    </div>
  );
}
