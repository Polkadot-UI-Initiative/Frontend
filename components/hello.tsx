"use client";

import { trimAddress } from "@/app/_util";
import { usePolkadotExtension } from "@/context/polkadot-extension-context";

export function Hello() {
  const { selectedAccount } = usePolkadotExtension();
  return (
    <div className="py-4">
      {selectedAccount && (
        <p>
          Hello{" "}
          {selectedAccount.meta?.name ?? trimAddress(selectedAccount.address)}{" "}
          👋{" "}
        </p>
      )}
    </div>
  );
}
