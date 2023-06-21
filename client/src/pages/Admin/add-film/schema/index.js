import * as Yup from "yup";

export const doctorsSchema = Yup.object({
  title: Yup.string()
    .required("Please enter a first name")
    .max(20, "must use max 20 characters!"),
  director: Yup.string()
    .required("Please enter a last name")
    .max(20, "must use max 20 characters!")
});
