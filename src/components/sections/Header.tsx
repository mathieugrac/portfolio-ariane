import Image from "next/image";
import { siteConfig } from "@/lib/config";

export default function Header() {
  return (
    <header className="text-center">
      {/* Avatar */}
      <div className="mb-4">
        <div className="w-[120px] h-[120px] mx-auto">
          <Image
            src={siteConfig.personal.profileImage}
            alt={siteConfig.personal.profileImageAlt}
            width={120}
            height={120}
          />
        </div>
      </div>
      {/* Name */}
      <h1 className="mb-2">{siteConfig.personal.name}</h1>
      {/* Job Title */}
      <p className="mx-auto">
        {siteConfig.personal.jobTitle} | {siteConfig.personal.credentials}
      </p>
    </header>
  );
}
