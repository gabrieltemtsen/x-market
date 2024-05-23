"use client";
import { ReactNode } from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider as Provider, ThemeConfig } from "@chakra-ui/react";
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const customTheme = extendTheme(
  {
    config,
    colors: {
      brand: {
        50: "#ffecdf",
        100: "#fcccb5",
        200: "#f6ab88",
        300: "#f28a5a",
        400: "#ed692c",
        500: "#d35013",
        600: "#a53d0d",
        700: "#772b09",
        800: "#491902",
        900: "#1e0600",
      },
    },
    components: {
      Alert: {
        defaultProps: {
          colorScheme: "brand",
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" }),
);
export function ChakraProvider({ children }: { children: ReactNode }) {
  return (
    <CacheProvider>
      <Provider theme={customTheme}>{children}</Provider>
    </CacheProvider>
  );
}
