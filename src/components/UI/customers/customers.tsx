"use client";
import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import Accordion from "../accordion/accordion";
import Image from "next/image";
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
    quote: t("tesimonials.0.quote"),
    feedback:t("tesimonials.0.feedback"),
    author: t("tesimonials.0.author")
  },
  {
    quote: t("tesimonials.1.quote"),
    feedback:t("tesimonials.1.feedback"),
    author: t("tesimonials.1.author")
  },
  {
    quote: t("tesimonials.2.quote"),
    feedback:t("tesimonials.2.feedback"),
    author: t("tesimonials.2.author")
  }

];
  const data = [
      {
        "title": t("accordion.0.title"),
        "contentTitle": t("accordion.0.contentTitle"),
        "contentBody": t("accordion.0.contentBody")
      },
      {
        "title": t("accordion.1.title"),
        "contentTitle": t("accordion.1.contentTitle"),
        "contentBody": t("accordion.1.contentBody")
      },
      {
        "title": t("accordion.2.title"),
        "contentTitle": t("accordion.2.contentTitle"),
        "contentBody": t("accordion.2.contentBody")
      },
      {
        "title": t("accordion.3.title"),
        "contentTitle": t("accordion.3.contentTitle"),
        "contentBody": t("accordion.3.contentBody")
      },
      {
        "title": t("accordion.4.title"),
        "contentTitle": t("accordion.4.contentTitle"),
        "contentBody": t("accordion.4.contentBody")
      }
    ];
  return (
    <div id={h("4")} className="px-4 md:px-8 lg:px-16 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {t("title")}
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col justify-between border border-gray-300 rounded-2xl overflow-hidden shadow-lg bg-white"
            custom={idx}
            variants={cardVariants}
          >
            <div className="p-8">
              <FaQuoteRight size={"30px"} className="text-[#ec7a30] mb-4" />
              <p className="text-md font-semibold text-right mb-2">{t.quote}</p>
              <p className="text-sm text-right text-gray-600">{t.feedback}</p>
            </div>
            <div className="bg-[#ec7a30] text-white px-6 py-4 text-sm">
              {t.author}
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.section
        className="bg-black my-16 rounded-3xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 p-8 sm:p-12 lg:p-16 items-center">
          {/* Text + Accordion */}
          <div className="lg:col-span-4 space-y-6 mx-auto max-w-[40vw]">
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

          {/* Image */}
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
      </motion.section>
    </div>
  );
}
