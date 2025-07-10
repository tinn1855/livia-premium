import { Footer } from '@/components/common/footer';
import { Header } from '@/components/common/header';
import { HeroSection } from '@/components/common/hero-section';
import { FormConsultation } from '@/components/molecules/form-consultation';
import { News } from '@/components/molecules/news';
import { SolutionAtLivia } from '@/components/molecules/solution-at-livia';

export function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <SolutionAtLivia />
      <FormConsultation />
      <News />
      <Footer />
    </>
  );
}
