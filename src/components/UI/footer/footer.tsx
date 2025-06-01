import React from "react";
import { FaGoogle, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer")
  return (
    <footer className="bg-black text-white py-8 px-4 sm:px-8 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-start gap-8">
        {/* Logo + Address */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="mb-4">
            <Image
              src="/footer-logo.avif"
              alt="Mazoom Company Logo"
              width={120}
              height={60}
            />
          </div>
          <address className="not-italic text-sm">
            {t("address")}
            <br></br>
            {t("address1")}
          </address>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <ul className="space-y-2 mb-4">
            <li>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li className="font-medium">Connect with us here</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href="https://www.google.com"
              aria-label="Google"
              className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition"
            >
              <FaGoogle size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              aria-label="Instagram"
              className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://wa.me/9665052787"
              aria-label="WhatsApp"
              className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
