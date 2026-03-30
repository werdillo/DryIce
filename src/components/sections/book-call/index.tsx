"use client";

import { useState } from "react";
import { bookCallConfig } from "./config";
import type { BookCallProps } from "./types";
import { inputClass, formButtonClass } from "@/styles/form";
import { cn } from "@/lib/utils";

export function BookCall(props: BookCallProps) {
  const settings = { ...bookCallConfig, ...props };
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (settings.onSubmit) {
      settings.onSubmit(phone);
    }
  };

  return (
    <section
      className="bg-primary w-full py-8"
      aria-labelledby="book-call-heading"
    >
      <div className="flex flex-col mx-auto max-w-7xl items-center gap-6">
        <h1
          id="book-call-heading"
          data-animate="fade-up"
          className="
            w-full text-center uppercase text-foreground
            text-3xl md:text-5xl font-black leading-snug
          "
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          {settings.heading && settings.headingHighlight
            ? settings.heading
                .split(settings.headingHighlight)
                .map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="text-primary-foreground">
                        {settings.headingHighlight}
                      </span>
                    )}
                  </span>
                ))
            : settings.heading}
        </h1>

        <form
          onSubmit={handleSubmit}
          aria-label="Book a call form"
          data-animate="fade-up"
          style={{ animationDelay: "0.15s" }}
          className="flex w-full max-w-87.5 flex-row items-stretch gap-2"
        >
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={settings.placeholder}
            required
            aria-label="Phone number"
            className={cn(inputClass, "flex-1 min-w-0")}
          />

          <button
            type="submit"
            className={cn(formButtonClass, "w-auto shrink-0")}
          >
            {settings.buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
