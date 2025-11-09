"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Palette, Lock, Check } from "lucide-react";
import { motion } from "framer-motion";
import {
  colorAndSecuritySchema,
  type ColorAndSecurityData,
} from "@/lib/schemas/colorAndSecurity";
import { useOnboarding } from "@/contexts/OnboardingContext";

interface ColorAndSecurityStepProps {
  onComplete?: () => void;
  isLastStep: boolean;
  onFinalSubmit: () => Promise<void>;
}

export default function ColorAndSecurityStep({
  isLastStep,
  onFinalSubmit,
}: ColorAndSecurityStepProps) {
  const { data, updateColorsAndSecurity } = useOnboarding();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ColorAndSecurityData>({
    resolver: zodResolver(colorAndSecuritySchema),
    mode: "onChange",
    defaultValues: data.colorsAndSecurity || {
      primary: "#3B82F6",
      default_user_password: "",
    },
  });

  const primaryColor = watch("primary") || "#3B82F6";

  const onSubmit = async (formData: ColorAndSecurityData) => {
    updateColorsAndSecurity(formData);
    if (isLastStep && onFinalSubmit) {
      await onFinalSubmit();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Customization & Security
          </h2>
          <p className="text-gray-600">
            Personalize your system's appearance and set up security defaults.
          </p>
        </div>

        <div className="space-y-8">
          {/* Color Settings Section */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Brand Colors
            </h3>

            {/* Primary Color */}
            <div>
              <label
                htmlFor="primary"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Primary Color *
              </label>
              <div className="flex gap-3 items-center">
                <input
                  type="color"
                  id="primary"
                  {...register("primary")}
                  className="w-20 h-12 border-2 border-gray-300 rounded-lg cursor-pointer"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 font-mono">
                    {primaryColor}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Click the color box to change
                  </p>
                </div>
              </div>
              {errors.primary && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.primary.message}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                This color will be used for buttons, links, and highlights
              </p>
            </div>

            {/* Color Preview */}
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="text-sm font-medium text-gray-900 mb-4">
                Color Preview
              </h4>
              <div className="space-y-3">
                <button
                  type="button"
                  style={{ backgroundColor: primaryColor }}
                  className="px-6 py-2.5 text-white font-medium rounded-lg shadow-sm transition-opacity hover:opacity-90"
                >
                  Primary Button
                </button>
                <p className="text-sm text-gray-600">
                  <span
                    style={{ color: primaryColor }}
                    className="font-semibold"
                  >
                    Primary text link
                  </span>{" "}
                  and highlighted elements will use this color
                </p>
              </div>
            </div>
          </div>

          {/* Security Settings Section */}
          <div className="space-y-5 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Security Settings
            </h3>

            {/* Default User Password */}
            <div>
              <label
                htmlFor="security.default_user_password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Default User Password *
              </label>
              <input
                type="password"
                id="default_user_password"
                {...register("default_user_password")}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                placeholder="Enter default password"
              />
              {errors.default_user_password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.default_user_password.message}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                This password will be used when creating new users without
                specifying a custom password. Users should change it after first
                login.
              </p>
            </div>

            {/* Info Box */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-amber-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-amber-900 mb-1">
                    Security Best Practice
                  </h4>
                  <p className="text-xs text-amber-700">
                    Choose a strong default password with at least 8 characters,
                    including letters, numbers, and special characters. Remind
                    all users to change it immediately after their first login.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Submitting...
                </>
              ) : (
                <>
                  <Check className="w-5 h-5" />
                  Complete Setup
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
}
