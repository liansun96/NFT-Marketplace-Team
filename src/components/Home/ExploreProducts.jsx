import React from "react";
import { exploreProduct } from "../../constants/index";
import ExploreProductCard from "./ExploreProductCard";

const ExploreProduct = () => {
  return (
    <div className="bg-[#070b24] h-auto flex items-center pb-20">
      <div className="w-[90%] mx-auto">
        <div className="flex items-center gap-2 mb-10">
          <h4 className="text-heading_text text-2xl font-semibold">
            Explore Product
          </h4>
          <img
            src="https://themebeyond.com/html/nftmak/assets/img/icons/title_icon01.png"
            alt="explore-product-image"
          />
        </div>
        <div className="flex flex-wrap justify-between gap-6">
          {exploreProduct?.map((explordPd) => (
            <ExploreProductCard key={explordPd.id} explordPd={explordPd} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreProduct;
