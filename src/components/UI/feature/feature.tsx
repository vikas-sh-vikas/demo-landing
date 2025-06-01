"use client";
import React from "react";
import Accordion from "../accordion/accordion";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Feature() {
  const t = useTranslations("features");
  const h = useTranslations("header");

  const data:AccordionItem[]= [
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
      },
    ];
  
  return (
    <motion.section id={h("3")}
      className="bg-black ml-8 md:ml-28 my-16 rounded-3xl rounded-r-none overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 p-8 sm:p-12 lg:p-16 items-center">
        {/* Text + Accordion */}
        <div className="lg:col-span-4 space-y-6 mx-auto lg:max-w-[40vw]">
          <motion.h2
            className="text-white text-2xl sm:text-3xl md:text-4xl text-center lg:text-right leading-snug"
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
          >
            <Accordion data={data} />
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
            src="/feature.avif"
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
  );
}
