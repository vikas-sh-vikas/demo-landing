"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Invitation() {
  const t = useTranslations("invitation");
    const h = useTranslations("header");
  
  return (
    <motion.div id={h("2")}
      className="bg-black mx-4 sm:mx-8 md:mx-28 my-12 rounded-3xl p-8 sm:p-12 md:p-28"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Question Text */}
      <motion.h2
        className="text-white text-2xl sm:text-3xl md:text-4xl text-center md:text-right mb-6"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {t("title")}
      </motion.h2>

      {/* Contact Button */}
      <motion.div
        className="flex justify-center md:justify-end"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <button className="bg-white text-black text-lg sm:text-xl px-8 sm:px-12 py-3 rounded-full shadow-lg hover:scale-105 transition-transform">
          {t("button")}{" "}
        </button>
      </motion.div>
    </motion.div>
  );
}
