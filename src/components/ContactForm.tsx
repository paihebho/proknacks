// components/ContactForm.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

// --- REFACTOR: Import shadcn/ui components ---
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertTriangle, RefreshCw } from "lucide-react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xgvyjlzg"); // Replace with your Formspree ID
  const formRef = useRef<HTMLFormElement>(null);

  // --- UX REFINEMENT: State for modal and inline errors ---
  const [modalOpen, setModalOpen] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Simplified CAPTCHA state
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    setNum1(Math.floor(Math.random() * 9) + 1);
    setNum2(Math.floor(Math.random() * 9) + 1);
  };

  // --- REFACTOR: Streamlined submission handler with inline error handling ---
  const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);

    const formData = new FormData(e.currentTarget);
    const honeypot = formData.get("hiddenTrap") as string;
    const captchaInput = formData.get("captcha") as string;

    if (honeypot) {
      console.log("Bot detected via honeypot.");
      return;
    }

    if (parseInt(captchaInput) !== num1 + num2) {
      setFormError("Incorrect answer to the math problem. Please try again.");
      generateCaptcha();
      return;
    }

    handleSubmit(e);
  };

  useEffect(() => {
    if (state.succeeded) {
      setModalOpen(true);
      formRef.current?.reset();
      generateCaptcha();
    }
  }, [state.succeeded]);

  return (
    <>
      {/* --- BRANDING: On-brand Success Modal --- */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-white/90 backdrop-blur-md text-center py-10 border-amber-400">
          <DialogHeader className="items-center justify-center space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}>
              <CheckCircle2 size={52} className="text-amber-400" />
            </motion.div>
            <DialogTitle className="text-2xl font-bold text-gray-800">
              Message Sent!
            </DialogTitle>
            <DialogDescription className="text-gray-600 !mt-2">
              Thank you for reaching out! We've received your message and will
              get back to you shortly.
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => setModalOpen(false)}
            className="w-full mt-6 bg-amber-400 text-gray-900 font-bold hover:bg-amber-500">
            Close
          </Button>
        </DialogContent>
      </Dialog>

      {/* --- REFACTOR: Form now uses shadcn/ui components --- */}
      <form ref={formRef} onSubmit={handleFormSubmission} className="space-y-6">
        <input
          type="text"
          name="hiddenTrap"
          className="hidden"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-white/70 block">
              First Name *
            </Label>
            <Input
              id="firstName"
              name="firstName"
              required
              placeholder="e.g., James"
              className="!bg-amber-500/10 placeholder:!text-white/70 !border-amber-500/20"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-white/70 block">
              Last Name *
            </Label>
            <Input
              id="lastName"
              name="lastName"
              required
              placeholder="e.g., Authur"
              className="!bg-amber-500/10 placeholder:!text-white/70 !border-amber-500/20"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-white/70 block">
            Email Address *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="!bg-amber-500/10 placeholder:!text-white/70 !border-amber-500/20"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-400 text-sm"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-white/70 block">
            Message *
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project or inquiry..."
            className="bg-amber-500/10 placeholder:text-white/70 border-amber-500/20"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-400 text-sm"
          />
        </div>

        <div className="space-y-2 rounded-md">
          <Label
            htmlFor="captcha"
            className="text-white/70 block font-semibold">
            Spam Check: What is {num1} + {num2}? *
          </Label>
          <div className="flex items-center gap-2">
            <Input
              id="captcha"
              name="captcha"
              type="number"
              required
              placeholder="Your answer"
              className="grow !bg-amber-500/10 placeholder:!text-white/70 !border-amber-500/20"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={generateCaptcha}
              aria-label="New problem">
              <RefreshCw className="h-4 w-4 text-amber-300" />
            </Button>
          </div>
        </div>

        {/* --- UX REFINEMENT: Inline error display --- */}
        {formError && (
          <div className="flex items-center gap-2 text-red-400 text-sm p-3 bg-red-500/10 rounded-md border border-red-500/20">
            <AlertTriangle className="h-4 w-4" />
            <span>{formError}</span>
          </div>
        )}

        <Button
          type="submit"
          disabled={state.submitting}
          size="lg"
          className="w-full text-lg">
          {state.submitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </>
  );
}
