import { BalanceGen, BalanceGenTuple } from '../BalanceGen'

export function toBalanceGenTuple<Wallet, Asset, Amount>(balance: BalanceGen<Wallet, Asset, Amount>): BalanceGenTuple<Wallet, Asset, Amount> {
  return [balance.wallet, balance.asset, balance.amount]
}
