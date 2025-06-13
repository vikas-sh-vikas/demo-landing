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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="space-y-4">
      {data?.map((item, idx) => {
        const isOpen = idx === openIndex;
        return (
          <div 
            key={idx} 
            className="border border-[#BF9D84] rounded-xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {/* HEADER */}
            <button
              onClick={() => toggle(idx)}
              className={`
                w-full flex justify-between items-center
                bg-[#BF9D84] text-white rounded-t-xl
                p-5
                transition-all duration-300
                hover:bg-[#a8866f]
                ${isOpen ? 'rounded-b-none' : 'rounded-xl'}
              `}
            >
              <span className="text-xl font-medium text-left">{item.title}</span>
              <FaPlus
                size={24}
                className={`
                  transition-transform duration-300 flex-shrink-0
                  ${isOpen ? "rotate-45" : "rotate-0"}
                `}
              />
            </button>

            {/* CONTENT */}
            <div
              className={`
                px-6 py-0
                bg-white
                overflow-hidden
                transition-all duration-300 ease-in-out
                ${isOpen ? 'max-h-[500px] py-5' : 'max-h-0'}
              `}
            >
              <div className="px-6">
                <div className="text-2xl font-semibold mb-3 text-[#BF9D84]">
                  {item.contentTitle}
                </div>
                <div className="text-lg text-gray-700">{item.contentBody}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}