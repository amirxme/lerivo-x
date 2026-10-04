"use client";

import { useMemo } from "react";
import { AppProvider } from "@solana/connector/react";
import {
  getDefaultConfig,
  getDefaultMobileConfig
} from "@solana/connector/headless";

export default function Providers({ children }) {
  const connectorConfig = useMemo(
    () =>
      getDefaultConfig({
        appName: "LERIVO",
        appUrl: "https://lerivo-x.vercel.app",
        network: "mainnet-beta",
        autoConnect: true,
        enableMobile: true
      }),
    []
  );

  const mobileConfig = useMemo(
    () =>
      getDefaultMobileConfig({
        appName: "LERIVO",
        appUrl: "https://lerivo-x.vercel.app"
      }),
    []
  );

  return (
    <AppProvider
      connectorConfig={connectorConfig}
      mobile={mobileConfig}
    >
      {children}
    </AppProvider>
  );
}