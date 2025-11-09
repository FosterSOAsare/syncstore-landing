"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileText, CheckSquare, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  receiptCustomizationSchema,
  type ReceiptCustomizationData,
} from "@/lib/schemas/receiptCustomization";
import { useOnboarding } from "@/contexts/OnboardingContext";

interface ReceiptCustomizationStepProps {
  onComplete: () => void;
  isLastStep?: boolean;
  onFinalSubmit?: () => void;
}

export default function ReceiptCustomizationStep({
  onComplete,
}: ReceiptCustomizationStepProps) {
  const { data, updateReceipt } = useOnboarding();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ReceiptCustomizationData>({
    resolver: zodResolver(receiptCustomizationSchema),
    mode: "onChange",
    defaultValues: data.receipt || {
      headerText: "Thank you for your purchase!",
      footerText: "Visit us again soon!",
      showTaxBreakdown: false,
    },
  });

  const onSubmit = async (formData: ReceiptCustomizationData) => {
    updateReceipt(formData);
    onComplete();
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
            Receipt Customization
          </h2>
          <p className="text-gray-600">
            Customize how your receipts look and what information they display.
          </p>
        </div>

        <div className="space-y-5">
          {/* Header Text */}
          <div>
            <label
              htmlFor="headerText"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1"
            >
              <FileText className="w-4 h-4" />
              Receipt Header Text *
            </label>
            <input
              type="text"
              id="headerText"
              {...register("headerText")}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
              placeholder="Thank you for your business!"
            />
            {errors.headerText && (
              <p className="mt-1 text-sm text-red-600">
                {errors.headerText.message}
              </p>
            )}
            <p className="mt-1 text-xs text-gray-500">
              This text appears at the top of every receipt
            </p>
          </div>

          {/* Footer Text */}
          <div>
            <label
              htmlFor="footerText"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1"
            >
              <FileText className="w-4 h-4" />
              Receipt Footer Text *
            </label>
            <textarea
              id="footerText"
              {...register("footerText")}
              rows={3}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors resize-none"
              placeholder="Visit us again soon! Terms and conditions apply."
            />
            {errors.footerText && (
              <p className="mt-1 text-sm text-red-600">
                {errors.footerText.message}
              </p>
            )}
            <p className="mt-1 text-xs text-gray-500">
              This text appears at the bottom of every receipt
            </p>
          </div>

          {/* Show Tax Breakdown */}
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <input
              type="checkbox"
              id="showTaxBreakdown"
              {...register("showTaxBreakdown")}
              className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary"
            />
            <div className="flex-1">
              <label
                htmlFor="showTaxBreakdown"
                className="flex items-center gap-2 text-sm font-medium text-gray-900 cursor-pointer"
              >
                Show detailed tax breakdown on receipts
              </label>
              <p className="mt-1 text-xs text-gray-600">
                Display individual tax rates and amounts instead of a single
                total
              </p>
            </div>
          </div>
        </div>

        {/* Preview Card */}
        <div className="mt-6 p-6 bg-gradient-to-br from-primary/5 to-indigo-50 rounded-xl border border-primary/20">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Preview Tip
          </h3>
          <p className="text-sm text-gray-600">
            Your header and footer text will be displayed on all customer
            receipts. Keep it professional and include any important information
            like return policies or contact details.
          </p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSubmitting ? "Saving..." : "Next"}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </form>
    </motion.div>
  );
}
