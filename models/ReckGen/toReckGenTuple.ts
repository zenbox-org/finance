import { ReckGen, ReckGenTuple } from '../ReckGen'

export function toReckGenTuple<Wallet, Asset, Amount>(balance: ReckGen<Wallet, Asset, Amount>): ReckGenTuple<Wallet, Asset, Amount> {
  return [balance.wallet, balance.asset, balance.amount]
}
