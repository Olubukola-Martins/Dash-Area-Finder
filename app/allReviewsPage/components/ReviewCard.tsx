import {
  DislikeOutlined,
  LikeOutlined,
  MessageOutlined,
  StarFilled,
} from "@ant-design/icons";
import { Button } from "antd";

import Image from "next/image";

const ReviewCard = ({ review, rating, anonymous }: { review?: string; rating?: number;  anonymous?:boolean}) => {
  return (
    <div className="flex flex-col gap-2 pb-4 pt-3 border-b-2 border-gray-200">
      <div className="flex justify-between ">
        <div className="flex gap-1 w-fit items-center">
          <Image
            src="/user_img.png"
            alt="user image"
            width={25}
            height={25}
            className="flex-grow h-fit"
          />
          <div className="flex gap-1 ">
            <h3 className="text-xs font-medium">{anonymous ? "Anonymous" : `James T.`}</h3>
            <p className="text-[10px]">{review ? "Just now" : "5 months ago"}</p>
          </div>
        </div>
        <div>
          <div className="text-sm">
            <StarFilled className={`${"text-yellow-400"} text-xs`} /> {review ?  rating?.toFixed(1) : "4.0"}
          </div>
        </div>
      </div>
      <p className="text-sm">
       {review ? review :`There is no stable electricity. The roads are fairly good and there is a
        sense of community. The drainage system is poor and most residents
        litter their surroundings. There are lots stores and Supermarkets.`}
      </p>
      <div className="reations flex gap-4">
        <Button type="text">
          <span className="text-[#0D2159] flex items-center gap-1 ">
            <LikeOutlined className="text-sm" />
            <span className="text-[10px]">1224</span>
          </span>
        </Button>
        <Button type="text">
          <span className="text-[#0D2159] flex items-center gap-1 ">
            <DislikeOutlined className="text-sm" />
            <span className="text-[10px]"> 04</span>
          </span>
        </Button>
        <Button type="text">
          <span className="text-[#0D2159] flex items-center gap-1 ">
            <MessageOutlined className="text-sm" />
            <span className="text-[10px]">24</span>
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ReviewCard;
