import truncateText from "@/utils/truncate-text";
import React from "react";

const colors = {
  primary: "bg-primary-100 text-primary-700",
  blue: "bg-blue-100 text-blue-700",
  orange: "bg-orange-100 text-orange-500",
  red: "bg-red-100 text-red-500",
};

type StateType = {
  icon: React.ReactNode;
  value: string;
  title: string;
  color: "primary" | "blue" | "orange" | "red";
};

export default function Stat({ icon, value, title, color }: StateType) {
  return (
    <div className="bg-secondary-0 p-2 rounded-md">
      <div className="flex  gap-2 items-center">
        <div
          className={`w-10 h-10 flex items-center justify-center p-2 aspect-square rounded-md ${colors[color]}`}
        >
          {icon}
        </div>
        <div>
          <h5 className="font-bold text-lg text-secondary-500">{title}</h5>
          <p className="text-secondary-400 text-xs mt-1">{value}</p>
        </div>
      </div>
      <div className="mt-3 flex justify-between">
        <span className="badge  badge--secondary block text-xs w-fit mr-auto">+{truncateText(value, 10)}</span>
      </div>
    </div>
  );
}
