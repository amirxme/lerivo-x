"use client";

import {
  useConnect,
  useConnectedWallet,
  useDisconnect,
  useWallets,
  useWalletStatus
} from "@solana/kit-plugin-wallet/react";

import { useClient } from "@solana/react";

export default function WalletButton() {
  const client = useClient();

  const status = useWalletStatus(client);
  const wallets = useWallets(client);
  const connected = useConnectedWallet(client);

  const connect = useConnect(client);
  const disconnect = useDisconnect(client);

  if (status === "pending") {
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

  return (
    <button
      className="nav-button"
      type="button"
      disabled={connect.isRunning || wallets.length === 0}
      onClick={() => {
        if (wallets.length > 0) {
          connect.dispatch(wallets[0]);
        }
      }}
    >
      {wallets.length === 0 ? "No Wallet" : "Connect Wallet"}
    </button>
  );
}