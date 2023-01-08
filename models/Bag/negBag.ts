import { Bag } from '../Bag'

export function negBag(bag: Bag) {
  return {
    amount: bag.amount.negated(),
    asset: bag.asset,
  }
}
