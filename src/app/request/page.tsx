// app/request/page.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { generateMetadata } from "@/lib/metadata";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import React from "react";

// --- shadcn/ui components ---
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";

// Define Form Data Structure
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  serviceType: string;
  projectDescription: string;
  budget: string;
  timeline: string;
  hearAbout: string;
  consent: boolean;
};

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  serviceType: "",
  projectDescription: "",
  budget: "",
  timeline: "",
  hearAbout: "",
  consent: false,
};

// Main Page Component
export default function RequestPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);

  const [state, handleSubmit] = useForm("xgvyjlzg");
  const formRef = useRef<HTMLFormElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => generateCaptcha(), []);

  const generateCaptcha = () => {
    setNum1(Math.floor(Math.random() * 9) + 1);
    setNum2(Math.floor(Math.random() * 9) + 1);
  };

  const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);

    const formElData = new FormData(e.currentTarget);
    const honeypot = formElData.get("hiddenTrap") as string;
    const captchaInput = formElData.get("captcha") as string;

    if (honeypot) return;
    if (parseInt(captchaInput) !== num1 + num2) {
      setFormError("Incorrect answer to the math problem. Please try again.");
      generateCaptcha();
      return;
    }
    handleSubmit(formData);
  };

  useEffect(() => {
    if (state.succeeded) {
      setModalOpen(true);
      formRef.current?.reset();
      setFormData(initialFormData);
      setCurrentStep(0);
      generateCaptcha();
    }
  }, [state.succeeded]);

  const handleNext = () => {
    setDirection(1);
    if (currentStep < steps.length - 1) {
      setCurrentStep((step) => step + 1);
    }
  };

  const handlePrev = () => {
    setDirection(-1);
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  };

  const steps = [
    {
      step: 1,
      title: "Personal Info",
      component: <Step1 formData={formData} setFormData={setFormData} />,
    },
    {
      step: 2,
      title: "Project Details",
      component: <Step2 formData={formData} setFormData={setFormData} />,
    },
    {
      step: 3,
      title: "Final Steps",
      component: (
        <Step3
          formData={formData}
          setFormData={setFormData}
          generateCaptcha={generateCaptcha}
          num1={num1}
          num2={num2}
        />
      ),
    },
  ];

  return (
    <>
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
              Quote Request Sent!
            </DialogTitle>
            <DialogDescription className="text-gray-600 !mt-2">
              Thank you! We've received your request and will contact you within
              24 hours.
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => setModalOpen(false)}
            className="w-full mt-6 bg-amber-400 text-gray-900 font-bold hover:bg-amber-500">
            Close
          </Button>
        </DialogContent>
      </Dialog>

      <main className="bg-gray-950 text-amber-50/80">
        <section className="relative text-center py-24 lg:py-32 bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-gray-950 opacity-30 [mask-image:conic-gradient(from_90deg_at_50%_50%,#000000_0deg,#ffffff_90deg,#000000_180deg,#ffffff_270deg,#000000_360deg)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Request Your Free Quote
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-4 text-lg md:text-xl text-amber-50/70 max-w-3xl mx-auto">
              Follow the steps below to tell us about your project.
            </motion.p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gray-900/30 backdrop-blur-sm border border-amber-400/20 p-8 lg:p-12">
            <Stepper
              value={currentStep + 1}
              className="flex w-full items-center justify-between mb-12">
              {steps.map(({ step, title }) => (
                <StepperItem
                  key={step}
                  step={step}
                  className="relative flex flex-col items-center">
                  <StepperTrigger
                    className="flex flex-col md:flex-row items-center gap-2 text-sm text-center"
                    onClick={() => setCurrentStep(step - 1)}>
                    <StepperIndicator
                      className="
                      w-8 h-8 font-bold transition-colors duration-300
                      data-[state=inactive]:bg-transparent data-[state=inactive]:border-2 data-[state=inactive]:border-amber-400/30 data-[state=inactive]:text-amber-400/30
                      data-[state=active]:bg-amber-400 data-[state=active]:text-gray-900
                      data-[state=completed]:bg-amber-400/80 data-[state=completed]:text-gray-900
                    "
                    />
                    {/* --- FINAL POLISH: Styled the title text --- */}
                    <StepperTitle
                      className="
                      transition-colors duration-300
                      data-[state=inactive]:text-amber-50/50
                      data-[state=active]:text-amber-400
                      data-[state=completed]:text-amber-400
                    ">
                      {title}
                    </StepperTitle>
                  </StepperTrigger>
                </StepperItem>
              ))}
            </Stepper>

            <form
              ref={formRef}
              onSubmit={handleFormSubmission}
              className="overflow-hidden relative min-h-[450px]">
              <input
                type="text"
                name="hiddenTrap"
                className="hidden"
                aria-hidden="true"
              />
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentStep}
                  custom={direction}
                  variants={{
                    enter: (direction: number) => ({
                      x: direction > 0 ? "100%" : "-100%",
                      opacity: 0,
                    }),
                    center: { x: 0, opacity: 1 },
                    exit: (direction: number) => ({
                      x: direction < 0 ? "100%" : "-100%",
                      opacity: 0,
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="space-y-8">
                  {steps[currentStep].component}
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center pt-8 border-t border-amber-400/10">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className="disabled:opacity-50">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                {currentStep < steps.length - 1 && (
                  <Button type="button" onClick={handleNext}>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
                {currentStep === steps.length - 1 && (
                  <Button
                    type="submit"
                    disabled={state.submitting}
                    size="lg"
                    className="text-lg">
                    {state.submitting
                      ? "Submitting..."
                      : "Submit Quote Request"}
                  </Button>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </main>
    </>
  );
}

// Individual Step Components
const Step1 = ({
  formData,
  setFormData,
}: {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}) => (
  <fieldset className="space-y-6">
    <legend className="text-2xl font-bold text-white mb-4">
      Personal Information
    </legend>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="space-y-4">
        <Label
          id="firstName"
          htmlFor="firstName"
          className="text-white/70 block">
          First Name *
        </Label>
        <Input
          id="firstName"
          name="firstName"
          required
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          placeholder="e.g., Jane"
          className="!border-amber-500/20 !bg-amber-500/10 text-white placeholder:!text-white/70"
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
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          placeholder="e.g., Smith"
          className="!border-amber-500/20 !bg-amber-500/10 text-white placeholder:!text-white/70"
        />
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label className="text-white/70 block" htmlFor="email">
          Email Address *
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="you@example.com"
          className="!border-amber-500/20 !bg-amber-500/10 text-white placeholder:!text-white/70"
        />
      </div>
      <div className="space-y-2">
        <Label className="text-white/70 block" htmlFor="phone">
          Phone Number *
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="(317) 555-1234"
          className="!border-amber-500/20 !bg-amber-500/10 text-white placeholder:!text-white/70"
        />
      </div>
    </div>
    {/* --- FIX: Replaced undefined 'id' with the correct string "address" --- */}
    <div className="space-y-2">
      <Label className="text-white/70 block" htmlFor="address">
        Property Address *
      </Label>
      <Textarea
        id="address"
        name="address"
        required
        placeholder="123 Main St, Indianapolis, IN"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        className="border-amber-500/20 bg-amber-500/10 text-white placeholder:text-white/70"
      />
    </div>
  </fieldset>
);

const Step2 = ({
  formData,
  setFormData,
}: {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}) => (
  <fieldset className="space-y-6">
    <legend className="text-2xl font-bold text-white mb-4">
      Project Details
    </legend>
    <div className="space-y-2">
      <Label className="text-white/70 block" htmlFor="serviceType">
        Primary Service Needed *
      </Label>
      <Select
        name="serviceType"
        required
        value={formData.serviceType}
        onValueChange={(value) =>
          setFormData({ ...formData, serviceType: value })
        }>
        <SelectTrigger className="border-amber-500/20 bg-amber-500/10 text-white placeholder:text-white/70">
          <SelectValue placeholder="Select a service" />
        </SelectTrigger>
        <SelectContent>
          {SERVICES.map((s) => (
            <SelectItem key={s.id} value={s.id}>
              {s.title}
            </SelectItem>
          ))}
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label className="text-white/70 block" htmlFor="projectDescription">
        Project Description *
      </Label>
      <Textarea
        id="projectDescription"
        name="projectDescription"
        rows={5}
        required
        placeholder="Please provide detailed information..."
        value={formData.projectDescription}
        onChange={(e) =>
          setFormData({ ...formData, projectDescription: e.target.value })
        }
        className="border-amber-500/20 bg-amber-500/10 text-white placeholder:text-white/70"
      />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label className="text-white/70 block" htmlFor="budget">
          Estimated Budget (USD)
        </Label>
        <Select
          name="budget"
          value={formData.budget}
          onValueChange={(value) =>
            setFormData({ ...formData, budget: value })
          }>
          <SelectTrigger className="border-amber-500/20 bg-amber-500/10 text-white placeholder:text-white/70">
            <SelectValue placeholder="Select budget range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="<5k">Under $5,000</SelectItem>
            <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
            <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
            <SelectItem value=">30k">Over $30,000</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label className="text-white/70 block" htmlFor="timeline">
          Preferred Timeline
        </Label>
        <Select
          name="timeline"
          value={formData.timeline}
          onValueChange={(value) =>
            setFormData({ ...formData, timeline: value })
          }>
          <SelectTrigger className="border-amber-500/20 bg-amber-500/10 text-white placeholder:text-white/70">
            <SelectValue placeholder="Select timeline" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asap">As soon as possible</SelectItem>
            <SelectItem value="1-month">Within 1 month</SelectItem>
            <SelectItem value="2-3-months">2-3 months</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  </fieldset>
);

const Step3 = ({
  formData,
  setFormData,
  generateCaptcha,
  num1,
  num2,
}: {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  generateCaptcha: () => void;
  num1: number;
  num2: number;
}) => (
  <fieldset className="space-y-6">
    <legend className="text-2xl font-bold text-white mb-4">Final Steps</legend>
    <div className="space-y-3">
      <Label className="text-white/70 block" htmlFor="hearAbout">
        How did you hear about us?
      </Label>
      <RadioGroup
        name="hearAbout"
        value={formData.hearAbout}
        onValueChange={(value) =>
          setFormData({ ...formData, hearAbout: value })
        }
        className="[--primary:var(--color-amber-400)] [--border:var(--color-amber-400)] [--ring:var(--color-amber-300)] in-[.dark]:[--primary:var(--color-amber-400)] in-[.dark]:[--ring:var(--color-amber-900)] flex flex-wrap gap-x-6 gap-y-2">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            className="border-amber-400"
            value="google"
            id="google"
          />
          <Label className="text-white" htmlFor="google">
            Google
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            className="border-amber-400"
            value="social"
            id="social"
          />
          <Label className="text-white" htmlFor="social">
            Social Media
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            className="border-amber-400"
            value="referral"
            id="referral"
          />
          <Label className="text-white" htmlFor="referral">
            Referral
          </Label>
        </div>
      </RadioGroup>
    </div>
    <div className="flex items-start space-x-3 pt-4">
      <Checkbox
        id="consent"
        name="consent"
        required
        checked={formData.consent}
        className="border-amber-400"
        onCheckedChange={(checked) =>
          setFormData({ ...formData, consent: checked as boolean })
        }
        style={
          {
            "--primary": "var(--color-amber-400)",
          } as React.CSSProperties
        }
      />
      <div className="grid gap-1.5 leading-none">
        <Label className="text-white/70 block" htmlFor="consent">
          I consent to be contacted by {SITE_CONFIG.name} regarding my inquiry.*
        </Label>
        <p className="text-sm text-amber-50/50">
          Your consultation is free with no obligation.
        </p>
      </div>
    </div>
    <div className="space-y-4">
      <Label htmlFor="captcha" className="text-white/70 block">
        Spam Check: What is {num1} + {num2}? *
      </Label>
      <div className="flex items-center gap-2">
        <Input
          id="captcha"
          name="captcha"
          type="number"
          required
          className="grow !border-amber-500/20 !bg-amber-500/10 text-white placeholder:!text-white/70"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={generateCaptcha}>
          <RefreshCw className="h-4 w-4 text-amber-300" />
        </Button>
      </div>
    </div>
  </fieldset>
);
