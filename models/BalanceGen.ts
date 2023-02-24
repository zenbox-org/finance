export interface BalanceGen<Address, Amount> {
  address: Address
  amount: Amount
}

export type BalanceGenTuple<Address, Amount> = [Address, Amount]
