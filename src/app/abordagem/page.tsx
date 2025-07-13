import Link from "next/link";

export default function AbordagemPage() {
  return (
    <div className="min-h-screen relative">
      {/* Sticky Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/shadow-7.jpg')`,
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header with Back Button */}
        <div className="flex-1 flex items-center justify-center px-4 py-30">
          <div className="w-full max-w-md mx-auto space-y-20">
            {/* Back Button */}
            <div className="text-center mb-8">
              <Link 
                href="/"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm"
              >
                <svg 
                  className="w-4 h-4 mr-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 19l-7-7 7-7" 
                  />
                </svg>
                Voltar
              </Link>
            </div>
            
            {/* Page Title */}
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                A minha Abordagem
              </h1>
              <p className="text-gray-600 text-lg">
                Como trabalho e como posso ajudá-la
              </p>
            </div>
            
            {/* Main Content */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Minha abordagem terapêutica é baseada nas Terapias Cognitivas, 
                  combinadas com uma perspectiva de gênero e família. Trabalho 
                  especificamente com mulheres que questionam os padrões tradicionais 
                  impostos pela sociedade.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Através de um espaço seguro e acolhedor, ajudo você a explorar 
                  suas escolhas, repensar sua identidade e encontrar sua própria 
                  voz. O processo terapêutico é colaborativo, respeitando sempre 
                  sua autonomia e individualidade.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Realizo atendimentos exclusivamente online, oferecendo flexibilidade 
                  e comodidade para mulheres que buscam apoio emocional e crescimento 
                  pessoal em suas próprias rotinas.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="relative z-10 pb-8">
          <div className="w-full max-w-md mx-auto px-4">
            {/* Footer content will be added later */}
          </div>
        </div>
      </div>
    </div>
  );
} 