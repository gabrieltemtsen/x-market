
import "./globals.css";
import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import { ChakraProvider } from "./providers/chakra-provider";
import RainbowWagmiProvider from "./providers/rainbow-wagmi-provider";
import { ReduxProvider } from "./providers/redux-provider";
const fredoka = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pontis - Bridge, Mint and Swap NFTs",
  description: "Bridge, Mint and Swap NFTs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fredoka.className}>
        
          <ReduxProvider>

          <RainbowWagmiProvider>
            <ChakraProvider>{children}</ChakraProvider>
          </RainbowWagmiProvider>
          </ReduxProvider>
        
      </body>
    </html>
  );
}
