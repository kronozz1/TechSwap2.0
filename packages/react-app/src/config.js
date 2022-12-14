import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x59b0d2af55d44340eDAD2e5037D8e78ea145b2aC";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/cpmx1xZ6G0Cjw7xI_veaeZPKD4PRWy6y",
  },
};
