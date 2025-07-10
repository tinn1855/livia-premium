import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export function HeroSection() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <img
            height="600px"
            src="/public/img/home/slider/banner-livia-1.jpg"
            alt=""
          />
        </CarouselItem>
        <CarouselItem>
          <img src="/public/img/home/slider/banner-livia-2.jpg" alt="" />
        </CarouselItem>
        <CarouselItem>
          <img src="/public/img/home/slider/banner-livia-1.jpg" alt="" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
