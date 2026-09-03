// Plain shared module (no "use client") — a Server Component can only read
// a value export from a Client Component module if it lives in a module
// like this one instead. Importing TABS directly from a "use client" file
// resolves to undefined server-side, since RSC only preserves component/JSX
// references across that boundary, not arbitrary values.
export const TABS = {
  BOOKS: "BOOKS",
  PODCASTS: "PODCASTS",
  ESSAYS: "ESSAYS",
} as const;

export type Tab = (typeof TABS)[keyof typeof TABS];
