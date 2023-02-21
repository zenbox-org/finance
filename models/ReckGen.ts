export interface ReckGen<Wallet, Asset, Amount> {
  wallet: Wallet
  asset: Asset
  amount: Amount
}

export type ReckGenTuple<Wallet, Asset, Amount> = [Wallet, Asset, Amount]
