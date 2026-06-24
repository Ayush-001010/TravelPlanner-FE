import React from "react";
import type IHotelItemCatelog from "./IHotelItemCatelog";
import { useQuery } from "@tanstack/react-query";
import useTripActionHook from "../../../../../../customHooks/useTripActionHook";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HotelItemCatelog: React.FC<IHotelItemCatelog> = ({ data }) => {
    const { bookingPartner, hotelImage, hotelName, hotelId, address, amenities, tags, pricePerNight, reviewCount, rating } = data;
    const { getImagesFromBE } = useTripActionHook();
    const { data: hotelImages } = useQuery({
        queryKey: ['hotelImages', hotelId],
        queryFn: async () => {
            const response: any = await getImagesFromBE(hotelImage || []);
            console.log("Hotel Images Response: ", response);
            if (response.success)
                return response.data;
            throw new Error("Failed to fetch hotel images");
        },
    });
    console.log("Hotel Images: ", hotelImages);

    return (
        <div className="bg-[#f2f2f2] rounded-lg mt-2 shadow-lg p-3 w-full flex items-center gap-4">
            <div className="w-[120px] h-[100px] rounded-md overflow-hidden shrink-0">
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="hotel-swiper w-full h-full"
                >
                    {hotelImages?.map((image: string, index: number) => (
                        <SwiperSlide key={index} className="w-full h-full">
                            <img
                                src={image}
                                alt={`Hotel Image ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="flex flex-col m-0 justify-start h-[100px]">
                <p className="text-[10px] font-bold ">
                    {hotelName}
                </p>
                <p className="text-[10px] m-0 font-normal text-[#666666]">
                    {address}
                </p>
                <p className="text-[10px] m-0 font-normal text-[#666666]">
                    {amenities.join(", ")}
                </p>
                <p className="text-[10px] m-0 font-normal text-[#666666]">
                    {tags.join(", ")}
                </p>
                <div>
                    <p className="text-[10px] m-0 font-normal text-[#666666]">
                        Price per Night: {pricePerNight}
                    </p>
                    <p className="text-[10px] m-0 font-normal text-[#666666]">
                        Rating: {rating} ({reviewCount} reviews)
                    </p>
                </div>
                <div>
                    <p className="text-[10px] m-0 font-normal text-[#666666]">
                        Booking Partner: {bookingPartner}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HotelItemCatelog;