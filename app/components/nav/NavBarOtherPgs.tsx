import React from "react";
import Image from "next/image";
import { SearchOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Button, Input, Tag } from "antd";

const NavBarOtherPgs = ({ onlickReview }: { onlickReview :()=>void}) => {
  return (
    <div className="w-full sticky top-0 mt-0 bg-[var(--header-bg-color)] z-10">
      <div className=" flex justify-between py-5 w-[86.11%] mx-auto  items-center">
        <div className="flex justify-between items-center w-8/12 gap-2">
          <Image
            alt="logo"
            src="/ic_logo.png"
            width={92}
            height={29}
            className="h-fit"
          />
          <Input
            prefix={<SearchOutlined />}
            allowClear={true}
            placeholder={` Enter Address`}
            className={` bg-[#F3F7FE] h-12 w-5/6 max-md:hidden`}
            defaultValue={"Bonny and Clyde Street, Ajao Estate, Lagos"}
            //   value={"Bonny and Clyde Street, Ajao Estate, Lagos"}
          />
        </div>
        <div className="flex justify-between w-28">
          <p className="font-medium">Welcome!</p>
          <Image
            src="/user_img.png"
            alt="user image"
            width={25}
            height={25}
            className=" h-fit"
          />
        </div>
      </div>
      <div className="w-[86.11%] mx-auto flex flex-col gap-4 pb-3">
        <div className="flex flex-col md:flex-row gap-2 justify-between ">
          <div className="font-semibold ">
            <h3 className="lg:text-3xl md:text-2xl text-xl">
              Bonny and Clyde Street, Ajao Estate, Lagos
            </h3>
            <p className="text-lg">
              {`"450" Reviews` }
              <span className="font-normal">
                (people are raving about the selected location)
              </span>
            </p>
          </div>

          <div className=" flex gap-2">
            <Button
              className="bg-[var(--primary-color)] text-white px-10 py-auto h-[50px] w-fit font-light"
              onClick={onlickReview}
            >
              LEAVE A REVIEW
            </Button>
            <Button className="  py-auto h-[50px] w-fit font-light bg-inherit border-[var(--primary-color)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="var(--primary-color)"
                  d="M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32"
                />
              </svg>
            </Button>
            <Button className=" py-auto h-[50px] w-fit font-light border-[var(--primary-color)] bg-inherit">
              <ShareAltOutlined className="text-[var(--primary-color)] text-xl" />
            </Button>
          </div>
        </div>
        <div className="tagArea xl:flex justify-between grid md:grid-cols-8 gap-1 sm:grid-cols-5 grid-cols-3 ">
          <Tag className="w-fit">Schools</Tag>
          <Tag className="w-fit">Hospital</Tag>
          <Tag className="w-fit">Public Transport</Tag>
          <Tag className="w-fit">Banks</Tag>
          <Tag className="w-fit">Night Life</Tag>
          <Tag className="w-fit">Bus Station</Tag>
          <Tag className="w-fit">Public Wifi</Tag>
          <Tag className="w-fit">Seurity</Tag>
          <Tag className="w-fit">Quiet</Tag>
          <Tag className="w-fit">Train Station</Tag>
          <Tag className="w-fit">Parking Lot</Tag>
          <Tag className="w-fit">Airport</Tag>
          <Tag className="w-fit">Shopping Mall</Tag>
          <Tag className="w-fit">Resort Park</Tag>
          <Tag className="rounded-[50%] w-fit">&gt;</Tag>
        </div>
      </div>
    </div>
  );
};

export default NavBarOtherPgs;
