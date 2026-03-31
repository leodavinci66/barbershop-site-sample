"use client";

import { TranslationProvider } from "@/context/TranslationContext";
import { ThemeProvider } from "@/context/ThemeContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <TranslationProvider>{children}</TranslationProvider>
    </ThemeProvider>
  );
}
