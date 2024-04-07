import {
  DislikeFilled,
  LikeFilled,
  MessageFilled,
  StarFilled,
} from "@ant-design/icons";
import { Tag } from "antd";
import Image from "next/image";
import React from "react";

const HeroCard = ({ tagColor }: { tagColor: "magenta" | "gold" }) => {
  return (
    <div className="bg-[var(--background-color)] border-none rounded-2xl w-[220px] p-3 h-fit flex flex-col gap-2 ">
      <div className="flex justify-between">
        <div className="flex gap-1 w-fit">
          <Image
            src="/user_img.png"
            alt="user image"
            width={25}
            height={25}
            className="flex-grow h-fit"
          />
          <div className="flex flex-col gap-[2px]">
            <h3 className="text-xs font-medium">James T.</h3>
            <p className="text-[10px]">3 months ago</p>
          </div>
        </div>
        <div>
          <p className="text-[11px] font-medium">Ikate, Lekki</p>
          <div>
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <StarFilled
                  className={`${
                    index < 3 ? "text-yellow-400" : "text-gray-200"
                  } text-xs`}
                  key={index}
                />
              ))}
          </div>
        </div>
      </div>
      <p className="text-sm">
        There is no stable electricity. The roads are fairly good and there is a
        sense of community. The drainage system is poor and most residents
        litter their surroundings. There are lots stores and Supermarkets.
      </p>
      <div className="flex justify-between">
        <div className="reations flex justify-between w-3/5">
          <span className="text-gray-400 flex items-center gap-[3px] ">
            <LikeFilled className="text-sm" />
            <span className="text-[10px]">24</span>
          </span>
          <span className="text-gray-400 flex items-center gap-[3px] ">
            <DislikeFilled className="text-sm" />
            <span className="text-[10px]"> 02</span>
          </span>
          <span className="text-gray-400 flex items-center gap-[3px] ">
            <MessageFilled className="text-sm" />
            <span className="text-[10px]">125</span>
          </span>
        </div>
        <Tag color={tagColor} className="px-1 rounded-lg text-[10px]">
          {tagColor === "magenta" ? "network" : "traffic"}
        </Tag>
      </div>
    </div>
  );
};

export default HeroCard;
