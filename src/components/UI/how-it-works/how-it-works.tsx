'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';



export default function HowItWorks() {
    const t = useTranslations("how_it_works");
    const steps = [
      {
        title: t("steps.0.title"),
        icon: t("steps.0.icon"),
      },
      {
        title: t("steps.1.title"),
        icon: t("steps.1.icon"),
      },
      {
        title: t("steps.2.title"),
        icon: t("steps.2.icon"),
      },
    ];
    
  return (
    <section id="how-it-works" className="bg-[#F9F5F0] py-[100px] px-4 sm:px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12 pb-4" 
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
{t("header")}        </h2>
        <p className="text-md text-gray-600">{t("subtitle")}</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-full h-80 mx-auto mb-4 relative">
              <Image
                src={step.icon}
                alt={`Step ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">{step.title}</h2>
            {/* <p className="text-sm text-[#777]">{step.titleAr}</p> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
