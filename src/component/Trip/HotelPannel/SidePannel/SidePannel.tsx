import React from "react";
import type ISidePannel from "./ISidePannel";
import { Tooltip } from "antd";
import { useGetHotelContext, type IHotelContextInterface } from "../HotelPannel";

const SidePannel: React.FC<ISidePannel> = () => {
    const { selectTab } = useGetHotelContext() as IHotelContextInterface;
    return (
        <div className="flex justify-start w-[20%] p-4 border-l-2 border-[#343a40] bg-[#f5f3f4]">
            <div className="flex flex-col gap-4">
                <p>
                    <Tooltip title="Hotels" placement="left">
                        <span className={selectTab !== "Hotel" ?  "font-bold w-[40px] h-[40px] shadow shadow-2xl shadow-[#dee2e6] flex justify-center items-center rounded-lg hover:rounded-full transition duration-300 ease-in-out bg-[#ddbea9] cursor-pointer text-white hover:bg-[#b98b73] hover:text-[#dde5b6]" : "font-bold w-[40px] h-[40px] shadow shadow-2xl shadow-[#dee2e6] flex justify-center items-center rounded-full hover:rounded-lg transition duration-300 ease-in-out bg-[#b98b73] cursor-pointer text-[#dde5b6] hover:bg-[#ddbea9] hover:text-white"}>
                            <i className="bi bi-building-fill-add" />
                        </span>
                    </Tooltip>
                </p>
                <p>
                    <Tooltip title="Favorites" placement="left">
                        <span className={selectTab !== "Favorites" ? "font-bold w-[40px] h-[40px] flex justify-center items-center rounded-xl hover:rounded-full transition duration-300 ease-in-out bg-[#ff8fa3] cursor-pointer text-[#fff0f3] hover:bg-[#ff4d6d] hover:text-[#ffb3c1] shadow shadow-2xl shadow-[#dee2e6] transition duration-300 ease-in-out" : "font-bold w-[40px] h-[40px] flex justify-center items-center rounded-full hover:rounded-lg transition duration-300 ease-in-out bg-[#ff4d6d] cursor-pointer text-[#ffb3c1] hover:bg-[#ff8fa3] hover:text-[#fff]"}>
                            <i className="bi bi-heart-fill" />
                        </span>
                    </Tooltip>
                </p>
                <p>
                    <Tooltip title="Chat" placement="left">
                        <span className={selectTab !== "Chat" ? "font-bold w-[40px] h-[40px] shadow shadow-2xl shadow-[#dee2e6] flex justify-center items-center rounded-lg hover:rounded-full transition duration-300 ease-in-out bg-[#90e0ef] cursor-pointer text-[#caf0f8] hover:bg-[#0096c7] hover:text-[#fff]" : "font-bold w-[40px] h-[40px] shadow shadow-2xl shadow-[#dee2e6] flex justify-center items-center rounded-full hover:rounded-lg transition duration-300 ease-in-out bg-[#0096c7] cursor-pointer text-[#fff] hover:bg-[#90e0ef] hover:text-[#caf0f8]"}>
                            <i className="bi bi-chat-dots" />
                        </span>
                    </Tooltip>
                </p>
                <p>
                    <Tooltip title="Booking" placement="left">
                        <span className={selectTab !== "Booking" ? " font-bold w-[40px] h-[40px] shadow shadow-2xl shadow-[#dee2e6] flex justify-center items-center rounded-lg hover:rounded-full transition duration-300 ease-in-out bg-[#adc178] cursor-pointer text-white hover:bg-[#a3a380] hover:text-[#dde5b6]" : " font-bold w-[40px] h-[40px] shadow shadow-2xl shadow-[#dee2e6] flex justify-center items-center rounded-full hover:rounded-lg transition duration-300 ease-in-out bg-[#a3a380] cursor-pointer text-[#dde5b6] hover:bg-[#adc178] hover:text-white"}>
                            <i className="bi bi-check-circle-fill" />
                        </span>
                    </Tooltip>
                </p>
            </div>
        </div>
    )
};

export default SidePannel;