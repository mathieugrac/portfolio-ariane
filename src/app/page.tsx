import Header from "@/components/sections/Header";
import MainSection from "@/components/sections/MainSection";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
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
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4 py-30">
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
