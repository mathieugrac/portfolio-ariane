import Image from "next/image";

export default function Header() {
  return (
    <header className="text-center mb-12">
      {/* Avatar */}
      <div className="mb-4">
        <div className="w-24 h-24 mx-auto rounded-full border-2 border-white shadow-lg overflow-hidden">
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
      <h1 className="text-2xl font-bold text-foreground">
        Ariane Bochi
      </h1>
      
      {/* Job Title */}
      <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto mb-8">
        Psicóloga online
      </p>
      
      {/* Description */}
      <p className="text-stone-800 text-lg leading-relaxed max-w-md mx-auto">
        Dedicada às mulheres que questionam os padrões tradicionais. Apoio você a viver suas escolhas com liberdade e autenticidade.
      </p>
      
      {/* Approach Link */}
      <p className="mt-4">
        <a 
          href="/abordagem" 
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm"
        >
          Mais sobre a minha Abordagem
          <svg 
            className="w-4 h-4 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </a>
      </p>
    </header>
  );
} 