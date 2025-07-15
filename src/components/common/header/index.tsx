import { ShoppingCart } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-primary py-3 fixed z-10 w-full shadow-xl">
      <div className="container mx-auto px-5 flex justify-between items-center text-white">
        <div>
          <img
            className="w-36"
            src="/public/img//logo-livia.png"
            alt="Logo Livia"
          />
        </div>
        <nav>
          <ul className="flex justify-between gap-8">
            <li>
              <a href="/">Trang chủ</a>
            </li>
            <li>
              <a href="/">Sản phẩm</a>
            </li>
            <li>
              <a href="/">Tin tức</a>
            </li>
            <li>
              <a href="/">Về chúng tôi</a>
            </li>
            <li>
              <a href="/">Liên hệ</a>
            </li>
            <li>
              <a href="/">
                <ShoppingCart />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
