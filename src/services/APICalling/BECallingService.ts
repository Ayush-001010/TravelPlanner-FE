import axios from "axios";

export default class BECallingService {
  public static api = axios.create({
    baseURL: "http://localhost:3000/",
  });

  static postAPICall = async (endPoint: string, data: any) => {
    try {
      const response = await this.api.post(endPoint, data);
      return response.data;
    } catch (error) {
      console.log("Error in API call: ", error);
    }
  };
}
