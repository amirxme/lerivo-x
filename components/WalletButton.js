"use client";

import {
  useConnect,
  useDisconnect,
  useWallets,
  useWalletStatus
} from "@solana/kit-plugin-wallet/react";

import { useClient } from "@solana/react";

export default function WalletButton() {
  const client = useClient();

  const wallets = useWallets(client);
  const status = useWalletStatus(client);
  const { connect } = useConnect(client);
  const { disconnect } = useDisconnect(client);

  const connected = status === "connected";

  if (connected) {
    return (
      <button
        className="nav-button"
        type="button"
        onClick={() => disconnect()}
      >
        Disconnect
      </button>
    );
  }

  return (
    <button
      className="nav-button"
      type="button"
      onClick={() => {
        if (wallets.length > 0) {
          connect(wallets[0]);
        }
      }}
    >
      Connect Wallet
    </button>
  );
}