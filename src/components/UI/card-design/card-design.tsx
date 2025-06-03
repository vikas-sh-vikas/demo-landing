import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
type CardModel = {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  backGround: string;
};
function CardDesign() {
  const t = useTranslations("card-design");
  const data: CardModel[] = [
    {
      title: t("card.0.title"),
      subtitle: t("card.0.subtitle"),
      imageUrl: "/card_1.png",
      imageAlt: "Design-Card-1",
      backGround: "#ffefbd",
    },
    {
      title: t("card.1.title"),
      subtitle: t("card.1.subtitle"),
      imageUrl: "/card_2.png",
      imageAlt: "Design-Card-2",
      backGround: "#ffcc96",
    },
    {
      title: t("card.2.title"),
      subtitle: t("card.2.subtitle"),
      imageUrl: "/card_1.png",
      imageAlt: "Design-Card-3",
      backGround: "#c9cfe2",
    },
    {
      title: t("card.3.title"),
      subtitle: t("card.3.subtitle"),
      imageUrl: "/card_1.png",
      imageAlt: "Design-Card-4",
      backGround: "#e1f6d7",
    },
  ];
  return (
    <div className="m-3 md:m-[3rem] lg:m-[7rem]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {t("title")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item: CardModel, index: number) => {
          return (
            <div
              key={index}
              style={{ backgroundColor: item.backGround }}
              className={`rounded-xl p-6 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105`}
            >
              <div className="text-2xl font-semibold mb-2">{item.title}</div>
              <div className="mb-4 text-gray-700">{item.subtitle}</div>
              <div className="relative w-full h-60 rounded-lg ">
                <Image
                  alt={item.imageAlt}
                  src={item.imageUrl}
style={{ transform: index % 2 === 0 ? "rotate(-5deg)" : "rotate(5deg)" }}
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardDesign;
