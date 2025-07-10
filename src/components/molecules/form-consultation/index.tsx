import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  phone: string;
  message: string;
};

export function FormConsultation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert('Đăng ký thành công!\n' + JSON.stringify(data, null, 2));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-xl mx-auto py-5 bg-white "
    >
      <h2 className="text-xl font-bold mb-4 text-primary text-center">
        ĐỂ ĐƯỢC TƯ VẤN CHI TIẾT
      </h2>
      <div>
        <Label>Họ và tên</Label>
        <Input
          className="w-full rounded px-3 py-2"
          {...register('name', { required: 'Vui lòng nhập họ và tên' })}
        />
        {errors.name && (
          <span className="text-destructive text-sm">
            {errors.name.message}
          </span>
        )}
      </div>
      <div>
        <Label>Số điện thoại</Label>
        <Input
          className="w-full rounded px-3 py-2"
          {...register('phone', { required: 'Vui lòng nhập số điện thoại' })}
        />
        {errors.phone && (
          <span className="text-destructive text-sm">
            {errors.phone.message}
          </span>
        )}
      </div>
      <div>
        <Label>Nội dung</Label>
        <textarea
          className="w-full border rounded px-3 py-2"
          rows={3}
          {...register('message')}
        />
      </div>
      <Button type="submit" className="w-full">
        Gửi đăng ký
      </Button>
    </form>
  );
}
