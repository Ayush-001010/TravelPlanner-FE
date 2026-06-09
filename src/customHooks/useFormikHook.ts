import { useCallback, useEffect, useState } from "react";
import * as Yup from "yup";
import type { ITripFormInterface } from "../services/Interfaces/TripFormInterface";

const useFormikHook = (
  type: "create-trip",
  config: Array<ITripFormInterface>,
) => {
  const [initialValues, setInitialValues] = useState<{ [key: string]: any }>(
    {},
  );
  const [validationSchema, setValidationSchema] = useState<{
    [key: string]: any;
  }>({});

  const createInitialValues = useCallback(
    (type: "create-trip", config: Array<ITripFormInterface>) => {
      switch (type) {
        default:
          const initialValues: { [key: string]: any } = {};
          config.forEach((field) => {
            if (field.type === "start-end-date") {
              initialValues["startDate"] = null;
              initialValues["endDate"] = null;
              return;
            }
            initialValues[field.fieldName] = "";
          });
          return initialValues;
      }
    },
    [],
  );

  const createValidationSchema = useCallback(
    (type: "create-trip", config: Array<ITripFormInterface>) => {
      switch (type) {
        default:
          const validationSchemaFields: { [key: string]: any } = {};
          config.forEach((field) => {
            if(field.type === "start-end-date") {
              if(field.validation) {
                validationSchemaFields["startDate"] = field.validation;
                validationSchemaFields["endDate"] = field.validation;
              }
              return;
            }
            if (field.validation) {
              validationSchemaFields[field.fieldName] = field.validation;
            }
          });
          return validationSchemaFields;
      }
    },
    [],
  );

  useEffect(() => {
    const initialValues = createInitialValues(type, config);
    setInitialValues(initialValues);
    const validationSchema = createValidationSchema(type, config);
    // Wrap the validation fields into a Yup object schema so Formik can use it
    setValidationSchema(Yup.object().shape(validationSchema));
  }, [type, config]);
  return { initialValues, validationSchema };
};

export default useFormikHook;
