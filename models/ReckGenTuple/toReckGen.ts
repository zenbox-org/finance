import { ReckGen, ReckGenTuple } from '../ReckGen'

export function toReckGen<Wallet, Asset, Amount>(balance: ReckGenTuple<Wallet, Asset, Amount>): ReckGen<Wallet, Asset, Amount> {
  return { wallet: balance[0], asset: balance[1], amount: balance[2] }
}
