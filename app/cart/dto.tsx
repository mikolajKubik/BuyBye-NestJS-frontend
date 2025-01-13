import { z } from "zod";

const productSchema = z.object({
    id: z
    .string()
    .min(1, { message: "Product ID must not be empty." }),
    quantity: z
    .number()
    .int()
    .positive({ message: "Quantity must be a positive integer." })
  });

export const createOrderSchema = z.object({
    username: z
      .string()
      .min(1, { message: "Username must be at least 1 character." })
      .max(255, { message: "Username must be at most 255 characters." }),
    email: z
      .string()
      .email({ message: "Invalid email format" })
      .min(1, { message: "Email must be at least 1 character." })
      .max(255, { message: "Email must be at most 255 characters." }),
    phone: z
        .string()
        .min(7, { message: "Phone number must be at least 7 charakters" })
        .max(14, { message: "Phone number must be at most 14 charakters" }),
    products: z
        .array(productSchema)
        .nonempty({ message: "Products list must not be empty." }),
  });
  
  export type CreateOrderInput = z.infer<typeof createOrderSchema>;