import React from "react";

const colors = {
  primary: "bg-primary-100 text-primary-700",
  blue: "bg-blue-100 text-blue-700",
  orange: "bg-orange-100 text-orange-500",
  red: "bg-red-100 text-red-500",
};

type StateType = {
  icon: React.ReactNode;
  total: string;
  singleName?: string;
  active?: string;
  wait?: string;
  declined?: string;
  title: string;
  color: "primary" | "blue" | "orange" | "red";
};

export default function Stat({
  icon,
  title,
  color,
  total,
  singleName,
  active,
  wait,
  declined,
}: StateType) {
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
        </div>
      </div>

      <span className="text-secondary-800 font-bold text-sm my-2 block">
        {total} {singleName} ثبت‌ شده
      </span>

      <div className="mt-3 flex justify-between gap-2">
        {active && (
          <span className="badge badge--success block w-fit" style={{fontSize: '10px'}}>
            {active} 
          </span>
        )}
        {wait && (
          <span className="badge badge--secondary block w-fit" style={{fontSize: '10px'}}>
            {wait}
          </span>
        )}
        {declined && (
          <span className="badge badge--danger block w-fit" style={{fontSize: '10px'}}>
            {declined} 
          </span>
        )}
      </div>
    </div>
  );
}
