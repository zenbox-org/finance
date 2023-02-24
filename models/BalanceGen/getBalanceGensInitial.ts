import { BalanceGen } from '../BalanceGen'

export const getBalanceGensInitial = <Amount>(amount: Amount) => <Address>(addresses: Address[]): BalanceGen<Address, Amount>[] => {
  return addresses.map(address => ({ address, amount }))
}
