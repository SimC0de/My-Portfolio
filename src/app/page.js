import Image from "next/image";
import CertContainer from "./components/certificate/CertContainer";
import { Laptop, CodeXml, Video, Layers } from 'lucide-react';
import TechStack from "./components/TechStack";
import Profile from "./components/profile/Profile";
import ProjCon from "./components/project/ProjCon";

export default function Home() {
  return (
    <div>
      <header className="p-15 border-b-2 border-b-gray-500">
      </header>
      <div className="grid grid-cols-3 py-10 px-50 gap-5">
        <Profile />
        <ProjCon />
        <TechStack />
        <CertContainer />
      </div>
    </div>
  );
}
