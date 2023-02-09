import { BalanceGen } from '../BalanceGen'

export function toBalanceGenArray<Wallet, Asset, Amount>(balance: BalanceGen<Wallet, Asset, Amount>) {
  return [balance.wallet, balance.asset, balance.amount]
}
