"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p className="font-mono text-sm font-bold text-nouns-green">
        You&apos;re subscribed. ⌐◨-◨
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 w-full max-w-sm"
    >
      <div className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          aria-label="Email address"
          // Some browsers inject their own inline style (e.g. caret-color)
          // onto email/password inputs before hydration, which otherwise
          // trips a harmless hydration-mismatch warning.
          suppressHydrationWarning
          className="flex-1 min-w-0 px-4 py-3 font-mono text-sm bg-white dark:bg-zinc-900 border-2 border-charcoal/20 dark:border-cream/20 rounded-xl focus:outline-none focus:border-charcoal dark:focus:border-cream transition-all"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-5 py-3 font-mono text-xs font-bold uppercase tracking-wide bg-charcoal text-cream dark:bg-cream dark:text-charcoal rounded-xl border-2 border-charcoal dark:border-cream shadow-nouns-sm active:translate-y-1 active:shadow-none transition-all disabled:opacity-50"
        >
          {status === "loading" ? "..." : "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p className="font-mono text-xs text-nouns-red">{errorMessage}</p>
      )}
    </form>
  );
};

export default NewsletterSubscribe;
