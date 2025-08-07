// components/QuoteForm.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

// Shadcn UI Components
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CheckCircle2, AlertTriangle, RefreshCw } from "lucide-react";

interface QuoteFormProps {
  className?: string;
}

export function QuoteForm({ className = "" }: QuoteFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, handleSubmit] = useForm("xgvyjlzg");

  const [formError, setFormError] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [service, setService] = useState("");

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const generateCaptcha = () => {
    setNum1(Math.floor(Math.random() * 9) + 1);
    setNum2(Math.floor(Math.random() * 9) + 1);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);

    const formData = new FormData(e.currentTarget);
    const captchaInput = formData.get("captcha") as string;
    const honeypot = formData.get("hiddenTrap") as string;

    if (honeypot) {
      console.log("Bot detected.");
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
      setShowSuccessModal(true);
      formRef.current?.reset();
      setFirstName("");
      setService("");
      generateCaptcha();
    }
  }, [state.succeeded]);

  return (
    <>
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="bg-white/90 backdrop-blur-md text-center py-10 border-amber-400">
          <DialogHeader className="items-center justify-center space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}>
              <CheckCircle2 size={52} className="text-amber-400" />
            </motion.div>
            <DialogTitle className="text-2xl font-bold text-gray-800">
              Request Sent!
            </DialogTitle>
            <DialogDescription className="text-gray-600 !mt-2">
              {firstName
                ? `Thank you, ${firstName}! We've received your request and will get back to you shortly.`
                : "Thanks for reaching out! We'll be in touch soon."}
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => setShowSuccessModal(false)}
            className="w-full mt-6 bg-amber-400 text-gray-900 font-bold hover:bg-amber-500">
            Close
          </Button>
        </DialogContent>
      </Dialog>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={className}>
        <Card className="relative w-full max-w-lg px-5 py-10 transition-all shadow-2xl bg-gray-900/20 backdrop-blur-sm border-2 border-amber-400/30 hover:shadow-amber-400/20 hover:border-amber-400/60">
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -right-8 w-24 h-24 bg-amber-400/10 blur-md"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          />
          <CardHeader>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Get Your Free Quote
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form
              ref={formRef}
              onSubmit={handleFormSubmission}
              noValidate
              className="space-y-6">
              <input
                type="text"
                name="hiddenTrap"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-amber-50/90 block">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    required
                    autoComplete="given-name"
                    placeholder="e.g., James"
                    className="!bg-amber-500/10 placeholder:!text-white/70 !border-amber-500/20"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-amber-50/90 block">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    required
                    autoComplete="family-name"
                    placeholder="e.g., Arthur"
                    className="!bg-amber-500/10 placeholder:!text-white/70 !border-amber-500/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-amber-50/90 block">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="!bg-amber-500/10 !border-amber-500/20 text-white placeholder:!text-white/70"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-400 text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service" className="text-amber-50/90 block">
                  Service Needed
                </Label>
                <Select name="service_select" onValueChange={setService}>
                  <SelectTrigger className="!border-amber-500/20 !bg-amber-500/10 placeholder:!text-white/70">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-amber-400 border-amber-500/10">
                    <SelectItem value="cabinet-making">
                      Cabinet Making
                    </SelectItem>
                    <SelectItem value="painting">
                      Painting & Finishing
                    </SelectItem>
                    <SelectItem value="repairs">General Repairs</SelectItem>
                    <SelectItem value="other">
                      Other / Custom Project
                    </SelectItem>
                  </SelectContent>
                </Select>
                {/* --- FIX: Added hidden input to use the 'service' state --- */}
                <input type="hidden" name="service" value={service} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-amber-50/90 block">
                  Project Details *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="border-amber-500/20 bg-amber-500/10 text-white placeholder:text-white/70"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-400 text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="captcha"
                  className="text-amber-50/90 font-semibold block">
                  Spam Check: What is {num1} + {num2}? *
                </Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="captcha"
                    name="captcha"
                    type="number"
                    required
                    placeholder="Your answer"
                    className="grow !border-amber-500/20 !text-white !bg-amber-500/10 placeholder:!text-white/70"
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

              {formError && (
                <div className="flex items-center gap-2 text-red-400 text-sm p-2 bg-red-500/10 rounded-md">
                  <AlertTriangle className="h-4 w-4" />
                  <span>{formError}</span>
                </div>
              )}

              <CardFooter className="p-0 pt-4">
                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full text-gray-900 bg-amber-400 py-6 text-lg font-bold transition-all hover:bg-orange-500 hover:scale-[1.02] disabled:bg-amber-400/50">
                  {state.submitting ? "Sending..." : "Submit Request"}
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}
