import { z } from "zod";

export const colorAndSecuritySchema = z.object({
  primary: z
    .string()
    .regex(/^#[0-9A-F]{6}$/i, "Please enter a valid hex color code"),
  default_user_password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});

export type ColorAndSecurityData = z.infer<typeof colorAndSecuritySchema>;
