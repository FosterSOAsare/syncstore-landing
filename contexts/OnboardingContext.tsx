"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { OrganizationProfileData } from "@/lib/schemas/organizationProfile";
import { ReceiptCustomizationData } from "@/lib/schemas/receiptCustomization";
import { TaxSettingsData } from "@/lib/schemas/taxSettings";
import { CurrencySettingsData } from "@/lib/schemas/currencySettings";
import { ColorAndSecurityData } from "@/lib/schemas/colorAndSecurity";

export interface OnboardingData {
  profile?: OrganizationProfileData;
  receipt?: ReceiptCustomizationData;
  taxes?: TaxSettingsData;
  currency?: CurrencySettingsData;
  colorsAndSecurity?: ColorAndSecurityData;
}

interface OnboardingContextType {
  data: OnboardingData;
  updateProfile: (data: OrganizationProfileData) => void;
  updateReceipt: (data: ReceiptCustomizationData) => void;
  updateTaxes: (data: TaxSettingsData) => void;
  updateCurrency: (
    data: CurrencySettingsData & { currencyCode?: string }
  ) => void;
  updateColorsAndSecurity: (data: ColorAndSecurityData) => void;
  resetData: () => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined
);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<OnboardingData>({});

  const updateProfile = (profileData: OrganizationProfileData) => {
    setData((prev) => ({ ...prev, profile: profileData }));
  };

  const updateReceipt = (receiptData: ReceiptCustomizationData) => {
    setData((prev) => ({ ...prev, receipt: receiptData }));
  };

  const updateTaxes = (taxesData: TaxSettingsData) => {
    setData((prev) => ({ ...prev, taxes: taxesData }));
  };

  const updateCurrency = (
    currencyData: CurrencySettingsData & { currencyCode?: string }
  ) => {
    setData((prev) => ({ ...prev, currency: currencyData }));
  };

  const updateColorsAndSecurity = (
    colorsAndSecurityData: ColorAndSecurityData
  ) => {
    setData((prev) => ({ ...prev, colorsAndSecurity: colorsAndSecurityData }));
  };

  const resetData = () => {
    setData({});
  };

  return (
    <OnboardingContext.Provider
      value={{
        data,
        updateProfile,
        updateReceipt,
        updateTaxes,
        updateCurrency,
        updateColorsAndSecurity,
        resetData,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
}
