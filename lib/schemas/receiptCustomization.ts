import { z } from "zod";

export const receiptCustomizationSchema = z.object({
  headerText: z.string().min(1, "Header text is required"),
  footerText: z.string().min(1, "Footer text is required"),
  showTaxBreakdown: z.boolean(),
});

export type ReceiptCustomizationData = z.infer<
  typeof receiptCustomizationSchema
>;
