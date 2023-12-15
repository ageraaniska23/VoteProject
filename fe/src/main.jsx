import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../polyfills.js'
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, bscTestnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';


const { chains, publicClient } = configureChains(
  [mainnet, polygon, bscTestnet ,{
    id: 97,
    name: 'Binance Smart Chain Testnet',
    network: 'bsc-testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'BNB',
      symbol: 'tBNB',
    },
    rpcUrls: {
      default: { http: ['https://bsc-testnet.publicnode.com'] },
      public: { http: ['https://bsc-testnet.publicnode.com'] },
    },
    blockExplorers: {
      etherscan: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
      default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
    },
    contracts: {
      multicall3: {
        address: 'ce6c5fd275e88f43717a1915977715deeb40047188b20700a0d59adbf90a5769',
        blockCreated: 17422483,
      },
    },
    testnet: true,
  }],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit demo',
  projectId: 'YOUR_PROJECT_ID',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider modalSize="compact" chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
)
