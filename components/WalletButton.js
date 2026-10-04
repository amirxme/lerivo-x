"use client";

import { useConnector } from "@solana/connector/react";

export default function WalletButton() {
  const {
    connectors,
    connectWallet,
    disconnectWallet,
    isConnected,
    isConnecting,
    account
  } = useConnector();

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
      <button className="nav-button" type="button" disabled>
        Connecting...
      </button>
    );
  }

  const readyConnectors = connectors.filter(
    (connector) => connector.ready
  );

  if (readyConnectors.length === 0) {
    return (
      <button className="nav-button" type="button" disabled>
        No Wallet
      </button>
    );
  }

  return (
    <div className="wallet-connect-group">
      {readyConnectors.map((connector) => (
        <button
          key={connector.id}
          className="nav-button"
          type="button"
          onClick={() => connectWallet(connector.id)}
        >
          Connect {connector.name}
        </button>
      ))}
    </div>
  );
}