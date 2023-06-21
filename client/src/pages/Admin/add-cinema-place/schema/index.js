import * as Yup from "yup";

export const doctorsSchema = Yup.object({
  name: Yup.string()
    .required("Please enter a first name")
    .max(20, "must use max 20 characters!"),
  location: Yup.string()
    .required("Please enter a last name")
    .max(20, "must use max 20 characters!")
    .matches(/^([A-Za-z]*)$/gi, "Surname can only contain letters."),
});
