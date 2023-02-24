import { FintGen, FintGenTuple } from '../FintGen'

export function toFintGen<Wallet, Asset, Amount>(balance: FintGenTuple<Wallet, Asset, Amount>): FintGen<Wallet, Asset, Amount> {
  return { wallet: balance[0], asset: balance[1], amount: balance[2] }
}
