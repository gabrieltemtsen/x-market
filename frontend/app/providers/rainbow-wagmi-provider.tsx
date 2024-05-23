"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider,lightTheme } from "@rainbow-me/rainbowkit";
import { ReactNode, useState, useEffect } from "react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  arbitrum,
  goerli,
  mainnet,
  optimism,
  polygon,
  zora,base,polygonMumbai
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    zora,base,
    ...([goerli,polygonMumbai]),
  ],
  [publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: "Pontis",
  projectId:
    process.env.NEXT_PUBLIC_PROJECT_ID || "f69945d89a7a2ba608de15c6c66c9e00",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function RainbowWagmiProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} 
       theme={lightTheme({
        ...lightTheme.accentColors.orange,
      })}>
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default RainbowWagmiProvider;
