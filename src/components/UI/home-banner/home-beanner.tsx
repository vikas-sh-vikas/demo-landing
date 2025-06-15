"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaApple, FaGooglePlay, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import TryNowModal from "../modal/try-now-modal";

function HomeBanner() {
  const [tryNowModal,setTryNowModal] = useState(false)
  const t = useTranslations("home-banner");
  const h = useTranslations("header");
  console.log("Modal flag",tryNowModal)
  return (
    <div id={h("1")} className="px-4 sm:px-8 md:px-[7rem] py-12 md:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center">
        {/* Text Content */}
        <motion.div
          className="md:col-span-3 text-center md:text-left space-y-8 pb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-700 leading-tight"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="block">{t("header")}</span>
            <span className="block mt-2 text-[#BF9D84]">
              {t("header1")}
            </span>
          </motion.h1>

          {/* <motion.p
            className="text-lg text-gray-600 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t("paragraph")}
          </motion.p> */}

          {/* Single Strong CTA Button */}
          <motion.div
            className="pt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <button className="group relative bg-gradient-to-r from-[#BF9D84] to-[#a8866f] hover:from-[#a8866f] hover:to-[#8d6e58] text-white text-xl font-bold px-10 py-5 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 mx-auto md:mx-0" onClick={() => setTryNowModal(true)}
>
              <span className="text-xl md:text-2xl">{t("button")}</span>
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </button>
          </motion.div>

          {/* App Buttons - Smaller and below main CTA */}
          <motion.div
            className="flex justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button className="flex gap-2 items-center bg-gray-800 hover:bg-gray-600 text-white text-sm sm:text-base px-6 py-4 rounded-full shadow-md transition-all duration-300 hover:scale-105">
              <FaGooglePlay size={16} />
              <span>Google Play</span>
            </button>
            <button className="flex gap-2 items-center bg-gray-800 hover:bg-gray-600 text-white text-sm sm:text-base px-6 py-4 rounded-full shadow-md transition-all duration-300 hover:scale-105">
              <FaApple size={16} />
              <span>App Store</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Tilted Image - Fixed tilt with no background */}
        <motion.div
          className="relative w-full h-full aspect-square md:col-span-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <Image
            alt="banner-gif"
            src="/whatsapp.gif"
            fill
            style={{ 
              objectFit: "contain",
              transform: "rotate(-5deg)"
            }}
            // className="drop-shadow-lg"
            priority
          />
        </motion.div>
      </div>
      <TryNowModal 
        open={tryNowModal}
        onClose={() => setTryNowModal(false)}
      />    </div>
  );
}

export default HomeBanner;