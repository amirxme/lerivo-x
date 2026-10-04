"use client";

import {
  useConnect,
  useConnectedWallet,
  useDisconnect,
  useWallets,
  useWalletStatus,
  useIsWalletReady
} from "@solana/kit-plugin-wallet/react";

import { useClient } from "@solana/react";

export default function WalletButton() {
  const client = useClient();

  const status = useWalletStatus(client);
  const wallets = useWallets(client);
  const connected = useConnectedWallet(client);
  const isReady = useIsWalletReady(client);

  const connect = useConnect(client);
  const disconnect = useDisconnect(client);

  if (!isReady || status === "pending" || status === "reconnecting") {
    return (
      <button className="nav-button" type="button" disabled>
        Loading...
      </button>
    );
  }

  if (connected) {
    const address = connected.account.address;

    return (
      <button
        className="nav-button"
        type="button"
        onClick={() => disconnect.dispatch()}
      >
        {address.slice(0, 4)}...{address.slice(-4)}
      </button>
    );
  }

  if (wallets.length === 0) {
    return (
      <button className="nav-button" type="button" disabled>
        No Wallet
      </button>
    );
  }

  return (
    <button
      className="nav-button"
      type="button"
      disabled={connect.isRunning}
      onClick={() => {
        connect.dispatch(wallets[0]);
      }}
    >
      {connect.isRunning ? "Connecting..." : "Connect Wallet"}
    </button>
  );
}