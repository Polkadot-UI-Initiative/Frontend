"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { PolkadotExtensionContextProvider } from "@/context/polkadot-extension-context";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <NextUIProvider>
      <PolkadotExtensionContextProvider>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </PolkadotExtensionContextProvider>
    </NextUIProvider>
  );
}
