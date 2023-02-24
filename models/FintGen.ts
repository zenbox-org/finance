/**
 * "Fint" is a non-existent word
 * There is no suitable name for a structure of { wallet, asset, amount } ("Balance" is already used for { wallet, amount })
 */

export interface FintGen<Wallet, Asset, Amount> {
  wallet: Wallet
  asset: Asset
  amount: Amount
}

export type FintGenTuple<Wallet, Asset, Amount> = [Wallet, Asset, Amount]
