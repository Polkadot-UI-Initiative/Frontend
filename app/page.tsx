"use client";

import { Intro } from "@/components/intro";
import { Button } from "@nextui-org/button";
import { trimAddress } from "./_util";
import { ChangeEvent } from "react";
import { usePolkadotExtension } from "@/context/polkadot-extension-context";
import { Hello } from "@/components/hello";

export default function Home() {
  const {
    connect,
    disconnect,
    accounts,
    setSelectedAccountIndex,
    selectedAccount,
  } = usePolkadotExtension();

  const onSelectAccount = (e: ChangeEvent<HTMLSelectElement>) => {
    const accountIdx = e.target.selectedIndex;
    setSelectedAccountIndex(accountIdx);
  };

  return (
    <section
      className="relative flex flex-col items-center gap-4 py-8 md:py-10"
      style={{ minHeight: "70vh" }}
    >
      <Intro />
      <div className="flex gap-2 mt-4">
        {accounts && accounts.length ? (
          <Button variant="bordered" color="danger" onClick={disconnect}>
            disconnect
          </Button>
        ) : (
          <Button variant="bordered" color="success" onClick={connect}>
            connect
          </Button>
        )}
      </div>
      {accounts && accounts.length > 0 && (
        <select
          id="select-polkadot-account"
          className="p-3 m-3"
          onChange={onSelectAccount}
        >
          {accounts?.map((acc, idx) => (
            <option
              key={idx}
              value={idx}
              selected={acc.address === selectedAccount?.address}
            >
              {trimAddress(acc.address)} [{acc.meta.name}]
            </option>
          ))}
        </select>
      )}
      <Hello />
    </section>
  );
}
