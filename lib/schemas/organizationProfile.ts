import { z } from "zod";

export const organizationProfileSchema = z.object({
  name: z.string().min(2, "Organization name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(5, "Please enter a complete address"),
  logo_file: z.any().optional(),
});

export type OrganizationProfileData = z.infer<typeof organizationProfileSchema>;
