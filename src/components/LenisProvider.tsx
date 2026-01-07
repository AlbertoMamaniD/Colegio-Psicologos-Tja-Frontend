// src/components/LenisProvider.tsx
import React from "react";
import type { ReactNode } from "react"; 
import { ReactLenis, useLenis } from "lenis/react";

interface LenisProviderProps {
  children: ReactNode;
}

export const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
  useLenis((lenis) => {
    console.log("scroll offset:", lenis.scroll);
  });

  return <ReactLenis root>{children}</ReactLenis>;
};
