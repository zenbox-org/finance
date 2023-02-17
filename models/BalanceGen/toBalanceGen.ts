import { BalanceGen, BalanceGenTuple } from '../BalanceGen'

export function toBalanceGen<Wallet, Asset, Amount>(balance: BalanceGenTuple<Wallet, Asset, Amount>): BalanceGen<Wallet, Asset, Amount> {
  return { wallet: balance[0], asset: balance[1], amount: balance[2] }
}
