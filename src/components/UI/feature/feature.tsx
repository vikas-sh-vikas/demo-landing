"use client";
import React from "react";
import Accordion from "../accordion/accordion";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Feature() {
  const t = useTranslations("features");
  const h = useTranslations("header");

    const data: AccordionItem[] = [
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
    }
  ];

  return (
    <motion.section 
      id={h("3")}
      className="bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden py-20 md:py-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Text + Accordion */}
          <div className="lg:col-span-3 space-y-8">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#BF9D84] pb-2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {t("title")}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-2"
            >
              <Accordion data={data} />
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="relative w-full aspect-square lg:col-span-2 rounded-2xl overflow-hidden h-ful p-6"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="absolute inset-4 rounded-xl overflow-hidden borde">
              <Image
                src="/feature.avif"
                alt="Feature illustration"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="p-4"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

