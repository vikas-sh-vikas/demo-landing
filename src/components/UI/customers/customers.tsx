"use client";
import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Customers() {
  const t = useTranslations("customers");
  const h = useTranslations("header");

  const testimonials = [
    {
      title: t("tesimonials.0.quote"),
      contentTitle: t("tesimonials.0.feedback"),
      contentBody: t("tesimonials.0.author")
    },
    {
      title: t("tesimonials.1.quote"),
      contentTitle: t("tesimonials.1.feedback"),
      contentBody: t("tesimonials.1.author")
    },
    { 
      title: t("tesimonials.2.quote"),
      contentTitle: t("tesimonials.2.feedback"),
      contentBody: t("tesimonials.2.author")
    }
  ];

  return (
    <div id={h("4")} className="bg-[#BF9D84] py-[140px] px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("title")}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col justify-between rounded-2xl overflow-hidden shadow-2xl"
              custom={idx}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Card Body - Reversed to white */}
              <div className="p-8 bg-white h-full">
                <div className="flex justify-between items-start mb-6">
                  <FaQuoteRight size={36} className="text-[#BF9D84] rotate-180" />
                  <div className="bg-[#BF9D84] w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{idx + 1}</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg font-semibold text-gray-800 italic">
                    {t.title}
                  </p>
                  <p className="text-gray-600">{t.contentTitle}</p>
                </div>
              </div>
              
              {/* Author Section - Reversed to accent color */}
              <div className="bg-gradient-to-r from-[#a8866f] to-[#8d6e58] text-white px-8 py-5">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-lg">{t.contentBody}</span>
                  {/* <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div> */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
  {/* <motion.section
    className="bg-[#BF9D84] my-16 rounded-3xl overflow-hidden"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 p-8 sm:p-12 lg:p-16 items-center">
      Text + Accordion 
      <div className="lg:col-span-4 space-y-6 mx-auto lg:max-w-[40vw]">
        <motion.h2
          className="text-white text-2xl sm:text-3xl md:text-4xl text-center lg:text-right leading-snug"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t("accordion-header")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Accordion data={data}/>
        </motion.div>
      </div>

      Image
      <motion.div
        className="relative w-full aspect-[4/4] lg:col-span-2 rounded-xl overflow-hidden h-full"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Image
          src="/Customers.gif"
          alt="Feature illustration"
          fill
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
          priority
        />
      </motion.div>
    </div>
  </motion.section> */}

