import Header from "@/components/sections/Header";
import MainSection from "@/components/sections/MainSection";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#faf8f6' }}>
      {/* Background Image with Multiply Effect */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat mix-blend-multiply"
        style={{
          backgroundImage: `url('/images/shadow-7.jpg')`,
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4 py-30">
          <div className="w-full max-w-md mx-auto space-y-20">
            <Header />
            <MainSection />
            <Testimonials />
          </div>
        </div>
        
        {/* Footer with License Number */}
        <div className="relative z-10 pb-8">
          <div className="w-full max-w-md mx-auto px-4">
            <p className="text-center text-xs text-gray-500">
              CRP: 07/24244
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
