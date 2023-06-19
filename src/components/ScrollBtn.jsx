import React, { useEffect } from "react";
import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const ScrollBtn = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const scrollFunc = () => {
      setScrollHeight(parseInt(window.scrollY));
    };

    window.addEventListener("scroll", scrollFunc);

    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={handleOnClick}
      className={`${
        scrollHeight > 100
         ? "translate-y-0 opacity-100"
          : "-translate-y-[1700%] 3xl:-translate-y-[2700%] opacity-0"
      } transition-all flex justify-center items-center
 duration-1000 ease-in-out rounded-md hover:bg-gradient-to-l from-[#cc42e4] to-[#6345ed]  bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] fixed bottom-5 right-5 w-[40px] h-[40px] z-[1000]`}
    >
      <MdKeyboardArrowUp className="text-heading_text text-2xl" />
    </div>
  );
};

export default ScrollBtn;
