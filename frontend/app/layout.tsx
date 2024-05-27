
import "./globals.css";
import type { Metadata } from "next";
import { Fredoka, Space_Grotesk } from "next/font/google";
import { ChakraProvider } from "./providers/chakra-provider";
import RainbowWagmiProvider from "./providers/rainbow-wagmi-provider";
import { ReduxProvider } from "./providers/redux-provider";
const fredoka = Fredoka({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "X-market - Bridge, Mint and Swap NFTs",
  description: "Bridge, Mint and Swap NFTs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        
          <ReduxProvider>

          <RainbowWagmiProvider>
            <ChakraProvider>{children}</ChakraProvider>
          </RainbowWagmiProvider>
          </ReduxProvider>
        
      </body>
    </html>
  );
}
