import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary py-3 my-5 text-white">
      <div className="container mx-auto px-5">
        <section className="flex flex-col md:flex-row justify-between gap-6">
          <address className="not-italic w-full md:w-1/3">
            <img
              className="w-36 mb-2"
              src="/public/img/logo-livia.png"
              alt="Logo Livia"
            />
            <h2 className="font-semibold text-lg mb-2">Liên hệ</h2>
            <p>
              Hotline:{' '}
              <a href="tel:+02556271357" className=" hover:text-gray-200">
                0255 6271 357
              </a>
            </p>
            <p>
              Địa chỉ:{' '}
              <a
                href="https://maps.google.com/?q=33 Trường Chinh, Thành phố Huế"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-gray-200"
              >
                33 Trường Chinh, Thành phố Huế
              </a>
            </p>
            <p>
              Email:{' '}
              <a
                href="mailto:livia.premium@gmail.com"
                className=" hover:text-gray-200"
              >
                livia.premium@gmail.com
              </a>
            </p>
          </address>
          <nav aria-label="Liên kết nhanh" className="w-full md:w-1/3">
            <h2 className="font-semibold text-lg mb-2">Liên kết nhanh</h2>
            <ul className="space-y-1">
              <li>
                <a href="/about">Giới thiệu</a>
              </li>
              <li>
                <a href="/contact">Liên hệ</a>
              </li>
              <li>
                <a href="/products">Sản phẩm</a>
              </li>
              <li>
                <a href="/cart">Giỏ hàng</a>
              </li>
            </ul>
          </nav>
          <section className="w-full md:w-1/3">
            <h2 className="font-semibold text-lg mb-2">Theo dõi chúng tôi</h2>
            <nav aria-label="Mạng xã hội">
              <ul className="flex gap-3">
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <Twitter />
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </section>
        <div className="mt-6 text-center">
          <hr />
          <p className="py-5 text-sm">
            © 2025 Livia Premium. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
