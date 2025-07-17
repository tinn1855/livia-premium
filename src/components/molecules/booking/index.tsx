import { Button } from '@/components/ui/button';

export function Booking() {
  return (
    <section
      className="container mx-auto px-5 py-10 max-w-xl text-center"
      aria-labelledby="booking-title"
    >
      <header>
        <h2 id="booking-title" className="text-2xl">
          Đến gặp <span className="font-medium">Livia Premium</span> hôm nay
        </h2>
      </header>

      <div className="py-5" aria-label="Giờ làm việc">
        <p>
          Thứ 2 - Thứ 6: <time dateTime="11:00">11am</time> -{' '}
          <time dateTime="19:00">7pm</time>
        </p>
        <p>
          Thứ 7 - Chủ nhật: <time dateTime="10:00">10am</time> -{' '}
          <time dateTime="20:00">8pm</time>
        </p>
      </div>

      <div
        className="flex justify-center gap-4"
        role="group"
        aria-label="Hành động"
      >
        <Button className="w-1/3">Đặt lịch hẹn</Button>
        <Button className="w-1/3">Xem dịch vụ</Button>
      </div>
    </section>
  );
}
