import Image from "next/image";

export default function Header() {
  return (
    <header className="text-center mb-12">
      {/* Avatar */}
      <div className="mb-4">
        <div className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-lg overflow-hidden">
          <Image 
            src="/images/ariane-bochi-1.jpeg"
            alt="Ariane Bochi"
            width={96}
            height={96}
            className="w-full h-full object-cover scale-120"
          />
        </div>
      </div>
      
      {/* Name */}
      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        Ariane Bochi
      </h1>
      
      {/* Job Title */}
      <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto mb-4">
        Psicóloga brasileira em Portugal.
      </p>
      
      {/* Description */}
      <p className="text-black text-base leading-relaxed max-w-md mx-auto">
        Especializada em saúde mental feminina. Ofereço apoio emocional e terapia individual para mulheres que buscam 
        equilíbrio e bem-estar em suas vidas.
      </p>
    </header>
  );
} 