"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trash2, Percent, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  taxSettingsSchema,
  type TaxSettingsData,
} from "@/lib/schemas/taxSettings";
import { useOnboarding } from "@/contexts/OnboardingContext";

interface TaxSettingsStepProps {
  onComplete: () => void;
  isLastStep?: boolean;
  onFinalSubmit?: () => void;
}

export default function TaxSettingsStep({ onComplete }: TaxSettingsStepProps) {
  const { data, updateTaxes } = useOnboarding();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TaxSettingsData>({
    resolver: zodResolver(taxSettingsSchema),
    mode: "onChange",
    defaultValues: {
      taxes: data.taxes?.taxes || [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "taxes",
  });

  const addTax = () => {
    append({
      id: `tax-${Date.now()}`,
      name: "",
      rate: 0,
      description: "",
      isDefault: fields.length === 0,
      isIncluded: false,
    });
  };

  const onSubmit = async (formData: TaxSettingsData) => {
    updateTaxes(formData);
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
            Tax Settings
          </h2>
          <p className="text-gray-600">
            Configure tax rates that will be applied to sales. You can add
            multiple taxes or skip this step if you don't need taxes.
          </p>
        </div>

        {/* Info Box */}
        {fields.length === 0 && (
          <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <svg
                  className="w-5 h-5 text-primary"
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
                <h4 className="text-sm font-medium text-primary mb-1">
                  No Taxes Configured
                </h4>
                <p className="text-xs text-primary">
                  You haven't added any taxes yet. If your business doesn't
                  require tax collection, you can skip this step and proceed to
                  the next one. You can always add taxes later from your
                  settings.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {fields.map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="p-5 bg-white border border-gray-200 rounded-xl space-y-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Tax #{index + 1}
                  </h3>
                  {fields.length > 1 && (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Tax Name */}
                  <div>
                    <label
                      htmlFor={`taxes.${index}.name`}
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Tax Name *
                    </label>
                    <input
                      type="text"
                      {...register(`taxes.${index}.name`)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                      placeholder="VAT, Sales Tax, etc."
                    />
                    {errors.taxes?.[index]?.name && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.taxes[index]?.name?.message}
                      </p>
                    )}
                  </div>

                  {/* Tax Rate */}
                  <div>
                    <label
                      htmlFor={`taxes.${index}.rate`}
                      className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1"
                    >
                      <Percent className="w-4 h-4" />
                      Tax Rate (%) *
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      {...register(`taxes.${index}.rate`, {
                        valueAsNumber: true,
                      })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                      placeholder="0.00"
                    />
                    {errors.taxes?.[index]?.rate && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.taxes[index]?.rate?.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor={`taxes.${index}.description`}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Description (Optional)
                  </label>
                  <input
                    type="text"
                    {...register(`taxes.${index}.description`)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                    placeholder="Brief description of this tax"
                  />
                </div>

                {/* Checkboxes */}
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register(`taxes.${index}.isDefault`)}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700">Default tax</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register(`taxes.${index}.isIncluded`)}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700">
                      Tax included in price
                    </span>
                  </label>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {errors.taxes?.message && (
            <p className="text-sm text-red-600">
              {errors.taxes.message as string}
            </p>
          )}

          <button
            type="button"
            onClick={addTax}
            className="w-full py-3 px-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary/50 hover:text-primary transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            {fields.length === 0 ? "Add Your First Tax" : "Add Another Tax"}
          </button>

          {fields.length === 0 && (
            <p className="text-center text-sm text-gray-500">
              Or skip this step if your business doesn't collect taxes
            </p>
          )}

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
        </div>
      </form>
    </motion.div>
  );
}
