"use client";

import { ClientProvider } from "@solana/react";
import { solanaClient } from "../lib/solana";

export default function Providers({ children }) {
  return (
    <ClientProvider client={solanaClient}>
      {children}
    </ClientProvider>
  );
}