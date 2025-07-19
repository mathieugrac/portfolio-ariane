import Image from "next/image";

export default function Header() {
  return (
    <header className="text-center mb-12">
      {/* Avatar */}
      <div className="mb-4">
        <div className="w-48 h-48 mx-auto rounded-full border border-white shadow-lg overflow-hidden">
          <Image 
            src="/images/ariane-2.jpg"
            alt="Ariane Bochi"
            width={192}
            height={192}
            className="w-full h-full object-cover object-[center_25%] scale-130"
          />
        </div>
      </div>
      
      {/* Name */}
      <h1 className="text-3xl font-light text-foreground">
        Ariane Bochi
      </h1>
      
      {/* Job Title */}
      <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto mb-8">
        Psicóloga online | CRP 07/24244
      </p>
      
      {/* Description */}
      <p className="text-stone-800 text-xl leading-relaxed max-w-md mx-auto">
        Dedicada às mulheres que questionam os padrões tradicionais. Apoio você a viver suas escolhas com liberdade e autenticidade.
      </p>
    </header>
  );
} 