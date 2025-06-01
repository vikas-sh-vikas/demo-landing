"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";

type AccordionProps = {
  data: AccordionItem[];
};

export default function Accordion({ data }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="space-y-6">
      {data?.map((item, idx) => {
        const isOpen = idx === openIndex;
        return (
          <div key={idx} className="border rounded-2xl overflow-hidden w-full">
            {/* HEADER */}
            <button
              onClick={() => toggle(idx)}
              className="
                w-full flex justify-between items-center
                bg-black text-white rounded-full
                p-4
                transition-colors duration-200
                hover:bg-white hover:text-black
              "
            >
              <span className="text-lg text-left">{item.title}</span>
              <FaPlus
                className={`
                  transition-transform duration-300
                  ${isOpen ? "rotate-45" : "rotate-0"}
                `}
              />
            </button>

            {/* CONTENT */}
            <div
              className={`
                px-12 pt-4 pb-6
                text-right bg-white
                max-h-0 overflow-hidden
                rounded-2xl mt-[1.5rem]
                transition-[max-height] duration-300 ease-out
-                ${isOpen ? 'max-h-100' : 'hidden'}`}
            >
              <div className="text-xl font-semibold mb-2">
                {item.contentTitle}
              </div>
              <div className="text-md">{item.contentBody}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
