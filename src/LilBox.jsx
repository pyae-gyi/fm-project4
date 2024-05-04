import React from "react";

export default function ({ iconLocation, label, score }) {
  const style = { bgColor: "", labelTextColor: "" };
  switch (label) {
    case "Reaction":
      style.bgColor = "bg-red-50";
      style.labelTextColor = "text-[#F55]";
      break;
    case "Memory":
      style.bgColor = "bg-yellow-50";
      style.labelTextColor = "text-[#FFB21E]";
      break;
    case "Verbal":
      style.bgColor = "bg-green-50";
      style.labelTextColor = "text-[#00BB8F]";
      break;
    case "Visual":
      style.bgColor = "bg-blue-50";
      style.labelTextColor = "text-[#1125D6]";
      break;
  }
  return (
    <div
      className={`py-2 px-3 ${style.bgColor} rounded-xl flex justify-between items-center`}
    >
      <div className="flex gap-2 items-center">
        <img src={iconLocation} />
        <p className={`${style.labelTextColor} font-medium`}>{label}</p>
      </div>
      <div>
        <span className="text-blue-950 font-extrabold">{score}</span>{" "}
        <span className="text-gray-400 font-extrabold">/ 100</span>
      </div>
    </div>
  );
}
