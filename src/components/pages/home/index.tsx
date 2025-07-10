import { Footer } from '@/components/common/footer';
import { Header } from '@/components/common/header';
import { HeroSection } from '@/components/common/hero-section';
import { FormConsultation } from '@/components/molecules/form-consultation';

export function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FormConsultation />
      <Footer />
    </>
  );
}
