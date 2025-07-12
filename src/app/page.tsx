import Header from "@/components/sections/Header";
import MainSection from "@/components/sections/MainSection";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Sticky Background Image */}
      <div 
        className="fixed inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3e8ff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
