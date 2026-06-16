import * as Yup from "yup";
import type { FormField } from "./Interfaces/FormInterface";

export default class TripFormConfig {
  static placeForm: Array<FormField> = [
    {
      fieldName: "Which place are you planning to visit?",
      backendName: "placeName",
      validation: Yup.string().required("Place name is required"),
      fieldType: "text",
    },
    {
      fieldName: "Start Date & Time of the Trip",
      backendName: "startDateTime",
      validation: Yup.date().required("Start date and time is required"),
      fieldType: "datetime-local",
    },
    {
      fieldName: "End Date & Time of the Trip",
      backendName: "endDateTime",
      validation: Yup.date().required("End date and time is required"),
      fieldType: "datetime-local",
    },
    {
        fieldName: "Additional Notes (Optional)",
        backendName: "notes",
        validation: Yup.string(),
        fieldType: "textarea",
    }
  ];
}
