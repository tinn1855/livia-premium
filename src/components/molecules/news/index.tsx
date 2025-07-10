import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const newsData = [
  {
    title: 'Is skincare really important!',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: '/img/home/slider/banner-livia-1.jpg',
    url: '/news/skincare-importance',
  },
  {
    title: 'Is skincare really important!',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: '/img/home/slider/banner-livia-1.jpg',
    url: '/news/skincare-importance',
  },
  {
    title: 'Is skincare really important!',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: '/img/home/slider/banner-livia-1.jpg',
    url: '/news/skincare-importance',
  },
  {
    title: 'Is skincare really important!',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: '/img/home/slider/banner-livia-1.jpg',
    url: '/news/skincare-importance',
  },
  {
    title: 'Is skincare really important!',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: '/img/home/slider/banner-livia-1.jpg',
    url: '/news/skincare-importance',
  },
];

export function News() {
  return (
    <section
      aria-labelledby="news-heading"
      className="container mx-auto px-5 py-10"
    >
      <header className="mb-6">
        <h2 id="news-heading" className="font-semibold text-primary text-2xl">
          Tin tức
        </h2>
      </header>

      <Carousel>
        <CarouselContent>
          {newsData.map((item, index) => (
            <CarouselItem key={index} className="basis-1/4 space-y-3">
              <article className="h-full">
                <img
                  src={item.image}
                  alt={`Hình ảnh cho bài viết: ${item.title}`}
                  className="rounded-sm w-full h-auto object-cover"
                />
                <h3 className="font-semibold text-lg">
                  <a href={item.url} className="hover:underline text-primary">
                    {item.title}
                  </a>
                </h3>
                <p className="text-pretty text-sm text-gray-600">
                  {item.description}
                </p>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
