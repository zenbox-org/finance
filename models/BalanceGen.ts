export interface BalanceGen<Wallet, Asset, Amount> {
  wallet: Wallet
  asset: Asset
  amount: Amount
}

export type BalanceGenTuple<Wallet, Asset, Amount> = [Wallet, Asset, Amount]
