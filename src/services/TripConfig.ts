import type { ITripFormInterface } from "./Interfaces/TripFormInterface";
import * as Yup from "yup";

export default class TripConfig {
  public static readonly createTripFormConfigs: Array<ITripFormInterface> = [
    {
      fieldName: "tripName",
      displayName: "Trip Name",
      type: "text",
      validation: Yup.string().required("Trip Name is required"),
    },
    {
      fieldName: "tripPurpose",
      displayName: "Trip Purpose",
      type: "tripPurpose",
      validation: Yup.string().required("Trip Purpose is required"),
    },
    {
      fieldName: "tripType",
      displayName: "Trip Type",
      type: "tripType",
      validation: Yup.string().required("Trip Type is required"),
    },
    {
      fieldName: "startEndDate",
      displayName: "Start & End Date",
      type: "start-end-date",
      validation: undefined,
    },
    {
      fieldName: "tripDescription",
      displayName: "Trip Description",
      type: "textarea",
      validation: Yup.string().required("Trip Description is required"),
    },
  ];
}
