import Image from "next/image";
import React from "react";

const ReviewsPictureSetion = () => {
  return (
    <div className="grid grid-cols-2 gap-3 w-fit h-fit max-sm:gap-1">
      <Image
        src="/place1.png"
        alt="place image"
        width={200}
        height={200}
        className="rounded-xl max-sm:scale-[80%]"
      />
      <Image
        src="/place2.png"
        alt="place2 image"
        width={200}
        height={200}
        className="rounded-xl max-sm:scale-[80%]"
      />
      <Image
        src="/place3.png"
        alt="place3 image"
        width={200}
        height={200}
        className="rounded-xl max-sm:scale-[80%]"
      />
      <div className="relative">
        <Image
          src="/place1.png"
          alt="place1 image"
          width={200}
          height={200}
          className="grayscale rounded-xl max-sm:scale-[80%]"
        />
        <div
          className="absolute top-0 bottom-0 right-0 text-white
grayscale flex align-middle justify-center text-center items-center w-full h-full cursor-pointer"
        >
          VIEW MORE
        </div>
      </div>
    </div>
  );
};

export default ReviewsPictureSetion;
