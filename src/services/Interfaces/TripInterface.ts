export interface IItenaryInterface {
    endDate: Date;
    startDate: Date;
    notes : string;
    placeName: string;
}

export interface IHotelInterface {
    address: string;
    amenities: string[];
    bookingPartner: string;
    city: string;
    description: string;
    hotelId: string;
    hotelImage: string[];
    hotelName: string;
    partnerHotelUrl: string;
    pk: string;
    placeId: string;
    placeName: string;
    priceCategory: string;
    pricePerNight: string;
    rating: string;
    reviewCount: string;
    sk: string;
    state: string;
    tags: string[];
}
