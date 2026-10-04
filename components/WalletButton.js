"use client";

import { useConnector } from "@solana/connector/react";

export default function WalletButton() {
  const {
    connectors,
    connectWallet,
    disconnectWallet,
    isConnected,
    isConnecting,
    isError,
    walletError,
    account
  } = useConnector();

  if (isError) {
    return (
      <button
        className="nav-button"
        type="button"
        disabled
        title={walletError?.message || "Wallet connection error"}
      >
        Wallet Error
      </button>
    );
  }

  if (isConnected && account) {
    return (
      <button
        className="nav-button"
        type="button"
        onClick={() => disconnectWallet()}
      >
        {account.slice(0, 4)}...{account.slice(-4)}
      </button>
    );
  }

  if (isConnecting) {
    return (
      <button
        className="nav-button"
        type="button"
        disabled
      >
        Connecting...
      </button>
    );
  }

  if (!connectors || connectors.length === 0) {
    return (
      <button
        className="nav-button"
        type="button"
        disabled
      >
        No Wallets
      </button>
    );
  }

  return (
    <div className="wallet-connect-group">
      {connectors.map((connector) => (
        <button
          key={connector.id}
          className="nav-button"
          type="button"
          onClick={() => connectWallet(connector.id)}
          disabled={isConnecting || !connector.ready}
        >
          Connect {connector.name}
        </button>
      ))}
    </div>
  );
}