import * as Yup from "yup";


// Signin Schema
 export  const SigninSchema = Yup.object({
  email: Yup
    .string()
    .trim()
    .email("Email must be valid")
    .max(50, "Email lengh should not be more than 50")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

// Signup Schema
export const SignupSchema = Yup.object({
  name: Yup
    .string()
    .trim()
    .min(2, "Name length should be more than 2")
    .max(50, "Name length should not be more than 50")
    // .matches(/^[\\p{L} .'-]+$/, "Must be only characters")
    .required("Name is required"),
  phoneNumber : Yup
     .number()
     .min(8,"Phone Number min length 8")
    //  .max(20,"Phone Number max length 12")
     .required("Phone Number is required")
  ,
    email: Yup
    .string()
    .trim()
    .email("Email must be valid")
    .max(50, "Email lengh should not be more than 50")
    .required("Email is required"),
  password: Yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Password must contain one capital and special character"
    ),
});

