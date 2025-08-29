import Image from "next/image";

export default function Header() {
  return (
    <header className="text-center mb-10">
      {/* Avatar */}
      <div className="mb-4">
        <div className="w-[160px] h-[160px] mx-auto rounded-full border border-white shadow-lg overflow-hidden">
          <Image
            src="/images/ariane-2.jpg"
            alt="Ariane Bochi"
            width={160}
            height={160}
            className="w-full h-full object-cover object-[center_50%] scale-120"
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-[44px] font-normal text-foreground font-bethany tracking-[0.5px] leading-[56px]">
        Ariane Bochi
      </h1>

      {/* Job Title */}
      <p className="text-gray-600 text-[14px] leading-relaxed max-w-md mx-auto mb-8 font-bethany-italic">
        Psicóloga online | CRP 07/24244
      </p>
    </header>
  );
}
