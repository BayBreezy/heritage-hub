import { array, number, object, string } from "yup";

// validation object for login form
export const LoginSchema = object().shape({
  email: string().email().required(),
  password: string().min(6).required(),
});

// validation object for register form
export const RegisterSchema = object().shape({
  username: string().min(3).required(),
  email: string().email().required(),
  password: string().min(6).required(),
});

// validation for entity form
export const EntitySchema = object({
  type: string().min(3).required("Type is required"),
  location: string().when("type", {
    is: (v: string) => v === "Experience",
    then: (schema) => schema.required("Location is required"),
  }),
  title: string().min(3).required("Title is required"),
  price: string(),
  description: string(),
  whatsapp: string().min(10, "WhatsApp number is invalid"),
  media: array(),
  tags: string(),
});
