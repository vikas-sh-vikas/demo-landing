"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaArrowRight } from "react-icons/fa";
import TryNowModal from "../modal/try-now-modal";

export default function Invitation() {
    const [tryNowModal,setTryNowModal] = useState(false)
  
  const t = useTranslations("invitation");
  const h = useTranslations("header");
  
  return (
    <motion.div id={h("2")}
      className="relative bg-gradient-to-r from-[#a8866f] to-[#8d6e58] py-16 px-4 sm:px-8 md:px-16 text-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-1/4 w-40 h-40 rounded-full bg-white blur-xl"></div>
        <div className="absolute bottom-20 right-1/3 w-32 h-32 rounded-full bg-[#BF9D84] blur-xl"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Question Text */}
        <motion.h2
          className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 leading-tight"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t("title")}
          <br></br>
          {t("title1")}
        </motion.h2>

        {/* Description */}
        {/* <motion.p
          className="text-white text-lg sm:text-xl mb-10 max-w-2xl mx-auto opacity-90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t("description")}
        </motion.p> */}

        {/* Contact Button */}
        <motion.div
          className="flex justify-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <button className="group bg-gradient-to-r from-white to-[#f0f0f0] text-[#8d6e58] text-xl font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3" onClick={() =>setTryNowModal(true)}>
            <span>{t("button")}</span>
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
            <TryNowModal 
        open={tryNowModal}
        onClose={() => setTryNowModal(false)} />
    </motion.div>
  );
}