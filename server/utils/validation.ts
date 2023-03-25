import { object, string } from "yup";

export const entitySchema = object({
  type: string().required(),
  location: string().optional().nullable(),
  title: string().required().min(3),
  price: string().optional().nullable(),
  description: string().optional().nullable(),
  whatsapp: string().optional().min(10),
  tags: string().optional().nullable(),
});
