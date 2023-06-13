import React from "react";
import middleSection from "/public/middleSection.webp";
import Image from "next/image";

const MiddleSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-10 md:mb-16 md:m-10 px-5 md:px-0">
      <div className="grid md:grid-rows-2 md:grid-cols-2 justify-between md:gap-10 md:m-10 py-5 ">
        <div className="w-60 h-28 space-y-2">
          <h1 className="text-md font-bold">Using Good Quality Materials</h1>
          <p className="font-serif">
            Lorem ipsum dolor sit amt, consectectur adipiscing elit.
          </p>
        </div>
        <div className="w-60 h-28 space-y-2">
          <h1 className="text-md font-bold">100% Handmade Products</h1>
          <p className="font-serif">
            Lorem ipsum dolor sit amt, consectectur adipiscing elit.
          </p>
        </div>
        <div className="w-60 h-28 space-y-2">
          <h1 className="text-md font-bold">Modern Fashion Design</h1>
          <p className="font-serif">
            Lorem ipsum dolor sit amt, consectectur adipiscing elit.
          </p>
        </div>
        <div className="w-60 h-28 space-y-2">
          <h1 className="text-md font-bold">Discount for Bulk Orders</h1>
          <p className="font-serif">
            Lorem ipsum dolor sit amt, consectectur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="md:py-14 py-3 md:mr-12 flex items-center">
        <Image
          src={middleSection}
          alt="middle section"
          className="md:w-64 md:h-64 h-44 w-56"
        />
      </div>
      <div className="w-52 py-14  ">
        <div className="space-y-4">
          <p className="tracking-tighter">
            This piece is ethically crafted in our small family-owned workshop
            in Peru with unmatched attention to detail and care. The Natural
            color is the actual natural color of the fiber, undyed and 100%
            traceable.
          </p>
          <button className="bg-black text-white font-semibold px-4 py-2">
            See All Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
