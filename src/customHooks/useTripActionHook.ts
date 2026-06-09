import { useSelector } from "react-redux";
import type IUserInterface from "../services/Interfaces/UserInterface";
import BECallingService from "../services/APICalling/BECallingService";

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
      console.log("Trip data to be sent to backend: ", tripData);
      // Call the API to create the trip with tripData
      const response = await BECallingService.postAPICall(
        "/trip/createRoom",
        tripData,
      );
      console.log("Response from backend after creating trip: ", response);
      return response.data.roomId;
    } catch (error) {
      console.error("Error creating trip: ", error);
      return null;
    }
  };

  return {
    createTrip,
  };
};

export default useTripActionHook;
