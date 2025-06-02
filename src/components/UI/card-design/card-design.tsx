import React from "react";
import Image from "next/image";

function CardDesign() {
  return (
    <div className="m-[7rem]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What do you want to do today?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#ffefbd] rounded-xl p-6 pb-0 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105">
          <div className="text-2xl font-semibold mb-2">Make an invitation</div>
          <div className="mb-4 text-gray-700">{"Let's get the party started."}</div>
          <div className="relative w-full h-60 rounded-lg overflow-hidden">
            <Image
              alt="design-card"
              src="/card_1.webp"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
        <div className="bg-[#ffcc96] rounded-xl p-6 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105">
          <div className="text-2xl font-semibold mb-2">Make an invitation</div>
          <div className="mb-4 text-gray-700">{"Let's get the party started."}</div>
          <div className="relative w-full h-60 rounded-lg overflow-hidden">
            <Image
              alt="design-card"
              src="/card_2.webp"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
        <div className="bg-[#c9cfe2] rounded-xl p-6 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105">
          <div className="text-2xl font-semibold mb-2">Make an invitation</div>
          <div className="mb-4 text-gray-700">{"Let's get the party started."}</div>
          <div className="relative w-full h-60 rounded-lg overflow-hidden">
            <Image
              alt="design-card"
              src="/card_3.webp"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
        <div className="bg-[#e1f6d7] rounded-xl p-6 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105">
          <div className="text-2xl font-semibold mb-2">Make an invitation</div>
          <div className="mb-4 text-gray-700">{"Let's get the party started."}</div>
          <div className="relative w-full h-60 rounded-lg overflow-hidden">
            <Image
              alt="design-card"
              src="/card_4.webp"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDesign;
