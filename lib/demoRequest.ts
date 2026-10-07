import { z } from "zod";

// Must match the server's CreateDemoRequestDto
export const BUSINESS_TYPES = [
  { value: "retail", label: "Retail Store" },
  { value: "wholesale", label: "Wholesale/Distribution" },
  { value: "pharmacy", label: "Pharmacy" },
  { value: "restaurant", label: "Restaurant/Food Service" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "other", label: "Other" },
] as const;

export const BRANCH_COUNTS = ["1", "2-5", "6-10", "11-20", "20+"] as const;

const businessTypeValues = BUSINESS_TYPES.map((type) => type.value) as [
  (typeof BUSINESS_TYPES)[number]["value"],
  ...(typeof BUSINESS_TYPES)[number]["value"][],
];

export const demoRequestSchema = z.object({
  fullName: z.string().trim().min(1, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email").max(254),
  phone: z.string().trim().min(5, "Please enter your phone number").max(40),
  company: z.string().trim().min(1, "Please enter your company name").max(160),
  businessType: z.enum(businessTypeValues, {
    message: "Please select your business type",
  }),
  numberOfBranches: z.enum(BRANCH_COUNTS).or(z.literal("")).optional(),
  message: z.string().trim().max(2000).optional(),
});

export type DemoRequestData = z.infer<typeof demoRequestSchema>;
