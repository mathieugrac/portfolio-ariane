import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import MainSection from "@/components/sections/MainSection";
import PageLayout from "@/components/layout/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <Header />
      <MainSection />
      <Footer />
    </PageLayout>
  );
}
