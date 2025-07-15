import { Button } from '@/components/ui/button';

export function Booking() {
  return (
    <section className="container mx-auto px-5 py-10 max-w-xl text-center">
      <h4 className="text-xl">
        Đến gặp <span className="font-medium">Livia Premium</span> hôm nay
      </h4>
      <div className="py-5">
        <p>Thứ 2 - Thứ 6: 11am - 7pm</p>
        <p>Thứ 7 - Chủ nhật: 10am - 8pm</p>
      </div>
      <div className="flex justify-center gap-4">
        <Button className="w-1/3">Đặt lịch hẹn</Button>
        <Button className="w-1/3">Xem dịch vụ</Button>
      </div>
    </section>
  );
}
