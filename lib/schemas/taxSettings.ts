import { z } from "zod";

export const taxSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Tax name is required"),
  rate: z
    .number()
    .min(0, "Rate must be positive")
    .max(100, "Rate cannot exceed 100%"),
  description: z.string().optional(),
  isDefault: z.boolean(),
  isIncluded: z.boolean(),
});

export const taxSettingsSchema = z.object({
  taxes: z.array(taxSchema).optional(),
});

export type TaxData = z.infer<typeof taxSchema>;
export type TaxSettingsData = z.infer<typeof taxSettingsSchema>;
