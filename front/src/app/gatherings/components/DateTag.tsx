import React from "react";
import { format } from "date-fns";

interface DateTag {
  dateText: string; //서버에서 주는 데이터 "2024-10-19T01:21:47.762Z" 형식
  textColor: "white" | "green"; // 텍스트 색상, 특정 색상만 허용
  type: "day" | "time"; // 변경포맷의 타입 day = 날짜 , time = 시간
}

export default function DateTag({ dateText, textColor, type }: DateTag) {
  const colors = { white: "text-white", green: "text-green-2" };

  const dateFormatter = (dateText: string, type: string) => {
    if (type === "day") {
      return format(dateText, "M월 d일");
    } else if (type === "time") {
      return format(dateText, "HH:mm");
    }
  };

  return (
    <div
      className={`flex items-center justify-center h-6 p-2 mr-2 text-[14px] font-medium leading-5 rounded-[4px] bg-gray-900 ${colors[textColor]}`}
    >
      {dateFormatter(dateText, type)}
    </div>
  );
}
