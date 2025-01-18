import type { BigNumberish, Providers, Wallet } from "ethers";

export type TestProvider = providers.BaseProvider & {
  getWallets(): Wallet[];
  getL1Fee?(txHash: string): Promise<BigNumberish>;
};
