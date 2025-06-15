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
      imageUrl: "/1.png",
      imageAlt: "Design-Card-1",
      backGround: "#ffefbd",
    },
    {
      title: t("card.1.title"),
      subtitle: t("card.1.subtitle"),
      imageUrl: "/2.png",
      imageAlt: "Design-Card-2",
      backGround: "#ffcc96",
    },
    {
      title: t("card.2.title"),
      subtitle: t("card.2.subtitle"),
      imageUrl: "/3.png",
      imageAlt: "Design-Card-3",
      backGround: "#c9cfe2",
    },
    {
      title: t("card.3.title"),
      subtitle: t("card.3.subtitle"),
      imageUrl: "/4.png",
      imageAlt: "Design-Card-4",
      backGround: "#e1f6d7",
    },
  ];

  return (
    <div className="bg-gradient-to-bl from-[#F6F1EC] to-[#BF9D84] py-[100px] px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white pb-4">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item: CardModel, index: number) => (
            <div
              key={index}
              className="relative"
              // style={{
              //   backgroundColor: item.backGround,
              // }}
            >
              {/* Maintain consistent image height */}
              <div className="w-full aspect-[3/4] flex items-center justify-center">
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  width={300}
                  height={400}
                  className="object-contain w-full h-full transition-transform duration-300 hover:scale-105 rounded-2xl overflow-hidden"
                  priority
                />
              </div>
              {/* Optional: add title/subtitle inside card */}
              {/* <div className="px-4 pb-4 text-center">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.subtitle}</p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardDesign;
