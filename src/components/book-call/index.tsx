"use client";

import { useState } from "react";
import { bookCallConfig } from "./config";
import type { BookCallProps } from "./types";

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
      className="bg-primary w-full py-6 px-6 md:px-26"
      aria-labelledby="book-call-heading"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Heading — Orbitron 900 48px uppercase centered */}
        <h1
          id="book-call-heading"
          className="
            w-full text-center uppercase text-primary-foreground
            text-3xl md:text-5xl font-black leading-snug
          "
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          {settings.heading}
        </h1>

        {/* Input + Button — row, w-[350px], gap-2 */}
        <form
          onSubmit={handleSubmit}
          aria-label="Book a call form"
          className="flex w-full max-w-87.5 flex-row items-stretch gap-2"
        >
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={settings.placeholder}
            required
            aria-label="Phone number"
            className="
              min-w-0 flex-1
              rounded border border-primary-foreground bg-transparent
              px-3 py-1
              text-sm font-semibold text-primary-foreground
              placeholder:text-primary-foreground/60
              shadow-xs outline-none
              transition-shadow duration-150
              focus:shadow-[0_0_0_2px_rgba(21,21,21,0.3)]
            "
          />

          <button
            type="submit"
            className="
              shrink-0 rounded
              border border-primary-foreground
              bg-primary-foreground
              px-5 py-3
              text-sm font-semibold text-foreground
              transition-opacity duration-150
              hover:opacity-85 active:opacity-70
              cursor-pointer whitespace-nowrap
            "
          >
            {settings.buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
