import React, { useState } from "react";

const AllActivityTable = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "All NFT",
      title: [
        "Art collection",
        "Pie collection",
        "Con collection",
        "Tun collection",
        "Art collection",
        "Art collection",
      ],
      image: [
        "https://themebeyond.com/html/nftmak/assets/img/others/activity_author.png",
        "https://themebeyond.com/html/nftmak/assets/img/others/activity_author02.png",
        "https://themebeyond.com/html/nftmak/assets/img/others/activity_author03.png",
        "https://themebeyond.com/html/nftmak/assets/img/others/activity_author04.png",
        "https://themebeyond.com/html/nftmak/assets/img/others/activity_author05.png",
        "https://themebeyond.com/html/nftmak/assets/img/others/activity_author06.png",
      ],
      priceImage:
        "https://themebeyond.com/html/nftmak/assets/img/icons/coin.svg",
      price: ["0.025", "0.055", "0.075", "0.025", "0.095", "0.115"],
      quantity: ["17", "24", "22", "18", "16", "20"],
      from: "Meta",
      to: "A22F7",
      time: [
        "a minute ago",
        "2 minute ago",
        "3 minute ago",
        "4 minute ago",
        "5 minute ago",
        "6 minute ago",
      ],
    },
    {
      id: 2,
      tabTitle: "Last Month",
      title: [
        "Art collection",
        "Pie collection",
        "Con collection",
        "Tun collection",
        "Art collection",
        "Art collection",
      ],
      image: [
        "https://themebeyond.com/html/nftmak/assets/img/others/activity_author06.png",
        "https://themebeyond.com/html/nftmak/assets/img/others/activity_author05.png",
        "https://themebeyond.com/html/nftmak/assets/img/others/activity_author04.png",
        "https://themebeyond.com/html/nftmak/assets/img/others/activity_author03.png",
        "https://themebeyond.com/html/nftmak/assets/img/others/activity_author02.png",
        "https://themebeyond.com/html/nftmak/assets/img/others/activity_author.png",
      ],
      priceImage:
        "https://themebeyond.com/html/nftmak/assets/img/icons/coin.svg",
      price: ["0.115", "0.095", "0.025", "0.075", "0.055", "0.025"],
      quantity: ["20", "16", "18", "22", "24", "17"],
      from: "Meta",
      to: "A22F7",
      time: [
        "6 minute ago",
        "5 minute ago",
        "4 minute ago",
        "3 minute ago",
        "2 minute ago",
        "a minute ago",
      ],
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="bg-primary flex flex-col items-center w-full h-min rounded-xl  border-[0.5px] border-header_border mt-5">
      <div className="w-[90%] flex flex-col gap-5 my-10">
        <div className="container">
          <div className="flex items-center gap-10">
            <h4 className="text-2xl text-heading_text font-bold md:tracking-wide leading-[30px] md:leading-[60px]">
              All Activity
            </h4>
            <div className="w-max h-max bg-[#25223f] rounded-full space-x-4 p-1 transition-all">
              {tabs.map((tab, i) => (
                <button
                  className={`${
                    currentTab == tab.id
                      ? "bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] rounded-full"
                      : ""
                  } text-white font-semibold py-2 px-6 transition-all duration-500`}
                  key={i}
                  id={tab.id}
                  disabled={currentTab === `${tab.id}`}
                  onClick={handleTabClick}
                >
                  {tab.tabTitle}
                </button>
              ))}
            </div>
          </div>
          <div className="">
            {tabs.map((tab, i) => (
              <div key={i}>
                {currentTab === `${tab.id}` && (
                  <table className="w-full mt-10">
                    <thead className="">
                      <tr className="text-body_text text-sm">
                        <th className="text-start">Item Detail</th>
                        <th className="text-start">Price</th>
                        <th className="text-start">Quantity</th>
                        <th className="text-start">From</th>
                        <th className="text-start">To</th>
                        <th className="text-start">Time</th>
                      </tr>
                    </thead>
                    <div className="bg-primary p-1"></div>
                    <tr className="bg-table_bg text-text_secondary">
                      <td className="flex items-center gap-2 p-3">
                        <img src={tab.image[0]} alt="" />
                        <p>{tab.title[0]}</p>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <img src={tab.priceImage[0]} alt="" />
                          <span>{tab.price[0]}</span>
                        </div>
                      </td>
                      <td className="">{tab.quantity[0]}</td>
                      <td>{tab.from}</td>
                      <td>{tab.to}</td>
                      <td>{tab.time[0]}</td>
                    </tr>
                    <div className="bg-primary p-1"></div>
                    <tr className="bg-table_bg text-text_secondary">
                      <td className="flex items-center gap-2 p-3">
                        <img src={tab.image[1]} alt="" />
                        <p>{tab.title[1]}</p>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <img src={tab.priceImage[1]} alt="" />
                          <span>{tab.price[1]}</span>
                        </div>
                      </td>
                      <td>{tab.quantity[1]}</td>
                      <td>{tab.from}</td>
                      <td>{tab.to}</td>
                      <td>{tab.time[1]}</td>
                    </tr>
                    <div className="bg-primary p-1"></div>
                    <tr className="bg-table_bg text-text_secondary">
                      <td className="flex items-center gap-2 p-3">
                        <img src={tab.image[2]} alt="" />
                        <p>{tab.title[2]}</p>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <img src={tab.priceImage[2]} alt="" />
                          <span>{tab.price[2]}</span>
                        </div>
                      </td>
                      <td>{tab.quantity[2]}</td>
                      <td>{tab.from}</td>
                      <td>{tab.to}</td>
                      <td>{tab.time[2]}</td>
                    </tr>
                    <div className="bg-primary p-1"></div>
                    <tr className="bg-table_bg text-text_secondary">
                      <td className="flex items-center gap-2 p-3">
                        <img src={tab.image[3]} alt="" />
                        <p>{tab.title[3]}</p>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <img src={tab.priceImage[3]} alt="" />
                          <span>{tab.price[3]}</span>
                        </div>
                      </td>
                      <td>{tab.quantity[3]}</td>
                      <td>{tab.from}</td>
                      <td>{tab.to}</td>
                      <td>{tab.time[3]}</td>
                    </tr>
                    <div className="bg-primary p-1"></div>
                    <tr className="bg-table_bg text-text_secondary">
                      <td className="flex items-center gap-2 p-3">
                        <img src={tab.image[4]} alt="" />
                        <p>{tab.title[4]}</p>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <img src={tab.priceImage[4]} alt="" />
                          <span>{tab.price[4]}</span>
                        </div>
                      </td>
                      <td>{tab.quantity[4]}</td>
                      <td>{tab.from}</td>
                      <td>{tab.to}</td>
                      <td>{tab.time[4]}</td>
                    </tr>
                    <div className="bg-primary p-1"></div>
                    <tr className="bg-table_bg text-text_secondary">
                      <td className="flex items-center gap-2 p-3">
                        <img src={tab.image[5]} alt="" />
                        <p>{tab.title[5]}</p>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <img src={tab.priceImage[5]} alt="" />
                          <span>{tab.price[5]}</span>
                        </div>
                      </td>
                      <td>{tab.quantity[5]}</td>
                      <td>{tab.from}</td>
                      <td>{tab.to}</td>
                      <td>{tab.time[5]}</td>
                    </tr>
                    <div className="bg-primary p-1"></div>
                  </table>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllActivityTable;
