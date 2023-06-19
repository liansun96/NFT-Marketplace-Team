import React from "react";

const SignUpForm = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10 w-[90%] 3xl:w-[70%] 4xl:w-[55%] mx-auto pt-20">
      <div className="bg-primary flex flex-col items-center w-full lg:w-[50%] min-h-fit rounded-xl  border-[0.5px] border-header_border">
        <div className="w-[90%] flex flex-col gap-5 my-10">
          <h6 className="text-heading_text text-xl font-bold">Sign up</h6>
          <div className="">
            <p className="text-text_secondary text-sm font-bold mb-2">
              First name
            </p>
            <div className="">
              <input
                className="bg-dark text-body_text px-3 border-[0.5px] border-header_border w-full rounded h-[60px]"
                type="text"
              />
            </div>
          </div>
          <div className="">
            <p className="text-text_secondary text-sm font-bold mb-2">
              Last name
            </p>
            <div className="">
              <input
                className="bg-dark text-body_text px-3 border-[0.5px] border-header_border w-full rounded h-[60px]"
                type="text"
              />
            </div>
          </div>
          <div className="">
            <p className="text-text_secondary text-sm font-bold mb-2">
              Email address
            </p>
            <div className="">
              <input
                className="bg-dark text-body_text px-3 border-[0.5px] border-header_border w-full rounded h-[60px]"
                type="text"
              />
            </div>
          </div>
          <div className="">
            <p className="text-text_secondary text-sm font-bold mb-2">
              Create password
            </p>
            <div className="">
              <input
                className="bg-dark text-body_text px-3 border-[0.5px] border-header_border w-full rounded h-[60px]"
                type="text"
              />
            </div>
          </div>
          <div className="">
            <p className="text-text_secondary text-sm font-bold mb-2">
              Re password
            </p>
            <div className="">
              <input
                className="bg-dark text-body_text px-3 border-[0.5px] border-header_border w-full rounded h-[60px]"
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input className="bg-dark" type="checkbox" />
            <p className="text-text_secondary text-sm font-bold">
              Allow to all tearms & condition
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="transform duration-1000 transition hover:bg-gradient-to-l from-[#cc42e4] to-[#6345ed] bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
              <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
                <button className="px-6 py-2 text-sm font-bold text-heading_text">
                  SIGN UP
                </button>
              </div>
            </div>
            <div className="transform duration-1000 transition hover:bg-gradient-to-l from-[#cc42e4] to-[#6345ed] bg-dark p-1 rounded-full">
              <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
                <button className="px-6 py-2 text-sm font-bold text-heading_text">
                  LOG IN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary flex flex-col items-center w-full lg:w-[50%] h-min rounded-xl  border-[0.5px] border-header_border">
        <div className="w-[90%] flex flex-col gap-5 my-10">
          <h6 className="text-heading_text text-xl font-bold">
            Another way to sign up
          </h6>
          <p className="text-text_secondary text-sm font-bold mb-2">
            The top NFTs on Nftmar, ranked by volume, floor price <br /> and
            other.
          </p>
          <div className="bg-dark h-[60px]">
            <div className="flex h-full items-center justify-between px-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://themebeyond.com/html/nftmak/assets/img/icons/signup_icon01.png"
                  alt=""
                />
                <h6 className="text-heading_text text-lg font-bold">
                  MetaMask
                </h6>
              </div>
              <p className="text-text_secondary text-sm font-bold mb-2">
                popular
              </p>
            </div>
          </div>
          <div className="bg-dark h-[60px]">
            <div className="flex h-full items-center justify-between px-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://themebeyond.com/html/nftmak/assets/img/icons/signup_icon02.png"
                  alt=""
                />
                <h6 className="text-heading_text text-lg font-bold">
                  Coinbase Wallet
                </h6>
              </div>
            </div>
          </div>
          <div className="bg-dark h-[60px]">
            <div className="flex h-full items-center justify-between px-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://themebeyond.com/html/nftmak/assets/img/icons/signup_icon03.png"
                  alt=""
                />
                <h6 className="text-heading_text text-lg font-bold">
                  Wallet Connect
                </h6>
              </div>
            </div>
          </div>
          <div className="bg-dark h-[60px]">
            <div className="flex h-full items-center justify-between px-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://themebeyond.com/html/nftmak/assets/img/icons/signup_icon04.png"
                  alt=""
                />
                <h6 className="text-heading_text text-lg font-bold">
                  Fortmatic
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
