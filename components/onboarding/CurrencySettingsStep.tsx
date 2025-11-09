"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DollarSign, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  currencySettingsSchema,
  type CurrencySettingsData,
} from "@/lib/schemas/currencySettings";
import { useOnboarding } from "@/contexts/OnboardingContext";

interface CurrencySettingsStepProps {
  onComplete: () => void;
  isLastStep?: boolean;
  onFinalSubmit?: () => void;
}

export default function CurrencySettingsStep({
  onComplete,
}: CurrencySettingsStepProps) {
  const { data, updateCurrency } = useOnboarding();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CurrencySettingsData>({
    resolver: zodResolver(currencySettingsSchema),
    mode: "onChange",
    defaultValues: {
      defaultCurrency: data.currency?.defaultCurrency || "",
      decimalPlaces: data.currency?.decimalPlaces ?? 2,
      thousandSeparator: data.currency?.thousandSeparator || ("comma" as const),
    },
  });

  const onSubmit = async (formData: CurrencySettingsData) => {
    // Auto-populate currency code from selected currency
    const selectedCurrencyData = currencies.find(
      (c) => c.name === formData.defaultCurrency
    );
    const currencyCode = selectedCurrencyData?.code || "";

    updateCurrency({
      ...formData,
      currencyCode,
    } as any);
    onComplete();
  };

  const currencies = [
    { code: "USD", name: "US Dollar", symbol: "$" },
    { code: "EUR", name: "Euro", symbol: "€" },
    { code: "GBP", name: "British Pound", symbol: "£" },
    { code: "GHS", name: "Ghanaian Cedi", symbol: "₵" },
    { code: "NGN", name: "Nigerian Naira", symbol: "₦" },
    { code: "ZAR", name: "South African Rand", symbol: "R" },
    { code: "JPY", name: "Japanese Yen", symbol: "¥" },
    { code: "CNY", name: "Chinese Yuan", symbol: "¥" },
    { code: "INR", name: "Indian Rupee", symbol: "₹" },
  ];

  // Watch form values for live preview
  const selectedCurrency = watch("defaultCurrency");
  const decimalPlaces = watch("decimalPlaces") ?? 2;
  const thousandSeparator = watch("thousandSeparator") ?? "comma";

  // Get currency symbol
  const getCurrencySymbol = () => {
    const currency = currencies.find((c) => c.name === selectedCurrency);
    return currency?.symbol || "$";
  };

  // Format number based on settings
  const formatPreview = () => {
    const number = 1234567.89;
    const symbol = getCurrencySymbol();

    // Split into integer and decimal parts
    let integerPart = Math.floor(number).toString();
    let decimalPart = (number % 1).toFixed(Math.max(0, decimalPlaces)).slice(2);

    // Apply thousand separator
    if (thousandSeparator !== "none") {
      const separator =
        thousandSeparator === "comma"
          ? ","
          : thousandSeparator === "period"
          ? "."
          : "_";
      integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    }

    // Build final string
    if (decimalPlaces === 0) {
      return `${symbol} ${integerPart}`;
    }

    return `${symbol} ${integerPart}.${decimalPart}`;
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
            Currency Settings
          </h2>
          <p className="text-gray-600">
            Configure how currency is displayed throughout your system.
          </p>
        </div>

        <div className="space-y-5">
          {/* Default Currency */}
          <div>
            <label
              htmlFor="currency.defaultCurrency"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1"
            >
              <DollarSign className="w-4 h-4" />
              Default Currency *
            </label>
            <select
              id="currency.defaultCurrency"
              {...register("defaultCurrency")}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors bg-white"
            >
              <option value="">Select a currency</option>
              {currencies.map((curr) => (
                <option key={curr.code} value={curr.name}>
                  {curr.symbol} {curr.name} ({curr.code})
                </option>
              ))}
            </select>
            {errors.defaultCurrency && (
              <p className="mt-1 text-sm text-red-600">
                {errors.defaultCurrency.message}
              </p>
            )}
          </div>

          {/* Decimal Places */}
          <div>
            <label
              htmlFor="currency.decimalPlaces"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Decimal Places *
            </label>
            <select
              id="currency.decimalPlaces"
              {...register("decimalPlaces", { valueAsNumber: true })}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors bg-white"
            >
              <option value={0}>0 (e.g., $100)</option>
              <option value={1}>1 (e.g., $100.0)</option>
              <option value={2}>2 (e.g., $100.00)</option>
              <option value={3}>3 (e.g., $100.000)</option>
              <option value={4}>4 (e.g., $100.0000)</option>
            </select>
            {errors.decimalPlaces && (
              <p className="mt-1 text-sm text-red-600">
                {errors.decimalPlaces.message}
              </p>
            )}
          </div>

          {/* Thousand Separator */}
          <div>
            <label
              htmlFor="currency.thousandSeparator"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Thousand Separator *
            </label>
            <select
              id="currency.thousandSeparator"
              {...register("thousandSeparator")}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors bg-white"
            >
              <option value="comma">Comma (1,000,000)</option>
              <option value="period">Period (1.000.000)</option>
              <option value="underscore">Underscore (1_000_000)</option>
              <option value="none">None (1000000)</option>
            </select>
            {errors.thousandSeparator && (
              <p className="mt-1 text-sm text-red-600">
                {errors.thousandSeparator.message}
              </p>
            )}
          </div>
        </div>

        {/* Preview */}
        <div className="mt-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">
            Format Preview
          </h3>
          <p className="text-2xl font-bold text-gray-900">{formatPreview()}</p>
          <p className="mt-2 text-xs text-gray-600">
            This is how currency values will be displayed based on your settings
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
