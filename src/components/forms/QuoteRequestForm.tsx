import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Clock, CheckCircle, AlertCircle } from "lucide-react";

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
  botcheck?: string;
}

interface QuoteRequestFormProps {
  onSubmit?: (data: QuoteFormData) => void;
  isSticky?: boolean;
  isModal?: boolean;
  onSuccess?: () => void;
}

const QuoteRequestForm = ({
  onSubmit,
  isSticky = true,
  isModal = false,
  onSuccess,
}: QuoteRequestFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<QuoteFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );
  const [statusMessage, setStatusMessage] = useState("");

  // Check for pre-filled service type from spare parts page
  React.useEffect(() => {
    const enquiredPartName = localStorage.getItem("enquiredPartName");
    if (enquiredPartName) {
      setValue("serviceType", `Enquiry about ${enquiredPartName}`);
      // Clear the storage after using it
      localStorage.removeItem("enquiredPartName");
    }
  }, [setValue]);

  // Add a second effect that runs on every render to catch direct DOM updates
  React.useEffect(() => {
    const serviceTypeInput = document.querySelector(
      "#serviceType",
    ) as HTMLInputElement;
    if (
      serviceTypeInput &&
      serviceTypeInput.value.startsWith("Enquiry about")
    ) {
      setValue("serviceType", serviceTypeInput.value);
    }
  });

  const handleFormSubmit = async (data: QuoteFormData) => {
    if (onSubmit) {
      onSubmit(data);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f6a883af-83c0-42ac-bf31-6561607932d0",
          name: data.name,
          email: data.email,
          phone: data.phone,
          service_type: data.serviceType,
          message: data.message,
          subject: "New Quote Request from Eagle Eye Enterprise Website",
          botcheck: data.botcheck,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setStatusMessage(
          "Thank you for your request. We'll get back to you shortly!",
        );
        reset();
        if (onSuccess) {
          // Call onSuccess callback after a short delay to allow the user to see the success message
          setTimeout(() => {
            onSuccess();
          }, 2000);
        }
      } else {
        setSubmitStatus("error");
        setStatusMessage(
          result.message || "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card
      className={`bg-card border-border p-8 rounded-lg shadow-lg w-full
      ${isSticky && !isModal ? "sticky top-4" : ""}`}
    >
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            Request a Quote
          </h2>
          <p className="text-muted-foreground mt-2">
            Get a free consultation for your needs
          </p>
        </div>

        {submitStatus && (
          <div
            className={`p-4 rounded-md ${submitStatus === "success" ? "bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-400" : "bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-400"} mb-4 flex items-center gap-2`}
          >
            {submitStatus === "success" ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <p>{statusMessage}</p>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="John Doe"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(555) 123-4567"
            {...register("phone", { required: "Phone number is required" })}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="serviceType">Service Type</Label>
          <Input
            id="serviceType"
            placeholder="AC Maintenance / Industrial Washing Machine"
            {...register("serviceType", {
              required: "Service type is required",
            })}
          />
          {errors.serviceType && (
            <p className="text-sm text-red-500">{errors.serviceType.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Please describe your service needs..."
            className="min-h-[100px]"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* Honeypot field to prevent spam */}
        <div className="opacity-0 absolute left-[-9999px] top-[-9999px]">
          <input type="text" {...register("botcheck")} />
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-[#2563eb] to-[#ec4899] hover:from-[#0033e4]/90 hover:to-[#FA008A]/90 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Quote Request"}
        </Button>

        <div className="text-center text-sm text-muted-foreground mt-4">
          <span className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            We'll get back to you within 24 hours
          </span>
        </div>
      </form>
    </Card>
  );
};

export default QuoteRequestForm;
