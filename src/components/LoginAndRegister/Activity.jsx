import React from "react";
import SignUpForm from "./SignUpForm";

const Activity = () => {
  return (
    <div className="h-min bg-dark py-20">
      <div className="flex flex-col md:flex-row items-center justify-around lg:justify-between p-5 lg:px-20 lg:p-10 h-[300px] lg:h-[200px] w-[90%] 3xl:w-[70%] 4xl:w-[55%] mx-auto rounded-[13px] activity-bg">
        <div className="text-center space-y-4">
          <h3 className="text-3xl text-heading_text font-bold md:tracking-wide leading-[30px] md:leading-[60px]">
            Welcome To NFT Activity
          </h3>
          <p className="text-text_secondary font-semibold">
            The top NFTs on Nftmar, ranked by volume, floor price and<br className="hidden lg:block" />
            other <span className="text-purple">statistics.</span>
          </p>
        </div>
        <div className="">
          <img
            src="https://themebeyond.com/html/nftmak/assets/img/icons/three_star.png"
            alt=""
          />
        </div>
      </div>
      <SignUpForm/>
    </div>
  );
};

export default Activity;
