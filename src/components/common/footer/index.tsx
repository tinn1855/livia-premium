import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer
      className="bg-primary py-8 text-white"
      aria-labelledby="footer-heading"
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <section
            aria-labelledby="footer-contact-heading"
            className="w-full md:w-1/3"
          >
            <address className="not-italic">
              <img
                className="w-36 mb-2"
                src="/public/img/logo-livia.png"
                alt="Logo Livia"
              />
              <p>
                Hotline:{' '}
                <a href="tel:+02556271357" className="hover:text-gray-200">
                  0255 6271 357
                </a>
              </p>
              <p>
                Địa chỉ:{' '}
                <a
                  href="https://maps.google.com/?q=33 Trường Chinh, Thành phố Huế"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200"
                >
                  33 Trường Chinh, Thành phố Huế
                </a>
              </p>
              <p>
                Email:{' '}
                <a
                  href="mailto:livia.premium@gmail.com"
                  className="hover:text-gray-200"
                >
                  livia.premium@gmail.com
                </a>
              </p>
            </address>
          </section>
          <nav
            aria-labelledby="footer-links-heading"
            className="w-full md:w-1/3"
          >
            <h3
              id="footer-links-heading"
              className="font-semibold text-lg mb-2"
            >
              Liên kết nhanh
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="/about" className="hover:text-gray-200">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-200">
                  Liên hệ
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-gray-200">
                  Sản phẩm
                </a>
              </li>
              <li>
                <a href="/cart" className="hover:text-gray-200">
                  Giỏ hàng
                </a>
              </li>
            </ul>
          </nav>

          <section
            aria-labelledby="footer-social-heading"
            className="w-full md:w-1/3"
          >
            <h3
              id="footer-social-heading"
              className="font-semibold text-lg mb-2"
            >
              Theo dõi chúng tôi
            </h3>
            <nav aria-label="Mạng xã hội">
              <ul className="flex gap-3">
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="hover:text-gray-200"
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
                    className="hover:text-gray-200"
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
                    className="hover:text-gray-200"
                  >
                    <Twitter />
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </div>
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
