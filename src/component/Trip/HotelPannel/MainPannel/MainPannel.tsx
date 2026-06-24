import React from "react";
import type IMainPannel from "./IMainPannel";
import { useGetHotelContext } from "../HotelPannel";
import HotelDashboard from "./HotelDashboard/HotelDashboard";

const MainPannel: React.FC<IMainPannel> = () => {
    const { selectTab } = useGetHotelContext();

    return (
        <div className="w-[80%]">
            {selectTab === "Hotel" && <HotelDashboard />}
        </div>
    )
};

export default MainPannel;