import { useSelector } from "react-redux";
import type IUserInterface from "../services/Interfaces/UserInterface";
import BECallingService from "../services/APICalling/BECallingService";
import SocketCallingService from "../services/APICalling/SocketCallingService";
import TripFormConfig from "../services/TripFormConfig";

const useTripActionHook = () => {
  const { userName, userEmail } = useSelector(
    (state: any) => state.userDetails as IUserInterface,
  );

  const createTrip = async (
    data: Record<string, any>,
  ): Promise<string | null> => {
    try {
      const tripData = {
        ...data,
        createdBy: userName,
        CreatedByMailID: userEmail || "aryanJha@gmail.com",
      };
      // Call the API to create the trip with tripData
      const response = await BECallingService.postAPICall(
        "/trip/createRoom",
        tripData,
      );
      return response?.data?.roomId ?? null;
    } catch (error) {
      console.error("Error creating trip: ", error);
      return null;
    }
  };

  const makeSocketConnection = () => {
    return new SocketCallingService();
  };

  const getOptions = async (optionType: "Places") => {
    try {
      const response = await BECallingService.postAPICall("trip/getOptions", {
        optionType,
      });
      return response?.data ?? [];
    } catch (error) {
      console.error(`Error fetching ${optionType} options: `, error);
      return [];
    }
  };

  const getTripFormConfig = (formType: "Places") => {
    switch (formType) {
      case "Places":
        return TripFormConfig.placeForm;
      default:
        return [];
    }
  };

  const getHotelCatalog = async (placeName : string) => {
    const response = await BECallingService.postAPICall("/trip/getHotelCatelog", { placeName });
    return response?.data ?? [];
  };

  const getImagesFromBE = async (imageKeys: Array<string>) => {
    const response = await BECallingService.postAPICall("/aws/getImages", { imageKeys });
    return response.data ;
  }

  return {
    createTrip,
    makeSocketConnection,
    getOptions,
    getTripFormConfig,
    getHotelCatalog,
    getImagesFromBE,
  };
};

export default useTripActionHook;
