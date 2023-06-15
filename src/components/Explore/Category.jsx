import React from "react";

const Category = () => {
  return (
    <div className="bg-primary">
      <div className="flex flex-wrap justify-center items-center p-5 md:p-0 gap-5 md:gap-10 md:h-[80px] ">
        <div className="flex gap-3 justify-center items-center">
          <div className="">
            <img
              className="h-[20px]"
              src="	https://themebeyond.com/html/nftmak/assets/img/icons/cat_001.png"
              alt=""
            />
          </div>
          <h5 className="text-body_text">All</h5>
        </div>

        {/* 2 */}
        <div className="flex gap-3 justify-center items-center">
          <div className="">
            <img
              className="h-[20px]"
              src="https://themebeyond.com/html/nftmak/assets/img/icons/cat_01.png
            "
              alt=""
            />
          </div>
          <h5 className="text-body_text">Games</h5>
        </div>

        {/* 3 */}
        <div className="flex gap-3 justify-center items-center">
          <div className="">
            <img
              className="h-[20px]"
              src="https://themebeyond.com/html/nftmak/assets/img/icons/cat_02.png"
              alt=""
            />
          </div>
          <h5 className="text-body_text">Art</h5>
        </div>

        {/* 4 */}
        <div className="flex gap-3 justify-center items-center">
          <div className="">
            <img
              className="h-[20px]"
              src="https://themebeyond.com/html/nftmak/assets/img/icons/cat_03.png"
              alt=""
            />
          </div>
          <h5 className="text-body_text">Trading Cards</h5>
        </div>

        {/* 5 */}
        <div className="flex gap-3 justify-center items-center">
          <div className="">
            <img
              className="h-[20px]"
              src="	https://themebeyond.com/html/nftmak/assets/img/icons/cat_04.png"
              alt=""
            />
          </div>
          <h5 className="text-body_text">Music</h5>
        </div>

        {/* 6 */}
        <div className="flex gap-3 justify-center items-center">
          <div className="">
            <img
              className="h-[20px]"
              src="https://themebeyond.com/html/nftmak/assets/img/icons/cat_05.png"
              alt=""
            />
          </div>
          <h5 className="text-body_text">Domain Names</h5>
        </div>

        {/* 7 */}
        <div className="flex gap-3 justify-center items-center">
          <div className="">
            <img
              className="h-[20px]"
              src="	https://themebeyond.com/html/nftmak/assets/img/icons/cat_06.png"
              alt=""
            />
          </div>
          <h5 className="text-body_text">Memes</h5>
        </div>

        {/* 8 */}
        <div className="flex gap-3 justify-center items-center">
          <div className="">
            <img
              className="h-[20px]"
              src="https://themebeyond.com/html/nftmak/assets/img/icons/cat_07.png"
              alt=""
            />
          </div>
          <h5 className="text-body_text">Collectibles</h5>
        </div>
      </div>
    </div>
  );
};

export default Category;
