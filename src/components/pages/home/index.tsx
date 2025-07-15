import { Footer } from '@/components/common/footer';
import { Header } from '@/components/common/header';
import { HeroSection } from '@/components/common/hero-section';
import { Booking } from '@/components/molecules/booking';
import { FormConsultation } from '@/components/molecules/form-consultation';
import { Map } from '@/components/molecules/map';
import { News } from '@/components/molecules/news';
import { SolutionAtLivia } from '@/components/molecules/solution-at-livia';

export function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <SolutionAtLivia />
      <Booking />
      <FormConsultation />
      <News />
      <Map />
      <Footer />
    </>
  );
}
