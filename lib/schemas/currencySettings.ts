import { z } from "zod";

export const currencySettingsSchema = z.object({
  defaultCurrency: z.string().min(1, "Default currency is required"),
  decimalPlaces: z.number().min(0).max(4),
  thousandSeparator: z.enum(["comma", "period", "underscore", "none"]),
});

export type CurrencySettingsData = z.infer<typeof currencySettingsSchema>;
