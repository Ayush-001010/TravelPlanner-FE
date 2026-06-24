import React from "react";
import type IHotelDashboard from "./IHotelDashboard";
import useTripActionHook from "../../../../../customHooks/useTripActionHook";
import { useGetHotelContext } from "../../HotelPannel";
import { useQuery } from "@tanstack/react-query";
import type { IHotelInterface } from "../../../../../services/Interfaces/TripInterface";
import HotelItemCatelog from "./HotelItemCatelog/HotelItemCatelog";

const HotelDashboard: React.FC<IHotelDashboard> = () => {
    const { getHotelCatalog } = useTripActionHook();
    const { placeName } = useGetHotelContext();
    const { data: hotelArr, isError, isLoading } = useQuery<IHotelInterface[]>({
        queryKey: ['hotelCatalog', placeName],
        queryFn: async () => {
            const response = await getHotelCatalog(placeName);
            if (response.success)
                return response.data;
            throw new Error("Failed to fetch hotel catalog");
        },
        enabled: !!placeName
    });

    console.log("Hotel Catalog Data: ", hotelArr, " isError: ", isError, " isLoading: ", isLoading);

    return (
        <div>
            {(!isLoading && isError) && (
                <div>
                    <p>Something Went Wrong</p>
                </div>
            )}
            {(!isLoading && !isError) && (
                <div className="p-2">
                    <div className="flex justify-end">
                        <p className="m-0 bg-[#023e8a] rounded-lg hover:rounded-full transition-all duration-300 text-white px-2 py-1 cursor-pointer ease-in-out hover:bg-[#0077b6] shadow-md hover:shadow-lg flex items-center gap-1">
                            <span>
                                <i className="bi bi-funnel-fill"/>
                            </span>
                        </p>
                    </div>
                    {hotelArr && hotelArr.map((hotel: IHotelInterface) => (
                        <HotelItemCatelog key={hotel.hotelId} data={hotel} />
                    ))}
                </div>
            )}
        </div>
    )
};

export default HotelDashboard;