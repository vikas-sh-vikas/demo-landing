import { useTranslations } from "next-intl";
import React from "react";

function BusinessSolution() {
  const t = useTranslations("business-solution");
    const h = useTranslations("header");
  
  return (
    <div id={h("6")} className="py-[4rem] w-full bg-black p-8">
      <div className="py-[2rem] text-[3.5rem] font-semibold text-white text-center">
{t("title")}      </div>
      <div className="text-center">
        <button className="px-16 py-3 text-lg text-black hover:text-white rounded-full bg-[#f9d1b7]">
{t("button")}        </button>
      </div>
    </div>
  );
}

export default BusinessSolution;
