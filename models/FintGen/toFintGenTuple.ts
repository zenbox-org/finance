import { FintGen, FintGenTuple } from '../FintGen'

export function toFintGenTuple<Wallet, Asset, Amount>(balance: FintGen<Wallet, Asset, Amount>): FintGenTuple<Wallet, Asset, Amount> {
  return [balance.wallet, balance.asset, balance.amount]
}
