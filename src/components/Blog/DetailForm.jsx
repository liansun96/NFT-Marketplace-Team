import React from "react";

const DetailForm = () => {
  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-[#1C1832] rounded-lg px-5 py-10 md:p-10 text-white mb-10">
      <h2 className="text-xl font-semibold mb-10">Leave A Reply</h2>
      <div className="flex md:flex-row flex-col gap-5 mb-5">
        <input
          type="text"
          placeholder="Author*"
          className="bg-[#090E2A] w-full p-3 h-14 md:h-full text-[#E6E6D4] rounded-lg focus-visible:outline-0"
        />
        <input
          type="email"
          placeholder="example@gmail.com*"
          className="bg-[#090E2A] w-full p-3 h-14 md:h-full text-[#E6E6D4] rounded-lg focus-visible:outline-0"
        />
      </div>
      <textarea
        className="bg-[#090E2A] w-full p-3 h-full text-[#E6E6D4] rounded-lg focus-visible:outline-0"
        rows="5"
        placeholder="Type Comments here . . . . "
      ></textarea>
      <button
        onClick={handleOnClick}
        className="px-8 py-4 mt-5 outline-dashed outline-1 -outline-offset-[6px] text-sm font-semibold rounded-full bg-gradient-to-r from-[#7144EF] to-[#D83AFC] hover:bg-gradient-to-l transition duration-500 "
      >
        SUBMIT NOW
      </button>
    </div>
  );
};

export default DetailForm;
