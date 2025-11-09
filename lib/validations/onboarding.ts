import { z } from "zod";

// Step 1: Organization Profile
export const organizationProfileSchema = z.object({
  name: z.string().min(2, "Organization name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(5, "Please enter a complete address"),
  logo_file: z.any().optional(), // Will handle file validation separately
});

// Step 2: Receipt Customization
export const receiptCustomizationSchema = z.object({
  headerText: z.string().min(1, "Header text is required"),
  footerText: z.string().min(1, "Footer text is required"),
  showTaxBreakdown: z.boolean(),
});

// Step 3: Tax Settings
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
  taxes: z.array(taxSchema).optional().default([]),
});

// Step 4: Currency Settings
export const currencySettingsSchema = z.object({
  defaultCurrency: z.string().min(1, "Default currency is required"),
  currencyCode: z
    .string()
    .length(3, "Currency code must be 3 characters (e.g., USD)"),
  decimalPlaces: z.number().min(0).max(4),
  thousandSeparator: z.enum(["comma", "period", "underscore", "none"]),
});

// Step 5: Color & Security Settings
export const colorAndSecuritySchema = z.object({
  primary: z
    .string()
    .regex(/^#[0-9A-F]{6}$/i, "Please enter a valid hex color code"),
  default_user_password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});

// Combined schema for the entire form
export const onboardingSchema = z.object({
  profile: organizationProfileSchema,
  receipt: receiptCustomizationSchema,
  taxes: z.array(taxSchema).optional().default([]),
  currency: currencySettingsSchema,
  colors: z.object({
    primary: z
      .string()
      .regex(/^#[0-9A-F]{6}$/i, "Please enter a valid hex color code"),
  }),
  security: z.object({
    default_user_password: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  }),
});

export type OnboardingFormData = z.infer<typeof onboardingSchema>;
