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
      <h1 className="mb-4">Ariane Bochi</h1>

      {/* Job Title */}
      <h2 className="max-w-md mx-auto mb-8">Psicóloga online | CRP 07/24244</h2>
    </header>
  );
}
