"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Send, 
  Mail, 
  Phone, 
  MessageSquare,
  ShieldCheck
} from "lucide-react";

const buildTypes = [
  "Website",
  "Web Application / SaaS",
  "UI/UX Design & System",
  "Backend / API Architecture",
  "AI Chatbot / Copilot",
  "Workflow Automation",
  "Existing Product Improvement",
  "Something Custom",
];

const stageOptions = [
  "Just an idea / Concept",
  "Requirements & Specs ready",
  "UI/UX Design ready for code",
  "Existing product needing overhaul",
  "Need fullstack engineering help",
  "Need workflow & API automation",
];

const budgetRanges = [
  "Under $5,000 / ₹4L",
  "$5,000 – $15,000 / ₹4L–₹12L",
  "$15,000 – $30,000 / ₹12L–₹25L",
  "$30,000+ / ₹25L+",
  "Not decided yet",
];

const timelineOptions = [
  "ASAP (Urgent launch)",
  "1 – 2 months",
  "2 – 4 months",
  "4+ months",
  "Flexible / Ongoing partnership",
];

export function MultiStepBriefForm({ initialType = "" }: { initialType?: string }) {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Form State
  const [selectedBuildTypes, setSelectedBuildTypes] = useState<string[]>(
    initialType ? [initialType] : []
  );
  const [projectName, setProjectName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [currentStage, setCurrentStage] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [timeline, setTimeline] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");

  // Honeypot spam prevention
  const [botField, setBotField] = useState("");

  // Form errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleBuildType = (type: string) => {
    setSelectedBuildTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    if (step === 1 && selectedBuildTypes.length === 0) {
      newErrors.buildTypes = "Please select at least one project category.";
    }
    if (step === 2) {
      if (!projectName.trim()) newErrors.projectName = "Please enter your project or company name.";
      if (!projectDescription.trim()) newErrors.projectDescription = "Please provide a brief description.";
    }
    if (step === 3 && !currentStage) {
      newErrors.currentStage = "Please select your current project stage.";
    }
    if (step === 4 && !budgetRange) {
      newErrors.budgetRange = "Please select a budget range.";
    }
    if (step === 5 && !timeline) {
      newErrors.timeline = "Please select an estimated timeline.";
    }
    if (step === 6) {
      if (!name.trim()) newErrors.name = "Your name is required.";
      if (!email.trim() || !email.includes("@")) newErrors.email = "A valid work email is required.";
      if (!country.trim()) newErrors.country = "Please enter your country.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => Math.min(6, prev + 1));
      window.scrollTo({ top: 200, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(1, prev - 1));
    window.scrollTo({ top: 200, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (botField) return; // Silent discard bot submission
    if (!validateStep()) return;

    setIsSubmitting(true);
    // Simulate instantaneous clean client receipt
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-[#0D1117] border border-white/10 rounded-2xl p-8 sm:p-12 text-center flex flex-col items-center gap-6 max-w-2xl mx-auto shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 flex items-center justify-center text-[#10B981]">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-mono-tech text-[#10B981] uppercase tracking-wider">
            [TRANSMISSION CONFIRMED]
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F4EF] mt-1">
            Brief Received Successfully
          </h3>
          <p className="mt-3 text-sm text-[#8D96A5] leading-relaxed">
            We will review what you are building and reply directly using the contact details you provided ({email}).
          </p>
        </div>

        {/* Direct Contact Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
          <a
            href={siteConfig.contact.emailLink}
            className="p-4 rounded-xl bg-[#070A0E] border border-white/10 hover:border-[#2563EB]/40 flex items-center gap-3 text-left transition-colors"
          >
            <Mail className="w-4 h-4 text-[#2B7FFF] shrink-0" />
            <div className="overflow-hidden">
              <span className="text-[10px] font-mono-tech text-[#8D96A5] block uppercase">Direct Email</span>
              <span className="text-xs text-[#F5F4EF] font-mono-tech truncate block">{siteConfig.contact.email}</span>
            </div>
          </a>

          <a
            href={siteConfig.contact.phoneLink}
            className="p-4 rounded-xl bg-[#070A0E] border border-white/10 hover:border-[#2563EB]/40 flex items-center gap-3 text-left transition-colors"
          >
            <Phone className="w-4 h-4 text-[#2B7FFF] shrink-0" />
            <div>
              <span className="text-[10px] font-mono-tech text-[#8D96A5] block uppercase">Call Direct</span>
              <span className="text-xs text-[#F5F4EF] font-mono-tech block">{siteConfig.contact.phoneDisplay}</span>
            </div>
          </a>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setStep(1);
          }}
          className="text-xs font-mono-tech text-[#8D96A5] hover:text-[#2B7FFF] underline underline-offset-4"
        >
          Submit another project brief
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#0D1117] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Honeypot hidden input */}
      <input
        type="text"
        name="website_honeypot_field"
        value={botField}
        onChange={(e) => setBotField(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Progress Bar & Step Indicator */}
      <div className="mb-8 pb-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded bg-[#2563EB]/15 border border-[#2563EB]/40 text-xs font-mono-tech font-bold text-[#2B7FFF]">
            STEP {String(step).padStart(2, "0")} / 06
          </span>
          <span className="text-xs font-mono-tech text-[#8D96A5]">
            {step === 1 && "Category Selection"}
            {step === 2 && "Project Overview"}
            {step === 3 && "Current Stage"}
            {step === 4 && "Budget Range"}
            {step === 5 && "Estimated Timeline"}
            {step === 6 && "Contact Information"}
          </span>
        </div>

        {/* Visual Progress Track */}
        <div className="w-full sm:w-48 h-2 bg-[#131923] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#2563EB] to-[#2B7FFF] transition-all duration-300"
            style={{ width: `${(step / 6) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* STEP 1: What can we help you build? */}
        {step === 1 && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-200">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F4EF]">
                What can we help you build?
              </h3>
              <p className="text-xs sm:text-sm text-[#8D96A5] mt-1">
                Select one or multiple disciplines that apply to your requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {buildTypes.map((type) => {
                const isSelected = selectedBuildTypes.includes(type);
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => toggleBuildType(type)}
                    className={`p-4 rounded-xl text-left transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "bg-[#2563EB] text-white border border-[#3B82F6]/60 shadow-md shadow-[#2563EB]/25"
                        : "bg-[#070A0E] text-[#8D96A5] hover:text-[#F5F4EF] hover:bg-[#131923] border border-white/10"
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-semibold">{type}</span>
                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center text-xs ${
                        isSelected
                          ? "border-white bg-white/20 text-white"
                          : "border-white/20 text-transparent"
                      }`}
                    >
                      ✓
                    </div>
                  </button>
                );
              })}
            </div>
            {errors.buildTypes && (
              <p className="text-xs text-[#EF4444] font-mono-tech">{errors.buildTypes}</p>
            )}
          </div>
        )}

        {/* STEP 2: Tell us about the project */}
        {step === 2 && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-200">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F4EF]">
                Tell us about the project
              </h3>
              <p className="text-xs sm:text-sm text-[#8D96A5] mt-1">
                Help us understand what your company or product aims to accomplish.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-mono-tech uppercase text-[#8D96A5] mb-2">
                  Project or Company Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Acme Corp or Project Horizon"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full px-4 py-3 bg-[#070A0E] border border-white/10 rounded-lg text-sm text-[#F5F4EF] placeholder-[#8D96A5]/50 focus:border-[#2B7FFF] focus:outline-none"
                />
                {errors.projectName && (
                  <p className="text-xs text-[#EF4444] font-mono-tech mt-1">{errors.projectName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono-tech uppercase text-[#8D96A5] mb-2">
                  Existing Website URL (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://example.com"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className="w-full px-4 py-3 bg-[#070A0E] border border-white/10 rounded-lg text-sm text-[#F5F4EF] placeholder-[#8D96A5]/50 focus:border-[#2B7FFF] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-tech uppercase text-[#8D96A5] mb-2">
                  Project Brief & Core Problems to Solve *
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your requirements, core features, technical goals, and target users..."
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  className="w-full px-4 py-3 bg-[#070A0E] border border-white/10 rounded-lg text-sm text-[#F5F4EF] placeholder-[#8D96A5]/50 focus:border-[#2B7FFF] focus:outline-none"
                />
                {errors.projectDescription && (
                  <p className="text-xs text-[#EF4444] font-mono-tech mt-1">{errors.projectDescription}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Where are you currently? */}
        {step === 3 && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-200">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F4EF]">
                Where are you currently?
              </h3>
              <p className="text-xs sm:text-sm text-[#8D96A5] mt-1">
                Select the option that best reflects the project status today.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {stageOptions.map((stage) => {
                const isSelected = currentStage === stage;
                return (
                  <button
                    key={stage}
                    type="button"
                    onClick={() => setCurrentStage(stage)}
                    className={`p-4 rounded-xl text-left transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "bg-[#2563EB] text-white border border-[#3B82F6]/60 shadow-md shadow-[#2563EB]/25"
                        : "bg-[#070A0E] text-[#8D96A5] hover:text-[#F5F4EF] hover:bg-[#131923] border border-white/10"
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-semibold">{stage}</span>
                    <span className={`text-xs font-mono-tech ${isSelected ? "text-white" : "text-[#8D96A5]"}`}>
                      {isSelected ? "● ACTIVE" : "○"}
                    </span>
                  </button>
                );
              })}
            </div>
            {errors.currentStage && (
              <p className="text-xs text-[#EF4444] font-mono-tech">{errors.currentStage}</p>
            )}
          </div>
        )}

        {/* STEP 4: Budget Range */}
        {step === 4 && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-200">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F4EF]">
                Budget range
              </h3>
              <p className="text-xs sm:text-sm text-[#8D96A5] mt-1">
                This helps us calibrate the appropriate architectural depth and milestone structure.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {budgetRanges.map((range) => {
                const isSelected = budgetRange === range;
                return (
                  <button
                    key={range}
                    type="button"
                    onClick={() => setBudgetRange(range)}
                    className={`p-4 rounded-xl text-left transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "bg-[#2563EB] text-white border border-[#3B82F6]/60 shadow-md shadow-[#2563EB]/25"
                        : "bg-[#070A0E] text-[#8D96A5] hover:text-[#F5F4EF] hover:bg-[#131923] border border-white/10"
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-semibold">{range}</span>
                    <span className={`text-xs font-mono-tech ${isSelected ? "text-white" : "text-[#8D96A5]"}`}>
                      {isSelected ? "● SELECTED" : "○"}
                    </span>
                  </button>
                );
              })}
            </div>
            {errors.budgetRange && (
              <p className="text-xs text-[#EF4444] font-mono-tech">{errors.budgetRange}</p>
            )}
          </div>
        )}

        {/* STEP 5: Estimated Timeline */}
        {step === 5 && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-200">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F4EF]">
                Estimated timeline
              </h3>
              <p className="text-xs sm:text-sm text-[#8D96A5] mt-1">
                When would you ideally like this product or system to launch?
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {timelineOptions.map((time) => {
                const isSelected = timeline === time;
                return (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setTimeline(time)}
                    className={`p-4 rounded-xl text-left transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "bg-[#2563EB] text-white border border-[#3B82F6]/60 shadow-md shadow-[#2563EB]/25"
                        : "bg-[#070A0E] text-[#8D96A5] hover:text-[#F5F4EF] hover:bg-[#131923] border border-white/10"
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-semibold">{time}</span>
                    <span className={`text-xs font-mono-tech ${isSelected ? "text-white" : "text-[#8D96A5]"}`}>
                      {isSelected ? "● SELECTED" : "○"}
                    </span>
                  </button>
                );
              })}
            </div>
            {errors.timeline && (
              <p className="text-xs text-[#EF4444] font-mono-tech">{errors.timeline}</p>
            )}
          </div>
        )}

        {/* STEP 6: Contact Details */}
        {step === 6 && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-200">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F4EF]">
                Your Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-[#8D96A5] mt-1">
                We will send our review and scoping proposal directly to this address.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-tech uppercase text-[#8D96A5] mb-2">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alex Morgan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-[#070A0E] border border-white/10 rounded-lg text-sm text-[#F5F4EF] placeholder-[#8D96A5]/50 focus:border-[#2B7FFF] focus:outline-none"
                />
                {errors.name && (
                  <p className="text-xs text-[#EF4444] font-mono-tech mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono-tech uppercase text-[#8D96A5] mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-[#070A0E] border border-white/10 rounded-lg text-sm text-[#F5F4EF] placeholder-[#8D96A5]/50 focus:border-[#2B7FFF] focus:outline-none"
                />
                {errors.email && (
                  <p className="text-xs text-[#EF4444] font-mono-tech mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono-tech uppercase text-[#8D96A5] mb-2">
                  Phone / WhatsApp (Optional)
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-[#070A0E] border border-white/10 rounded-lg text-sm text-[#F5F4EF] placeholder-[#8D96A5]/50 focus:border-[#2B7FFF] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-tech uppercase text-[#8D96A5] mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-3 bg-[#070A0E] border border-white/10 rounded-lg text-sm text-[#F5F4EF] placeholder-[#8D96A5]/50 focus:border-[#2B7FFF] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-mono-tech uppercase text-[#8D96A5] mb-2">
                  Country / Region *
                </label>
                <input
                  type="text"
                  placeholder="e.g. India, United States, United Kingdom, Singapore..."
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-4 py-3 bg-[#070A0E] border border-white/10 rounded-lg text-sm text-[#F5F4EF] placeholder-[#8D96A5]/50 focus:border-[#2B7FFF] focus:outline-none"
                />
                {errors.country && (
                  <p className="text-xs text-[#EF4444] font-mono-tech mt-1">{errors.country}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
          {step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-5 py-3 rounded-lg bg-[#131923] hover:bg-[#1C2432] text-[#8D96A5] hover:text-[#F5F4EF] text-xs font-mono-tech uppercase tracking-wider flex items-center gap-2 border border-white/10 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
          ) : (
            <div />
          )}

          {step < 6 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-mono-tech uppercase font-semibold tracking-wider rounded-lg flex items-center gap-2 transition-all shadow-[0_4px_15px_rgba(37,99,235,0.4)] cursor-pointer"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-7 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-mono-tech uppercase font-semibold tracking-wider rounded-lg flex items-center gap-2 transition-all shadow-[0_4px_20px_rgba(37,99,235,0.5)] cursor-pointer disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? "Transmitting..." : "Send Project Brief"}</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
