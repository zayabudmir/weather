import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbHome } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuUser } from "react-icons/lu";

export const Card = ({ dayTime, city, dayTemp, dayStatus }) => {
  const today = new Date();
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);

  return (
    <div
      className={`w-[414px] h-[832px] rounded-[48px] z-40 flex items-center pt-2 flex-col 
      ${
        dayTime
          ? "bg-white/70 backdrop-blur-2xl"
          : "bg-gradient-to-b from-gray-900 to-black/80 backdrop-blur-2xl"
      }`}
    >
      <div
        className={`w-[398px] h-[440px] rounded-[42px] flex flex-col items-center 
        ${
          dayTime
            ? "bg-transparent"
            : "bg-gradient-to-b from-gray-800 to-transparent"
        }`}
      >
        <div className="flex items-center justify-between w-full px-[40px] pt-[56px]">
          <div className="flex flex-col">
            <p className="text-[#9CA3AF] text-[18px] font-medium">
              {formattedDate}
            </p>
            <p
              className={`text-[48px] font-extrabold ${
                dayTime ? "text-[#111827]" : "text-[[#FFF]]"
              }`}
            >
              {city} mongolia
            </p>
          </div>
          <MdOutlineLocationOn
            className={`w-8 h-8 ${dayTime ? "text-gray-600" : "text-white"}`}
          />
        </div>

        <div className="relative flex py-10">
          <img
            className="w-[265px] h-[265px]"
            src={dayTime ? "/sun.png" : "/moon.png"}
            alt="Weather Icon"
          />
        </div>

        <div className="w-full pl-[48px] mt-4">
          <h1
            className={`text-[120px] leading-none font-extrabold text-transparent bg-clip-text 
            ${
              dayTime
                ? "bg-gradient-to-b from-gray-900 to-gray-500"
                : "bg-gradient-to-b from-gray-200 to-gray-600"
            }`}
          >
            {dayTemp}°
          </h1>
          <p
            className={`text-[24px] font-bold mt-2 
            ${dayTime ? "text-[#FF8E27]" : "text-[#777CCE]"}`}
          >
            {dayStatus}
          </p>
        </div>

        <div className="flex justify-between w-full px-[48px] pt-[40px]">
          <TbHome size={32} color={dayTime ? "#4B5563" : "#9CA3AF"} />
          <CiLocationOn size={32} color={dayTime ? "#4B5563" : "#9CA3AF"} />
          <IoMdHeartEmpty size={32} color={dayTime ? "#4B5563" : "#9CA3AF"} />
          <LuUser size={32} color={dayTime ? "#4B5563" : "#9CA3AF"} />
        </div>
      </div>
    </div>
  );
};
