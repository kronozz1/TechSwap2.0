import React, { useEffect, useState } from "react";
import { shortenAddress, useEthers, useLookupAddress } from "@usedapp/core";
import {providers} from "ethers";

import styles from "../styles";

const WalletButton = () => {
  const [rendered, setRendered] = useState("");

  const { account, activateBrowserWallet, deactivate } = useEthers();
    const { ens } = useLookupAddress(account);


  useEffect(() => {
    if (ens) {
      setRendered(ens);
    } else if (account) {
      setRendered(shortenAddress(account));
    } else {
      setRendered("");
    }
  }, [account, ens, setRendered]);

  return (
    <button
      onClick={() => {
        if (!account) {
          activateBrowserWallet();
        } else {
          deactivate();
        }
      }}
      className={styles.walletButton}
    >
      {rendered === "" && "Connect Wallet"}
      {rendered !== "" && rendered}
    </button>
  );
};

export default WalletButton;
