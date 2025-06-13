import React from "react";
import { FaDiamond } from "react-icons/fa6";
import Image from "next/image";
import { useTranslations } from "next-intl";

function PurchaseBanner() {
  const t = useTranslations("purchase-banner");
  return (
    <div className="bg-[#F6F1EC] rounded-2xl mx-4 md:mx-[6rem] px-6 md:px-12 py-16 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div>
          <div className="flex text-[#BF9D84] font-semibold items-center gap-2 text-xl">
            <FaDiamond />
            {t("title")}
          </div>
          <div className="text-2xl md:text-3xl py-4 font-semibold">
            {t("sub-title")}
          </div>
          <div className="pb-6 text-base md:text-lg text-gray-700">
            {t("paragraph")}
          </div>
          <button className="px-8 py-3 text-base md:text-lg font-medium text-white hover:text-black bg-[#BF9D84] hover:bg-white rounded-full hover:shadow-lg transition duration-300 cursor-pointer">
            {t("button-text")}
          </button>
        </div>
        <div className="md:col-span-2 flex justify-center">
          <Image
            alt="purchase-banner"
            src="/purchase_banner.webp"
            width={600}
            height={400}
            className="w-full h-auto max-w-xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default PurchaseBanner;
