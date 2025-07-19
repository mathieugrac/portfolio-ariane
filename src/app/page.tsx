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
        <div className="flex-1 flex items-center justify-center px-4 py-[90px]">
          <div className="w-full max-w-md mx-auto space-y-20">
            <Header />
            <MainSection />
            <Testimonials />
          </div>
        </div>
        
      </div>
    </div>
  );
}
