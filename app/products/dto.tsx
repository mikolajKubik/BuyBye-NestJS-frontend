// src/product/schemas/create-product.schema.ts
import { z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name must be at least 1 character." })
    .max(255, { message: "Name must be at most 255 characters." }),
  description: z
    .string()
    .min(1, { message: "Description must be at least 1 character." })
    .max(255, { message: "Description must be at most 255 characters." }),
  weight: z
    .number({
      invalid_type_error: "Weight must be a number.",
    })
    .min(0.01, { message: "Weight must be at least 0.01." })
    .max(99999999.99, { message: "Weight must be at most 99999999.99." })
    .refine((val) => Number.isFinite(val), {
      message: "Weight must be a valid number.",
    }),
  stock: z
    .number({
      invalid_type_error: "Stock must be a number.",
    })
    .min(1, { message: "Stock must be at least 1." })
    .max(99999999, { message: "Stock must be at most 99999999." }),
  price: z
    .number({
      invalid_type_error: "Price must be a number.",
    })
    .min(0.01, { message: "Price must be at least 0.01." })
    .max(99999999.99, { message: "Price must be at most 99999999.99." })
    .refine((val) => Number.isFinite(val), {
      message: "Price must be a valid number.",
    }),
  categoryName: z
    .string()
    .min(1, { message: "Category Name must be at least 1 character." })
    .max(255, { message: "Category Name must be at most 255 characters." }),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;