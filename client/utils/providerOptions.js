import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

export const providerOptions = {
  walletlink: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Ink",
      infuraId: process.env.INFURA_KEY
    }
  },
  walletconnect: {
    package: WalletConnect,
    options: {
      infuraId: process.env.INFURA_KEY,
      rpc: {
        137: "https://rpc-mainnet.maticvigil.com/",
      }
    }
  }
};
