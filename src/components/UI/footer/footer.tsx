import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone, FaFileContract, FaShieldAlt } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer")
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-6">
              <Image
                src="/mad3wo_logo.svg"
                alt="Mazoom Company Logo"
                width={140}
                height={70}
              />
            </div>
            <p className="text-gray-400 mb-4 max-w-xs">
              {t("description")}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#BF9D84] transition">
                <FaFileContract size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#BF9D84] transition">
                <FaShieldAlt size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-bold mb-6 pb-2 border-b-2 border-[#BF9D84] inline-block">
              {t("contact_title")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#BF9D84] flex-shrink-0" />
                <span>{t("phone")}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#BF9D84] flex-shrink-0" />
                <span>{t("email")}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-[#BF9D84] flex-shrink-0" />
                <a 
                  href="https://wa.me/966550538840?text=مرحبًا، أود طلب تصميم خاص من مدعو."
                  className="hover:underline"
                >
                  {t("whatsapp")}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-bold mb-6 pb-2 border-b-2 border-[#BF9D84] inline-block">
              {t("links_title")}
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-[#BF9D84] transition flex items-center gap-2">
                  <FaFileContract className="text-[#BF9D84]" />
                  {t("terms")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#BF9D84] transition flex items-center gap-2">
                  <FaShieldAlt className="text-[#BF9D84]" />
                  {t("privacy")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#BF9D84] transition flex items-center gap-2">
                  <FaEnvelope className="text-[#BF9D84]" />
                  {t("support")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-bold mb-6 pb-2 border-b-2 border-[#BF9D84] inline-block">
              {t("social_title")}
            </h3>
            <p className="text-gray-400 mb-6 max-w-xs">
              {t("social_description")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.x.com/"
                aria-label="Twitter"
                className="bg-[#BF9D84] text-white rounded-full p-3 hover:bg-[#a8866f] transition"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.facebook.com/"
                aria-label="Facebook"
                className="bg-[#BF9D84] text-white rounded-full p-3 hover:bg-[#a8866f] transition"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                aria-label="Instagram"
                className="bg-[#BF9D84] text-white rounded-full p-3 hover:bg-[#a8866f] transition"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://wa.me/966550538840?text=مرحبًا، أود طلب تصميم خاص من مدعو."
                aria-label="WhatsApp"
                className="bg-[#BF9D84] text-white rounded-full p-3 hover:bg-[#a8866f] transition"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Mad3wo. {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}