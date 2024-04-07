
import { Input, Tooltip } from "antd";
import SearchBtn from "./SearchBtn";
import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";
const HeroSearchSection = () => {
  return (
    <>
        <div className="mt-[10vh] flex flex-col gap-y-8">
          <div className="flex flex-col gap-8 max-w-[507px] ">
            <h1 className="font-bold text-[4rem] leading-[4.75rem]">
              Find a place you will love to live!
            </h1>
            <h4 className="text-2xl">
              See through the lenses of people who have lived or visited the
              neighbourhood you might have in mind.
            </h4>
          </div>
          <div className="flex lg:flex-col gap-5">
            <Input
              prefix={<SearchOutlined />}
              allowClear
              placeholder={` Enter Address`}
              className="h-[50px] bg-[#F3F7FE] max-lg:w-52"
            />
            <Tooltip
              title="Click to visit ALL REVIEWS page. No input is required for this simulation"
              defaultOpen={true}
              placement="left"
            >
              <Link href={"/allReviewsPage"} className="w-fit">
                <SearchBtn />
              </Link>
            </Tooltip>
          </div>
        </div>
    </>
  );
};

export default HeroSearchSection;


