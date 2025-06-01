import { useTranslations } from "next-intl";
import React from "react";

export default function ContactUs() {
  const t = useTranslations("contact-us");
    const h = useTranslations("header");
  
  return (
    <section id={h("6")} className="bg-[#ec7a30] px-4 sm:px-8 lg:px-32 py-12 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        {/* Title & Description */}
        <div className="md:col-span-2 flex flex-col items-center sm:items-center md:items-start">
          <h2 className="text-white text-3xl sm:text-4xl font-semibold mb-4">
            {t("header")}{" "}
          </h2>
          <p className="text-white text-base sm:text-lg text-center sm:text-left">{t("sub-header")}</p>
          <div className="mt-8">
            <button className="px-8 py-3 text-lg font-medium text-black hover:text-white bg-white hover:bg-black rounded-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              {t("button")}{" "}
            </button>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex flex-col items-center sm:items-center md:items-start">
          <span className="text-white uppercase text-sm font-medium mb-1">
            {t("hours")}{" "}
          </span>
          <span className="text-white text-lg font-semibold">{t("time")}</span>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center sm:items-center md:items-start">
          <span className="text-white uppercase text-sm font-medium mb-1">
            {t("phone")}{" "}
          </span>
          <a
            href="tel:+9665052787"
            className="text-white text-lg font-semibold hover:underline"
          >
            {t("phone-no")}{" "}
          </a>
        </div>

        {/* Empty / Placeholder for future content */}
        {/* <div></div> */}
      </div>
    </section>
  );
}
