import Image from "next/image";

export default function Header() {
  return (
    <header className="text-center mb-10">
      {/* Avatar */}
      <div className="mb-4">
        <div className="w-50 h-50 mx-auto rounded-full border border-white shadow-lg overflow-hidden">
                      <Image 
              src="/images/ariane-2.jpg"
              alt="Ariane Bochi"
              width={200}
              height={200}
              className="w-full h-full object-cover object-[center_25%] scale-142"
            />
        </div>
      </div>
      
      {/* Name */}
      <h1 className="text-[48px] font-normal text-foreground font-instrument-serif tracking-[0.5px] leading-[68px]">
        Ariane Bochi
      </h1>
      
      {/* Job Title */}
      <p className="text-gray-600 text-[14px] leading-relaxed max-w-md mx-auto mb-8 font-inter">
        Psicóloga online | CRP 07/24244
      </p>
      
    </header>
  );
} 