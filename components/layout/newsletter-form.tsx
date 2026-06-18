"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubscribed(true);
    setEmail("");
  };

  if (subscribed) {
    return <p className="text-sm font-medium text-[var(--color-accent)]">You&apos;re subscribed.</p>;
  }

  return (
    <form onSubmit={handleSubscribe} className="flex w-full min-w-0 gap-2 sm:w-auto sm:min-w-[300px]">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-2 text-sm text-[var(--color-foreground)] outline-none transition-colors placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-accent)]/50"
      />
      <button
        type="submit"
        className="flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-accent-foreground)] transition-colors hover:bg-[var(--color-accent)]/85"
      >
        <Send className="h-3.5 w-3.5" />
        Subscribe
      </button>
    </form>
  );
}
