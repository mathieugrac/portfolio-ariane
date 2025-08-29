import Header from "@/components/sections/Header";
import MainSection from "@/components/sections/MainSection";
import Testimonials from "@/components/sections/Testimonials";
import IconButtons from "@/components/sections/IconButtons";
import PageLayout from "@/components/layout/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <Header />
      <MainSection />
      <Testimonials />
      <IconButtons />
    </PageLayout>
  );
}
