"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import NewsletterSubscribe from "./NewsletterSubscribe";

const STORAGE_KEY = "internoun:newsletter-modal-dismissed";
const DISMISS_MS = 30 * 24 * 60 * 60 * 1000;

function recentlyDismissed(): boolean {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    return Date.now() - Number(raw) < DISMISS_MS;
  } catch {
    return true;
  }
}

const NewsletterModal = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  const onWriting = pathname === "/writing" || pathname.startsWith("/writing/");

  // The dialog is inert until showModal(), so it stays out of the way during
  // SSR/hydration and localStorage is only ever touched on the client. Keyed
  // on onWriting so arriving via client-side nav still opens it.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (onWriting && dialog && !dialog.open && !recentlyDismissed()) {
      dialog.showModal();
    }
  }, [onWriting]);

  // Fires for every close path — button, Esc, backdrop — so the dismissal is
  // recorded once regardless of how the reader got out.
  const handleClose = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      // Private browsing: the modal just reappears next visit.
    }
  };

  if (!onWriting) return null;

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) dialogRef.current?.close();
      }}
      aria-labelledby="newsletter-modal-title"
      className="backdrop:bg-charcoal/60 backdrop:backdrop-blur-sm bg-transparent p-0 m-auto max-w-[min(28rem,calc(100vw-2rem))] w-full overflow-visible"
    >
      <div className="relative bg-cream dark:bg-zinc-900 text-charcoal dark:text-cream border-4 border-charcoal rounded-3xl shadow-nouns p-8 sm:p-10 text-center">
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Close"
          className="absolute top-4 right-4 p-2 rounded-xl hover:bg-charcoal/10 dark:hover:bg-cream/10 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="font-heading text-5xl text-nouns-red mb-4 select-none">
          ⌐◨-◨
        </div>

        <h2
          id="newsletter-modal-title"
          className="font-heading text-4xl mb-4 leading-tight"
        >
          internoun.wtf
        </h2>

        <p className="font-mono text-sm leading-relaxed text-charcoal/70 dark:text-cream/70 mb-8">
          Essays on DAOs, governance, and coordination — for builders who&apos;d
          rather read the primary source.
        </p>

        <div className="flex justify-center mb-6">
          <NewsletterSubscribe onSuccess={() => dialogRef.current?.close()} />
        </div>

        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          className="font-mono text-xs font-bold uppercase tracking-widest text-charcoal/50 dark:text-cream/50 hover:text-nouns-red transition-colors"
        >
          No thanks →
        </button>
      </div>
    </dialog>
  );
};

export default NewsletterModal;
