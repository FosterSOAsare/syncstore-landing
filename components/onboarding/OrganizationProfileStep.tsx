"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Image,
  Upload,
  X,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  organizationProfileSchema,
  type OrganizationProfileData,
} from "@/lib/schemas/organizationProfile";
import { useOnboarding } from "@/contexts/OnboardingContext";

interface OrganizationProfileStepProps {
  onComplete: () => void;
  isLastStep?: boolean;
  onFinalSubmit?: () => void;
}

export default function OrganizationProfileStep({
  onComplete,
}: OrganizationProfileStepProps) {
  const { data, updateProfile } = useOnboarding();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<OrganizationProfileData>({
    resolver: zodResolver(organizationProfileSchema),
    mode: "onChange",
    defaultValues: data.profile || {
      name: "",
      email: "",
      phone: "",
      address: "",
      logo_file: undefined,
    },
  });

  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please upload an image file");
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }

      setFileName(file.name);
      setValue("logo_file", file);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearFile = () => {
    setLogoPreview(null);
    setFileName(null);
    setValue("logo_file", undefined);
  };

  const onSubmit = async (formData: OrganizationProfileData) => {
    updateProfile(formData);
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
            Organization Profile
          </h2>
          <p className="text-gray-600">
            Tell us about your business. This information will appear on
            receipts and documents.
          </p>
        </div>

        <div className="space-y-5">
          {/* Organization Name */}
          <div>
            <label
              htmlFor="name"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1"
            >
              <Building2 className="w-4 h-4" />
              Organization Name *
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
              placeholder="Acme Corporation"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">
                {errors.name.message as string}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1"
            >
              <Mail className="w-4 h-4" />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
              placeholder="contact@acme.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message as string}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1"
            >
              <Phone className="w-4 h-4" />
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone")}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
              placeholder="+1 (555) 000-0000"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">
                {errors.phone.message as string}
              </p>
            )}
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1"
            >
              <MapPin className="w-4 h-4" />
              Business Address *
            </label>
            <textarea
              id="address"
              {...register("address")}
              rows={3}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors resize-none"
              placeholder="123 Main Street, City, State, ZIP"
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-600">
                {errors.address.message as string}
              </p>
            )}
          </div>

          {/* Logo Upload */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <Image className="w-4 h-4" />
              Company Logo (Optional)
            </label>

            {!logoPreview ? (
              <label
                htmlFor="logo_file"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 5MB
                  </p>
                </div>
                <input
                  id="logo_file"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
            ) : (
              <div className="relative w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50">
                <div className="flex items-center gap-4">
                  <img
                    src={logoPreview}
                    alt="Logo preview"
                    className="w-20 h-20 object-contain rounded-lg bg-white border border-gray-200"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {fileName}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Logo will be uploaded when you complete the form
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={clearFile}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
            <p className="mt-1 text-xs text-gray-500">
              Upload your company logo. It will appear on receipts and
              documents.
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
        </div>
      </form>
    </motion.div>
  );
}
