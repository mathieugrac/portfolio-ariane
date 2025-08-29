import Image from "next/image";

export default function Header() {
  return (
    <header className="text-center mb-10">
      {/* Avatar */}
      <div className="mb-4">
        <div className="w-[120px] h-[120px] mx-auto rounded-full overflow-hidden">
          <Image
            src="/images/ariane-2.jpg"
            alt="Ariane Bochi"
            width={120}
            height={120}
            className="w-full h-full object-cover object-[center_50%] scale-120"
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="mb-4">Ariane Bochi</h1>

      {/* Job Title */}
      <p className="max-w-md mx-auto mb-8">Psicóloga online | CRP 07/24244</p>
    </header>
  );
}
