"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

type AccordionItem = {
  title: string;
  contentTitle: string;
  contentBody: string;
};

type AccordionProps = {
  data: AccordionItem[];
};

export default function Accordion({ data }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="space-y-4">
      {data?.map((item, idx) => {
        const isOpen = idx === openIndex;
        return (
          <div 
            key={idx} 
            className={`
              border border-gray-200 rounded-xl overflow-hidden
              transition-all duration-300 shadow-sm
              ${isOpen ? "shadow-md ring-1 ring-gray-100" : "hover:shadow-md"}
            `}
          >
            {/* HEADER */}
            <button
              onClick={() => toggle(idx)}
              className={`
                w-full flex justify-between items-center
                bg-white text-gray-900 rounded-t-xl
                p-5 transition-colors duration-200
                ${isOpen 
                  ? "bg-gray-50 border-b border-gray-200" 
                  : "hover:bg-gray-50"}
              `}
              aria-expanded={isOpen}
            >
              <span className="text-lg text-gray-500 font-semibold text-left pr-4">{item.title}</span>
              <FaPlus
                size={20}
                className={`
                  transition-transform duration-300 flex-shrink-0
                  text-gray-500
                  ${isOpen ? "rotate-45 text-gray-700" : ""}
                `}
              />
            </button>

            {/* CONTENT */}
            <div
              className={`
                bg-gray-50 overflow-hidden
                transition-all duration-300 ease-in-out
                ${isOpen ? "max-h-[500px] py-5" : "max-h-0"}
              `}
            >
              <div className="px-6 pb-2">
                <div className="text-xl font-semibold mb-2 text-gray-500">
                  {item.contentTitle}
                </div>
                <div className="text-gray-500 leading-relaxed">{item.contentBody}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}