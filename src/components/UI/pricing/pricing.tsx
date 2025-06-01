"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

// Variants for container and cards
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#f9d1b7",
  },
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: { yoyo: Infinity, duration: 0.6 },
  },
};

function Pricing() {
  const t = useTranslations("pricing");
  const h = useTranslations("header");
  const plans = [
    {
      title: t("pricing-card.0.title"),
      subTitle: t("pricing-card.0.sub-title"),
      pointers: [
        t("pricing-card.0.pointers.0"),
        t("pricing-card.0.pointers.1"),
        t("pricing-card.0.pointers.2"),
        t("pricing-card.0.pointers.3"),
        t("pricing-card.0.pointers.4"),
      ],
    },
    {
      title: t("pricing-card.1.title"),
      subTitle: t("pricing-card.1.sub-title"),
      pointers: [
        t("pricing-card.1.pointers.0"),
        t("pricing-card.1.pointers.1"),
        t("pricing-card.1.pointers.2"),
        t("pricing-card.1.pointers.3"),
        t("pricing-card.1.pointers.4"),
      ],
    },
    {
      title: t("pricing-card.2.title"),
      subTitle: t("pricing-card.2.sub-title"),
      pointers: [
        t("pricing-card.2.pointers.0"),
        t("pricing-card.2.pointers.1"),
        t("pricing-card.2.pointers.2"),
        t("pricing-card.2.pointers.3"),
      ],
    },
  ];

  return (
    <div id={h("5")} className="max-w-5xl m-auto py-16">
      <motion.div
        className="text-[3.5rem] text-center pb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("title")}{" "}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 m-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            className="border-gray-300 border-2 rounded-3xl p-8 text-center bg-white flex flex-col justify-between"
            variants={cardVariants}
            whileHover="hover"
            initial="hidden"
            animate="show"
          >
            <div>
              <div className="text-xl font-semibold mb-2">{plan.title}</div>
              <div className="font-semibold text-sm text-gray-600 mb-4">
                {plan.subTitle}
              </div>
              <hr className="mb-4" />
              <ol className="list-disc list-inside pl-5 space-y-2 mb-8 text-left">
                {plan.pointers.map((feat, i) => (
                  <li key={i} className="text-lg">
                    {feat}
                  </li>
                ))}
              </ol>
            </div>
            <motion.button
              className="font-semibold w-full rounded-full border py-3"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
            >
              {t("card-button")}{" "}
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Pricing;
