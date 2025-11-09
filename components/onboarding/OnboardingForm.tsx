"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Check } from "lucide-react";
import { useOnboarding } from "@/contexts/OnboardingContext";
import OrganizationProfileStep from "./OrganizationProfileStep";
import ReceiptCustomizationStep from "./ReceiptCustomizationStep";
import TaxSettingsStep from "./TaxSettingsStep";
import CurrencySettingsStep from "./CurrencySettingsStep";
import ColorAndSecurityStep from "./ColorAndSecurityStep";

const steps = [
  OrganizationProfileStep,
  ReceiptCustomizationStep,
  TaxSettingsStep,
  CurrencySettingsStep,
  ColorAndSecurityStep,
];

export default function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const { data } = useOnboarding();

  const CurrentStepComponent = steps[currentStep];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepComplete = () => {
    nextStep();
  };

  const handleFinalSubmit = async () => {
    // All data is already in context from each step
    console.log("Complete onboarding data:", data);

    // Here you would typically send the data to your backend
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
      alert("Onboarding completed successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    index < currentStep
                      ? "bg-primary border-primary text-white"
                      : index === currentStep
                      ? "bg-white border-primary text-primary"
                      : "bg-white border-gray-300 text-gray-400"
                  }`}
                >
                  {index < currentStep ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span className="font-semibold">{index + 1}</span>
                  )}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-0.5 flex-1 transition-colors ${
                    index < currentStep ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 min-h-[500px]">
        <AnimatePresence mode="wait">
          <CurrentStepComponent
            key={currentStep}
            onComplete={handleStepComplete}
            onFinalSubmit={handleFinalSubmit}
            isLastStep={currentStep === steps.length - 1}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8">
        {currentStep > 0 && (
          <button
            type="button"
            onClick={prevStep}
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>
        )}
      </div>
    </div>
  );
}
