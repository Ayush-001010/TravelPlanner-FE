import React, { createContext, useContext, useState } from "react";
import type IHotelPannel from "./IHotelPannel";
import SidePannel from "./SidePannel/SidePannel";
import MainPannel from "./MainPannel/MainPannel";


export interface IHotelContextInterface {
    selectTab: "Hotel" | "Favorites" | "Chat" | "Booking";
    onSelectTabChange: (tab: "Hotel" | "Favorites" | "Chat" | "Booking") => void;
    placeName: string;
}

const hotelContext = createContext<IHotelContextInterface | undefined>(undefined);

export const useGetHotelContext = () => {
    const context = useContext(hotelContext);
    if (!context) {
        throw new Error("useGetHotelContext must be used within a HotelProvider");
    }
    return context;
}


const HotelPannel: React.FC<IHotelPannel> = ({placeName}) => {
    const [selectTab, setSelectTab] = useState<"Hotel" | "Favorites" | "Chat" | "Booking">("Hotel");
    const onSelectTabChange = (tab: "Hotel" | "Favorites" | "Chat" | "Booking") => {
        setSelectTab(tab);
    };

    return (
        <hotelContext.Provider value={{ selectTab, onSelectTabChange , placeName  }}>
            <div className="absolute bottom-6 right-6 bg-[#f2f2f2] w-[500px] shadow shadow-lg  shadow-[#343a40] rounded-lg">
                <div className="flex flex-row justify-between">
                    <MainPannel />
                    <SidePannel />
                </div>
            </div>
        </hotelContext.Provider>
    )
};

export default HotelPannel;