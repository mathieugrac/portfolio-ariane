import Image from "next/image";

export default function Header() {
  return (
    <header className="text-center">
      {/* Avatar */}
      <div className="mb-4">
        <div className="w-[120px] h-[120px] mx-auto">
          <Image
            src="/images/ariane-3.png"
            alt="Ariane Bochi"
            width={120}
            height={120}
          />
        </div>
      </div>
      {/* Name */}
      <h1 className="mb-2">Ariane Bochi</h1>
      {/* Job Title */}
      <p className="mx-auto">Psicóloga online | CRP 07/24244</p>
    </header>
  );
}
